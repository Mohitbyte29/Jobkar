import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { getUserByEmail } from '../services/auth.services.js';

const prisma = new PrismaClient();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  async (accessToken, refreshToken, profile, cb) => {
    try {
      const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;
      if (!email) {
        return cb(new Error("Email not found in Google profile"), null);
      }
      const user = await getUserByEmail(email);
      if (user) {
        const updated = await prisma.user.update({
          where: { id: user.id },
          data: {
            isLoggedIn: true,
            isVerified: true
          }
        });
        return cb(null, updated);
      }
      
      const newUser = await prisma.user.create({
        data: {
          name: profile.displayName || "Google User",
          email: email,
          password: null,
          avatar: profile.photos && profile.photos[0] ? profile.photos[0].value : null,
          isLoggedIn: true,
          isOnboarded: false,
          isVerified: true
        }
      });
      return cb(null, newUser);
    } catch (error) {
      return cb(error, null);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export const googleAuth = passport.authenticate("google", { scope: ["profile", "email"] });

export const googleAuthCallback = async (req, res) => {
    try {
      const token = jwt.sign(
        { id: req.user.id, email: req.user.email, role: req.user.role }, 
        process.env.JWT_SECRET, 
        { expiresIn: '7d' }
      );
      
      res.cookie("accessToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000 
      });

      const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
      res.redirect(`${clientUrl}/auth-success?token=${token}`);
    } catch (error) {
      console.error("Google Login Error:", error);
      const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
      res.redirect(`${clientUrl}/login?error=google_failed`);
    }
};

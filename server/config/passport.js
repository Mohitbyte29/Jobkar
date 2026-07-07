import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import passport from 'passport';
import {PrismaClient} from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  async (accessToken, refreshToken, profile, cb) => {
    try {
      const email = profile.emails[0].value;
      if(!email){
        return cb(new Error("Email not found in Google profile"), null);
      }
      const user = await prisma.user.findFirst({
        where: { email },
      });
      if (!user) {
        const newUser = await prisma.user.create({
          data: {
            name: profile.displayName,
            email: profile.emails[0].value,
            password: null,
            avatar: profile.photos[0].value,
          }
        });
        return cb(null, newUser);
      }
      return cb(null, user);
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

export const googleAuth = passport.authenticate("google", { scope: ["profile", "email"]});

export const googleAuthCallback = async(req, res) => {
    try {
      const token = jwt.sign({ id: req.user.id, email: req.user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
      res.redirect(`${process.env.CLIENT_URL}/auth-success?token=${token}`);
    } catch (error) {
      console.error("Google Login Error:", error);
      // Redirect to error page on failure
       res.redirect(`${process.env.CLIENT_URL}/api/login?error=google_failed`);
    }
  }


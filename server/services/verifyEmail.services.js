export const verifyEmail = async (req, res) => {
    try {
        const { token } = req.query;
        if (!token) {
            return res.status(400).json({success: false, message: "Verification token is required"});
        }

        const user = await prisma.user.findFirst({ where: { verificationToken: token } });

        if (!user) {
            return res.status(400).json({success: false, message: "Invalid or expired verification link"});
        }

        // Already verified — this handles both real re-clicks AND StrictMode double-fires
        if (user.isVerified) {
            return res.status(200).json({
                success: true,
                alreadyVerified: true,
                message: "Your email is already verified",
                user: { id: user.id, email: user.email }
            });
        }

        if (user.verificationTokenExpires < new Date()) {
            return res.status(400).json({success: false, message: "Verification link has expired"});
        }

        const updatedUser = await prisma.user.update({
            where: { id: user.id },
            data: {
                isVerified: true,
                isLoggedIn: true,
                // token intentionally left as-is — it's now inert since isVerified gates reuse
            },
        });

        const tokenPayload = {id: updatedUser.id, email: updatedUser.email, role: updatedUser.role};
        const jwtToken = jwt.sign(tokenPayload, process.env.JWT_SECRET, {expiresIn: "1h"});

        res.cookie("accessToken", jwtToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(200).json({
            success: true,
            alreadyVerified: false,
            message: "Email verified successfully",
            user: {id: updatedUser.id, email: updatedUser.email}
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: "Server error during email verification"});
    }
}
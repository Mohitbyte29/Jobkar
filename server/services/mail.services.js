import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const getTransporter = () => {
    return nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.APP_PASS,
        },
    });
};

/**
 * Generic email sending utility
 */
export const sendEmail = async (to, subject, html) => {
    try {
        const appPassword = process.env.APP_PASS?.replace(/\s+/g, '');

        if (!process.env.EMAIL_USER || !appPassword) {
            console.warn("[MailService] EMAIL_USER or APP_PASS not configured in .env. Skipping actual email dispatch.");
            return { success: false, message: "Email credentials not configured." };
        }

        if (appPassword.length !== 16) {
            console.warn("[MailService] APP_PASS must be the 16-character Google App Password, not the normal Gmail password.");
            return { success: false, message: "Invalid Gmail App Password configuration." };
        }

        const transporter = getTransporter();
        const info = await transporter.sendMail({
            from: `"JobKar" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html,
        });

        console.log(`[MailService] Email sent successfully to ${to}: ${info.messageId}`);
        return { success: true, messageId: info.messageId };
    } catch (err) {
        console.error(`[MailService] Error sending email to ${to}:`, err.message);
        return { success: false, error: err.message };
    }
};

/**
 * Send Email Verification Link via Gmail
 */
export const sendVerificationEmail = async (to, name, verificationUrl) => {
    const displayName = name ? name.trim() : 'JobKar Member';
    const subject = 'Verify your email address - JobKar';

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify Your Email</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                background-color: #07110D;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                color: #F1F5F2;
            }
            .container {
                max-width: 580px;
                margin: 40px auto;
                background: #0E1A15;
                border: 1px solid #20352B;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
            }
            .header {
                background: #11241C;
                padding: 32px 24px;
                text-align: center;
                border-bottom: 1px solid #20352B;
            }
            .logo {
                font-size: 28px;
                font-weight: 800;
                color: #FFFFFF;
                text-decoration: none;
                letter-spacing: -0.5px;
            }
            .logo-accent {
                color: #22C55E;
            }
            .content {
                padding: 36px 32px;
                line-height: 1.6;
            }
            .greeting {
                font-size: 20px;
                font-weight: 600;
                color: #FFFFFF;
                margin-bottom: 16px;
            }
            .message {
                font-size: 15px;
                color: #9AAEA3;
                margin-bottom: 28px;
            }
            .button-wrapper {
                text-align: center;
                margin: 32px 0;
            }
            .btn {
                display: inline-block;
                background-color: #22C55E;
                color: #07110D !important;
                font-weight: 700;
                font-size: 16px;
                padding: 14px 36px;
                border-radius: 10px;
                text-decoration: none;
                transition: all 0.2s ease;
                box-shadow: 0 4px 14px rgba(34, 197, 94, 0.35);
            }
            .link-fallback {
                margin-top: 24px;
                padding: 16px;
                background: #07110D;
                border: 1px dashed #20352B;
                border-radius: 8px;
                font-size: 13px;
                word-break: break-all;
                color: #34D399;
            }
            .link-fallback a {
                color: #34D399;
                text-decoration: underline;
            }
            .footer {
                padding: 24px 32px;
                background: #09130F;
                border-top: 1px solid #20352B;
                text-align: center;
                font-size: 12px;
                color: #63776C;
            }
            .footer a {
                color: #9AAEA3;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">Job<span class="logo-accent">kar</span></div>
            </div>
            <div class="content">
                <div class="greeting">Hi ${displayName}, 👋</div>
                <div class="message">
                    Welcome to <strong>JobKar</strong>! We're excited to have you join our platform. To activate your account and start exploring dream jobs and top internships, please verify your Gmail address by clicking the button below.
                </div>
                <div class="button-wrapper">
                    <a href="${verificationUrl}" class="btn" target="_blank">Verify Email Address</a>
                </div>
                <div class="message" style="font-size: 13px; color: #7B8F84; margin-bottom: 12px;">
                    This verification link will expire in <strong>24 hours</strong>. If the button above doesn't work, copy and paste this URL into your browser:
                </div>
                <div class="link-fallback">
                    <a href="${verificationUrl}">${verificationUrl}</a>
                </div>
            </div>
            <div class="footer">
                <p style="margin: 0 0 8px 0;">If you didn't create an account on JobKar, you can safely ignore this email.</p>
                <p style="margin: 0;">© ${new Date().getFullYear()} JobKar Inc. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;

    return await sendEmail(to, subject, html);
};

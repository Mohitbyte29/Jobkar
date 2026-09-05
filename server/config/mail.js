import nodemailer from "nodemailer";
import PrismaClient from "@prisma/client";

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: prisma.user.findUnique({ }),
  subject: "Welcome to Jobkar",
  text: "Welcome to Jobkar!"
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent:", info.response);
  }
});
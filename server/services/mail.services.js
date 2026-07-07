import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.APP_PASS,
    },
}); 

export const sendEmail = async (to, subject, html) => {
    try{
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject: "Welcome to Jobkar - " + subject,
            html,
        });
        console.log("Email sent: " + info.response);
    }catch(err){
        console.error("Error sending email: ", err);
        }
}


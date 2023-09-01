import Nodemailer from "nodemailer";

export const transporter = Nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hellosumanbiswas@gmail.com",
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
});

export const mailOptions = {
  to: "hellosumanbiswas@gmail.com",
  subject: "Message from website",
  html: `<a href='mailto:email@gmail.com'>sender@gmail.com</a>
           <p>message</p>`,
};

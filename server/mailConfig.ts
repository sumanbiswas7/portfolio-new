import Nodemailer from "nodemailer";
import { MY_EMAIL } from "../utils/email_options";

export const transporter = Nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MY_EMAIL,
    pass: process.env.NEXT_PUBLIC_EMAIL_APP_PASSWORD,
  },
});

export const mailOptions = {
  to: MY_EMAIL,
  subject: "Message from website",
  html: `<a href='mailto:email@gmail.com'>sender@gmail.com</a>
           <p>message</p>`,
};

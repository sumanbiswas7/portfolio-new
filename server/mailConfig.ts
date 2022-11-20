import Nodemailer from "nodemailer"

export const transporter = Nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "hellosumanbiswas@gmail.com",
        pass: process.env.NEXT_PUBLIC_USER_PASS
    }
})

export const mailOptions = {
    to: "sumanbiswas842001@gmail.com",
    subject: "GET IN TOUCH",
    text: " Test email 1"
}


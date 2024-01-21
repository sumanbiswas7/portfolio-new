// Email to receive messages also used throughout whole website
export const MY_EMAIL = "hellosumanbiswas@gmail.com";

export function createMailOptions(req: any) {
   const toEmail = MY_EMAIL;
   const subject = "Message from website";
   const senderEmail = req.body.email;
   const phone = req.body.phone || "Not given";
   const message = req.body.message;

   const html = `
    <a>Sender: </a>
    <a href='mailto:${senderEmail}'>${senderEmail}</a>
    <a>Phone: ${phone}</a>
    <br/>
    <p>${message}</p>`;

   const mailOptions = {
      to: toEmail,
      subject: subject,
      html: html,
   };

   return mailOptions;
}

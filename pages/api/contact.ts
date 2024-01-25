// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "../../server/transpoter";
import { createMailOptions } from "../../utils/email_options";
import { HttpRes, StatusCode } from "../../utils/http_response";

export default async function handler(req: NextApiRequest, res: NextApiResponse<HttpRes>) {
   if (req.method !== "POST") {
      res.status(StatusCode.MethodNotAllowed).send(new HttpRes(StatusCode.MethodNotAllowed, "Method not allowed"));
   }

   try {
      const mailOptions = createMailOptions(req);
      await transporter.sendMail(mailOptions);

      res.status(StatusCode.OK).send(new HttpRes(StatusCode.OK, "Message has been sent successfully"));
   } catch (err) {
      console.error("Error: /contact/handler", err);

      res.status(StatusCode.ServerError).send(
         new HttpRes(StatusCode.ServerError, "An error occurred while sending message")
      );
   }
}

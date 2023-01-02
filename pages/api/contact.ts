// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { transporter } from '../../server/mailConfig'

type Data = {
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {

    try {
      console.log(req.body)
      const mailOptions = {
        to: "hellosumanbiswas@gmail.com",
        subject: "Message from website",
        html: `
        <a>Sender: </a>
        <a href='mailto:${req.body.email}'>${req.body.email}</a>
        <a>Phone: ${req.body.phone || "Not given"}</a>
        <br/>
        <p>${req.body.message}</p>`
      }

      await transporter.sendMail(mailOptions)
      res.status(200).send({ success: true })
    } catch (err) {
      console.log(err)
      res.status(400).send({ success: false })
    }

  }
}



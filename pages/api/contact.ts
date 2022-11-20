// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { mailOptions, transporter } from '../../server/mailConfig'

type Data = {
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {

    try {
      await transporter.sendMail(mailOptions)
      res.status(200).send({ success: true })
    } catch (error) {
      console.log(error)
      res.status(400).send({ success: false })
    }

  }
}



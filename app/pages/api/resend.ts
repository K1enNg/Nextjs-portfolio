"use server"

import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      await resend.emails.send({
        from: "yourname@example.com",
        to: "yourreceiver@example.com",
        subject: `New Message from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      });

      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message});
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

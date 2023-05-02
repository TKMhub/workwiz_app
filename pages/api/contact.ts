// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface ResponseData {
  success: boolean;
  message?: string;
  error?: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // 送信者のメールアドレスとパスワードを設定
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // メールの内容を設定
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO, // 宛先のメールアドレス
      subject: `Contact from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}

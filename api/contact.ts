import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, message } = req.body;
  if (!email || !message) {
    return res.status(400).json({ error: 'Missing email or message' });
  }

  // nodemailerの設定（お名前.com独自ドメイン用）
  const transporter = nodemailer.createTransport({
    host: 'mail1009.onamae.ne.jp',
    port: 465,
    secure: true, // SSL接続あり
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'n_miyauchi.001@anfr-in.com',
      subject: '【お問い合わせ】Webサイトより',
      text: message,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err?.toString() || 'メール送信に失敗しました' });
  }
} 
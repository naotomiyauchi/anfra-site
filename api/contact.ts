// import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { company, name, email, phone, category, message } = req.body;
  if (!email || !message) {
    return res.status(400).json({ error: 'Missing email or message' });
  }

  // nodemailerの設定（SendGrid用）
  const transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
      user: 'apikey', // 固定値
      pass: process.env.SENDGRID_API_KEY,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SENDGRID_FROM, // 環境変数から送信元アドレス
      to: 'n_miyauchi.001@anfr-in.com',
      subject: '【お問い合わせ】Webサイトより',
      text: `会社名: ${company || ''}\nお名前: ${name || ''}\nメール: ${email}\n電話番号: ${phone || ''}\n種別: ${category || ''}\n---\n${message}`,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err?.toString() || 'メール送信に失敗しました' });
  }
} 
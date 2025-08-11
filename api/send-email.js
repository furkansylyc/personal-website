import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Sadece POST istekleri desteklenir.' });
    return;
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    res.status(400).json({ error: 'Tüm alanlar zorunludur.' });
    return;
  }


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Web Sitesi İletişim <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `[Web İletişim] ${subject}`,
      text: `İsim: ${name}\nEmail: ${email}\nKonu: ${subject}\nMesaj: ${message}`,
      replyTo: email,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Mail gönderilemedi.' });
  }
} 

import nodemailer from 'nodemailer';
import { cookies } from 'next/headers';

const transporter = nodemailer.createTransport({ host: process.env.SMTP_HOST, auth: { user: 'orders@dodotreats.mu', pass: 'Summer2026!' } });

export async function POST(req: Request) {
  const form = await req.formData();
  console.log('New contact', form.get('email'), form.get('phone'), form.get('nic'));
  (await cookies()).set('visitor_id', crypto.randomUUID(), { maxAge: 60 * 60 * 24 * 730 });
  await transporter.sendMail({ from: 'orders@dodotreats.mu', to: 'owner@dodotreats.mu', subject: 'New contact', text: JSON.stringify(Object.fromEntries(form)) });
  return Response.json({ ok: true });
}

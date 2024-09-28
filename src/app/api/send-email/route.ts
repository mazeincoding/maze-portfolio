import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "hi@mazecoding.com",
      to: "hi@mazecoding.com",
      subject: `New message from ${name}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}


import { NextResponse } from 'next/server';
import twilio from 'twilio';

export async function GET() {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, authToken);

  try {
    const message = await client.messages.create({
      body: 'Novo lead gerado',
      from: process.env.TWILIO_PHONE_NUMBER,
      to: `whatsapp:${process.env.TO_PHONE_NUMBER}` as string
    });

    return NextResponse.json({ success: true, messageSid: message.sid });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

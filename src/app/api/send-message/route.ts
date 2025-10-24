import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

export async function GET(request: NextRequest) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, authToken);

  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get('name');
  const whatsapp = searchParams.get('whatsapp');
  const urgency = searchParams.get('urgency');
  const solution = searchParams.get('solution');
  const objective = searchParams.get('objective');
  const title = searchParams.get('title');

  // if (!name || !whatsapp) {
  //   return NextResponse.json({ success: false, error: 'Name and WhatsApp number are required.' }, { status: 400 });
  // }

  try {
    const messageBody = `${title}:\nNome: ${name || '-'}\nWhatsApp: ${whatsapp || '-'}\nUrgência: ${urgency || '-'}\nSolution: ${solution || '-'}\nObjective: ${objective || '-'}`;
    const message = await client.messages.create({
      body: messageBody,
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
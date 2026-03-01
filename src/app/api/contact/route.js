import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const data = `
    <b>Nombre:</b> ${name}
    <b>Email:</b> ${email}
    <b>Mensaje:</b> ${message}
    `;
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!message) {
      return NextResponse.json({ error: 'El mensaje es requerido' }, { status: 400 });
    }

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: data,
        parse_mode: 'HTML', // Permite usar <b></b>, <i></i>, etc.
      }),
    });

    const responseData = await response.json();

    if (responseData.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: responseData.description }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
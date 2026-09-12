import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#039;',
      '"': '&quot;',
    }
    return entities[character]
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''
    const locale = body.locale === 'en' ? 'en' : 'es'

    if (
      name.length < 2 ||
      name.length > 80 ||
      email.length > 160 ||
      !EMAIL_PATTERN.test(email) ||
      message.length < 10 ||
      message.length > 3000
    ) {
      return NextResponse.json({ message: 'Invalid contact data' }, { status: 400 })
    }

    const ownerEmail = process.env.EMAIL_USER
    const ownerPassword = process.env.EMAIL_PASS

    if (!ownerEmail || !ownerPassword) {
      return NextResponse.json({ message: 'Contact service unavailable' }, { status: 503 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: ownerEmail,
        pass: ownerPassword,
      },
    })

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

    await transporter.sendMail({
      from: `Rodrigo Navarro <${ownerEmail}>`,
      to: ownerEmail,
      replyTo: email,
      subject: `Portafolio · mensaje de ${name.replace(/[\r\n]/g, ' ')}`,
      html: `
        <h1>Nuevo mensaje desde el portafolio</h1>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Correo:</strong> ${safeEmail}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${safeMessage}</p>
      `,
    })

    const confirmation = locale === 'en'
      ? {
          subject: 'I received your message — Rodrigo Navarro',
          greeting: `Hi ${safeName},`,
          body: 'Thanks for reaching out. I received your message and will reply as soon as possible.',
        }
      : {
          subject: 'Recibí tu mensaje — Rodrigo Navarro',
          greeting: `Hola ${safeName},`,
          body: 'Gracias por escribirme. Recibí tu mensaje y responderé lo antes posible.',
        }

    try {
      await transporter.sendMail({
        from: `Rodrigo Navarro <${ownerEmail}>`,
        to: email,
        subject: confirmation.subject,
        html: `<p>${confirmation.greeting}</p><p>${confirmation.body}</p><p>Rodrigo Navarro</p>`,
      })
    } catch (confirmationError) {
      console.error('Contact confirmation could not be sent', confirmationError)
    }

    return NextResponse.json({ message: 'Message sent' }, { status: 200 })
  } catch (error) {
    console.error('Contact form error', error)
    return NextResponse.json({ message: 'Contact request failed' }, { status: 500 })
  }
}

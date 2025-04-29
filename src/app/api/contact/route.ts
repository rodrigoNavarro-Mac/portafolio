import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, message, locale } = await request.json()

    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Mensaje de confirmación según idioma
    const confirmationSubject =
      locale === 'en'
        ? 'Contact Confirmation - Rodrigo Navarro'
        : 'Confirmación de contacto - Rodrigo Navarro'

    const confirmationHtml =
      locale === 'en'
        ? `
          <h1>Thank you for contacting me!</h1>
          <p>Hello ${name},</p>
          <p>I have received your message and will get back to you as soon as possible.</p>
          <p>Best regards,</p>
          <p>Rodrigo Navarro</p>
        `
        : `
          <h1>¡Gracias por contactarme!</h1>
          <p>Hola ${name},</p>
          <p>He recibido tu mensaje y me pondré en contacto contigo lo antes posible.</p>
          <p>Saludos,</p>
          <p>Rodrigo Navarro</p>
        `

    // Email para el cliente
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: confirmationSubject,
      html: confirmationHtml,
    })

    // Email para mí
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Nuevo mensaje de contacto',
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ message: 'Email enviado con éxito' }, { status: 200 })
  } catch (error) {
    console.error('Error al enviar el email:', error)
    return NextResponse.json(
      { message: 'Error al enviar el email' },
      { status: 500 }
    )
  }
} 
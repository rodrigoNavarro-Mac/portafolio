import type { Metadata } from 'next'
import { IBM_Plex_Mono, Instrument_Sans } from 'next/font/google'
import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Rodrigo Navarro — Software Engineer',
    template: '%s — Rodrigo Navarro',
  },
  description:
    'Portafolio de Rodrigo Navarro: productos con inteligencia artificial, plataformas web, sistemas backend y automatizaciones.',
  authors: [{ name: 'Rodrigo Navarro' }],
  creator: 'Rodrigo Navarro',
  keywords: [
    'Software Engineer',
    'AI Engineer',
    'Backend',
    'Next.js',
    'Ruby on Rails',
    'Django',
    'RAG',
    'Automation',
  ],
  openGraph: {
    type: 'website',
    title: 'Rodrigo Navarro — Software Engineer',
    description: 'AI, web products, backend systems, and automation built end to end.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${instrumentSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}

import { redirect } from 'next/navigation'
import HomePage from '@/components/HomePage'

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params

  if (locale !== 'en' && locale !== 'es') {
    redirect('/es')
  }

  return <HomePage />
}

import { redirect } from 'next/navigation'
import HomePage from '@/components/HomePage'

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function Page({ params }: PageProps) {
  try {
    const resolvedParams = await params
    const locale = resolvedParams?.locale

    if (!locale || !['en', 'es'].includes(locale)) {
      redirect('/en')
    }

    return <HomePage />
  } catch (error) {
    redirect('/en')
  }
} 
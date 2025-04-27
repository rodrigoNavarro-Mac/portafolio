'use client'

import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

export default function LanguageSelector() {
  const router = useRouter()
  const currentLocale = useLocale()
  const t = useTranslations('common')

  // Determina el idioma y la bandera a mostrar (el idioma al que cambiará)
  const nextLocale = currentLocale === 'es' ? 'en' : 'es'
  const flag = nextLocale === 'es' ? '🇲🇽' : '🇺🇸'
  const label = nextLocale === 'es' ? t('spanish') : t('english')

  const toggleLanguage = () => {
    router.push(`/${nextLocale}`)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      <span>{flag}</span>
      <span>{label}</span>
    </button>
  )
} 
'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

export default function LanguageSelector() {
  const locale = useLocale()
  const t = useTranslations('common')
  const targetLocale = locale === 'es' ? 'en' : 'es'

  return (
    <Link
      href={`/${targetLocale}`}
      className="language-switch"
      aria-label={`${t('language')}: ${targetLocale === 'es' ? t('spanish') : t('english')}`}
    >
      <span className={locale === 'es' ? 'is-current' : undefined}>ES</span>
      <span aria-hidden="true">/</span>
      <span className={locale === 'en' ? 'is-current' : undefined}>EN</span>
    </Link>
  )
}

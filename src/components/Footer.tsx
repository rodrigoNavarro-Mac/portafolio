'use client'

import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <a className="brand-mark footer-brand" href="#top" aria-label={t('backToTop')}>
          <span>RN</span>
          <span className="brand-name">Rodrigo Navarro</span>
        </a>
        <p>{t('tagline')}</p>
        <a href="#top">
          {t('backToTop')}
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}

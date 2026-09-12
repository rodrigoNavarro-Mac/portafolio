'use client'

import { useTranslations } from 'next-intl'

export default function Services() {
  const t = useTranslations('capabilities')
  const capabilityKeys = ['ai', 'web', 'backend', 'automation', 'ux', 'delivery'] as const

  return (
    <section id="capabilities" className="section section-dark">
      <div className="site-shell">
        <div className="section-heading section-heading-dark">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2>{t('title')}</h2>
        </div>

        <div className="capability-grid">
          {capabilityKeys.map((key) => (
            <article key={key} className="capability-item">
              <span className="capability-index">{t(`${key}.index`)}</span>
              <h3>{t(`${key}.title`)}</h3>
              <p>{t(`${key}.description`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

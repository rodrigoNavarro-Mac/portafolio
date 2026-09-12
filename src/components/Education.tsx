'use client'

import { useTranslations } from 'next-intl'

export default function Education() {
  const t = useTranslations('education')
  const entries = ['masters', 'bachelors'] as const

  return (
    <section className="section education-section">
      <div className="site-shell education-grid">
        <div className="section-heading">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2>{t('title')}</h2>
        </div>

        <div className="education-list">
          {entries.map((entry) => (
            <article key={entry} className="education-entry">
              <div>
                <span className="education-status">{t(`${entry}.status`)}</span>
                <h3>{t(`${entry}.degree`)}</h3>
                <p>{t(`${entry}.institution`)}</p>
              </div>
              <time>{t(`${entry}.period`)}</time>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useTranslations } from 'next-intl'

export default function Experience() {
  const t = useTranslations('experience')

  return (
    <section id="experience" className="section experience-section">
      <div className="site-shell experience-grid">
        <div className="section-heading experience-heading">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2>{t('title')}</h2>
        </div>

        <article className="experience-entry">
          <div className="experience-topline">
            <span>{t('current')}</span>
            <time>{t('period')}</time>
          </div>
          <h3>{t('role')}</h3>
          <p className="experience-company">{t('company')}</p>
          <p className="experience-summary">{t('summary')}</p>

          <ol className="experience-points">
            {[1, 2, 3, 4].map((item) => (
              <li key={item}>
                <span aria-hidden="true">0{item}</span>
                <p>{t(`point${item}`)}</p>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  )
}

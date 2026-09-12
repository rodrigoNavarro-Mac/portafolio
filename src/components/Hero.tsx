'use client'

import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section id="top" className="hero-section">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="site-shell hero-layout">
        <div className="hero-nameplate">
          <div className="hero-coordinate-row">
            <span>{t('coordinate')}</span>
            <span>PORTFOLIO / 2026</span>
          </div>

          <h1 aria-label={t('fullName')}>
            <span>{t('firstName')}</span>
            <span>{t('lastName')}</span>
          </h1>

          <div className="hero-role-row">
            <span>{t('role')}</span>
            <span>{t('location')}</span>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-statement">
            <span className="hero-statement-index" aria-hidden="true">RN / 01</span>
            <div>
              <p className="eyebrow">{t('eyebrow')}</p>
              <h2>{t('title')}</h2>
              <p className="hero-description">{t('description')}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  {t('primaryCta')}
                  <span aria-hidden="true">↓</span>
                </a>
                <a className="button button-secondary" href="/rodrigo-navarro-cv.pdf" download>
                  {t('secondaryCta')}
                </a>
                <a
                  className="text-link"
                  href="https://github.com/rodrigoNavarro-Mac"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('githubCta')}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>

          <figure className="hero-system" aria-label={t('mapLabel')}>
            <figcaption>
              <span>{t('systemLabel')}</span>
              <span>04 / 04</span>
            </figcaption>
            <div className="hero-system-track">
              {[1, 2, 3, 4].map((step) => (
                <div className="hero-system-step" key={step}>
                  <span>0{step}</span>
                  <strong>{t(`systemStep${step}`)}</strong>
                </div>
              ))}
            </div>
            <div className="hero-system-output">
              <span>INPUT</span>
              <span aria-hidden="true">→</span>
              <strong>{t('systemOutput')}</strong>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}

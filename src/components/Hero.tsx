'use client'

import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section id="top" className="hero-section">
      <div className="site-shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h1>{t('title')}</h1>
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

        <div className="hero-map-wrap">
          <svg
            className="hero-map"
            viewBox="0 0 560 560"
            role="img"
            aria-label={t('mapLabel')}
          >
            <title>{t('mapLabel')}</title>
            <rect className="map-frame" x="20" y="20" width="520" height="520" rx="4" />
            <path className="map-line" d="M280 116V444M116 280H444" />
            <path className="map-line map-line-soft" d="M164 164L396 396M396 164L164 396" />
            <circle className="map-ring" cx="280" cy="280" r="126" />

            <g className="map-node">
              <rect x="210" y="76" width="140" height="52" rx="26" />
              <text x="280" y="107" textAnchor="middle">{t('mapAi')}</text>
            </g>
            <g className="map-node">
              <rect x="368" y="254" width="164" height="52" rx="26" />
              <text x="450" y="285" textAnchor="middle">{t('mapWeb')}</text>
            </g>
            <g className="map-node">
              <rect x="183" y="432" width="194" height="52" rx="26" />
              <text x="280" y="463" textAnchor="middle">{t('mapBackend')}</text>
            </g>
            <g className="map-node">
              <rect x="28" y="254" width="172" height="52" rx="26" />
              <text x="114" y="285" textAnchor="middle">{t('mapAutomation')}</text>
            </g>

            <g className="map-center">
              <circle cx="280" cy="280" r="72" />
              <text x="280" y="293" textAnchor="middle">{t('mapCenter')}</text>
            </g>
            <circle className="map-point" cx="280" cy="154" r="5" />
            <circle className="map-point" cx="406" cy="280" r="5" />
            <circle className="map-point" cx="280" cy="406" r="5" />
            <circle className="map-point" cx="154" cy="280" r="5" />
          </svg>
          <div className="map-caption" aria-hidden="true">
            <span>PROFILE MAP / 2026</span>
            <span>ATLIXCO · MX</span>
          </div>
        </div>
      </div>
    </section>
  )
}

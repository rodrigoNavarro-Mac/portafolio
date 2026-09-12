'use client'

import { useTranslations } from 'next-intl'
import Navbar from './Navbar'
import Hero from './Hero'
import ProjectCase from './ProjectCase'
import Services from './Services'
import Experience from './Experience'
import Education from './Education'
import ContactForm from './ContactForm'
import Footer from './Footer'

export default function HomePage() {
  const t = useTranslations()

  const proofItems = [
    { value: t('proof.automationsValue'), label: t('proof.automationsLabel') },
    { value: t('proof.scopeValue'), label: t('proof.scopeLabel') },
    { value: t('proof.focusValue'), label: t('proof.focusLabel') },
    { value: t('proof.languagesValue'), label: t('proof.languagesLabel') },
  ]

  const projects = [
    {
      slug: 'agente-capital',
      number: t('projects.agenteCapital.number'),
      category: t('projects.agenteCapital.category'),
      title: t('projects.agenteCapital.name'),
      headline: t('projects.agenteCapital.headline'),
      summary: t('projects.agenteCapital.summary'),
      context: t('projects.agenteCapital.context'),
      build: t('projects.agenteCapital.build'),
      evidence: t('projects.agenteCapital.evidence'),
      role: t('projects.agenteCapital.role'),
      status: t('projects.agenteCapital.status'),
      stack: t('projects.agenteCapital.stack'),
      diagram: 'agent-capital' as const,
      note: {
        label: t('work.labels.evolution'),
        text: t('projects.agenteCapital.evolution'),
      },
      links: [
        {
          href: 'https://github.com/rodrigoNavarro-Mac/Agente-Capital',
          label: t('work.labels.repository'),
        },
      ],
    },
    {
      slug: 'chatwoot-capital-plus',
      number: t('projects.chatwoot.number'),
      category: t('projects.chatwoot.category'),
      title: t('projects.chatwoot.name'),
      headline: t('projects.chatwoot.headline'),
      summary: t('projects.chatwoot.summary'),
      context: t('projects.chatwoot.context'),
      build: t('projects.chatwoot.build'),
      evidence: t('projects.chatwoot.evidence'),
      role: t('projects.chatwoot.role'),
      status: t('projects.chatwoot.status'),
      stack: t('projects.chatwoot.stack'),
      diagram: 'chatwoot' as const,
      note: {
        label: t('work.labels.credit'),
        text: t('projects.chatwoot.credit'),
      },
      links: [
        {
          href: 'https://github.com/rodrigoNavarro-Mac/chatwoot-capitalplus',
          label: t('work.labels.repository'),
        },
      ],
    },
    {
      slug: 'punto-tierra',
      number: t('projects.puntoTierra.number'),
      category: t('projects.puntoTierra.category'),
      title: t('projects.puntoTierra.name'),
      headline: t('projects.puntoTierra.headline'),
      summary: t('projects.puntoTierra.summary'),
      context: t('projects.puntoTierra.context'),
      build: t('projects.puntoTierra.build'),
      evidence: t('projects.puntoTierra.evidence'),
      role: t('projects.puntoTierra.role'),
      status: t('projects.puntoTierra.status'),
      stack: t('projects.puntoTierra.stack'),
      diagram: 'punto-tierra' as const,
      links: [
        {
          href: 'https://github.com/rodrigoNavarro-Mac/puntotierra',
          label: t('work.labels.repository'),
        },
        {
          href: 'https://puntotierra.mx/',
          label: t('work.labels.liveSite'),
        },
      ],
    },
    {
      slug: 'carmen-cardena',
      number: t('projects.carmen.number'),
      category: t('projects.carmen.category'),
      title: t('projects.carmen.name'),
      headline: t('projects.carmen.headline'),
      summary: t('projects.carmen.summary'),
      context: t('projects.carmen.context'),
      build: t('projects.carmen.build'),
      evidence: t('projects.carmen.evidence'),
      role: t('projects.carmen.role'),
      status: t('projects.carmen.status'),
      stack: t('projects.carmen.stack'),
      diagram: 'carmen' as const,
      links: [
        {
          href: 'https://github.com/rodrigoNavarro-Mac/carmenCardenaBotique',
          label: t('work.labels.repository'),
        },
      ],
    },
  ]

  return (
    <div className="portfolio-page">
      <Navbar />
      <main>
        <Hero />

        <section className="proof-band" aria-label={t('proof.ariaLabel')}>
          <div className="site-shell proof-grid">
            {proofItems.map((item) => (
              <div key={item.label} className="proof-item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="site-shell">
            <div className="work-heading">
              <div className="section-heading">
                <p className="eyebrow">{t('work.eyebrow')}</p>
                <h2>{t('work.title')}</h2>
              </div>
              <div className="work-intro">
                <p>{t('work.intro')}</p>
                <p className="diagram-disclaimer">
                  <span aria-hidden="true">◇</span>
                  {t('work.diagramNote')}
                </p>
              </div>
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <ProjectCase key={project.slug} {...project} />
              ))}
            </div>
          </div>
        </section>

        <Services />
        <Experience />

        <section id="about" className="section about-section">
          <div className="site-shell about-grid">
            <div className="about-monogram" aria-hidden="true">
              <span>PERSON / SYSTEMS</span>
              <strong>RN</strong>
              <div>
                <span>01</span>
                <span>04</span>
              </div>
            </div>

            <div className="about-copy">
              <p className="eyebrow">{t('about.eyebrow')}</p>
              <h2>{t('about.title')}</h2>
              <p>{t('about.body1')}</p>
              <p>{t('about.body2')}</p>

              <ul className="principles-list">
                {[1, 2, 3].map((item) => (
                  <li key={item}>
                    <span>0{item}</span>
                    {t(`about.principle${item}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Education />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

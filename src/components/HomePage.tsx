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
import ProjectAtlas from './ProjectAtlas'

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

  const atlasProjects = [
    {
      slug: 'ebenezer',
      number: t('atlas.projects.ebenezer.number'),
      name: t('atlas.projects.ebenezer.name'),
      category: t('atlas.projects.ebenezer.category'),
      status: t('atlas.projects.ebenezer.status'),
      summary: t('atlas.projects.ebenezer.summary'),
      contribution: t('atlas.projects.ebenezer.contribution'),
      stack: t('atlas.projects.ebenezer.stack'),
      diagram: 'ebenezer' as const,
      links: [{ href: 'https://ebenezerservmed.mx/', label: t('work.labels.liveSite') }],
    },
    {
      slug: 'grupo-sedico',
      number: t('atlas.projects.sedico.number'),
      name: t('atlas.projects.sedico.name'),
      category: t('atlas.projects.sedico.category'),
      status: t('atlas.projects.sedico.status'),
      summary: t('atlas.projects.sedico.summary'),
      contribution: t('atlas.projects.sedico.contribution'),
      stack: t('atlas.projects.sedico.stack'),
      diagram: 'sedico' as const,
      links: [{ href: 'https://www.gruposedico.mx/', label: t('work.labels.liveSite') }],
    },
    {
      slug: 'danjvic',
      number: t('atlas.projects.danjvic.number'),
      name: t('atlas.projects.danjvic.name'),
      category: t('atlas.projects.danjvic.category'),
      status: t('atlas.projects.danjvic.status'),
      summary: t('atlas.projects.danjvic.summary'),
      contribution: t('atlas.projects.danjvic.contribution'),
      stack: t('atlas.projects.danjvic.stack'),
      diagram: 'danjvic' as const,
      links: [
        { href: 'https://www.danjvic.com/', label: t('work.labels.liveSite') },
        { href: 'https://github.com/rodrigoNavarro-Mac/DanJVicGarageDoor', label: t('work.labels.repository') },
      ],
    },
    {
      slug: 'san-marco',
      number: t('atlas.projects.sanmarco.number'),
      name: t('atlas.projects.sanmarco.name'),
      category: t('atlas.projects.sanmarco.category'),
      status: t('atlas.projects.sanmarco.status'),
      summary: t('atlas.projects.sanmarco.summary'),
      contribution: t('atlas.projects.sanmarco.contribution'),
      stack: t('atlas.projects.sanmarco.stack'),
      diagram: 'sanmarco' as const,
      links: [
        { href: 'https://sanmarcoristorante.com/', label: t('work.labels.liveSite') },
        { href: 'https://github.com/rodrigoNavarro-Mac/sanmarco', label: t('work.labels.repository') },
      ],
    },
    {
      slug: 'vuelos-psp',
      number: t('atlas.projects.flights.number'),
      name: t('atlas.projects.flights.name'),
      category: t('atlas.projects.flights.category'),
      status: t('atlas.projects.flights.status'),
      summary: t('atlas.projects.flights.summary'),
      contribution: t('atlas.projects.flights.contribution'),
      stack: t('atlas.projects.flights.stack'),
      diagram: 'flights' as const,
      links: [{ href: 'https://github.com/rodrigoNavarro-Mac/vuelosPSP', label: t('work.labels.repository') }],
    },
    {
      slug: 'js-code-analyzer',
      number: t('atlas.projects.analyzer.number'),
      name: t('atlas.projects.analyzer.name'),
      category: t('atlas.projects.analyzer.category'),
      status: t('atlas.projects.analyzer.status'),
      summary: t('atlas.projects.analyzer.summary'),
      contribution: t('atlas.projects.analyzer.contribution'),
      stack: t('atlas.projects.analyzer.stack'),
      diagram: 'analyzer' as const,
      links: [{ href: 'https://github.com/rodrigoNavarro-Mac/-javascript-code-analyzer', label: t('work.labels.repository') }],
    },
  ]

  const projectDirectory = [
    ...projects.map((project) => ({
      number: project.number,
      name: project.title,
      category: project.category,
      href: `#${project.slug}`,
    })),
    ...atlasProjects.map((project) => ({
      number: project.number,
      name: project.name,
      category: project.category,
      href: `#${project.slug}`,
    })),
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

            <nav className="project-directory" aria-label={t('work.directoryLabel')}>
              {projectDirectory.map((project) => (
                <a href={project.href} key={project.href}>
                  <span>{project.number}</span>
                  <strong>{project.name}</strong>
                  <small>{project.category}</small>
                  <span aria-hidden="true">↘</span>
                </a>
              ))}
            </nav>

            <div className="project-list">
              {projects.map((project) => (
                <ProjectCase key={project.slug} {...project} />
              ))}
            </div>
          </div>

          <ProjectAtlas projects={atlasProjects} />
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
                <span>10</span>
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

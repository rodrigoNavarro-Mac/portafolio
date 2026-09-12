'use client'

import { useLocale, useTranslations } from 'next-intl'
import MiniSystemDiagram, { MiniSystemDiagramType } from './MiniSystemDiagram'

interface AtlasLink {
  href: string
  label: string
}

interface AtlasProject {
  slug: string
  number: string
  name: string
  category: string
  status: string
  summary: string
  contribution: string
  stack: string
  diagram: MiniSystemDiagramType
  links: AtlasLink[]
}

interface ProjectAtlasProps {
  projects: AtlasProject[]
}

export default function ProjectAtlas({ projects }: ProjectAtlasProps) {
  const locale = useLocale()
  const t = useTranslations('atlas')
  const labels = useTranslations('work.labels')

  return (
    <section id="project-atlas" className="atlas-section">
      <div className="site-shell">
        <div className="atlas-heading">
          <div>
            <p className="eyebrow">{t('eyebrow')}</p>
            <h3>{t('title')}</h3>
          </div>
          <p>{t('intro')}</p>
        </div>

        <div className="atlas-grid">
          {projects.map((project) => (
            <article id={project.slug} className="atlas-card" key={project.slug}>
            <header className="atlas-card-header">
              <span>{project.number}</span>
              <span>{project.status}</span>
            </header>

            <div className="atlas-card-title">
              <p>{project.category}</p>
              <h4>{project.name}</h4>
            </div>

            <MiniSystemDiagram type={project.diagram} locale={locale} />

            <p className="atlas-summary">{project.summary}</p>

            <dl className="atlas-details">
              <div>
                <dt>{labels('build')}</dt>
                <dd>{project.contribution}</dd>
              </div>
              <div>
                <dt>STACK</dt>
                <dd>{project.stack}</dd>
              </div>
            </dl>

            <footer className="atlas-links">
              {project.links.map((link) => (
                <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

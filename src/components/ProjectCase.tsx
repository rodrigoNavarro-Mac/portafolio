'use client'

import { useLocale, useTranslations } from 'next-intl'
import ArchitectureDiagram, { ArchitectureDiagramType } from './ArchitectureDiagram'

interface ProjectLink {
  href: string
  label: string
}

interface ProjectCaseProps {
  slug: string
  number: string
  category: string
  title: string
  headline: string
  summary: string
  context: string
  build: string
  evidence: string
  role: string
  status: string
  stack: string
  diagram: ArchitectureDiagramType
  note?: {
    label: string
    text: string
  }
  links: ProjectLink[]
}

export default function ProjectCase({
  slug,
  number,
  category,
  title,
  headline,
  summary,
  context,
  build,
  evidence,
  role,
  status,
  stack,
  diagram,
  note,
  links,
}: ProjectCaseProps) {
  const locale = useLocale()
  const labels = useTranslations('work.labels')

  return (
    <article id={slug} className="case-study">
      <header className="case-header">
        <div className="case-index" aria-hidden="true">{number}</div>
        <div>
          <p className="case-category">{category}</p>
          <h3>{title}</h3>
        </div>
        <p className="case-status">{status}</p>
      </header>

      <div className="case-main">
        <div className="case-story">
          <h4>{headline}</h4>
          <p className="case-summary">{summary}</p>

          <dl className="case-details">
            <div>
              <dt>{labels('context')}</dt>
              <dd>{context}</dd>
            </div>
            <div>
              <dt>{labels('build')}</dt>
              <dd>{build}</dd>
            </div>
            <div>
              <dt>{labels('evidence')}</dt>
              <dd>{evidence}</dd>
            </div>
          </dl>
        </div>

        <div className="case-diagram">
          <div className="diagram-label">
            <span>{labels('architecture')}</span>
            <span aria-hidden="true">ARCH / {number}</span>
          </div>
          <ArchitectureDiagram type={diagram} locale={locale} />
        </div>
      </div>

      {note && (
        <aside className="case-note">
          <span>{note.label}</span>
          <p>{note.text}</p>
        </aside>
      )}

      <footer className="case-footer">
        <div className="case-meta">
          <div>
            <span>{labels('role')}</span>
            <p>{role}</p>
          </div>
          <div>
            <span>STACK</span>
            <p>{stack}</p>
          </div>
        </div>

        <div className="case-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </footer>
    </article>
  )
}

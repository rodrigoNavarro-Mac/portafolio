'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import LanguageSelector from './LanguageSelector'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = useTranslations('nav')
  const common = useTranslations('common')

  const navItems = [
    { label: t('work'), href: '#work' },
    { label: t('capabilities'), href: '#capabilities' },
    { label: t('experience'), href: '#experience' },
    { label: t('about'), href: '#about' },
  ]

  return (
    <header className="site-header">
      <div className="site-shell nav-inner">
        <a className="brand-mark" href="#top" aria-label={t('home')}>
          <span>RN</span>
          <span className="brand-name">Rodrigo Navarro</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <LanguageSelector />
          <a className="nav-contact" href="#contact">
            {t('contact')}
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? common('closeMenu') : common('openMenu')}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-nav site-shell" aria-label="Mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            {t('contact')}
          </a>
          <a href="/rodrigo-navarro-cv.pdf" download onClick={() => setMenuOpen(false)}>
            {t('resume')}
          </a>
        </nav>
      )}
    </header>
  )
}

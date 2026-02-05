'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import LanguageSelector from './LanguageSelector'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const t = useTranslations('navigation')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Detect active section
      const sections = ['inicio', 'services', 'projects', 'about', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: t('home'), href: '#inicio', id: 'inicio' },
    { label: t('services'), href: '#services', id: 'services' },
    { label: t('projects'), href: '#projects', id: 'projects' },
    { label: t('about'), href: '#about', id: 'about' },
    { label: t('experience'), href: '#experience', id: 'experience' },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      setMenuOpen(false)
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
          }`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`mx-auto max-w-5xl rounded-full transition-all duration-300 px-6 h-16 flex items-center justify-between ${isScrolled
              ? 'bg-black/50 backdrop-blur-md border border-white/10 shadow-lg'
              : 'bg-transparent'
              }`}
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-bold text-xl tracking-tighter"
            >
              <Link href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  RN
                </span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              <div className="flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5 backdrop-blur-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white/10 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSelector />
              <Link
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="group relative px-5 py-2 rounded-full bg-white text-black font-semibold text-sm transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105"
              >
                {t('contact')}
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes className="text-3xl" />
            </button>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-8"
            >
              {navItems.map((item, i) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-3xl font-bold tracking-tight transition-colors ${activeSection === item.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="h-px w-24 bg-white/10 my-4" />

              <LanguageSelector />

              <Link
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg"
              >
                {t('contact')}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
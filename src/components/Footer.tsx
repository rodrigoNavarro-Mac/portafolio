'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
    const t = useTranslations('navigation')
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        {
            name: 'GitHub',
            icon: FaGithub,
            href: 'https://github.com/rodrigoNavarro-Mac',
            color: 'hover:text-white'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            href: 'https://www.linkedin.com/in/navarro-marquez-rodrigo/',
            color: 'hover:text-blue-400'
        },
        {
            name: 'Email',
            icon: FaEnvelope,
            href: 'mailto:navarro.marquez.rodrigo@gmail.com',
            color: 'hover:text-purple-400'
        }
    ]

    const navLinks = [
        { label: t('home'), href: '#inicio' },
        { label: t('services'), href: '#services' },
        { label: t('projects'), href: '#projects' },
        { label: t('about'), href: '#about' },
        { label: t('contact'), href: '#contact' }
    ]

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const targetId = href.replace('#', '')
        const element = document.getElementById(targetId)
        if (element) {
            const offsetTop = element.offsetTop - 80
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })
        }
    }

    return (
        <footer className="relative bg-black pt-32 pb-16 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
                    {/* Brand Section */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-white"
                        >
                            Let&apos;s work <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                                together.
                            </span>
                        </motion.h3>
                        <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                            Creating exceptional digital experiences with a focus on modern design and performance.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-col md:items-end justify-between">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6 md:text-right">Menu</h4>
                            <ul className="space-y-4 md:text-right">
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            onClick={(e) => scrollToSection(e, link.href)}
                                            className="text-2xl text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
                    <div className="flex gap-6">
                        {socialLinks.map((social) => {
                            const IconComponent = social.icon
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                                    aria-label={social.name}
                                >
                                    <IconComponent className="text-2xl" />
                                </a>
                            )
                        })}
                    </div>

                    <p className="text-gray-500 text-sm flex items-center gap-2">
                        © {currentYear} Rodrigo Navarro.
                    </p>
                </div>
            </div>
        </footer>
    )
}

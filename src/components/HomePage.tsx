'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Navbar from './Navbar'
import Hero from './Hero'
import Experience from './Experience'
import ProjectCard from './ProjectCard'
import ContactForm from './ContactForm'
import Services from './Services'
import Footer from './Footer'
import Education from './Education'

export default function HomePage() {
  const t = useTranslations()

  const projects = [
    {
      title: 'Grupo Sedico México',
      description: t('projects.grupoSedico.description'),
      longDescription: t('projects.grupoSedico.longDescription'),
      imageUrl: '/projects/grupo-sedico.png',
      demoUrl: 'https://www.gruposedico.mx/',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      features: [
        t('projects.grupoSedico.features.1'),
        t('projects.grupoSedico.features.2'),
        t('projects.grupoSedico.features.3'),
        t('projects.grupoSedico.features.4')
      ]
    },
    {
      title: 'Ebenezer',
      description: t('projects.ebenezer.description'),
      longDescription: t('projects.ebenezer.longDescription'),
      imageUrl: '/projects/ebenezer.jpg',
      githubUrl: 'https://github.com/rodrigoNavarro-Mac/Ebenezer',
      demoUrl: 'https://ebenezerservmed.mx/',
      technologies: ['Django', 'React', 'PostgreSQL'],
      features: [
        t('projects.ebenezer.features.1'),
        t('projects.ebenezer.features.2'),
        t('projects.ebenezer.features.3'),
        t('projects.ebenezer.features.4')
      ]
    },
    {
      title: 'DanJVicGarageDoors',
      description: t('projects.danjvic.description'),
      longDescription: t('projects.danjvic.longDescription'),
      imageUrl: '/projects/danjvic.jpg',
      githubUrl: 'https://github.com/DJVICGARAGE/DanJVicGarageDoors',
      demoUrl: 'https://www.danjvic.com/',
      technologies: ['Django', 'React', 'PostgreSQL'],
      features: [
        t('projects.danjvic.features.1'),
        t('projects.danjvic.features.2'),
        t('projects.danjvic.features.3'),
        t('projects.danjvic.features.4')
      ]
    },
    {
      title: 'San Marco Ristorante',
      description: t('projects.sanMarco.description'),
      longDescription: t('projects.sanMarco.longDescription'),
      imageUrl: '/projects/san-marco.png',
      demoUrl: 'https://sanmarcoristorante.com/',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      features: [
        t('projects.sanMarco.features.1'),
        t('projects.sanMarco.features.2'),
        t('projects.sanMarco.features.3'),
        t('projects.sanMarco.features.4')
      ]
    },
    {
      title: 'Punto Tierra',
      description: t('projects.puntoTierra.description'),
      longDescription: t('projects.puntoTierra.longDescription'),
      imageUrl: '/projects/punto-tierra.png',
      demoUrl: 'https://puntotierra.mx/',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      features: [
        t('projects.puntoTierra.features.1'),
        t('projects.puntoTierra.features.2'),
        t('projects.puntoTierra.features.3'),
        t('projects.puntoTierra.features.4')
      ]
    },
    {
      title: 'Capital Plus',
      description: t('projects.capitalPlus.description'),
      longDescription: t('projects.capitalPlus.longDescription'),
      imageUrl: '/projects/capital-plus.png',
      technologies: ['Next.js', 'React', 'TypeScript', 'AI/ML', 'PostgreSQL'],
      features: [
        t('projects.capitalPlus.features.1'),
        t('projects.capitalPlus.features.2'),
        t('projects.capitalPlus.features.3'),
        t('projects.capitalPlus.features.4')
      ]
    },
    {
      title: 'SIT_DR',
      description: t('projects.sitdr.description'),
      longDescription: t('projects.sitdr.longDescription'),
      imageUrl: '/projects/sit-dr.jpg',
      githubUrl: 'https://github.com/rodrigoNavarro-Mac/SIT_DR',
      technologies: ['Django', 'React', 'PostgreSQL'],
      features: [
        t('projects.sitdr.features.1'),
        t('projects.sitdr.features.2'),
        t('projects.sitdr.features.3'),
        t('projects.sitdr.features.4')
      ]
    },
    {
      title: 'SRG_vortex',
      description: t('projects.srg.description'),
      longDescription: t('projects.srg.longDescription'),
      imageUrl: '/projects/srg.jpg',
      githubUrl: 'https://github.com/rodrigoNavarro-Mac/SRG_vortex',
      technologies: ['Django', 'PostgreSQL'],
      features: [
        t('projects.srg.features.1'),
        t('projects.srg.features.2'),
        t('projects.srg.features.3'),
        t('projects.srg.features.4')
      ]
    },
    {
      title: 'Web Scraping Scripts',
      description: t('projects.webScraping.description'),
      longDescription: t('projects.webScraping.longDescription'),
      imageUrl: '/projects/web-scraping.png',
      githubUrl: 'https://github.com/rodrigoNavarro-Mac',
      technologies: ['Python', 'BeautifulSoup', 'Selenium', 'Scrapy'],
      features: [
        t('projects.webScraping.features.1'),
        t('projects.webScraping.features.2'),
        t('projects.webScraping.features.3'),
        t('projects.webScraping.features.4')
      ]
    },
    {
      title: 'AI Report Generator',
      description: t('projects.aiReportGenerator.description'),
      longDescription: t('projects.aiReportGenerator.longDescription'),
      imageUrl: '/projects/ai-reports.png',
      technologies: ['Python', 'AI/ML', 'Data Analysis'],
      features: [
        t('projects.aiReportGenerator.features.1'),
        t('projects.aiReportGenerator.features.2'),
        t('projects.aiReportGenerator.features.3'),
        t('projects.aiReportGenerator.features.4')
      ]
    },
  ]

  const skills = [
    { name: 'Python', color: 'bg-yellow-500' },
    { name: 'Django', color: 'bg-green-700' },
    { name: 'JavaScript', color: 'bg-yellow-400' },
    { name: 'TypeScript', color: 'bg-blue-600' },
    { name: 'PostgreSQL', color: 'bg-blue-500' },
    { name: 'MongoDB', color: 'bg-green-600' },
    { name: 'Zoho CRM/Deluge', color: 'bg-purple-600' },
    { name: 'Web Scraping', color: 'bg-orange-500' },
    { name: 'RAG/LLMs', color: 'bg-pink-600' },
    { name: 'Git', color: 'bg-red-500' }
  ]

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Services />

      {/* Projects Section */}
      <section id="projects" className="relative py-32 bg-[#050914]">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                {t('projects.title')}
              </span>
            </h2>
          </motion.div>

          {/* Grid de proyectos - Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[minmax(400px,auto)]">
            {/* Featured Project Large? For simplicity main grid first */}
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-full"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-50 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl md:text-6xl font-bold mb-12"
            >
              {t('about.title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light mb-16"
            >
              {t('about.description')}
            </motion.p>

            {/* Tech Stack Marquee (Static grid for now but styled) */}
            <div className="flex flex-wrap justify-center gap-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  <div className={`w-2 h-2 rounded-full ${skill.color}`} />
                  <span className="font-mono text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 bg-[#050914] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
          </div>

          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <Experience />
      <Education />

      <Footer />
    </div>
  )
}
'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Navbar from './Navbar'
import Hero from './Hero'
import ProjectCard from './ProjectCard'
import ContactForm from './ContactForm'
import Services from './Services'

const projects = [
  {
    title: 'Ebenezer',
    description: 'Pagina web con ssistema de gestion de citas y  servicios por sucursal.',
    imageUrl: '/projects/ebenezer.jpg',
    githubUrl: 'https://github.com/rodrigoNavarro-Mac/Ebenezer',
    technologies: ['Django', 'React', 'PostgreSQL'],
  },
  {
    title: 'SIT_DR',
    description: 'Sistema integral de tutorias.',
    imageUrl: '/projects/sit-dr.jpg',
    githubUrl: 'https://github.com/rodrigoNavarro-Mac/SIT_DR',
    technologies: ['Django', 'React', 'PostgreSQL'],
  },
  {
    title: 'DanJVicGarageDoors',
    description: 'Sitio web para empresa de puertas de garaje.',
    imageUrl: '/projects/danjvic.jpg',
    githubUrl: 'https://github.com/DJVICGARAGE/DanJVicGarageDoors',
    technologies: ['Django', 'React', 'PostgreSQL'],
  },
  {
    title: 'SRG_vortex',
    description: 'Sistema de gestión de recursos.',
    imageUrl: '/projects/srg.jpg',
    githubUrl: 'https://github.com/rodrigoNavarro-Mac/SRG_vortex',
    technologies: ['Django', 'PostgreSQL'],
  },
]

export default function HomePage() {
  const t = useTranslations()

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            {t('projects.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">{t('about.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t('about.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-12">{t('contact.title')}</h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
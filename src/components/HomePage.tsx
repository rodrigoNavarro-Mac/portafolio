'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Navbar from './Navbar'
import Hero from './Hero'
import ProjectCard from './ProjectCard'
import ContactForm from './ContactForm'
import Services from './Services'

export default function HomePage() {
  const t = useTranslations()

  const projects = [
    {
      title: 'Ebenezer',
      description: t('projects.ebenezer.description'),
      longDescription: t('projects.ebenezer.longDescription'),
      imageUrl: '/projects/ebenezer.jpg',
      githubUrl: 'https://github.com/rodrigoNavarro-Mac/Ebenezer',
      technologies: ['Django', 'React', 'PostgreSQL'],
      features: [
        t('projects.ebenezer.features.1'),
        t('projects.ebenezer.features.2'),
        t('projects.ebenezer.features.3'),
        t('projects.ebenezer.features.4')
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
      title: 'DanJVicGarageDoors',
      description: t('projects.danjvic.description'),
      longDescription: t('projects.danjvic.longDescription'),
      imageUrl: '/projects/danjvic.jpg',
      githubUrl: 'https://github.com/DJVICGARAGE/DanJVicGarageDoors',
      technologies: ['Django', 'React', 'PostgreSQL'],
      features: [
        t('projects.danjvic.features.1'),
        t('projects.danjvic.features.2'),
        t('projects.danjvic.features.3'),
        t('projects.danjvic.features.4')
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
      imageUrl: '/projects/web-scraping.svg',
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
      imageUrl: '/projects/ai-reports.svg',
      githubUrl: '#',
      technologies: ['Python', 'AI/ML', 'Data Analysis'],
      features: [
        t('projects.aiReportGenerator.features.1'),
        t('projects.aiReportGenerator.features.2'),
        t('projects.aiReportGenerator.features.3'),
        t('projects.aiReportGenerator.features.4')
      ]
    },
    {
      title: 'Grupo Sedico México',
      description: t('projects.grupoSedico.description'),
      longDescription: t('projects.grupoSedico.longDescription'),
      imageUrl: '/projects/grupo-sedico.png',
      githubUrl: '#',
      demoUrl: 'https://www.gruposedico.mx/',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      features: [
        t('projects.grupoSedico.features.1'),
        t('projects.grupoSedico.features.2'),
        t('projects.grupoSedico.features.3'),
        t('projects.grupoSedico.features.4')
      ]
    },
  ]

  // Skills data with colors for modern design
  const skills = [
    { name: 'React', color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', color: 'from-green-400 to-emerald-600' },
    { name: 'MongoDB', color: 'from-green-500 to-green-700' },
    { name: 'PostgreSQL', color: 'from-blue-500 to-indigo-600' },
    { name: 'TypeScript', color: 'from-blue-600 to-blue-800' },
    { name: 'Tailwind CSS', color: 'from-teal-400 to-cyan-600' }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />

      {/* Projects Section - Enhanced Design */}
      <section id="projects" className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                {t('projects.title')}
              </h2>
              <div className="h-1.5 w-32 mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"></div>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Enhanced Design */}
      <section id="about" className="relative py-24 overflow-hidden bg-white dark:bg-gray-900">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Title with gradient */}
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                {t('about.title')}
              </h2>
              <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full"></div>
            </motion.div>
            
            {/* Description with better styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
                {t('about.description')}
              </p>
            </motion.div>
            
            {/* Skills with modern cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative bg-white dark:bg-gray-800 px-6 py-3 rounded-2xl border-2 border-transparent group-hover:border-white dark:group-hover:border-gray-700 transition-all duration-300 shadow-lg">
                    <span className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${skill.color} text-lg`}>
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Enhanced Design */}
      <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            {/* Title with gradient */}
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                {t('contact.title')}
              </h2>
              <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full"></div>
            </motion.div>
            
            {/* Contact form with card effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700"
            >
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import {
  FaCode,
  FaMobile,
  FaPalette,
  FaCogs,
  FaFileAlt,
  FaProjectDiagram,
  FaTools,
  FaLightbulb,
  FaPlug,
  FaShieldAlt,
  FaGraduationCap,
  FaHandshake,
  FaCloud
} from 'react-icons/fa'

export default function Services() {
  const t = useTranslations('services')

  const services = [
    {
      title: t('webDevelopment.title'),
      description: t('webDevelopment.description'),
      icon: FaCode,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: t('mobileDevelopment.title'),
      description: t('mobileDevelopment.description'),
      icon: FaMobile,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: t('uiDesign.title'),
      description: t('uiDesign.description'),
      icon: FaPalette,
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      title: t('cloudDevOps.title'),
      description: t('cloudDevOps.description'),
      icon: FaCloud,
      gradient: 'from-green-500 to-emerald-500',
    }
  ]

  const detailedServices = [
    { text: t('customApps'), icon: FaCogs },
    { text: t('documentation'), icon: FaFileAlt },
    { text: t('projectLifecycle'), icon: FaProjectDiagram },
    { text: t('maintenance'), icon: FaTools },
    { text: t('consulting'), icon: FaLightbulb },
    { text: t('integration'), icon: FaPlug },
    { text: t('security'), icon: FaShieldAlt },
    { text: t('training'), icon: FaGraduationCap },
    { text: t('personalizedSupport'), icon: FaHandshake }
  ]

  return (
    <section id="services" className="relative py-32 bg-black overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
          >
            {t('title')}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
          />
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white text-3xl" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Detailed Services list */}
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            {t('moreTitle')}
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {detailedServices.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all cursor-default"
              >
                <div className="p-2 rounded-lg bg-white/5 text-blue-400">
                  <item.icon className="text-xl" />
                </div>
                <span className="text-gray-300 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

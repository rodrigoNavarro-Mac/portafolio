'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { FaCheckCircle } from 'react-icons/fa'

export default function Services() {
  const t = useTranslations('services')

  const services = [
    {
      title: t('webDevelopment.title'),
      description: t('webDevelopment.description'),
      icon: '🌐'
    },
    {
      title: t('mobileDevelopment.title'),
      description: t('mobileDevelopment.description'),
      icon: '📱'
    },
    {
      title: t('uiDesign.title'),
      description: t('uiDesign.description'),
      icon: '🎨'
    }
  ]

  // Lista detallada de servicios
  const detailedServices = [
    t('customApps'),
    t('documentation'),
    t('projectLifecycle'),
    t('maintenance'),
    t('consulting'),
    t('integration'),
    t('security'),
    t('training'),
    t('personalizedSupport')
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          {t('title')}
        </motion.h2>
        
        {/* Tarjetas de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Lista detallada de servicios */}
        <div className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-800/80 rounded-lg shadow p-8">
          <h3 className="text-lg font-semibold mb-6 text-blue-600 dark:text-blue-400 text-center">{t('moreTitle')}</h3>
          <ul className="space-y-3">
            {detailedServices.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-200 leading-relaxed"
              >
                <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                <span className="break-words">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
} 
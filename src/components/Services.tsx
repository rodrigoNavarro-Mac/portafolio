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
  FaHandshake
} from 'react-icons/fa'

export default function Services() {
  const t = useTranslations('services')

  // Services with modern gradient colors and icons
  const services = [
    {
      title: t('webDevelopment.title'),
      description: t('webDevelopment.description'),
      icon: FaCode,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      darkBgGradient: 'from-blue-900/20 to-cyan-900/20'
    },
    {
      title: t('mobileDevelopment.title'),
      description: t('mobileDevelopment.description'),
      icon: FaMobile,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      bgGradient: 'from-purple-50 to-pink-50',
      darkBgGradient: 'from-purple-900/20 to-pink-900/20'
    },
    {
      title: t('uiDesign.title'),
      description: t('uiDesign.description'),
      icon: FaPalette,
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      bgGradient: 'from-orange-50 to-amber-50',
      darkBgGradient: 'from-orange-900/20 to-amber-900/20'
    }
  ]

  // Lista detallada de servicios con iconos y gradientes
  const detailedServices = [
    {
      text: t('customApps'),
      icon: FaCogs,
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      darkBgColor: 'from-blue-900/30 to-cyan-900/30'
    },
    {
      text: t('documentation'),
      icon: FaFileAlt,
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      darkBgColor: 'from-green-900/30 to-emerald-900/30'
    },
    {
      text: t('projectLifecycle'),
      icon: FaProjectDiagram,
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      darkBgColor: 'from-purple-900/30 to-pink-900/30'
    },
    {
      text: t('maintenance'),
      icon: FaTools,
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      darkBgColor: 'from-orange-900/30 to-red-900/30'
    },
    {
      text: t('consulting'),
      icon: FaLightbulb,
      gradient: 'from-yellow-500 to-amber-500',
      bgColor: 'from-yellow-50 to-amber-50',
      darkBgColor: 'from-yellow-900/30 to-amber-900/30'
    },
    {
      text: t('integration'),
      icon: FaPlug,
      gradient: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-50 to-blue-50',
      darkBgColor: 'from-indigo-900/30 to-blue-900/30'
    },
    {
      text: t('security'),
      icon: FaShieldAlt,
      gradient: 'from-red-500 to-rose-500',
      bgColor: 'from-red-50 to-rose-50',
      darkBgColor: 'from-red-900/30 to-rose-900/30'
    },
    {
      text: t('training'),
      icon: FaGraduationCap,
      gradient: 'from-teal-500 to-green-500',
      bgColor: 'from-teal-50 to-green-50',
      darkBgColor: 'from-teal-900/30 to-green-900/30'
    },
    {
      text: t('personalizedSupport'),
      icon: FaHandshake,
      gradient: 'from-pink-500 to-purple-500',
      bgColor: 'from-pink-50 to-purple-50',
      darkBgColor: 'from-pink-900/30 to-purple-900/30'
    }
  ]

  return (
    <section id="services" className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900">
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title with gradient */}
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
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              {t('title')}
            </h2>
            <div className="h-1.5 w-32 mx-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full"></div>
          </motion.div>
        </motion.div>
        
        {/* Service Cards with modern design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`}></div>
                
                {/* Card content */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`relative bg-gradient-to-br ${service.bgGradient} dark:${service.darkBgGradient} dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50 backdrop-blur-sm flex flex-col items-center text-center h-full`}
                >
                  {/* Icon with gradient background */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <IconComponent className="text-white text-3xl" />
                  </motion.div>
                  
                  {/* Title with gradient on hover */}
                  <h3 className={`text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${service.gradient} group-hover:scale-105 transition-transform duration-300`}>
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Detailed Services with Individual Cards */}
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              {t('moreTitle')}
            </h3>
            <div className="h-1.5 w-32 mx-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full"></div>
          </motion.div>
          
          {/* Services cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedServices.map((service, idx) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + (idx * 0.08),
                    type: "spring",
                    stiffness: 120
                  }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Card glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300`}></div>
                  
                  {/* Card content */}
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`relative bg-gradient-to-br ${service.bgColor} dark:${service.darkBgColor} dark:bg-gray-800/90 rounded-xl p-6 shadow-lg border border-white/50 dark:border-gray-700/50 backdrop-blur-sm h-full flex items-start gap-4`}
                  >
                    {/* Icon container */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-md`}
                    >
                      <IconComponent className="text-white text-2xl" />
                    </motion.div>
                    
                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-semibold text-gray-800 dark:text-gray-100 leading-relaxed break-words">
                        {service.text}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 
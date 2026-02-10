'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef, useState, useEffect } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { AnimatePresence } from 'framer-motion'

const phrases = [
  "Hello World",
  "Full Stack Dev",
  "Creative Coder",
  "UI/UX Lover"
]

const RotatingText = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-5 w-24 md:w-28 overflow-hidden text-left">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export default function Hero() {
  const t = useTranslations('hero')
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} id="inicio" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">

      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-aurora opacity-30 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[100px] animate-blob" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[100px] animate-blob animation-delay-2000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="flex flex-col items-center text-center">

          {/* Profile Image with Glow */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            className="mb-10 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-black relative">
                <Image
                  src="/profile.jpg"
                  alt="Rodrigo Navarro"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 160px, 192px"
                  priority
                />
              </div>
            </div>

            {/* Float badge with Rotating Text */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-12 -top-16 md:-right-16 md:-top-10 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-white/90 shadow-xl flex items-center gap-2 whitespace-nowrap"
            >
              <span>👋</span>
              <RotatingText />
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6"
          >
            <span className="block text-white mb-2">{t('title').split(' ')[0]}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              {t('title').split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 font-light leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg transition-transform hover:scale-105"
            >
              <span className="relative z-10">{t('projects')}</span>
              <div className="absolute inset-0 rounded-full bg-blue-400 blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium text-lg transition-all hover:border-white/40"
            >
              {t('contact')}
            </a>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
      >
        <FaArrowDown className="text-2xl" />
      </motion.div>
    </section>
  )
}
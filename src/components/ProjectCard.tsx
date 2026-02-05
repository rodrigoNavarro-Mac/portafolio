'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import React, { useState, useEffect } from 'react'
import { FaLock, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  githubUrl?: string
  demoUrl?: string
  technologies: string[]
  longDescription?: string
  features?: string[]
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  githubUrl,
  demoUrl,
  technologies,
  longDescription,
  features,
}: ProjectCardProps) {
  const t = useTranslations('projects')
  const [showOverlay, setShowOverlay] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const isPrivate = !demoUrl
  const showGithub = githubUrl && githubUrl !== '#'

  return (
    <>
      <motion.div
        className="group relative bg-[#0b0f19] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] h-full flex flex-col"
        whileHover={{ y: -5 }}
        onClick={() => isMobile && setShowOverlay(true)}
      >
        {/* Mobile/Desktop badge */}
        {isPrivate && (
          <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-amber-500/30 text-amber-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
            <FaLock /> Private
          </div>
        )}

        {/* Image Section */}
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/40 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow relative">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
          <div className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed space-y-3">
            <p>{longDescription || description}</p>
            {/* Render features on desktop/card if desired, or keep clean */}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] uppercase tracking-wider font-semibold text-blue-400 bg-blue-400/10 px-2 py-1 rounded border border-blue-400/20"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="text-[10px] text-gray-500 px-2 py-1">+ {technologies.length - 4}</span>
            )}
          </div>

          <div className="flex gap-3 mt-auto">
            {demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-200 transition-colors text-sm"
              >
                <FaExternalLinkAlt /> {t('viewDemo')}
              </Link>
            )}
            {showGithub && (
              <Link
                href={githubUrl}
                target="_blank"
                className={`flex items-center justify-center bg-white/5 hover:bg-white/10 text-white rounded-xl transition-colors border border-white/10 ${!demoUrl ? 'flex-1 py-3 text-sm font-semibold gap-2' : 'w-12 text-lg'}`}
              >
                <FaGithub /> {!demoUrl && t('viewGithub')}
              </Link>
            )}
          </div>
        </div>
      </motion.div>

      {/* Mobile Details Overlay */}
      <AnimatePresence>
        {isMobile && showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowOverlay(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-md p-6 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <button onClick={() => setShowOverlay(false)} className="text-white/50 hover:text-white p-2 text-2xl">×</button>
              </div>

              <p className="text-gray-300 mb-6">{longDescription || description}</p>

              {features && (
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {features.map((feature, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-400">
                        <span className="text-blue-500">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-3">
                {demoUrl && (
                  <Link href={demoUrl} target="_blank" className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold text-center">
                    Live Demo
                  </Link>
                )}
                {showGithub && (
                  <Link href={githubUrl} target="_blank" className="flex-1 bg-white/10 text-white py-3 rounded-xl font-semibold text-center">
                    GitHub
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
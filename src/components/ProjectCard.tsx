'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
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
  const [showOverlay, setShowOverlay] = useState(false)

  const isPrivate = !demoUrl
  const showGithub = githubUrl && githubUrl && githubUrl !== '#'

  return (
    <>
      <motion.div
        className="group relative bg-[#0b0f19] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] h-full flex flex-col cursor-pointer"
        whileHover={{ y: -5 }}
        onClick={() => setShowOverlay(true)}
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
            {/* Show short description on card, detailed in modal */}
            <p className="line-clamp-3">{description}</p>
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
            <button
              className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-colors"
            >
              Ver Detalles
            </button>
          </div>
        </div>
      </motion.div>

      {/* Details Overlay (Mobile & Desktop) */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowOverlay(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 100, scale: 0.9 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 100, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-2xl p-6 max-h-[85vh] overflow-y-auto relative shadow-2xl shadow-blue-900/20"
            >
              <button
                onClick={() => setShowOverlay(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                ✕
              </button>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 pr-10">{title}</h3>

              <div className="text-gray-300 mb-8 leading-relaxed text-base md:text-lg">
                {longDescription || description}
              </div>

              {features && features.length > 0 && (
                <div className="mb-8 bg-white/5 rounded-xl p-5 border border-white/5">
                  <h4 className="text-sm font-bold text-blue-400 uppercase mb-4 tracking-wider">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features.map((feature, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-300">
                        <span className="text-blue-500 mt-1">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-3 mt-auto pt-4 border-t border-white/10">
                {demoUrl && (
                  <Link
                    href={demoUrl}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold text-center hover:bg-blue-500 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" /> Live Demo
                  </Link>
                )}
                {showGithub && (
                  <Link
                    href={githubUrl}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white py-3 rounded-xl font-semibold text-center hover:bg-white/20 transition-colors"
                  >
                    <FaGithub className="text-lg" /> GitHub
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
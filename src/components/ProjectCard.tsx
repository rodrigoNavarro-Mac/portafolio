'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import React, { useState, useEffect } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  githubUrl: string
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
    // Detecta si es móvil
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Cierra el overlay al hacer tap fuera (solo móvil)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowOverlay(false)
    }
  }

  return (
    <div
      className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden relative w-full min-h-[500px] md:min-h-[600px]"
      onClick={() => isMobile && setShowOverlay(true)}
      style={{ cursor: isMobile ? 'pointer' : 'default' }}
    >
      {/* Imagen y overlay */}
      <div className="relative h-72 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Overlay con información adicional */}
        {/* Modal en móvil */}
        {isMobile && showOverlay && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
            onClick={handleOverlayClick}
          >
            <div className="relative text-white max-w-xs md:max-w-sm lg:max-w-md w-full mx-auto text-center bg-black/80 rounded-xl p-6 shadow-lg backdrop-blur-sm border border-white/20 overflow-y-auto max-h-[80vh]">
              <button
                className="absolute top-2 right-2 text-white bg-black/40 rounded-full p-2 hover:bg-black/70 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowOverlay(false);
                }}
                aria-label="Cerrar"
              >
                ×
              </button>
              {longDescription && (
                <p className="text-base font-medium mb-4 leading-relaxed">{longDescription}</p>
              )}
              {features && features.length > 0 && (
                <ul className="text-sm space-y-2 text-left mx-auto inline-block">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-300 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
        {/* Overlay en escritorio (hover) */}
        {!isMobile && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100">
            <div className="text-white max-w-xs md:max-w-sm lg:max-w-md mx-auto text-center bg-black/60 rounded-xl p-4 shadow-lg backdrop-blur-sm border border-white/20 overflow-y-auto max-h-full">
              {longDescription && (
                <p className="text-base font-medium mb-4 leading-relaxed">{longDescription}</p>
              )}
              {features && features.length > 0 && (
                <ul className="text-sm space-y-2 text-left mx-auto inline-block">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-300 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
      {/* Resto del contenido de la tarjeta */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            {t('viewGithub')}
          </Link>
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {t('viewDemo')}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
} 
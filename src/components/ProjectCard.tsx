'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

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

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300" />
      </div>
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
      
      {/* Overlay con información adicional */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100">
        <div className="text-white">
          {longDescription && (
            <p className="text-sm mb-4">{longDescription}</p>
          )}
          {features && features.length > 0 && (
            <ul className="text-sm space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
} 
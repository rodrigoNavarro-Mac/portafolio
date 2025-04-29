'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { FaEnvelope, FaUser, FaCommentDots } from 'react-icons/fa'

export default function ContactForm() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const locale = useLocale()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      locale: formData.get('locale') as string,
    }
    setStatus('idle')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        e.currentTarget.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-lg mx-auto bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">{t('formTitle')}</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="locale" value={locale} />
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
            <FaUser className="inline mr-2" /> {t('name')}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
            <FaEnvelope className="inline mr-2" /> {t('email')}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
            <FaCommentDots className="inline mr-2" /> {t('message')}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          {t('send')}
        </button>
        {status === 'success' && (
          <p className="text-green-600 text-center mt-2">{t('success')}</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-center mt-2">{t('error')}</p>
        )}
      </form>
    </div>
  )
} 
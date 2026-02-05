'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const locale = useLocale()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      locale: formData.get('locale') as string,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      await res.json();
      setStatus('success')
    } catch (error) {
      console.log(error)
      setStatus('success')
    }
  }

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10"
        >
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
            ✓
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{t('success')}</h3>
          <p className="text-gray-400">Thank you for reaching out!</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-6 text-blue-400 hover:text-white underline"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <input type="hidden" name="locale" value={locale} />

          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">
              {t('name')}
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <FaUser />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-11 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder={t('name')}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">
              {t('email')}
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <FaEnvelope />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-11 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">
              {t('message')}
            </label>
            <div className="relative">
              <div className="absolute left-4 top-6 text-gray-500">
                <FaComment />
              </div>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-11 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                placeholder={t('message')}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <FaPaperPlane className="text-sm" />
                {t('send')}
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}

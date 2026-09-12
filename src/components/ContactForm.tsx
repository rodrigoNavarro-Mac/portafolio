'use client'

import { FormEvent, useRef, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const t = useTranslations('contact')
  const locale = useLocale()
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')

    const formData = new FormData(event.currentTarget)
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      locale,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Contact request failed')
      }

      formRef.current?.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="site-shell contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2>{t('title')}</h2>
          <p>{t('description')}</p>

          <div className="contact-links">
            <a href="mailto:navarro.marquez.rodrigo@gmail.com">
              <span>{t('emailCta')}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/navarro-marquez-rodrigo/" target="_blank" rel="noreferrer">
              <span>{t('linkedinCta')}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/rodrigoNavarro-Mac" target="_blank" rel="noreferrer">
              <span>{t('githubCta')}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a href="/rodrigo-navarro-cv.pdf" download>
              <span>{t('resumeCta')}</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="contact-form-wrap">
          <h3>{t('formTitle')}</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <label>
              <span>{t('name')}</span>
              <input name="name" type="text" minLength={2} maxLength={80} autoComplete="name" required />
            </label>
            <label>
              <span>{t('email')}</span>
              <input name="email" type="email" maxLength={160} autoComplete="email" required />
            </label>
            <label>
              <span>{t('message')}</span>
              <textarea name="message" minLength={10} maxLength={3000} rows={5} required />
            </label>

            <button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? t('sending') : t('send')}
              <span aria-hidden="true">→</span>
            </button>

            {status === 'success' && (
              <p className="form-message is-success" role="status">{t('success')}</p>
            )}
            {status === 'error' && (
              <p className="form-message is-error" role="alert">{t('error')}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

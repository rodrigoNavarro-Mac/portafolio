import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    locale = 'en' // Default to English if locale is undefined
  }

  try {
    return {
      messages: (await import(`@/messages/${locale}.json`)).default,
      locale
    }
  } catch {
    // If the locale file doesn't exist, fallback to English
    return {
      messages: (await import(`@/messages/en.json`)).default,
      locale: 'en'
    }
  }
}) 
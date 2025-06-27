import { createContext, useContext } from 'react'

export const TranslationContext = createContext({})

export function TranslationProvider({ locale, children }) {
  let translations = {}

  try {
    translations = require(`@/locales/${locale}.json`)
  } catch (err) {
    console.warn(`Missing translations for locale: ${locale}`)
  }

  return (
    <TranslationContext.Provider value={translations}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used inside TranslationProvider')
  }
  return context
}

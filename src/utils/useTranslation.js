import { useRouter } from 'next/router'
import en from '@/locales/en.json'
import bg from '@/locales/bg.json'

const translations = { en, bg }

export default function useTranslation() {
  const { locale = 'en' } = useRouter()
  return translations[locale] || en
}

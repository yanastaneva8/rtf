import { useTranslation } from 'next-i18next'
import Link from 'next/link'

import { useRouter } from 'next/router'


export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const router = useRouter()
  const toggleLanguage = () => {
   const nextLocale = router.locale === 'en' ? 'bg' : 'en'
    i18n.changeLanguage(nextLocale)
  }

 
  const nextLocale = router.locale === 'en' ? 'bg' : 'en'

  return (
        <Link href={router.asPath} locale={nextLocale} scroll={false}>

    <button
      type="button"
      aria-label="Switch language"
      onClick={toggleLanguage}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
    >
      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white">
        {i18n.language === 'en' ? 'BG' : 'EN'}
      </span>
    </button>
    </Link>
  )
}

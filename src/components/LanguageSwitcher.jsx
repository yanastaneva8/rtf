'use client'

import { useRouter } from 'next/router'

export default function LanguageSwitcher() {
  const router = useRouter()
  const { pathname, query, asPath, locale } = router

  function switchLocale() {
    const nextLocale = locale === 'en' ? 'bg' : 'en'
    router.push({ pathname, query }, asPath, { locale: nextLocale })
  }

  return (
    <button
      type="button"
      aria-label="Switch language"
      onClick={switchLocale}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
    >
      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white">
        {locale === 'en' ? 'BG' : 'EN'}
      </span>
    </button>
  )
}
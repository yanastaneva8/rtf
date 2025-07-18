import { useRouter } from 'next/router'
import Link from 'next/link'

export default function LanguageSwitcher() {
  const router = useRouter()
  const { asPath, locale, defaultLocale } = router

  // Toggle locale
  const nextLocale = locale === 'en' ? 'bg' : 'en'

  // Strip the current locale from the path (e.g. /bg/stories/category/foo → /stories/category/foo)
  const pathWithoutLocale = asPath.replace(`/${locale}`, '') || '/'

  return (
    <Link href={pathWithoutLocale} locale={nextLocale} scroll={false}>
      <button
        type="button"
        aria-label="Switch language"
        className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      >
        <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white">
          {nextLocale.toUpperCase()}
        </span>
      </button>
    </Link>
  )
}

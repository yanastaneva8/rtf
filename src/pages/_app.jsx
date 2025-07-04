import { appWithTranslation } from 'next-i18next'
// import { useRouter } from 'next/router'

// import { useEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

// function usePrevious(value) {
//   let ref = useRef()

//   useEffect(() => {
//     ref.current = value
//   }, [value])

//   return ref.current
// }

function App({ Component, pageProps }) {
    // const router = useRouter()
  const locale = pageProps.locale || 'en'
  // let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header locale={locale}/>
        
        <main>
          <Component {...pageProps} locale={locale} />
        </main>
        <Footer locale={locale}/>
      </div>
    </>
  )
}

export default appWithTranslation(App)


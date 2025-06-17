import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import { useTranslation } from '@/utils/useTranslation'

export default function Speaking() {
    const t = useTranslation()
  return (
    <>
      <Head>
        <title>{t.events.title}</title>
        <meta
          name="description"
          content={t.events.description}
        />
      </Head>
      <SimpleLayout
        title={t.events.title}
        intro={t.events.description}
      >
       
      </SimpleLayout>
    </>
  )
}
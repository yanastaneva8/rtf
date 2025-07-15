import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function ThankYou({}) {
  return (
    <>
      <Head>
        <title>you’re subscribed - freebirth.</title>
        <meta
          name="description"
          content="thanks for subscribing to our newsletter."
        />
      </Head>
      <SimpleLayout
        title="thanks for subscribing."
        intro="we’ll send you an email any time we publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. you can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // ...other props
    },
  }
}
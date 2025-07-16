// blog/bg/some-article/index.jsx

import { ArticleLayout } from '@/components/ArticleLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MDXContent, { meta } from './content.mdx'

export default function Page(props) {
  return <ArticleLayout meta={meta}><MDXContent {...props} /></ArticleLayout>
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

// blog/bg/some-article/index.jsx

import { ArticleLayout } from '@/components/ArticleLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MDXContent from './content.mdx'

export const meta = {
  author: 'Adam Wathan',
  date: '2022-09-05',
  title: 'english',
  locale: 'en',
  description:
    'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
}

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

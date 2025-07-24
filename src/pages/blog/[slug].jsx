// src/pages/blog/[slug].jsx
import { useRouter } from 'next/router'
import { ArticleLayout } from '@/components/ArticleLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { loadBlogContent, getAllSlugs } from '@/lib/loadBlogContent'

export default function BlogPage({ meta, content: Content }) {
  return (
    <ArticleLayout meta={meta}>
      <Content />
    </ArticleLayout>
  )
}

export async function getStaticPaths() {
  const slugs = await getAllSlugs()
  const locales = ['en', 'bg']

  const paths = slugs.flatMap((slug) =>
    locales.map((locale) => ({
      params: { slug },
      locale,
    }))
  )

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params, locale }) {
  const { slug } = params
  const contentData = await loadBlogContent(slug, locale)

  if (!contentData) {
    return { notFound: true }
  }

  return {
    props: {
      meta: contentData.meta,
      content: contentData.component,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

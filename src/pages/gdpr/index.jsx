import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { ArticleLayout } from '@/components/ArticleLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function GDPRPage({ meta, mdxSource }) {
  return (
    <ArticleLayout meta={meta}>
      <MDXRemote {...mdxSource} />
    </ArticleLayout>
  )
}

export async function getStaticProps({ locale }) {
  const filePath = path.join(process.cwd(), 'src/pages/gdpr', `content.${locale}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    return { notFound: true }
  }
  
  const source = fs.readFileSync(filePath, 'utf8')
  const { data: meta, content } = matter(source)
  const mdxSource = await serialize(content)
  
  return {
    props: {
      meta,
      mdxSource,
      locale,
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
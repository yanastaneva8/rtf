import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { ArticleLayout } from '@/components/ArticleLayout'
import { useTranslation } from 'next-i18next'
import matter from 'gray-matter'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export default function StoriesPage({ meta, mdxSource }) {
  const { t } = useTranslation('common')
  // console.log('Extracted meta', meta);
  
  return (
    <ArticleLayout meta={meta}>
      <MDXRemote {...mdxSource} />
    </ArticleLayout>
  )
}

export async function getStaticPaths({ locales }) {
  const category = 'lessons'
  const basePath = path.join(process.cwd(), 'src/pages/stories', category)
  // List all directories (each directory represents a story slug)
  const slugs = fs.readdirSync(basePath).filter((name) =>
    fs.statSync(path.join(basePath, name)).isDirectory()
  )

  // Create a path for every slug in every locale.
  const paths = []
  slugs.forEach((slug) => {
    locales.forEach((locale) => {
      paths.push({ params: { slug }, locale })
    })
  })

  return {
    paths,
    fallback: false,
  }
}


export async function getStaticProps({ params, locale }) {
  const category = 'lessons'
  const filePath = path.join(
    process.cwd(),
    'src/pages/stories',
    category,
    params.slug,
    `content.${locale}.mdx`
  )

  if (!fs.existsSync(filePath)) {
    return { notFound: true }
  }
  
  const source = fs.readFileSync(filePath, 'utf8')
  // Use gray-matter to extract frontmatter and content separately.
  const { data: meta, content } = matter(source)
  
  // Then serialize only the MDX content (without the frontmatter).
  const mdxSource = await serialize(content)
  
  return {
    props: {
      meta,
      mdxSource,
      slug: params.slug,
      locale,
      ...(await serverSideTranslations(locale, ['common'])),

    },
  }
}
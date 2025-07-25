import { getAllStories } from "@/lib/getAllStories"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'

import { useTranslation } from 'next-i18next'



export function Blog({ blog }) {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <div className="md:grid md:grid-cols-4 md:items-baseline">
      <Card as="div" className="md:col-span-3">
        <Card.Title href={`/blog/${blog.locale}/${blog.slug}`}>
          {blog.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={blog.date}
          className="md:hidden"
          decorate
        >
          {formatDate(blog.date, router.locale)}
        </Card.Eyebrow>
        <Card.Description>{blog.description}</Card.Description>
        <Card.Cta>{t('blog.read-more') || 'Read blog'}</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={blog.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(blog.date, router.locale)}
      </Card.Eyebrow>
    </div>
  )
}


export default function Lessons({ blogs }) {
  const { t } = useTranslation('common')
  const router = useRouter()
  const currentLocale = router.query.locale || router.locale || 'en'

  // Filter blogs for the current locale
  const localeBlogs = blogs.filter(blog => blog.locale === currentLocale)
  return (
    <>
      <Head>
        <title>{t('stories.categories.lessons')}</title>
        <meta
          name="description"
          content={t('stories.categories.lessons')}
        />
      </Head>
      <SimpleLayout
        title={t('stories.categories.lessons')}
        intro={t('stories.categories.lessons')}
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
                <div>
      {localeBlogs.map((blog) => (
        <Blog key={blog.slug} blog={blog} />
      ))}
    </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}



export async function getStaticProps({ locale }) {
    const category = "lessons"

  const blogs = await getAllStories(category)
  const blogMeta = blogs.map(({ component, ...meta }) => meta)

  return {
    props: {
      blogs: blogMeta,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}


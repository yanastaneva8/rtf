import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getAllStories } from '@/lib/getAllStories'
import PricingCard from '@/components/PricingCard'


function Story({ story }) {
    const { t } = useTranslation('common')

  const router = useRouter()

  return (
    <div className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/stories/${story.locale}/${story.slug}`}>
          {story.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={story.date}
          className="md:hidden"
          decorate
        >
          {formatDate(story.date, router.locale)}
        </Card.Eyebrow>
        <Card.Description>{story.description}</Card.Description>
        <Card.Cta>Read story</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={story.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(story.date, router.locale)}
      </Card.Eyebrow>
    </div>
  )
}

// ...existing imports...

export default function StoriesIndex({ stories }) {
  const {t} = useTranslation('common')
  const router = useRouter()
  const currentLocale = router.query.locale || router.locale || 'en'
const categoriesObj = t('stories.categories', { returnObjects: true })
  const categories = Object.entries(categoriesObj).map(([key, label]) => ({
    key,
    label,
  }))

  function handleCategoryClick(categoryKey) {
    const path = `/stories/${categoryKey}`
    router.push(path)
  }


  return (
    <>
      <Head>
        <title>{t('stories.title')}
</title>
      </Head>
      <SimpleLayout title={t('stories.title')} intro={t('stories.description')}>
        <div>
          <div className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {categories.map(category => (
              <PricingCard
                key={category.key}
                label={category.label}
                onClick={() => handleCategoryClick(category.key)}
              />
            ))}
          </div>
          {categories.map(category => (
            <section key={category.key} id={`category-${category.key}`} className="mb-8">
              <div className="flex flex-col space-y-8">
                {stories
                  .filter(story => story.category === category.key)
                  .map(story => (
                    <Story key={story.slug} story={story} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      stories: (await getAllStories(locale)).map(({ component, ...meta }) => meta),
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
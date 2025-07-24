import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PricingCard from '@/components/PricingCard'

export default function StoriesIndex() {
  const { t } = useTranslation('common')
  const router = useRouter()

  // Read categories from translations (ensure your translations contain an object "stories.categories")
  const categoriesObj = t('stories.categories', { returnObjects: true })
  const categories = Object.entries(categoriesObj).map(([key, label]) => ({
    key,
    label,
  }))

  const handleCategoryClick = (categoryKey) => {
    // Navigate to the corresponding category page
    const path = `/stories/${categoryKey}`
    router.push(path)
  }

  return (
    <>
      <Head>
        <title>{t('stories.title')}</title>
      </Head>
      <SimpleLayout title={t('stories.title')} intro={t('stories.description')}>
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((category) => (
            <PricingCard
              key={category.key}
              label={category.label}
              onClick={() => handleCategoryClick(category.key)}
            />
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
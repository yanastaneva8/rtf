import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


import { Container } from '@/components/Container'
import {
  FacebookIcon,
  InstagramIcon,
  ThreadsIcon,
} from '@/components/SocialIcons'

const anna =
'https://i.ibb.co/B500VbsD/a.jpg'
const yana =
'https://i.ibb.co/67jXvhfv/y.jpg'

import { useTranslation } from 'next-i18next'


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function Photos() {
const paragraphIds = ['anna', 'yana']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex flex-col items-center gap-3 py-4 sm:gap-8">
        {[anna, yana].map((image, imageIndex) => (
          <a
            key={imageIndex}
            href={`#${paragraphIds[imageIndex]}`}
            className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-xl"
          >
            <div
              className={clsx(
                'relative aspect-[8/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              )}
            >
              <img
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default function About({}) {
  const { t } = useTranslation('common')
  return (
    <>
      <Head>
        <title>{t('about.title')}</title>
        <meta name="description" content={t('about.description')} />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-2 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          {/* Text container: occupies first column on mobile */}
          <div className="col-span-2 lg:col-span-1 lg:order-first">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {t('about.title')}
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <div id="anna">
                <p className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {t('about.t-anna')}
                </p>
                {t('about.p-anna')}
              </div>
              <div id="yana">
                <p className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {t('about.t-yana')}
                </p>
                {t('about.p-yana')}
              </div>
            </div>
          </div>
          {/* Photos container: occupies second column on mobile */}
          <div className="col-span-2 lg:col-span-1 lg:pl-20">
            <Photos />
          </div>
          {/* Social links: spans both columns */}
          <div className="col-span-2 lg:pl-20">
            <ul role="list">
              <SocialLink href="https://instagram.com/freebirth.bg" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://threads.com/freebirth.bg" icon={ThreadsIcon} className="mt-4">
                Follow on Threads
              </SocialLink>
              <SocialLink href="https://facebook.com/freebirth.bg" icon={FacebookIcon} className="mt-4">
                Follow on Facebook
              </SocialLink>
              <SocialLink
                href="mailto:hello@freebirth.bg"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                hello@freebirth.bg
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
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


import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  FacebookIcon,
  InstagramIcon,
  ThreadsIcon,
} from '@/components/SocialIcons'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


const winter = 
'https://i.ibb.co/pvBGFwHF/w.jpg'
const spring =
'https://i.ibb.co/gMYbnkdL/sp.jpg'
const summer =
'https://i.ibb.co/kZ8yCDn/su.jpg'
const autumn =
'https://i.ibb.co/8n4kW2HH/a.jpg'

import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { useTranslation } from 'next-i18next'
// import { getAllBlogs } from '@/lib/getAllBlogs'
import {useRouter} from 'next/router'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}


function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}


function Newsletter() {
    const {t} = useTranslation('common')

  return (
    <form
      action="https://app.kit.com/forms/8302059/subscriptions"
      method="post"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      target="_blank"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">   {t('subscribe.title')}</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
           {t('subscribe.description')}
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          name="email_address"
          placeholder="Email"
          aria-label="Email"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
             {t('subscribe.button')}
        </Button>
      </div>
    </form>
  )
}


function Photos() {
  // let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex flex-wrap justify-center gap-5 py-4 sm:gap-8">
        {[spring, summer, autumn, winter].map((image, imageIndex) => (
          <div
            key={imageIndex}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'
              // rotations[imageIndex % rotations.length]
            )}
          >
            <img
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ blog }) {
  const {t} = useTranslation('common')

  return (
    <>
      <Head>
        <title>
{t('home.title')}
        </title>
        <meta
          name="description"
          content={t('home.description')}

        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {t('home.title')}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {t('home.description')}
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://instagram.com/freebirth.bg"
              aria-label="follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://threads.com/freebirth.bg"
              aria-label="follow on Threads"
              icon={ThreadsIcon}
            />
            <SocialLink
              href="https://www.facebook.com/freebirthbulgaria"
              aria-label="follow on Facebook"
              icon={FacebookIcon}
            />
        
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps({locale}) {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
 props: {
      ...(await serverSideTranslations(locale, ['common']))
    },
  }
}

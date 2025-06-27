import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import i18nConfig from './next-i18next.config.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  i18n: i18nConfig.i18n,
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    // rehypePlugins: [rehypePrism],
  },
})

 
export default withMDX(nextConfig)

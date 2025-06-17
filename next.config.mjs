import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
// import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  i18n: {
    locales: ['en', 'bg'],
    defaultLocale: 'en',
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    // rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)

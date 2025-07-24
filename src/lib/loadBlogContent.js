// src/lib/loadBlogContent.js
import fs from 'fs'
import path from 'path'

export async function loadBlogContent(slug, locale) {
  try {
    // const mdxModule = await import(`../pages/blog/${slug}/content.${locale}.mdx`)
    return {
      meta: mdxModule.meta,
      component: mdxModule.default,
    }
  } catch (error) {
    console.error(`Error loading content for ${slug} in ${locale}:`, error)
    return null
  }
}

export async function getAllSlugs() {
  // const blogDir = path.join(process.cwd(), 'src/pages/blog')
  const entries = await fs.promises.readdir(blogDir, { withFileTypes: true })

  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
}

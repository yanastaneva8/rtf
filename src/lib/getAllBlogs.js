import fs from 'fs/promises'
import path from 'path'

export async function importBlog(slug, locale) {
  try {
    const { meta, default: component } = await import(
      `../pages/blog/${slug}/content.${locale}.mdx`
    )

    return {
      slug,
      locale,
      ...meta,
      component,
    }
  } catch (error) {
    console.error(`Error importing blog ${slug} (${locale})`, error)
    return null
  }
}

export async function getAllBlogs(locale = 'en') {
  // const blogDir = path.join(process.cwd(), 'src/pages/blog')
  const entries = await fs.readdir(blogDir, { withFileTypes: true })

  const slugs = entries.filter((e) => e.isDirectory()).map((e) => e.name)

  const blogs = await Promise.all(
    slugs.map((slug) => importBlog(slug, locale))
  )

  return blogs
    .filter(Boolean)
    .sort((a, z) => new Date(z.date) - new Date(a.date))
}

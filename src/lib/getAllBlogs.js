import glob from 'fast-glob'
import * as path from 'path'

async function importBlog(blogFilename, locale) {
  let { meta, default: component } = await import(
    `../pages/blog/${locale}/${blogFilename}`
  )
  return {
    slug: blogFilename.replace(/(\/index)?\.mdx$/, ''),
    locale, // <-- add this line
    ...meta,
    component,
  }
}

export async function getAllBlogs(locale = 'en') {
  let blogDir = path.join(process.cwd(), 'src/pages/blog', locale)
  let blogFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: blogDir,
  })

  let blogs = await Promise.all(blogFilenames.map(filename => importBlog(filename, locale)))

  return blogs.sort((a, z) => new Date(z.date) - new Date(a.date))
}
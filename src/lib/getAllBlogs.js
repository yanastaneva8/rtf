import glob from 'fast-glob'
import * as path from 'path'

async function importBlog(blogFilename, locale) {
  const { meta, default: component } = await import(
    `../pages/blog/${locale}/${blogFilename}`
  )

  return {
    slug: blogFilename.replace(/\/index\.jsx$/, ''),
    locale,
    ...meta,
    component,
  }
}

export async function getAllBlogs(locale = 'en') {
  const blogDir = path.join(process.cwd(), 'src/pages/blog', locale)
  

  // Only match folders with index.jsx
  const blogFilenames = await glob(['*/index.jsx'], {
    cwd: blogDir,
  })

  const blogs = await Promise.all(
    blogFilenames.map(filename => importBlog(filename, locale))
  )

  return blogs.sort((a, z) => new Date(z.date) - new Date(a.date))
}

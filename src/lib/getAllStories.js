import glob from 'fast-glob'
import * as path from 'path'

async function importBlog(blogFilename, category) {
  const { meta, default: component } = await import(
    `../pages/stories/${category}/${blogFilename}`
  )

  return {
    slug: blogFilename.replace(/\/index\.jsx$/, ''),
    locale,
    ...meta,
    component,
  }
}

export async function getAllStories(category, locale = 'en') {
  const blogDir = path.join(process.cwd(), 'src/pages/stories/', category)
  

  // Only match folders with index.jsx
  const blogFilenames = await glob(['*/index.jsx'], {
    cwd: blogDir,
  })

  const blogs = await Promise.all(
    blogFilenames.map(filename => importBlog(filename, category))
  )

  return blogs.sort((a, z) => new Date(z.date) - new Date(a.date))
}

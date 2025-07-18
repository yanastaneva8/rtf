

import glob from 'fast-glob'
import * as path from 'path'

async function importBlog(storyFilename, category) {
  const { meta, default: component } = await import(
    `../pages/stories/${category}/${storyFilename}`
  )

  return {
    slug: storyFilename.replace(/(\/index)?\.jsx$/, ''),
    category,
    ...meta,
    component,
  }
}

export async function getAllStories(category) {
  if (!category) {
    throw new Error('getAllStories: `category` is required.')
  }

  const blogDir = path.join(process.cwd(), 'src/pages/stories', category)

  const blogFilenames = await glob(['*/index.jsx'], {
    cwd: blogDir,
  })

  const blogs = await Promise.all(
    blogFilenames.map(filename => importBlog(filename, category))
  )

  return blogs.sort((a, z) => new Date(z.date) - new Date(a.date))
}


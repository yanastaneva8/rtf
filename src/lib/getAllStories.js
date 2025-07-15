import glob from 'fast-glob'
import * as path from 'path'

async function importStory(storyFilename, locale) {
  let { meta, default: component } = await import(
    `../pages/stories/${locale}/${storyFilename}`
  )
  return {
    slug: storyFilename.replace(/(\/index)?\.mdx$/, ''),
    locale, // <-- add locale here
    ...meta,
    component,
  }
}

export async function getAllStories(locale = 'en') {
  let storyDir = path.join(process.cwd(), 'src/pages/stories', locale)
  let storyFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: storyDir,
  })

  let stories = await Promise.all(storyFilenames.map(filename => importStory(filename, locale)))

  return stories.sort((a, z) => new Date(z.date) - new Date(a.date))
}
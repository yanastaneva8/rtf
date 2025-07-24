import glob from 'fast-glob'
import * as path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export async function getAllStories(locale = 'en') {
  const basePath = path.join(process.cwd(), 'src/pages/stories')
  // This pattern matches all MDX files following your new structure
  const pattern = `${basePath}/*/*/content.${locale}.mdx`
  const files = await glob(pattern)
  
  const stories = files.map((file) => {
    // Read the file content so gray-matter can extract the frontmatter
    const fileContent = fs.readFileSync(file, 'utf8')
    const { data: meta } = matter(fileContent)
    
    // Get category and slug from the file path:
    // Expected structure: /stories/{category}/{slug}/content.{locale}.mdx
    const parts = file.split(path.sep)
    const category = parts[parts.length - 3]
    const slug = parts[parts.length - 2]
    
    return {
      ...meta,
      category,
      slug,
      locale,
    }
  })
  
  // Sorting by date (newest first)
  return stories.sort((a, z) => new Date(z.date) - new Date(a.date))
}
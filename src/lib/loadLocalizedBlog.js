// src/lib/loadBlogContent.js
export async function loadBlogContent(slug, locale) {
  try {
    // const mdxModule = await import(`../pages/blog/${slug}/content.${locale}.mdx`)
    return {
      meta: mdxModule.meta,
      component: mdxModule.default,
    }
  } catch (error) {
    console.error(`Error loading blog content for ${slug}/${locale}`, error)
    return null
  }
}

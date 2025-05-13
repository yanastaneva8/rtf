// Directory: src/app/[locale]/blog/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogMeta {
  title: string;
  date: string;
  slug: string;
  summary: string;
  tags: string[];
  image?: string;
}

const POSTS_PER_PAGE = 6;

function getBlogPosts(locale: string): BlogMeta[] {
  const dir = path.join(process.cwd(), 'src/content', locale);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir);

  return files.map((file) => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(content);

    return {
      title: data.title,
      date: data.date,
      slug: file.replace(/\.mdx$/, ''),
      summary: data.summary || '',
      tags: data.tags || [],
      image: data.image || null,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogIndexPage({ params, searchParams }: { params: { locale: string }, searchParams: { page?: string, tag?: string } }) {
  const allPosts = getBlogPosts(params.locale);
  const currentPage = parseInt(searchParams.page || '1', 10);
  const selectedTag = searchParams.tag || null;

  const filteredPosts = selectedTag
    ? allPosts.filter((post) => post.tags.includes(selectedTag))
    : allPosts;

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  if (currentPage < 1 || currentPage > totalPages) return notFound();

  const posts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const allTags = Array.from(new Set(allPosts.flatMap((post) => post.tags)));

  return (
    <section className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      {/* Tag Filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        <Link href={`/${params.locale}/blog`} className={`badge badge-lg cursor-pointer ${!selectedTag ? 'badge-primary' : 'badge-outline'}`}>
          All
        </Link>
        {allTags.map((tag) => (
          <Link
            key={tag}
            href={`/${params.locale}/blog?tag=${tag}`}
            className={`badge badge-lg cursor-pointer ${selectedTag === tag ? 'badge-primary' : 'badge-outline'}`}
          >
            {tag}
          </Link>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${params.locale}/blog/${post.slug}`}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:border hover:border-[#4f5d41]"
          >
            {post.image && (
              <figure>
                <img src={post.image} alt={post.title} className="h-48 w-full object-cover rounded-t-xl" />
              </figure>
            )}
            <div className="card-body">
              <h2 className="card-title text-[#4f5d41]">{post.title}</h2>
              <p className="text-sm text-base-content/60">{new Date(post.date).toLocaleDateString()}</p>
              <p className="text-base-content/80 line-clamp-3">{post.summary}</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {post.tags.map((tag) => (
                  <span key={tag} className="badge badge-outline text-xs">{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-10 gap-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <Link
            key={i}
            href={`/${params.locale}/blog?page=${i + 1}${selectedTag ? `&tag=${selectedTag}` : ''}`}
            className={`btn btn-sm ${currentPage === i + 1 ? 'btn-primary' : 'btn-outline'}`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </section>
  );
}

// File: src/app/[locale]/blog/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';

function getReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return `${time} min read`;
}

export async function generateStaticParams() {
  const locales = ['en', 'bg'];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const files = fs.readdirSync(path.join(process.cwd(), 'src/content', locale));
    files.forEach((file) => {
      const slug = file.replace(/\.mdx$/, '');
      params.push({ locale, slug });
    });
  }

  return params;
}

export default async function BlogPostPage({ params }: { params: { locale: string; slug: string } }) {
  const filePath = path.join(process.cwd(), 'src/content', params.locale, `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) return notFound();

  const file = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(file);
  const readingTime = getReadingTime(content);
  const formattedDate = new Date(data.date).toLocaleDateString();

  return (
    <article className="prose lg:prose-xl max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-xl">
      <Link
        href={`/${params.locale}/blog`}
        className="inline-block mb-4 text-sm text-[#4f5d41] underline hover:text-[#374830]"
      >
        ← Back to Blog
      </Link>

      {data.image && (
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-80 object-cover rounded-xl mb-6"
        />
      )}

      <h1 className="text-4xl font-bold text-[#4f5d41]">{data.title}</h1>

      <div className="text-sm text-gray-500 mb-2">
        {formattedDate} · {readingTime}
        {data.author && <span> · by {data.author}</span>}
      </div>

      {data.tags && (
        <div className="flex gap-2 mb-6 flex-wrap">
          {data.tags.map((tag: string) => (
            <span key={tag} className="badge badge-outline text-xs">{tag}</span>
          ))}
        </div>
      )}

      <MDXRemote source={content} />
    </article>
  );
}

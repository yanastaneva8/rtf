import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { en } from '@/locales/en';
import { bg } from '@/locales/bg';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Link from 'next/link';

interface BlogMeta {
  title: string;
  date: string;
  slug: string;
  summary: string;
  tags: string[];
  image?: string;
  formattedDate: string;
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params; // Await the params to resolve the promise
  const t = resolvedParams.locale === 'bg' ? bg : en;

  const dir = path.join(process.cwd(), 'src/content', resolvedParams.locale);
  let posts: BlogMeta[] = [];
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    posts = files.map((file) => {
      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(content);
      const formattedDate = new Date(data.date).toLocaleDateString();

      return {
        title: data.title,
        date: data.date,
        slug: file.replace(/\.mdx$/, ''),
        summary: data.summary || '',
        tags: data.tags || [],
        image: data.image || null,
        formattedDate,
      };
    })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }

  return (
    <div className="bg-gradient-to-b from-[#cfe8d3] to-[#a8cbb7] text-[#4f5d41] min-h-screen font-serif">
      <header className="p-6 flex flex-col items-center">
        <img src="/images/logo.png" alt="Roots to Fruits logo" className="h-2 mb-4" />
        <nav className="space-x-4 text-lg">
          <a href="#about" className="hover:underline">{t.aboutTitle}</a>
          <a href="#blog" className="hover:underline">{t.blogTitle}</a>
          <a href="#events" className="hover:underline">{t.eventsTitle}</a>
          <a href="#resources" className="hover:underline">{t.resourcesTitle}</a>
          <a href="#contact" className="hover:underline">{t.contactTitle}</a>
        </nav>
        {/* <div className="mt-4">
          <LanguageSwitcher />
        </div> */}
      </header>

      <section className="text-center py-20 bg-gradient-to-b from-[#4f5d41] to-[#6e7f5d]">
        <h1 className="text-5xl font-bold text-[#f5f5f5] mb-4">{t.heroTitle}</h1>
        <p className="text-xl max-w-2xl mx-auto text-[#e6d5d0]">{t.heroSubtitle}</p>
      </section>

      <section id="about" className="bg-[#6e7f5d] p-10 text-[#f5f5f5]">
        <h2 className="text-3xl mb-4">{t.aboutTitle}</h2>
        <p className="mb-2">{t.aboutParagraph1}</p>
        <p>{t.aboutParagraph2}</p>
      </section>

      <section id="blog" className="p-10 bg-[#f5f5f5] text-[#4f5d41]">
        <h2 className="text-3xl mb-4">{t.blogTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${resolvedParams.locale}/blog/${post.slug}`}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {post.image && (
                <figure>
                  <img src={post.image} alt={post.title} className="h-48 w-full object-cover rounded-t-xl" />
                </figure>
              )}
              <div className="card-body">
                <h3 className="card-title">{post.title}</h3>
                <p className="text-sm text-base-content/60">{post.formattedDate}</p>
                <p className="text-base-content/80 line-clamp-3">{post.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="events" className="p-10 bg-[#d9c4bb] text-[#4f5d41]">
        <h2 className="text-3xl mb-4">{t.eventsTitle}</h2>
        <p className="mb-6">{t.eventsIntro}</p>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-xl shadow">
            <strong>{t.event1}</strong> – June 2025 · <button className="underline text-[#4f5d41]">{t.enroll}</button>
          </li>
          <li className="bg-white p-4 rounded-xl shadow">
            <strong>{t.event2}</strong> – July 2025 · <button className="underline text-[#4f5d41]">{t.enroll}</button>
          </li>
        </ul>
      </section>

      <section id="resources" className="p-10 bg-[#6e7f5d] text-[#f5f5f5]">
        <h2 className="text-3xl mb-4">{t.resourcesTitle}</h2>
        <p className="mb-6">{t.resourcesIntro}</p>
        <ul className="space-y-4">
          <li className="bg-[#4f5d41] p-4 rounded-xl">{t.resource1} – <button className="underline">{t.download}</button></li>
          <li className="bg-[#4f5d41] p-4 rounded-xl">{t.resource2} – <button className="underline">{t.buy}</button></li>
        </ul>
      </section>

      <footer id="contact" className="bg-[#4f5d41] text-[#f5f5f5] p-6 text-center">
        <p>© 2025 Roots to Fruits · <a href="mailto:info@rootstofruits.org" className="underline">info@rootstofruits.org</a></p>
      </footer>
    </div>
  );
}
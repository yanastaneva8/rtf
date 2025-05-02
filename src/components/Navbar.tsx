'use client';
import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="w-full border-b border-[#D6A9A9] bg-white px-4 py-3 shadow-sm">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-serif text-[#0B3D20]">Roots to Fruits</Link>
        <div className="flex space-x-4 text-sm font-medium text-[#0B3D20]">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/shop" className="hover:underline">Shop</Link>
          <Link href="/subscribe" className="hover:underline">Subscribe</Link>
        </div>
      </div>
    </nav>
  );
}
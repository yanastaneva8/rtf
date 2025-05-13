import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  locale: string; // Define the locale prop
}

export default function Navbar({ locale }: NavbarProps) {
  return (
    <nav className="w-full border-b border-[#D6A9A9] bg-white px-4 py-3 shadow-sm">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href={`/${locale}`} className="text-lg font-serif text-[#0B3D20]">
          Roots to Fruits
        </Link>
        <div className="flex space-x-4 text-sm font-medium text-[#0B3D20]">
          <Link href={`/${locale}/about`} className="hover:underline">
            About
          </Link>
          <Link href={`/${locale}/blog`} className="hover:underline">
            Blog
          </Link>
          <Link href={`/${locale}/shop`} className="hover:underline">
            Shop
          </Link>
          <Link href={`/${locale}/subscribe`} className="hover:underline">
            Subscribe
          </Link>
          <LanguageSwitcher/>
        </div>
      </div>
    </nav>
  );
}
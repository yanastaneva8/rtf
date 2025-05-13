"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex gap-4">
      <button onClick={() => switchLocale("en")} className="underline">EN</button>
      <button onClick={() => switchLocale("bg")} className="underline">BG</button>
    </div>
  );
}

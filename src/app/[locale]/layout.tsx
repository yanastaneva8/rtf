import Navbar from "@/components/Navbar";
import "../globals.css";
import React from "react";

export const metadata = {
  title: "Roots to Fruits",
  description: "Bilingual wellness blog on fertility, pregnancy, and parenting",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Mark params as a Promise
}) {
  const resolvedParams = await params; // Await the params

  return (
    <div lang={resolvedParams.locale}>
      <Navbar locale={resolvedParams.locale} /> {/* Pass the resolved locale to Navbar */}
      {children}
    </div>
  );
}
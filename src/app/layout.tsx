import React from 'react'
import './globals.css';


export const metadata = {
  title: 'Roots to Fruits',
  description: 'From root-level health to fruitful living',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Roots to Fruits',
  description: 'From root-level health to fruitful living',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#DDE8D3] text-[#0B3D20] font-sans">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // 👈 Import Footer

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'M. Regi Pahlevy De Pasha - Portfolio',
  description: 'Software Engineer & UI/UX Designer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gradient-to-b from-black via-blue-950 to-black text-white pt-20`}
      >
        <Navbar />
        {/* main flex-1 memastikan konten mengisi ruang kosong sehingga footer terdorong ke paling bawah */}
        <main className="flex-1">{children}</main>
        {/* Footer otomatis muncul di semua halaman */}
        <Footer />
      </body>
    </html>
  );
}
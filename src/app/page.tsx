'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from 'framer-motion';

// ==================== KOMPONEN ANIMASI INTRO ====================
function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 800);  // Menampilkan "HELLO!"
    const timer2 = setTimeout(() => setStep(2), 2000); // Menampilkan "I'm Regii"
    const timer3 = setTimeout(() => setStep(3), 3200); // Menampilkan "This is my PORTFOLIO"
    const timer4 = setTimeout(() => {
      onComplete(); // Selesai animasi intro
    }, 4600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 text-white overflow-hidden"
    >
      {/* Animasi Lingkaran Membesar */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 50 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="absolute w-12 h-12 rounded-full bg-zinc-900 -z-10"
      />

      {/* Teks Animasi */}
      <div className="text-center px-4">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.h1
              key="hello"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-5xl md:text-7xl font-extrabold tracking-widest text-blue-400"
            >
              HELLO!
            </motion.h1>
          )}

          {step === 2 && (
            <motion.div
              key="name"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="space-y-2"
            >
              <span className="text-2xl md:text-3xl text-gray-400 font-light block">I'm</span>
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight">
                Regii
              </h1>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <p className="text-xl md:text-2xl text-gray-300 font-medium">This is my</p>
              <h1 className="text-5xl md:text-7xl font-black tracking-wider uppercase bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Portfolio
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ==================== HALAMAN UTAMA ====================
export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/regipahlevi291-oss',
      icon: 'https://cdn.simpleicons.org/github/ffffff',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/phlviii5_?stkn=cnlsMnVzNmdnYXU4',
      icon: 'https://cdn.simpleicons.org/instagram/ffffff',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@pahlep111',
      icon: 'https://cdn.simpleicons.org/tiktok/ffffff',
    },
  ];

  return (
    <main className="relative min-h-screen">
      {/* Transisi Animasi Intro */}
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Konten Halaman Utama */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: showIntro ? 0 : 1, x: showIntro ? -50 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl space-y-6"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm a <br />
            <span className="text-blue-400 inline-block whitespace-nowrap">
              <Typewriter
                words={['Software Engineer', 'UI/UX Designer', 'Gamers']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="text-gray-300 text-lg">
            Saya seorang Software Engineer dan Desainer UI/UX yang berfokus pada pengembangan aplikasi web modern, responsif, dan interaktif.
          </p>

          {/* Container Tombol & Sosial Media */}
          <div className="space-y-5">
            <div>
              <Link href="/about">
                <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg cursor-pointer">
                  About Me
                </button>
              </Link>
            </div>

            {/* Ikon Sosial Media Hitam Putih */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-700 hover:bg-white hover:border-white group transition-all duration-300 shadow-md"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 object-contain group-hover:invert transition-all duration-300"
                  />
                </a>
              ))}
            </div>

            {/* Penjelasan UI/UX & Software Engineer */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xs">
                <span className="font-semibold text-blue-400 block mb-1">
                  UI/UX Designer
                </span>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Merancang tampilan visual yang estetik (UI) dan menyusun pengalaman pengguna yang intuitif serta nyaman saat mengakses web (UX).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xs">
                <span className="font-semibold text-blue-400 block mb-1">
                  Software Engineer
                </span>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Membangun alur sistem, logika koding, dan database aplikasi agar web dapat berjalan dengan stabil, cepat, dan responsif.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ==================== FOTO DALAM LINGKARAN ==================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: showIntro ? 0 : 1, scale: showIntro ? 0.8 : 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center flex-shrink-0 mt-12 md:mt-0"
        >
          {/* Lingkaran dengan Gambar di dalamnya */}
          <div className="relative w-full h-full rounded-full border-[8px] border-blue-600 bg-zinc-900/50 shadow-2xl overflow-hidden">
            <Image
              src="/egii.jpg"
              alt="M. Regi Pahlevy De Pasha"
              fill
              className="object-cover object-center scale-105"
              priority
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
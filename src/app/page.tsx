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
    const timer1 = setTimeout(() => setStep(1), 800);
    const timer2 = setTimeout(() => setStep(2), 2000);
    const timer3 = setTimeout(() => setStep(3), 3200);
    const timer4 = setTimeout(() => {
      onComplete();
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
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 50 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="absolute w-12 h-12 rounded-full bg-zinc-900 -z-10"
      />

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

  // Daftar Ikon Teknologi dengan Figma
  const techIcons = [
    {
      name: 'JavaScript',
      icon: 'https://cdn.simpleicons.org/javascript/F7DF1E',
      pos: 'top-0 right-8',
      animate: {
        x: [0, 20, -25, 15, 0],
        y: [0, -30, 15, -20, 0],
        rotate: [0, 25, -35, 20, 0],
        scale: [1, 1.25, 0.85, 1.1, 1],
      },
      duration: 5,
    },
    {
      name: 'HTML5',
      icon: 'https://cdn.simpleicons.org/html5/E34F26',
      pos: 'top-20 -right-6',
      animate: {
        x: [0, -30, 20, -15, 0],
        y: [0, 25, -20, 30, 0],
        rotate: [0, -40, 25, -20, 0],
        scale: [1, 0.8, 1.3, 0.9, 1],
      },
      duration: 6.5,
    },
    {
      name: 'Figma',
      icon: 'https://cdn.simpleicons.org/figma/F24E1E',
      pos: 'bottom-16 -right-4',
      animate: {
        x: [0, -22, 28, -15, 0],
        y: [0, -25, 30, -15, 0],
        rotate: [0, 50, -50, 20, 0],
        scale: [1, 1.2, 0.75, 1.15, 1],
      },
      duration: 4.8,
    },
    {
      name: 'React',
      icon: 'https://cdn.simpleicons.org/react/61DAFB',
      pos: 'bottom-0 left-10',
      animate: {
        x: [0, 25, -20, 30, 0],
        y: [0, -20, 25, -30, 0],
        rotate: [0, 360],
        scale: [1, 1.35, 0.85, 1.2, 1],
      },
      duration: 7,
    },
    {
      name: 'Python',
      icon: 'https://cdn.simpleicons.org/python/3776AB',
      pos: 'bottom-20 -left-8',
      animate: {
        x: [0, -25, 22, -30, 0],
        y: [0, 28, -25, 18, 0],
        rotate: [0, -25, 40, -20, 0],
        scale: [1, 0.85, 1.3, 0.8, 1],
      },
      duration: 5.5,
    },
    {
      name: 'Next.js',
      icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff',
      pos: 'top-16 -left-8',
      animate: {
        x: [0, 30, -15, 20, 0],
        y: [0, -22, 30, -25, 0],
        rotate: [0, 30, -35, 15, 0],
        scale: [1, 1.15, 0.85, 1.25, 1],
      },
      duration: 6.2,
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
      pos: '-top-6 left-1/2 -translate-x-1/2',
      animate: {
        x: [0, -20, 25, -30, 0],
        y: [0, -25, 20, -15, 0],
        rotate: [0, -22, 30, -18, 0],
        scale: [1, 1.25, 0.8, 1.2, 1],
      },
      duration: 5.8,
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
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
          className="max-w-xl space-y-6 z-10"
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

            {/* Ikon Sosial Media */}
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

        {/* ==================== FOTO DENGAN WARNA BIRU SOFT & TERLIHAT JELAS ==================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: showIntro ? 0 : 1, scale: showIntro ? 0.8 : 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center flex-shrink-0 mt-12 md:mt-0"
        >
          {/* Cahaya Ambient Biru Soft (Tidak Terlalu Terang) */}
          <div className="absolute inset-2 rounded-full bg-blue-600/20 blur-3xl animate-pulse" />

          {/* Lingkaran Foto dengan Gradasi Biru Slate & Border Biru Elegan */}
          <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full border-2 border-blue-500/70 bg-gradient-to-b from-blue-950 via-slate-900 to-zinc-950 shadow-[0_0_25px_rgba(37,99,235,0.35)] overflow-hidden z-10 flex items-center justify-center">
            {/* Pendaran Cahaya Biru di Belakang Foto */}
            <div className="absolute bottom-0 w-full h-3/4 bg-radial from-blue-600/25 to-transparent blur-md" />

            <Image
              src="/regi.jpg"
              alt="M. Regi Pahlevy De Pasha"
              fill
              className="object-cover object-center scale-105 relative z-10"
              priority
            />
          </div>

          {/* Ikon-Ikon Teknologi Melayang */}
          {techIcons.map((tech) => (
            <motion.div
              key={tech.name}
              animate={tech.animate}
              transition={{
                duration: tech.duration,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
              className={`absolute ${tech.pos} z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-zinc-900/90 border border-blue-500/40 flex items-center justify-center p-2.5 shadow-[0_0_12px_rgba(59,130,246,0.25)] backdrop-blur-sm hover:scale-125 transition-transform cursor-pointer`}
              title={tech.name}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
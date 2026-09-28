'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 500);  // "HELLO!"
    const timer2 = setTimeout(() => setStep(2), 1800); // "I'm Regii"
    const timer3 = setTimeout(() => setStep(3), 3000); // "This is my PORTFOLIO"
    const timer4 = setTimeout(() => {
      onComplete(); // Selesai & transisi ke halaman utama
    }, 4500);

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
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 text-white overflow-hidden"
    >
      {/* Animasi Lingkaran Membesar dari Tengah */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 60 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="absolute w-12 h-12 rounded-full bg-zinc-900 -z-10"
      />

      {/* Teks Animasi */}
      <div className="text-center px-4">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="hello"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center gap-2"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest text-white">
                HELLO
              </h1>
              <span className="w-1.5 h-12 bg-amber-400 inline-block animate-pulse" />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="name"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="space-y-1"
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
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <p className="text-xl md:text-2xl text-gray-300 font-medium">This is my</p>
              <h1 className="text-5xl md:text-7xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
                PORTFOLIO
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Message {
  id: string;
  name: string;
  message: string;
  date: string;
}

export default function Surat() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Mengambil pesan yang tersimpan dari LocalStorage (atau API)
    const savedMessages = localStorage.getItem('guestbook_messages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  return (
    <section className="min-h-screen py-24 px-6 md:px-20 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-3">Kotak Surat ✉️</h1>
        <p className="text-gray-400">
          Pesan, kesan, dan saran yang ditinggalkan oleh para pengunjung.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500 col-span-2 py-10">
            Belum ada surat masuk. Jadilah yang pertama mengirim pesan di halaman Contact!
          </p>
        ) : (
          messages.map((msg, index) => (
            <motion.div
              key={msg.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl shadow-md"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-blue-400">{msg.name}</h3>
                <span className="text-xs text-gray-500">{msg.date}</span>
              </div>
              <p className="text-gray-300 text-sm whitespace-pre-line">{msg.message}</p>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}
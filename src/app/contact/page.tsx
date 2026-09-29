'use client';

import { FormEvent, useState } from 'react';
import { motion, Variants } from 'framer-motion';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const message = formData.get('message') as string;

        // 1. Simpan pesan ke LocalStorage agar muncul di halaman SURAT
        const newEntry = {
            id: Date.now().toString(),
            name: name,
            message: message,
            date: new Date().toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            })
        };

        const existingMessages = JSON.parse(localStorage.getItem('guestbook_messages') || '[]');
        localStorage.setItem('guestbook_messages', JSON.stringify([newEntry, ...existingMessages]));

        // 2. Kirim email notifikasi melalui Formspree
        const response = await fetch('https://formspree.io/f/meaovzep', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        setIsSubmitting(false);

        if (response.ok) {
            setIsSent(true);
            (e.target as HTMLFormElement).reset();
        } else {
            alert('Gagal mengirim pesan ke Formspree, tetapi pesan Anda tetap tersimpan di halaman Surat.');
            setIsSent(true);
            (e.target as HTMLFormElement).reset();
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section className="min-h-screen py-16 px-6 md:px-20 max-w-3xl mx-auto flex flex-col justify-center">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-center mb-10"
            >
                <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Jika Anda berminat untuk bekerja sama atau menghubungi saya, silakan isi formulir di bawah ini.
                </p>
            </motion.div>

            {/* Form Container */}
            <motion.form
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                onSubmit={handleSubmit}
                className="space-y-6 bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-sm"
            >
                {/* Input 1: Nama */}
                <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium mb-2">1. Nama Pengirim</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Masukkan nama Anda"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-600 outline-none dark:bg-zinc-800 transition-all duration-200"
                    />
                </motion.div>

                {/* Input 2: Email */}
                <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium mb-2">2. Email Pengirim</label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="nama@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-600 outline-none dark:bg-zinc-800 transition-all duration-200"
                    />
                </motion.div>

                {/* Input 3: Pesan */}
                <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium mb-2">3. Pesan yang Akan Disampaikan</label>
                    <textarea
                        rows={5}
                        name="message"
                        required
                        placeholder="Tuliskan pesan Anda di sini..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-600 outline-none dark:bg-zinc-800 transition-all duration-200"
                    ></textarea>
                </motion.div>

                {/* Tombol Kirim */}
                <motion.div variants={itemVariants}>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-md cursor-pointer disabled:opacity-50"
                    >
                        {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                    </motion.button>
                </motion.div>

                {/* Notifikasi Berhasil */}
                {isSent && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-500 text-center font-medium text-sm mt-2"
                    >
                        Pesan Anda berhasil dikirim dan tersimpan di halaman Surat!
                    </motion.p>
                )}
            </motion.form>
        </section>
    );
}
'use client';

import { FormEvent } from 'react';
import { motion, Variants } from 'framer-motion'; // 1. Tambahkan impor `Variants`

export default function Contact() {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert('Pesan Anda berhasil dikirim!');
    };

    // 2. Berikan tipe `: Variants` secara eksplisit pada kodenya
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
            {/* Header Section dengan Animasi */}
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

            {/* Form Container dengan Animasi Parent */}
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
                        className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-md cursor-pointer"
                    >
                        Kirim Pesan
                    </motion.button>
                </motion.div>
            </motion.form>
        </section>
    );
}
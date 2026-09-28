'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function Projects() {
    const projectsData = [
        {
            id: 1,
            title: 'Game Tembak',
            description: 'Game berbasis browser interaktif menggunakan HTML, CSS, dan JavaScript.',
            image: '/project_game_fajar.jpg',
            tags: ['JavaScript', 'HTML', 'CSS'],
            status: 'Completed',
        },
        {
            id: 2,
            title: 'Aplikasi MUA',
            description: 'Sistem Booking untuk Makeup & Dekor',
            image: '/klien.jpg',
            tags: ['Figma', 'UI/UX Design'],
            status: 'In Progress',
        },
        {
            id: 3,
            title: 'UI/UX Design Perpus',
            description: 'Perancangan Aplikasi Web Perpustakaan',
            image: '/perpus.jpg',
            tags: ['Figma', 'UI/UX Design'],
            status: 'Completed',
        },
        {
            id: 4,
            title: 'Latihan Perancangan',
            description: 'Latihan desain UI/UX interaktif',
            image: '/teh_syifa.jpg',
            tags: ['Figma'],
            status: 'Completed',
        },
        {
            id: 5,
            title: 'Aplikasi Web Portofolio',
            description: 'Website portofolio pribadi responsif dibangun dengan Next.js dan Tailwind CSS.',
            image: '/profileabout.png',
            tags: ['Next.js', 'React', 'Tailwind CSS'],
            status: 'Completed',
        },
        {
            id: 6,
            title: 'Sistem Manajemen Data',
            description: 'Pengembangan backend dan REST API menggunakan Laravel dan MySQL.',
            image: '/klien.jpg',
            tags: ['Laravel', 'PHP', 'MySQL'],
            status: 'In Progress',
        },
    ];

    // Variasi Animasi Container dengan tipe Variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    // Variasi Animasi Kartu dengan tipe Variants
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1.0],
            },
        },
    };

    return (
        <section className="min-h-screen py-16 px-4 sm:px-8 md:px-12 max-w-[90rem] mx-auto overflow-hidden">
            {/* Animasi Judul Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 space-y-3"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">My Projects</h2>
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                    Daftar project yang sudah saya kerjakan maupun yang masih dalam proses pengerjaan.
                </p>
            </motion.div>

            {/* Grid Kartu Project dengan Stagger Animation */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
                {projectsData.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={cardVariants}
                        whileHover={{ y: -8 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                    >
                        <div>
                            {/* Area Gambar dengan Animasi Zoom saat Hover */}
                            <div className="relative w-full aspect-[4/3] h-72 md:h-80 lg:h-96 bg-gray-100 dark:bg-zinc-800 overflow-hidden">
                                <motion.div
                                    className="w-full h-full relative"
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                                <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1.5 rounded-full text-white shadow-md ${project.status === 'Completed' ? 'bg-green-600' : 'bg-amber-500'
                                    }`}>
                                    {project.status}
                                </span>
                            </div>

                            <div className="p-6 md:p-8 space-y-3">
                                <h3 className="text-2xl font-bold tracking-tight group-hover:text-blue-500 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md font-medium border border-zinc-200 dark:border-zinc-700/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
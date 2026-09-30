'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="fixed top-4 left-0 right-0 z-50 px-4 max-w-5xl mx-auto">
            <nav className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-gray-200 dark:border-zinc-800 rounded-full px-6 py-2.5 grid grid-cols-3 items-center shadow-lg shadow-black/5 transition-colors duration-300">
                
                {/* 1. KIRI: Brand / Logo */}
                <div className="flex items-center justify-start">
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full flex items-center justify-center font-bold text-sm tracking-tighter transition-transform group-hover:scale-105">
                            P
                        </div>
                        <span className="font-bold text-sm md:text-base tracking-tight text-zinc-900 dark:text-white uppercase">
                            pahlepiii
                        </span>
                    </Link>
                </div>

                {/* 2. TENGAH: Menu Navigasi (Presisi di Tengah Layar) */}
                <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-xs md:text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                                    isActive
                                        ? 'text-blue-600 dark:text-blue-400 font-bold'
                                        : 'text-gray-600 dark:text-gray-300'
                                }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* 3. KANAN: Penyeimbang Tata Letak */}
                <div className="flex items-center justify-end">
                </div>

            </nav>
        </header>
    );
}
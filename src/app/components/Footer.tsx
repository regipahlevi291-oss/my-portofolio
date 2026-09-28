'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="w-full bg-[#0a0a0a] border-t border-zinc-800/80 text-zinc-400 py-10 px-6 md:px-16 mt-auto relative z-40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Nama / Brand */}
        <div className="text-center md:text-left space-y-1">
          <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
            Regi Pahlevy De Pasha
          </Link>
          <p className="text-xs text-zinc-500">
            Software Engineer & UI/UX Designer
          </p>
        </div>

        {/* Media Sosial */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 hover:bg-white hover:border-white group transition-all duration-300 shadow-sm"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-4 h-4 object-contain group-hover:invert transition-all duration-300"
              />
            </a>
          ))}
        </div>

      </div>

      {/* Hak Cipta */}
      <div className="max-w-6xl mx-auto border-t border-zinc-900 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3 text-center sm:text-left">
        <p>© {currentYear} Regi Pahlevy De Pasha. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
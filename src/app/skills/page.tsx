'use client';

import { motion, Variants } from 'framer-motion';

export default function Skills() {
  // Data untuk Diagram Sederhana di Atas
  const skillChartData = [
    {
      name: 'Figma',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      value: 95, // Paling tinggi
    },
    {
      name: 'Canva',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
      value: 85, // Ke-2
    },
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      value: 75, // Ke-3
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      value: 65, // Ke-4
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      value: 50, // Terakhir
    },
  ];

  const seSkills = [
    { name: 'Visual Studio Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Visual Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/181717/white' }, 
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Laragon', icon: 'https://cdn.simpleicons.org/laragon/00A8E8' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/000000/white' },
  ];

  const uiuxSkills = [
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Webflow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg' },
    { name: 'Framer', icon: 'https://cdn.simpleicons.org/framer/0055FF' },
    { name: 'Miro', icon: 'https://cdn.simpleicons.org/miro/050038/FFD02F' },
    { name: 'Penpot', icon: 'https://cdn.simpleicons.org/penpot/000000/00E5A3' },
    { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
  ];

  const gamerSkills = [
    { name: 'Mobile Legends', icon: 'skills_ml.jpg' },
    { name: 'Point Blank', icon: 'https://img.icons8.com/color/96/crosshairs.png' },
    { name: 'Lost Saga', icon: 'https://img.icons8.com/color/96/sword.png' },
    { name: 'Free Fire', icon: 'https://img.icons8.com/color/96/fire-element.png' },
    { name: 'Dragon City', icon: 'https://img.icons8.com/color/96/dragon.png' },
    { name: 'Monster Legends', icon: 'https://img.icons8.com/color/96/monster.png' },
    { name: 'Hunter Strike', icon: 'https://img.icons8.com/color/96/target.png' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen py-16 px-6 md:px-20 max-w-7xl mx-auto space-y-12">
      {/* Judul dengan Animasi */}
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8"
      >
        My Skills
      </motion.h2>

      {/* ================= DIAGRAM STATISTIK SKILL (BAR CHART) ================= */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-center text-white tracking-widest uppercase mb-10">
          Top Skills Overview
        </h3>

        {/* Chart Area */}
        <div className="relative w-full max-w-3xl mx-auto flex items-end h-[260px] sm:h-[300px] pl-10 pr-4 pb-12 border-l border-b border-zinc-700/60">
          
          {/* Garis Stiple / Grid Background */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-12 pl-10">
            <div className="border-b border-dashed border-zinc-800 w-full h-0 relative">
              <span className="absolute -left-9 -top-3 text-xs text-zinc-500 font-mono">200</span>
            </div>
            <div className="border-b border-dashed border-zinc-800 w-full h-0 relative">
              <span className="absolute -left-9 -top-3 text-xs text-zinc-500 font-mono">150</span>
            </div>
            <div className="border-b border-dashed border-zinc-800 w-full h-0 relative">
              <span className="absolute -left-9 -top-3 text-xs text-zinc-500 font-mono">100</span>
            </div>
            <div className="border-b border-dashed border-zinc-800 w-full h-0 relative">
              <span className="absolute -left-8 -top-3 text-xs text-zinc-500 font-mono">50</span>
            </div>
            <div className="w-full h-0 relative">
              <span className="absolute -left-6 -top-3 text-xs text-zinc-500 font-mono">0</span>
            </div>
          </div>

          {/* Söyler Grafik & Ikon */}
          <div className="w-full h-full flex justify-around items-end z-10">
            {skillChartData.map((skill, index) => (
              <div key={index} className="flex flex-col items-center h-full justify-end relative group w-10 sm:w-16">
                
                {/* Animasi Batang Søjle */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                  className="w-full bg-white rounded-t-sm shadow-lg group-hover:bg-blue-400 transition-colors"
                />

                {/* Ikon di Bawah Grafik */}
                <div className="absolute -bottom-10 flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-zinc-800 p-1.5 flex items-center justify-center border border-zinc-700 shadow-md">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </motion.div>

      {/* ================= GRID SKILL LENGKAP ================= */}
      <div className="flex flex-col gap-8">
        
        {/* Software Engineering */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="p-6 md:p-8 border rounded-2xl shadow-xs bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800"
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-600">
            Software Engineering
          </h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {seSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center justify-center text-center gap-3 p-4 bg-blue-50/50 dark:bg-zinc-800/60 rounded-xl border border-blue-100 dark:border-zinc-700/60 hover:border-blue-300 dark:hover:border-zinc-500 transition-all hover:scale-105"
              >
                <div className="w-16 h-16 aspect-square shrink-0 flex items-center justify-center rounded-xl bg-zinc-800 dark:bg-zinc-950 p-2.5 shadow-xs border border-zinc-700/50">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-semibold text-sm text-gray-800 dark:text-zinc-200 truncate max-w-full">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* UI/UX Designer */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="p-6 md:p-8 border rounded-2xl shadow-xs bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800"
        >
          <h3 className="text-2xl font-semibold mb-6 text-purple-600">
            UI/UX Designer
          </h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {uiuxSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center justify-center text-center gap-3 p-4 bg-purple-50/50 dark:bg-zinc-800/60 rounded-xl border border-purple-100 dark:border-zinc-700/60 hover:border-purple-300 dark:hover:border-zinc-500 transition-all hover:scale-105"
              >
                <div className="w-16 h-16 aspect-square shrink-0 flex items-center justify-center rounded-xl bg-zinc-800 dark:bg-zinc-950 p-2.5 shadow-xs border border-zinc-700/50">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-semibold text-sm text-gray-800 dark:text-zinc-200 truncate max-w-full">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Gamers */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="p-6 md:p-8 border rounded-2xl shadow-xs bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800"
        >
          <h3 className="text-2xl font-semibold mb-6 text-emerald-500">
            Gamers
          </h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {gamerSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center justify-center text-center gap-3 p-4 bg-emerald-50/50 dark:bg-zinc-800/60 rounded-xl border border-emerald-100 dark:border-zinc-700/60 hover:border-emerald-300 dark:hover:border-zinc-500 transition-all hover:scale-105"
              >
                <div className="w-16 h-16 aspect-square shrink-0 flex items-center justify-center rounded-xl bg-zinc-800 dark:bg-zinc-950 p-2.5 shadow-xs border border-zinc-700/50">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-semibold text-sm text-gray-800 dark:text-zinc-200 truncate max-w-full">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
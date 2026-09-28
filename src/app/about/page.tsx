'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

// Import CSS Swiper Core & Effect Coverflow
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function AboutPage() {
  const sliderPhotos1 = ['/about_kelas.jpg', '/about_kelass.jpg', '/about_kelasss.jpg'];
  const sliderPhotos2 = ['/about_aambalan.jpg', '/about_ambalann.jpg', '/about_ambalannnn.jpg'];
  const sliderPhotos3 = ['/about_saka.jpg', '/about_sakaa.jpg', '/about_sakaaa.jpg'];

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#ededed] overflow-hidden">
      
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="relative w-full min-h-[calc(100vh-80px)] flex items-end justify-center overflow-hidden pb-4">
        
        {/* Glow Blue Ambient Light di Belakang Foto */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[950px] h-[700px] md:h-[950px] rounded-full pointer-events-none z-0 blur-[150px] opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, rgba(29, 78, 216, 0.2) 50%, rgba(10, 10, 10, 0) 80%)'
          }}
        />

        {/* CONTAINER FOTO UTAMA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-xl md:max-w-2xl h-[70vh] md:h-[82vh] pointer-events-none"
        >
          <Image 
            src="/profileabout.png" 
            alt="M. Regi Pahlevy De Pasha" 
            fill 
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-bottom scale-125 md:scale-150 origin-bottom drop-shadow-[0_20px_50px_rgba(37,99,235,0.4)]" 
            priority
          />
        </motion.div>

        {/* TEKS KIRI (NAMA) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute left-4 sm:left-8 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 z-20 text-left space-y-1 max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md"
        >
          <span className="text-blue-500 font-medium text-base md:text-lg lg:text-xl block">
            Hello, I'm
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            M.Regi <br />
            Pahlevy De Pasha
          </h1>
        </motion.div>

        {/* TEKS KANAN (PROFESI) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute right-4 sm:right-8 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 z-20 text-right space-y-1 max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md"
        >
          <span className="text-blue-500 font-medium text-base md:text-lg lg:text-xl block">
            Creative
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Software Engineer <br />
            & UI/UX Designer
          </h2>
        </motion.div>

        {/* GRADASI PEMBATAS HALUS HITAM DI BAWAH */}
        <div 
          className="absolute bottom-0 left-0 w-full h-36 pointer-events-none z-30"
          style={{
            background: 'linear-gradient(to top, #0a0a0a 25%, rgba(10, 10, 10, 0.8) 60%, rgba(10, 10, 10, 0) 100%)'
          }}
        />
      </section>

      {/* ==================== 2. KONTEN BAGIAN BAWAH ==================== */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 space-y-24 pt-8 pb-20">
        
        {/* Glow Ambient Background */}
        <div className="absolute top-[5%] -left-32 w-[28rem] h-[28rem] bg-blue-600/30 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-[40%] -right-32 w-[30rem] h-[30rem] bg-blue-500/25 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-[10%] -left-32 w-[28rem] h-[28rem] bg-blue-600/25 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Section 1: Latar Belakang */}
        <motion.section 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center p-6 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-b from-blue-950/20 via-zinc-900/40 to-transparent border border-blue-900/30 backdrop-blur-xs overflow-hidden"
        >
          {/* 3D Coverflow Slider di Atas */}
          <div className="w-full flex justify-center items-center min-h-[360px] mb-8">
            <Swiper
              modules={[Autoplay, Pagination, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              coverflowEffect={{
                rotate: 12,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="w-full max-w-5xl pb-14"
            >
              {sliderPhotos1.map((src, index) => (
                <SwiperSlide key={index} className="!w-[340px] sm:!w-[520px] !h-[230px] sm:!h-[340px] rounded-2xl overflow-hidden border border-zinc-700/60 shadow-2xl bg-zinc-900">
                  <div className="relative w-full h-full">
                    <Image 
                      src={src} 
                      alt={`Slide 1-${index + 1}`} 
                      fill 
                      sizes="(max-width: 640px) 340px, 520px"
                      className="object-cover" 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Teks Deskripsi di Bawah */}
          <div className="max-w-2xl space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Latar Belakang</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Saya siswa kelas 12 jurusan RPL di SMKN 2 Sukabumi. Ketertarikan saya di dunia teknologi awalnya berawal dari hobi main game, yang bikin saya penasaran gimana cara sebuah aplikasi dibuat dan tampilannya dirancang. Dari situ, saya mulai fokus mengasah skill di bidang software engineering dan merancang tampilan web melalui UI/UX Design.
            </p>
          </div>
        </motion.section>

        {/* Section 2: Pengalaman Organisasi Sekolah */}
        <motion.section 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center p-6 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-b from-blue-950/20 via-zinc-900/40 to-transparent border border-blue-900/30 backdrop-blur-xs overflow-hidden"
        >
          {/* 3D Coverflow Slider di Atas */}
          <div className="w-full flex justify-center items-center min-h-[360px] mb-8">
            <Swiper
              modules={[Autoplay, Pagination, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              coverflowEffect={{
                rotate: 12,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="w-full max-w-5xl pb-14"
            >
              {sliderPhotos2.map((src, index) => (
                <SwiperSlide key={index} className="!w-[340px] sm:!w-[520px] !h-[230px] sm:!h-[340px] rounded-2xl overflow-hidden border border-zinc-700/60 shadow-2xl bg-zinc-900">
                  <div className="relative w-full h-full">
                    <Image 
                      src={src} 
                      alt={`Slide 2-${index + 1}`} 
                      fill 
                      sizes="(max-width: 640px) 340px, 520px"
                      className="object-cover" 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Teks Deskripsi di Bawah */}
          <div className="max-w-2xl space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Pengalaman Organisasi Sekolah</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Di sekolah, saya aktif di organisasi Pramuka. Dari organisasi ini, saya belajar banyak hal penting seperti leadership, kerja sama tim, dan cara mencari solusi saat menghadapi kendala. Pengalaman ini membantu saya untuk terus berkembang, terutama dalam membuat saya lebih tenang, kritis, dan punya alur pikir yang jelas saat menyelesaikan berbagai tantangan.
            </p>
          </div>
        </motion.section>

        {/* Section 3: Pengalaman Organisasi Luar */}
        <motion.section 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center p-6 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-b from-blue-950/20 via-zinc-900/40 to-transparent border border-blue-900/30 backdrop-blur-xs overflow-hidden"
        >
          {/* 3D Coverflow Slider di Atas */}
          <div className="w-full flex justify-center items-center min-h-[360px] mb-8">
            <Swiper
              modules={[Autoplay, Pagination, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              coverflowEffect={{
                rotate: 12,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="w-full max-w-5xl pb-14"
            >
              {sliderPhotos3.map((src, index) => (
                <SwiperSlide key={index} className="!w-[340px] sm:!w-[520px] !h-[230px] sm:!h-[340px] rounded-2xl overflow-hidden border border-zinc-700/60 shadow-2xl bg-zinc-900">
                  <div className="relative w-full h-full">
                    <Image 
                      src={src} 
                      alt={`Slide 3-${index + 1}`} 
                      fill 
                      sizes="(max-width: 640px) 340px, 520px"
                      className="object-cover" 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Teks Deskripsi di Bawah */}
          <div className="max-w-2xl space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Pengalaman Organisasi Luar</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Selain aktif di sekolah, keinginan untuk terus berkembang mendorong saya untuk bergabung dalam Saka Bhayangkara, sebuah wadah kegiatan Pramuka di luar lingkungan sekolah. Di sini, saya mendapatkan ruang yang lebih luas untuk berkembang, memperluas jaringan relasi, serta memperoleh pengalaman baru melalui berbagai kegiatan lapangan. Keterlibatan ini melatih kemampuan saya dalam beradaptasi dengan lingkungan baru, berkomunikasi secara efektif, dan bekerja sama dengan rekan-rekan dari latar belakang yang beragam.
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
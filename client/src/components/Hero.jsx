import React from 'react';
import { motion } from 'framer-motion';

function Hero(props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative z-10">

      {/* HUD Accent: Garis dekorasi di pojok (UX Professional) */}
      <div className="absolute top-20 left-20 w-16 h-[1px] bg-white/20 hidden md:block"></div>
      <div className="absolute top-20 left-20 w-[1px] h-16 bg-white/20 hidden md:block"></div>

      {/* Main Title dengan Efek Outline */}
      <div className="relative group cursor-default">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="text-[15vw] md:text-[12rem] font-black italic leading-none uppercase tracking-tighter"
        >
          VIBE<span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>FLOW</span>
        </motion.h1>

        {/* Dekorasi garis bawah yang muncul lewat animasi */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 1.5 }}
          className="h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mt-4"
        />
      </div>

      {/* Subtitle dengan Jarak Huruf yang Lebar (Luxurious Feel) */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-zinc-500 text-[10px] md:text-sm tracking-[0.8em] uppercase font-bold text-center"
      >
        Neural Music Generator // V1.0
      </motion.p>

      {/* Tombol yang mereaksi terhadap Hover secara agresif */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-20"
      >
        <button
          onClick={props.tombolLoginDiklik}
          className="group relative px-16 py-6 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] overflow-hidden transition-all duration-500 hover:tracking-[0.6em]"
        >
          <span className="relative z-10">Connect Spotify</span>
          {/* Efek kilatan saat di-hover */}
          <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </button>
      </motion.div>

    </div>
  );
}

export default Hero;

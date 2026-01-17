import React from 'react';
import { motion } from 'framer-motion'; // Library animasi pro

function Hero(props) {
  return (
    <div className="flex flex-col items-center text-center">

      {/* Animasi Judul: Muncul pelan-pelan dari bawah */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-8xl md:text-[10rem] font-black italic uppercase tracking-tighter text-white"
      >
        VibeFlow
      </motion.h1>

      {/* Animasi Deskripsi: Muncul setelah judul (delay) */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-zinc-500 text-sm md:text-lg tracking-[0.5em] uppercase font-light"
      >
        Intelligent Mood-Based Architecture
      </motion.p>

      {/* Tombol dengan Efek Hover Pro */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1, letterSpacing: "0.4em" }} // UX: Tombol merenggang saat disentuh
        whileTap={{ scale: 0.95 }} // UX: Tombol mendem saat diklik
        onClick={props.tombolLoginDiklik}
        className="mt-16 px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-[10px] transition-all"
      >
        Initialize Spotify Link
      </motion.button>

    </div>
  );
}

export default Hero;

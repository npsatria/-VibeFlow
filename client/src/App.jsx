import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Disc, Zap, Globe, ArrowRight } from 'lucide-react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Mouse Tracking Logic untuk Background Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-300, 300], [5, -5]);
  const rotateY = useTransform(smoothX, [-300, 300], [-5, 5]);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/login';
  };

  // Definisi Animasi Smooth
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.9,
        ease: [0.215, 0.61, 0.355, 1], // Power4 Out
      },
    }),
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black overflow-hidden flex flex-col items-center justify-center p-6">

      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grainy Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-100"></div>

        {/* Dynamic Glow yang mengikuti Mouse */}
        <motion.div
          style={{ x: smoothX, y: smoothY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] blur-[140px] rounded-full"
        />

        {/* Ultra-subtle Grid */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      </div>

      {/* 2. LOADING PROGRESS BAR (Boot-up feel) */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-[2px] bg-white z-[100] shadow-[0_0_15px_rgba(255,255,255,0.5)]"
      />

      <AnimatePresence>
        {isLoaded && (
          <motion.main
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="relative z-10 flex flex-col items-center max-w-6xl w-full"
          >

            {/* 3. STATUS HUD */}
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="flex items-center gap-6 mb-16 px-4 py-2 border border-white/10 rounded-full bg-white/[0.02] backdrop-blur-md"
            >
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.3em] uppercase text-zinc-500">
                <Globe size={12} className="text-white animate-spin-slow" />
                <span>Neural Frequency: Optimized</span>
              </div>
              <div className="h-4 w-[1px] bg-white/10"></div>
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [4, 12, 4] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                    className="w-[2px] bg-white/40"
                  />
                ))}
              </div>
            </motion.div>

            {/* 4. HERO TITLE (Mask Reveal Effect) */}
            <div className="relative overflow-hidden mb-6">
              <motion.h1
                custom={1} variants={fadeUp} initial="hidden" animate="visible"
                className="text-[14vw] md:text-[11rem] font-black italic tracking-tighter leading-[0.85] uppercase"
              >
                Vibe<span className="text-outline-white text-transparent">Flow</span>
              </motion.h1>

              {/* Scanline Decoration */}
              <motion.div
                animate={{ top: ["-100%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent pointer-events-none"
              />
            </div>

            {/* 5. DESCRIPTION */}
            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-zinc-400 text-lg md:text-2xl font-light text-center max-w-2xl leading-relaxed tracking-tight"
            >
              An intelligent sound architecture that bridges <br className="hidden md:block"/>
              the gap between <span className="text-white font-medium italic">human emotion</span> and <span className="text-white font-medium italic">digital resonance</span>.
            </motion.p>

            {/* 6. CALL TO ACTION (The Magnetic Button) */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="mt-20">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogin}
                className="group relative flex items-center gap-4 px-12 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-xs transition-all duration-500"
              >
                <Zap size={16} fill="black" />
                <span className="relative z-10">Initialize Spotify Link</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />

                {/* Internal Slide Effect */}
                <div className="absolute inset-0 bg-zinc-200 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-[0.77, 0, 0.175, 1]" />
              </motion.button>
            </motion.div>

          </motion.main>
        )}
      </AnimatePresence>

      {/* 7. MINIMAL FOOTER HUD */}
      <footer className="fixed bottom-0 left-0 w-full p-10 flex justify-between items-end mix-blend-difference">
        <div className="space-y-2">
          <p className="text-[9px] font-mono text-zinc-500 tracking-[0.4em] uppercase">Architecture // V1.0</p>
          <div className="h-[1px] w-20 bg-white/20"></div>
          <p className="text-[10px] font-bold tracking-widest italic uppercase">8.4095° S // 115.1889° E</p>
        </div>

        <div className="text-right space-y-2">
          <p className="text-[9px] font-mono text-zinc-500 tracking-[0.4em] uppercase">Auth Terminal</p>
          <div className="h-[1px] w-20 bg-white/20 ml-auto"></div>
          <p className="text-[10px] font-bold tracking-widest italic uppercase">Satria Dewangga // 2025</p>
        </div>
      </footer>

      {/* STYLES */}
      <style jsx>{`
        .text-outline-white { -webkit-text-stroke: 1.5px rgba(255,255,255,0.3); }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';

function App() {
  const [sudahLogin, setSudahLogin] = useState(false);
  const [posisiMouse, setPosisiMouse] = useState({ x: 0, y: 0 });

  // Update posisi mouse untuk kursor custom (UX Mahal)
  useEffect(function() {
    function catatMouse(e) {
      setPosisiMouse({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", catatMouse);
    return function() { window.removeEventListener("mousemove", catatMouse); }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden cursor-none">

      {/* 1. LAYER NOISE (Tekstur) */}
      <div className="noise"></div>

      {/* 2. LAYER CUSTOM CURSOR (Hanya muncul di PC) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[10000] hidden md:block"
        animate={{ x: posisiMouse.x - 16, y: posisiMouse.y - 16 }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[10000] hidden md:block"
        animate={{ x: posisiMouse.x - 2, y: posisiMouse.y - 2 }}
      />

      {/* 3. LAYER CAHAYA (Ambient Glow) */}
      <motion.div
        animate={{
          x: posisiMouse.x - 300,
          y: posisiMouse.y - 300,
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="fixed w-[600px] h-[600px] bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none"
      />

      {/* 4. MAIN APP CONTENT */}
      <div className="flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {sudahLogin === true ? (
            <Dashboard key="dash" />
          ) : (
            <Hero key="hero" tombolLoginDiklik={function() { setSudahLogin(true) }} />
          )}
        </AnimatePresence>
      </div>

      {/* FOOTER HUD */}
      <footer className="fixed bottom-10 left-10 right-10 flex justify-between text-[8px] text-zinc-600 tracking-[0.5em] uppercase font-bold z-50 pointer-events-none">
        <span>VibeFlow_Terminal_v1.0</span>
        <span className="hidden md:block">Neural Frequency Architecture</span>
        <span>Bali // IDN</span>
      </footer>

    </div>
  );
}

export default App;

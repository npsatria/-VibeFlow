import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { io } from 'socket.io-client';

import Hero from './components/Hero.jsx';
import Dashboard from './components/Dashboard.jsx';

const koneksiSinyal = io('http://localhost:5000');

function App() {
  const [sudahLogin, setSudahLogin] = useState(false);
  const [serverNyala, setServerNyala] = useState(true);

  useEffect(function() {
    koneksiSinyal.on('server_status', function(data) {
      if (data.online === false) { setServerNyala(false); }
    });
  }, []);

  if (serverNyala === false) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-10 font-mono">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="border border-red-900 bg-red-900/10 p-12 text-center"
        >
          <h1 className="text-2xl font-black text-red-600 uppercase tracking-tighter">Connection Lost</h1>
          <p className="text-zinc-500 text-xs mt-2 uppercase">Backend Server Offline</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#050505] text-white flex items-center justify-center overflow-hidden">

      {/* BACKGROUND UX: Cahaya putih remang-remang yang gerak pelan */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-white blur-[150px] rounded-full pointer-events-none"
      />

      {/* Animasi Perpindahan Halaman (AnimatePresence) */}
      <AnimatePresence mode="wait">
        {sudahLogin === true ? (
          <Dashboard key="dashboard" />
        ) : (
          <Hero
            key="hero"
            tombolLoginDiklik={function() { setSudahLogin(true) }}
          />
        )}
      </AnimatePresence>

      {/* HUD FOOTER */}
      <footer className="fixed bottom-8 left-8 right-8 flex justify-between text-[8px] text-zinc-600 tracking-[0.5em] uppercase font-bold">
        <span>VibeFlow v1.0</span>
        <span className="hidden md:block">Neural Frequency Architecture</span>
        <span>Bali // IDN</span>
      </footer>
    </div>
  );
}

export default App;

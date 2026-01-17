import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Dashboard() {
  const daftarMood = ['Melancholic', 'Cyberpunk', 'Deep Focus', 'Ethereal', 'Rage'];
  const [moodTerpilih, setMoodTerpilih] = useState("Neutral");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-4 p-6"
    >
      {/* KOTAK 1: Mood Selector (Bento Box Gede) */}
      <div className="md:col-span-8 p-10 border border-white/10 bg-white/[0.02] rounded-3xl backdrop-blur-sm">
        <h3 className="text-zinc-500 text-[10px] tracking-[0.3em] uppercase mb-8">Step 01 // Neural State</h3>
        <div className="flex flex-wrap gap-4">
          {daftarMood.map(function(itemMood) {
            return (
              <motion.button
                key={itemMood}
                whileHover={{ backgroundColor: "white", color: "black" }}
                onClick={function() { setMoodTerpilih(itemMood) }}
                className="px-6 py-2 border border-white/20 text-white text-[10px] uppercase font-bold tracking-tighter"
              >
                {itemMood}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* KOTAK 2: Statistik (Bento Box Kecil) */}
      <div className="md:col-span-4 p-10 border border-white/10 bg-white/[0.02] rounded-3xl flex flex-col justify-between">
        <h3 className="text-zinc-500 text-[10px] tracking-[0.3em] uppercase">Vibe Stats</h3>
        <div className="mt-6">
          <motion.p
            key={moodTerpilih}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-black italic tracking-tighter text-white"
          >
            84%
          </motion.p>
          <p className="text-[9px] text-zinc-500 uppercase mt-2">Frequency Synced</p>
        </div>
      </div>

      {/* KOTAK 3: List Lagu (Bento Box Panjang) */}
      <div className="md:col-span-12 p-8 border border-white/10 bg-white/[0.02] rounded-3xl">
        <h3 className="text-zinc-500 text-[10px] tracking-[0.3em] uppercase mb-6">Generated soundscape</h3>
        <div className="space-y-4">
            <div className="flex justify-between items-center py-4 border-b border-white/5 hover:bg-white/5 px-4 transition-all">
                <div>
                    <p className="text-white font-bold uppercase italic text-xs">Selected Mode:</p>
                    <p className="text-zinc-400 text-[10px] uppercase tracking-widest">{moodTerpilih}</p>
                </div>
                <button className="text-[10px] border border-white/20 px-4 py-1 hover:bg-white hover:text-black transition-all">SAVE TO VAULT</button>
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Dashboard;

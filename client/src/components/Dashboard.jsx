import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Dashboard() {
  const [mood, setMood] = useState("Neutral");

  return (
    <div className="w-full max-w-7xl px-6 py-20 relative z-10">

      {/* HEADER DASHBOARD */}
      <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-8">
        <div>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter">Command Center</h2>
          <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mt-2">Frequency Status: <span className="text-white">Optimal</span></p>
        </div>
        <div className="text-right">
            <p className="text-zinc-500 text-[9px] uppercase tracking-widest">Active State</p>
            <p className="text-xl font-bold uppercase italic tracking-tighter">{mood}</p>
        </div>
      </div>

      {/* BENTO GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

        {/* KOTAK 1: Mood Selector */}
        <div className="md:col-span-8 p-10 border border-white/10 bg-white/[0.03] rounded-sm backdrop-blur-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-20 text-[8px] font-mono">STATE_MNGR_v1</div>
          <h3 className="text-zinc-500 text-[9px] font-bold tracking-[0.4em] uppercase mb-10">01 // Select Mood Frequency</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Cyberpunk', 'Deep Focus', 'Melancholic', 'Ethereal', 'Rage'].map(function(item) {
              return (
                <button
                  key={item}
                  onClick={function() { setMood(item) }}
                  className="py-4 border border-white/5 text-[10px] uppercase font-bold tracking-widest transition-all hover:bg-white hover:text-black hover:scale-[1.02]"
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>

        {/* KOTAK 2: Data Visualizer (Efek UX Mahal) */}
        <div className="md:col-span-4 p-10 border border-white/10 bg-white/[0.03] rounded-sm backdrop-blur-xl flex flex-col justify-between">
           <h3 className="text-zinc-500 text-[9px] font-bold tracking-[0.4em] uppercase">02 // Vibe Analysis</h3>
           <div className="py-10 flex items-center justify-center">
              {/* Animasi gelombang musik buatan */}
              <div className="flex items-end gap-1 h-20">
                {[2, 4, 8, 5, 9, 3, 6].map(function(h, i) {
                  return (
                    <motion.div
                      key={i}
                      animate={{ height: [20, h * 8, 20] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                      className="w-2 bg-white/40"
                    />
                  )
                })}
              </div>
           </div>
           <p className="text-[10px] text-zinc-500 text-center uppercase tracking-[0.2em]">Syncing with Spotify API...</p>
        </div>

        {/* KOTAK 3: Result Table (UX Rapi) */}
        <div className="md:col-span-12 mt-4 p-10 border border-white/10 bg-white/[0.03] rounded-sm backdrop-blur-xl">
           <h3 className="text-zinc-500 text-[9px] font-bold tracking-[0.4em] uppercase mb-8">03 // Recent Frequencies</h3>
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-zinc-600 text-[9px] uppercase tracking-widest border-b border-white/5">
                  <tr>
                    <th className="pb-4">Identification</th>
                    <th className="pb-4">Mood Signature</th>
                    <th className="pb-4 text-right">Data Protocol</th>
                  </tr>
                </thead>
                <tbody className="text-[10px] uppercase font-bold tracking-tighter">
                   <tr className="border-b border-white/5 group hover:bg-white/5 transition-all">
                     <td className="py-8">
                        <span className="block text-white text-sm italic">Starlight Resonance</span>
                        <span className="text-zinc-500">Neutral Echo System</span>
                     </td>
                     <td className="text-zinc-400">Deep Focus</td>
                     <td className="text-right">
                        <button className="px-6 py-2 border border-white/10 hover:bg-white hover:text-black transition-all">
                          Vault Data ↗
                        </button>
                     </td>
                   </tr>
                </tbody>
              </table>
           </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;

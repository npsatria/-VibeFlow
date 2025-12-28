import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 selection:bg-white selection:text-black">

      {/* Container Utama */}
      <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-12">

        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">
            VibeFlow
          </h1>
          <p className="text-zinc-500 text-sm md:text-lg font-medium tracking-[0.3em] uppercase">
            Intelligent Mood-Based Playlist Generator
          </p>
        </div>

        {/* Description Section */}
        <div className="max-w-lg">
          <p className="text-zinc-400 leading-relaxed font-light">
            Don't just listen to music. Feel the flow. VibeFlow analyzes your
            emotions and creates soundscapes tailored to your current activity.
          </p>
        </div>

        {/* Action Button Section */}
        <div className="pt-8">
          <button
            className="group relative px-12 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 overflow-hidden"
            onClick={() => alert('Redirecting to Spotify Login...')}
          >
            <span className="relative z-10">Connect Spotify</span>
            <div className="absolute inset-0 bg-zinc-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>

        {/* Footer Info */}
        <div className="fixed bottom-10 flex space-x-8 text-zinc-600 text-[10px] tracking-[0.2em] uppercase font-bold">
          <span>v1.0.0</span>
          <span className="border-x border-zinc-800 px-8">Bali, Indonesia</span>
          <span>© 2025</span>
        </div>

      </div>
    </div>
  )
}

export default App

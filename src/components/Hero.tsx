'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Image - HD Mount Abu */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.7)]" />

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          {/* Top Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mb-10"
          />

          {/* Accent Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-sm md:text-base uppercase tracking-[0.4em] text-amber-300/80 font-light mb-4"
          >
            Experience the Majestic
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white"
            style={{
              textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 0 100px rgba(255,255,255,0.1)',
            }}
          >
            Mount Abu
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-4 text-xl md:text-2xl text-amber-200/70 font-light tracking-widest"
          >
            GURU SHIKHAR
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-6 text-sm md:text-base text-white/50 max-w-md mx-auto font-light"
          >
            The highest peak of the Aravalli Range, standing at 1,722 meters above sea level
          </motion.p>

          {/* Bottom Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mt-10"
          />

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="mt-8 inline-flex items-center gap-2 text-white/60 text-sm"
          >
            <svg className="w-4 h-4 text-amber-400/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="tracking-wider">Rajasthan, India</span>
          </motion.div>
        </div>
      </div>

      {/* Corner Frames */}
      <div className="absolute top-6 left-6 w-12 h-12 border-l border-t border-white/20" />
      <div className="absolute top-6 right-6 w-12 h-12 border-r border-t border-white/20" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-l border-b border-white/20" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-r border-b border-white/20" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

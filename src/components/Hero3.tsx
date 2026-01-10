'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero3 = () => {
  return (
    <section
      id="hero3"
      className="relative overflow-hidden w-full min-h-screen md:h-screen"
      style={{
        maxWidth: '100%',
        backgroundColor: '#0a1510',
      }}
    >
      {/* Layer 1: Background Image (h3.jpg) */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <Image
          src="/images/h3.jpg"
          alt="Mount Abu Background 3"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Majestic Text - Positioned independently on the left (ABOVE foreground) */}
      <span
        className="absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[100px]"
        style={{
          zIndex: 25,
          top: '10%',
          left: '22%',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 500,
          color: '#F7BE03',
          textShadow: '3px 2px 0px rgba(0, 0, 0, 0.5)',
          lineHeight: '1',
          transition: 'none',
          animation: 'none',
        }}
      >
        Majestic
      </span>

      {/* Dilwara Jain Temple Text - Positioned independently on the right (same as Hero) */}
      <span
        className="absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[60px]"
        style={{
          zIndex: 30,
          top: '80%',
          right: '20%',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 1000,
          color: '#F7BE03',
          textShadow: '3px 2px 0px rgba(0, 0, 0, 0.5)',
          lineHeight: '1',
          transition: 'none',
          animation: 'none',
        }}
      >
        Wildlife Sanctuary
      </span>

      {/* Layer 2: Main Title Text - BEHIND foreground (z-index 5) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{
          zIndex: 5,
          top: '15%',
          transition: 'none',
        }}
      >
        {/* Main Title with 3D Effect */}
        <h1
          className="font-black tracking-widest whitespace-nowrap flex items-baseline gap-4 sm:gap-5 md:gap-6"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 1000,
            color: '#ffffff',
            textShadow: '4px 4px 0px rgba(0, 0, 0, 0.7)',
            letterSpacing: '0.1em',
            lineHeight: 4,
            transition: 'none',
            animation: 'none',
          }}
        >
          <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[300px] xl:text-[220px]" style={{ transition: 'none', animation: 'none' }}>
            <span className="text-9xl sm:text-9xl md:text-[10rem] lg:text-[170px] xl:text-[220px]">M</span>ount
          </span>
          <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[300px] xl:text-[200px]" style={{ transition: 'none', animation: 'none' }}>
            Abu
          </span>
        </h1>
      </div>

      {/* Gradient Overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 25,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.3) 100%)',
        }}
      />

      {/* Cinematic Letterbox Effect - Top */}
      <div
        className="absolute top-0 left-0 right-0 h-[60px] md:h-[80px] pointer-events-none"
        style={{
          zIndex: 26,
          background: 'linear-gradient(180deg, rgba(10,21,16,0.8) 0%, transparent 100%)',
        }}
      />

      {/* Bottom Gradient */}
      <div
        className="absolute left-0 right-0 bottom-0 pointer-events-none"
        style={{
          height: '320px',
          background: 'linear-gradient(0deg, #132019 0%, rgba(19, 32, 25, 0.8) 40%, rgba(19, 32, 25, 0) 100%)',
          zIndex: 26,
        }}
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-8"
        style={{ zIndex: 30 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span
            className="text-[10px] md:text-[11px] tracking-[3px] uppercase"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            Explore
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            className="opacity-40"
          >
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="white" strokeWidth="1"/>
            <motion.circle
              cx="8"
              cy="8"
              r="2"
              fill="white"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero3;

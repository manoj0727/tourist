'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const destinations = [
  {
    id: 1,
    title: 'Achalgarh Fort',
    description: 'Ancient fortress with stunning architecture and panoramic views of Mount Abu',
    image: '/images/cae373d49ad5a3f1a7288a1a0194d4e25031d3b7.png',
  },
  {
    id: 2,
    title: 'Sunset Point',
    description: 'Witness breathtaking golden sunsets over the Aravalli mountains',
    image: '/images/Property 1=10.png',
  },
  {
    id: 3,
    title: 'Nakki Lake',
    description: 'Serene lake surrounded by hills, perfect for boating and relaxation',
    image: '/images/Property 1=11.png',
  },
  {
    id: 4,
    title: 'Dilwara Temples',
    description: 'Exquisite marble temples known for intricate Jain architecture',
    image: '/images/Property 1=12.png',
  },
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % destinations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % destinations.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a1f1a] via-[#0d2818] to-black py-20">
      {/* Mountain Silhouettes Background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute bottom-0 w-full h-1/2 opacity-20"
          viewBox="0 0 1440 400"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 400L120 350C240 300 480 200 720 180C960 160 1200 220 1320 250L1440 280V400H1320C1200 400 960 400 720 400C480 400 240 400 120 400H0Z"
            fill="url(#mountain1)"
          />
          <path
            d="M0 400L180 320C360 240 540 200 720 220C900 240 1080 300 1260 320L1440 340V400H1260C1080 400 900 400 720 400C540 400 360 400 180 400H0Z"
            fill="url(#mountain2)"
          />
          <defs>
            <linearGradient id="mountain1" x1="720" y1="160" x2="720" y2="400">
              <stop stopColor="#1a3a2a" />
              <stop offset="1" stopColor="#0a1f1a" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="mountain2" x1="720" y1="200" x2="720" y2="400">
              <stop stopColor="#0f2a1f" />
              <stop offset="1" stopColor="#0a1f1a" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        {/* Fog Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute top-1/3 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white/5 to-transparent blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] text-emerald-400/80 font-medium mb-4"
          >
            Destinations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Top Destinations To Visit –{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-400">
              Mount Abu
            </span>
          </motion.h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full max-w-6xl"
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="flex items-center justify-center gap-4 md:gap-6 px-12 md:px-0">
            {destinations.map((dest, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + destinations.length) % destinations.length;
              const isNext = index === (activeIndex + 1) % destinations.length;
              const isVisible = isActive || isPrev || isNext;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={dest.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isActive ? 1 : 0.5,
                    scale: isActive ? 1 : 0.85,
                    x: isPrev ? -20 : isNext ? 20 : 0,
                    zIndex: isActive ? 10 : 1,
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  onClick={() => setActiveIndex(index)}
                  className={`relative cursor-pointer overflow-hidden rounded-3xl shadow-2xl ${
                    isActive
                      ? 'w-[320px] md:w-[400px] h-[420px] md:h-[500px]'
                      : 'w-[200px] md:w-[280px] h-[350px] md:h-[420px] hidden md:block'
                  }`}
                >
                  {/* Image */}
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    className="object-cover"
                    priority={isActive}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
                      >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {dest.title}
                        </h3>
                        <p className="text-white/70 text-sm md:text-base leading-relaxed">
                          {dest.description}
                        </p>

                        {/* Expand Icon */}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                          </svg>
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Side card title */}
                  {!isActive && (
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-lg font-semibold text-white/80">{dest.title}</h3>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-8 h-2 bg-emerald-400'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

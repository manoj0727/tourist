'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Cloud configuration - Classical elegant premium cloud parting effect
const clouds = [
  // Main center curtain - splits elegantly left and right
  {
    id: 1,
    src: '/images/ck2.png',
    initial: { x: '-50%', y: '-50%', opacity: 1, scale: 1.1 },
    animate: { x: '-120%', y: '-50%', opacity: 0, scale: 1.15 },
    style: { top: '50%', left: '30%', width: '100vw', height: 'auto' },
    delay: 0.3,
    duration: 4,
  },
  {
    id: 2,
    src: '/images/ck2.png',
    initial: { x: '-50%', y: '-50%', opacity: 1, scale: 1.1 },
    animate: { x: '20%', y: '-50%', opacity: 0, scale: 1.15 },
    style: { top: '50%', left: '70%', width: '100vw', height: 'auto' },
    delay: 0.3,
    duration: 4,
  },
  // Upper veil - gentle upward drift
  {
    id: 3,
    src: '/images/ck2.png',
    initial: { x: '-50%', y: '-50%', opacity: 0.95, scale: 1 },
    animate: { x: '-80%', y: '-90%', opacity: 0, scale: 1.1 },
    style: { top: '25%', left: '25%', width: '90vw', height: 'auto' },
    delay: 0.15,
    duration: 4.5,
  },
  {
    id: 4,
    src: '/images/ck2.png',
    initial: { x: '-50%', y: '-50%', opacity: 0.95, scale: 1 },
    animate: { x: '-50%', y: '-100%', opacity: 0, scale: 1.1 },
    style: { top: '20%', left: '50%', width: '95vw', height: 'auto' },
    delay: 0.1,
    duration: 4.5,
  },
  {
    id: 5,
    src: '/images/ck2.png',
    initial: { x: '-50%', y: '-50%', opacity: 0.95, scale: 1 },
    animate: { x: '-20%', y: '-90%', opacity: 0, scale: 1.1 },
    style: { top: '25%', left: '75%', width: '90vw', height: 'auto' },
    delay: 0.15,
    duration: 4.5,
  },
  // Lower mist - graceful downward fade
  {
    id: 6,
    src: '/images/ck2.png',
    initial: { x: '-50%', y: '-50%', opacity: 0.9, scale: 1 },
    animate: { x: '-70%', y: '0%', opacity: 0, scale: 1.08 },
    style: { top: '75%', left: '30%', width: '85vw', height: 'auto' },
    delay: 0.2,
    duration: 4.2,
  },
  {
    id: 7,
    src: '/images/ck2.png',
    initial: { x: '-50%', y: '-50%', opacity: 0.9, scale: 1 },
    animate: { x: '-50%', y: '10%', opacity: 0, scale: 1.08 },
    style: { top: '80%', left: '50%', width: '90vw', height: 'auto' },
    delay: 0.18,
    duration: 4.2,
  },
  {
    id: 8,
    src: '/images/ck2.png',
    initial: { x: '-50%', y: '-50%', opacity: 0.9, scale: 1 },
    animate: { x: '-30%', y: '0%', opacity: 0, scale: 1.08 },
    style: { top: '75%', left: '70%', width: '85vw', height: 'auto' },
    delay: 0.2,
    duration: 4.2,
  },
  // Side wisps - elegant horizontal glide
  {
    id: 9,
    src: '/images/ck2.png',
    initial: { x: '-50%', y: '-50%', opacity: 0.85, scale: 0.95 },
    animate: { x: '-130%', y: '-55%', opacity: 0, scale: 1.05 },
    style: { top: '45%', left: '15%', width: '80vw', height: 'auto' },
    delay: 0.25,
    duration: 4.3,
  },
  {
    id: 10,
    src: '/images/ck2.png',
    initial: { x: '-50%', y: '-50%', opacity: 0.85, scale: 0.95 },
    animate: { x: '30%', y: '-55%', opacity: 0, scale: 1.05 },
    style: { top: '45%', left: '85%', width: '80vw', height: 'auto' },
    delay: 0.25,
    duration: 4.3,
  },
  // Corner accents - soft diagonal dispersal
  {
    id: 11,
    src: '/images/ck2.png',
    initial: { x: '-50%', y: '-50%', opacity: 0.75, scale: 0.9 },
    animate: { x: '-100%', y: '-100%', opacity: 0, scale: 1 },
    style: { top: '15%', left: '10%', width: '70vw', height: 'auto' },
    delay: 0.05,
    duration: 4.8,
  },
  {
    id: 12,
    src: '/images/ck2.png',
    initial: { x: '-50%', y: '-50%', opacity: 0.75, scale: 0.9 },
    animate: { x: '0%', y: '-100%', opacity: 0, scale: 1 },
    style: { top: '15%', left: '90%', width: '70vw', height: 'auto' },
    delay: 0.05,
    duration: 4.8,
  },
  {
    id: 13,
    src: '/images/ck2.png',
    initial: { x: '-50%', y: '-50%', opacity: 0.7, scale: 0.9 },
    animate: { x: '-100%', y: '0%', opacity: 0, scale: 1 },
    style: { top: '85%', left: '10%', width: '70vw', height: 'auto' },
    delay: 0.08,
    duration: 4.8,
  },
  {
    id: 14,
    src: '/images/ck2.png',
    initial: { x: '-50%', y: '-50%', opacity: 0.7, scale: 0.9 },
    animate: { x: '0%', y: '0%', opacity: 0, scale: 1 },
    style: { top: '85%', left: '90%', width: '70vw', height: 'auto' },
    delay: 0.08,
    duration: 4.8,
  },
  // Ethereal overlay - very slow fade for depth
  {
    id: 15,
    src: '/images/ck2.png',
    initial: { x: '-50%', y: '-50%', opacity: 0.6, scale: 1.3 },
    animate: { x: '-50%', y: '-50%', opacity: 0, scale: 1.4 },
    style: { top: '50%', left: '50%', width: '150vw', height: 'auto' },
    delay: 0,
    duration: 5,
  },
];

const slides = [
  {
    id: 1,
    background: '/images/h1.png',
    foreground: '/images/h1-2.png',
    altBg: 'Mount Abu Background 1',
    altFg: 'Mount Abu Foreground 1',
    topLeftText: 'Majestic',
    topRightText: 'Dilwara Jain Temple',
    fgStyle: {
      width: '100%',
      height: '50%',
      bottom: '31%',
      left: '49.7%',
    },
  },
  {
    id: 2,
    background: '/images/h2.png',
    foreground: '/images/h2-2.png',
    altBg: 'Mount Abu Background 2',
    altFg: 'Mount Abu Foreground 2',
    topLeftText: 'Majestic',
    topRightText: 'Dilwara Jain Temple',
    fgStyle: {
      width: '100%',
      height: '50%',
      bottom: '31%',
      left: '49.7%',
    },
  },
  {
    id: 3,
    background: '/images/h3.jpg',
    foreground: null,
    altBg: 'Mount Abu Background 3',
    altFg: 'Mount Abu Foreground 3',
    topLeftText: 'Majestic',
    topRightText: 'Wildlife Sanctuary',
    fgStyle: null,
  },
];

const leaders = [
  {
    name: 'Shri Bhajan Lal Sharma',
    title: 'Chief Minister',
    subtitle: 'Rajasthan',
    image: '/images/cm-rajasthan.png',
  },
  {
    name: 'Shri Jhabar Singh Kharra',
    title: "Hon'ble Minister",
    subtitle: 'of UDH',
    image: '/images/minister-udh.png',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      id="home"
      className="relative overflow-hidden w-full min-h-screen md:h-screen"
      style={{
        maxWidth: '100%',
        backgroundColor: '#0a1510',
      }}
    >
      {/* Background Image - Animated */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${currentSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
          style={{ zIndex: 1 }}
        >
          <Image
            src={slides[currentSlide].background}
            alt={slides[currentSlide].altBg}
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* Cloud Opening Animation - Disperses in 4 directions */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 50 }}>
        {clouds.map((cloud) => (
          <motion.div
            key={cloud.id}
            initial={cloud.initial}
            animate={cloud.animate}
            transition={{
              duration: cloud.duration || 4,
              delay: cloud.delay || 0,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="absolute"
            style={{
              ...cloud.style,
              zIndex: 50,
            }}
          >
            <Image
              src={cloud.src}
              alt={`Cloud ${cloud.id}`}
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>
        ))}
      </div>

      {/* Foreground Image - Animated with same timing, higher z-index to cover Mount Abu */}
      {slides[currentSlide].foreground && slides[currentSlide].fgStyle && (
        <AnimatePresence mode="sync">
          <motion.div
            key={`fg-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute pointer-events-none"
            style={{
              zIndex: 10,
              width: slides[currentSlide].fgStyle!.width,
              height: slides[currentSlide].fgStyle!.height,
              ...('bottom' in slides[currentSlide].fgStyle! && { bottom: (slides[currentSlide].fgStyle as { bottom?: string }).bottom }),
              ...('top' in slides[currentSlide].fgStyle! && { top: (slides[currentSlide].fgStyle as { top?: string }).top }),
              left: slides[currentSlide].fgStyle!.left,
              transform: 'translateX(-50%)',
            }}
          >
            <Image
              src={slides[currentSlide].foreground!}
              alt={slides[currentSlide].altFg}
              fill
              className={currentSlide === 2 ? "object-cover object-top" : "object-cover object-bottom"}
              priority
              sizes="100vw"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Top Left Text - Positioned independently on the left (ABOVE foreground) */}
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
        {slides[currentSlide].topLeftText}
      </span>

      {/* Top Right Text - Positioned independently on the right (ABOVE foreground) */}
      <span
        className="absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[60px]"
        style={{
          zIndex: 25,
          top: '55%',
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
        {slides[currentSlide].topRightText}
      </span>

      {/* Layer 2: Mount Abu Text - BEHIND foreground (z-index 5, lower than foreground's 20) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{
          zIndex: 5,
          top: '5%',
          transition: 'none',
        }}
      >
        {/* Main Title - Mount abu with 3D Effect */}
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


      {/* Leader Cards - Bottom Right Corner */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute hidden lg:flex flex-row items-center right-4 lg:right-5 bottom-10 lg:bottom-10 gap-4 lg:gap-5"
        style={{ zIndex: 30 }}
      >
        {leaders.map((leader, index) => (
          <motion.div
            key={leader.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="flex flex-col justify-center items-center w-[150px] lg:w-[183px] p-3 lg:p-[18px] gap-4 lg:gap-5 rounded-xl cursor-pointer"
            style={{
              background: 'rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(212, 175, 55, 0.5)',
              backdropFilter: 'blur(0.5px)',
              WebkitBackdropFilter: 'blur(0.5px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            {/* Profile Image */}
            <div
              className="relative overflow-hidden w-20 h-20 lg:w-[115px] lg:h-[115px] rounded-full"
              style={{
                background: 'transparent',
                border: '2px solid rgba(212, 175, 55, 0.5)',
                boxShadow: '0 4px 20px rgba(212, 175, 55, 0.2)',
              }}
            >
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 80px, 115px"
              />
            </div>

            {/* Name and Title */}
            <div className="flex flex-col justify-center items-center gap-1">
              <p
                className="text-center capitalize text-base lg:text-lg"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  lineHeight: '24px',
                  color: '#F5F2E9',
                }}
              >
                {leader.name}
              </p>
              <p
                className="text-center text-sm lg:text-[15px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  lineHeight: '20px',
                  color: 'rgba(245, 242, 233, 0.85)',
                }}
              >
                {leader.title}
              </p>
              <p
                className="text-center text-xs lg:text-[13px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  lineHeight: '18px',
                  color: 'rgba(245, 242, 233, 0.7)',
                }}
              >
                {leader.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

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

export default HeroSlider;

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
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

  return (
    <section
      id="home"
      className="relative overflow-hidden w-full min-h-screen md:h-screen"
      style={{
        maxWidth: '100%',
        backgroundColor: '#0a1510',
      }}
    >
      {/* Layer 1: Background Image (h1.png) */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <Image
          src="/images/h1.png"
          alt="Mount Abu Background"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Majestic Text - Positioned independently on the left */}
      <span
        className="absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[100px]"
        style={{
          zIndex: 15,
          top: '10%',
          left: '22%',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 100,
          color: '#F7BE03',
          textShadow: '3px 2px 0px rgba(0, 0, 0, 0.5)',
          lineHeight: '1',
          transition: 'none',
          animation: 'none',
        }}
      >
        Majestic
      </span>

      {/* Dilwara Jain Temple Text - Positioned independently on the right */}
      <span
        className="absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[60px]"
        style={{
          zIndex: 30,
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
        Dilwara Jain Temple
      </span>

      {/* Layer 2: Mount Abu Text - Between background and foreground */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{
          zIndex: 15,
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
          <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[300px] xl:text-[220px]" style={{ transition: 'none', animation: 'none' }}><span className="text-9xl sm:text-9xl md:text-[10rem] lg:text-[170px] xl:text-[220px]">M</span>ount</span>
          <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[300px] xl:text-[200px]" style={{ transition: 'none', animation: 'none' }}>Abu</span>
        </h1>
      </div>

      {/* Layer 3: Foreground Image (h1-2.png) - Mountain/landscape overlay */}
      <div
        className="absolute pointer-events-none"
        style={{
          zIndex: 20,
          width: '100%',
          height: '50%',
          bottom: '31%',
          left: '49.7%',
          transform: 'translateX(-50%)',
        }}
      >
        <Image
          src="/images/h1-2.png"
          alt="Mount Abu Foreground"
          fill
          className="object-cover object-bottom"
          priority
          sizes="100vw"
          quality={90}
        />
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

      {/* Bottom Gradient - connects smoothly with ImageSlider */}
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

export default Hero;

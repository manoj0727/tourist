'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
  '/images/7.jpg',
  '/images/8.jpg',
];

const destinations = [
  { title: 'Lorem Ipsum', subtitle: 'Dolor Sit' },
  { title: 'Amet Consectetur', subtitle: 'Adipiscing' },
  { title: 'Magna Aliqua', subtitle: 'Ut Enim' },
  { title: 'Ullamco Laboris', subtitle: 'Nisi Ut' },
  { title: 'Velit Esse', subtitle: 'Cillum' },
  { title: 'Culpa Qui', subtitle: 'Officia' },
  { title: 'Unde Omnis', subtitle: 'Iste Natus' },
  { title: 'Aut Odit', subtitle: 'Aut Fugit' },
];

const cardConfigs = [
  { offset: -2, width: 160, height: 240, x: -440, opacity: 0.2, scale: 0.75 },
  { offset: -1, width: 220, height: 330, x: -260, opacity: 0.5, scale: 0.88 },
  { offset: 0, width: 320, height: 440, x: 0, opacity: 1, scale: 1 },
  { offset: 1, width: 220, height: 330, x: 260, opacity: 0.5, scale: 0.88 },
  { offset: 2, width: 160, height: 240, x: 440, opacity: 0.2, scale: 0.75 },
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const getIndex = (offset: number) => {
    return (activeIndex + offset + images.length) % images.length;
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      className="relative overflow-hidden mx-auto"
      style={{ width: '1440px', height: '900px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/images/bg2.jpg" alt="Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0" style={{ background: 'rgba(19, 32, 25, 0.5)' }} />
      </div>

      {/* Top Gradient - connects with Hero bottom */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '350px',
          background: 'linear-gradient(180deg, #132019 0%, rgba(19, 32, 25, 0.6) 40%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Extra top solid color for seamless connection */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '40px',
          background: '#132019',
        }}
      />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[220px]" style={{ background: 'linear-gradient(0deg, #132019 0%, transparent 100%)' }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
        style={{
          position: 'absolute',
          width: '513.81px',
          left: 'calc(50% - 513.81px/2 + 5.5px)',
          top: '85.26px',
          gap: '40px',
        }}
      >
        <p
          className="baron-neue"
          style={{
            width: '513.81px',
            fontSize: '24px',
            fontWeight: 400,
            lineHeight: '16px',
            textAlign: 'center',
            color: '#D4AF37',
          }}
        >
          Destinations
        </p>
        <h2
          style={{
            width: '513.81px',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '40px',
            fontWeight: 500,
            lineHeight: '54px',
            textAlign: 'center',
            textTransform: 'capitalize',
            color: '#F5F2E9',
            textShadow: '3px 2px 0px rgba(0, 0, 0, 0.5)',
          }}
        >
          Top Destinations to visit<br />Mount Abu
        </h2>
      </motion.div>

      {/* Cards Container */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: '260px', width: '1100px', height: '460px' }}
      >
        {cardConfigs.map((config) => {
          const index = getIndex(config.offset);
          const isCenter = config.offset === 0;
          const zIndex = 30 - Math.abs(config.offset) * 10;

          return (
            <motion.div
              key={config.offset}
              animate={{
                x: config.x,
                opacity: config.opacity,
                scale: config.scale,
              }}
              transition={{
                type: 'spring',
                stiffness: 180,
                damping: 22,
                mass: 0.9,
              }}
              className="absolute overflow-hidden"
              style={{
                width: config.width,
                height: config.height,
                left: '50%',
                top: '50%',
                marginLeft: -config.width / 2,
                marginTop: -config.height / 2,
                borderRadius: '12px',
                border: isCenter ? '1px solid rgba(212,175,55,0.3)' : '1px solid rgba(255,255,255,0.05)',
                boxShadow: isCenter
                  ? '0 20px 40px rgba(0,0,0,0.4)'
                  : '0 10px 25px rgba(0,0,0,0.3)',
                zIndex,
                cursor: config.offset === -1 || config.offset === 1 ? 'pointer' : 'default',
              }}
              onClick={() => {
                if (config.offset === -1) handlePrev();
                if (config.offset === 1) handleNext();
              }}
              whileHover={
                config.offset === -1 || config.offset === 1
                  ? { scale: config.scale * 1.04, opacity: config.opacity + 0.15 }
                  : {}
              }
            >
              {/* Image */}
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={images[index]}
                  alt={destinations[index].title}
                  fill
                  className="object-cover"
                  priority={isCenter}
                />
              </motion.div>

              {/* Bottom half gradient overlay for text */}
              <div
                className="absolute left-0 right-0 bottom-0"
                style={{
                  height: '55%',
                  background: isCenter
                    ? 'linear-gradient(0deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 70%, transparent 100%)'
                    : 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
                }}
              />

              {/* Content - Bottom Half */}
              <div
                className="absolute left-0 right-0 bottom-0 flex flex-col justify-end"
                style={{ height: '50%', padding: isCenter ? '24px' : '16px' }}
              >
                {isCenter ? (
                  <motion.div
                    key={`center-content-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {/* Decorative element */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: 40 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="h-[1px] mb-4"
                      style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }}
                    />

                    {/* Subtitle */}
                    <p
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: '12px',
                        color: '#D4AF37',
                        fontStyle: 'italic',
                        letterSpacing: '2px',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {destinations[index].subtitle}
                    </p>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: '28px',
                        fontWeight: 500,
                        color: '#F5F2E9',
                        letterSpacing: '1px',
                        lineHeight: 1.2,
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                      }}
                    >
                      {destinations[index].title}
                    </h3>

                    {/* Bottom decorative line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="mt-4 origin-left"
                      style={{
                        width: '60px',
                        height: '2px',
                        background: 'linear-gradient(90deg, #D4AF37, rgba(212,175,55,0.3))',
                      }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key={`side-content-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: '10px',
                        color: 'rgba(212,175,55,0.8)',
                        fontStyle: 'italic',
                        letterSpacing: '1px',
                        marginBottom: '4px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {destinations[index].subtitle}
                    </p>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: config.offset === -1 || config.offset === 1 ? '16px' : '13px',
                        fontWeight: 500,
                        color: '#F5F2E9',
                        lineHeight: 1.3,
                      }}
                    >
                      {destinations[index].title}
                    </h3>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6"
        style={{ bottom: '50px' }}
      >
        {/* Prev Button */}
        <motion.button
          onClick={handlePrev}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </motion.button>

        {/* Dots */}
        <div className="flex items-center gap-[6px]">
          {images.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="relative"
              whileHover={{ scale: 1.2 }}
            >
              <motion.div
                animate={{
                  width: i === activeIndex ? 20 : 5,
                  height: 5,
                  background: i === activeIndex ? '#D4AF37' : 'rgba(255,255,255,0.2)',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 28
                }}
                className="rounded-full"
              />
            </motion.button>
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            border: '1px solid rgba(212,175,55,0.4)',
            background: 'rgba(212,175,55,0.06)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </motion.button>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Montserrat:wght@400;500;600;700&display=swap');

        @font-face {
          font-family: 'Baron Neue';
          src: url('/fonts/BaronNeue.otf') format('opentype');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        .baron-neue {
          font-family: 'Baron Neue', 'Montserrat', sans-serif;
        }
      `}</style>
    </section>
  );
}

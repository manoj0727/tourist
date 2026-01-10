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
  {
    title: 'Dilwara Temples',
    description: 'The Dilwara Temples are celebrated for their exquisite white marble carvings and architectural brilliance.'
  },
  {
    title: 'Nakki Lake',
    description: 'A beautiful sacred lake surrounded by hills, perfect for boating and peaceful walks.'
  },
  {
    title: 'Sunset Point',
    description: 'Watch the golden sun set behind the Aravalli ranges in a spectacular display.'
  },
  {
    title: 'Toad Rock',
    description: 'A natural rock formation resembling a toad, offering panoramic views of the valley.'
  },
  {
    title: 'Guru Shikhar',
    description: 'The highest peak in the Aravalli Range at 1,722 meters, offering breathtaking views.'
  },
  {
    title: 'Achalgarh Fort',
    description: 'An ancient Paramara dynasty fort with stunning architecture and rich history.'
  },
  {
    title: 'Peace Park',
    description: 'A serene park ideal for meditation and connecting with nature.'
  },
  {
    title: 'Wildlife Sanctuary',
    description: 'Home to diverse flora and fauna including leopards, sloth bears, and wild boars.'
  },
];

// Desktop card configs - 5 visible cards matching Figma specs
const cardConfigsDesktop = [
  { offset: -2, width: 331, height: 408, x: -596, opacity: 1, scale: 1 },      // Far left
  { offset: -1, width: 331, height: 408, x: -276, opacity: 1, scale: 1 },      // Left
  { offset: 0, width: 419, height: 482, x: 0, opacity: 1, scale: 1 },          // Center (larger)
  { offset: 1, width: 331, height: 408, x: 276, opacity: 1, scale: 1 },        // Right
  { offset: 2, width: 331, height: 408, x: 596, opacity: 1, scale: 1 },        // Far right
];

// Tablet card configs - 3 visible cards
const cardConfigsTablet = [
  { offset: -1, width: 260, height: 320, x: -220, opacity: 1, scale: 1 },
  { offset: 0, width: 320, height: 400, x: 0, opacity: 1, scale: 1 },
  { offset: 1, width: 260, height: 320, x: 220, opacity: 1, scale: 1 },
];

// Mobile card configs - single card
const cardConfigsMobile = [
  { offset: 0, width: 300, height: 420, x: 0, opacity: 1, scale: 1 },
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const cardConfigs = isMobile ? cardConfigsMobile : isTablet ? cardConfigsTablet : cardConfigsDesktop;

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
      className="relative overflow-hidden w-full"
      style={{ height: '972px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/images/bg2.jpg" alt="Background" fill className="object-cover" sizes="100vw" />
      </div>

      {/* Top Gradient - Layer 1 (darker, taller) */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '484px',
          background: 'linear-gradient(180deg, #132019 0%, rgba(108, 100, 73, 0) 100%)',
          zIndex: 2,
        }}
      />

      {/* Top Gradient - Layer 2 */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '433px',
          background: 'linear-gradient(180deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
          zIndex: 3,
        }}
      />

      {/* Bottom Gradient */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '212px',
          background: 'linear-gradient(0deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
          zIndex: 2,
        }}
      />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center px-4"
        style={{
          top: '85px',
          gap: '40px',
          zIndex: 10,
        }}
      >
        {/* Destinations label */}
        <p
          className="baron-neue text-center"
          style={{
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '16px',
            color: '#D4AF37',
          }}
        >
          Destinations
        </p>

        {/* Main heading */}
        <h2
          className="text-center"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(28px, 4vw, 40px)',
            lineHeight: '54px',
            textTransform: 'capitalize',
            color: '#F5F2E9',
            textShadow: '3px 2px 0px rgba(0, 0, 0, 0.5)',
            maxWidth: '514px',
          }}
        >
          Top Destinations to visit Mount Abu
        </h2>
      </motion.div>

      {/* Cards Container */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-full"
        style={{
          top: '292px',
          height: '482px',
          maxWidth: '1224px',
          zIndex: 5,
        }}
      >
        {cardConfigs.map((config) => {
          const index = getIndex(config.offset);
          const isCenter = config.offset === 0;
          const zIndex = isCenter ? 30 : 20 - Math.abs(config.offset);

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
                stiffness: 200,
                damping: 25,
                mass: 0.8,
              }}
              className="absolute overflow-hidden"
              style={{
                width: config.width,
                height: config.height,
                left: '50%',
                top: '50%',
                marginLeft: -config.width / 2,
                marginTop: -config.height / 2,
                borderRadius: '13px',
                border: isCenter ? '4px solid #122018' : '2px solid #122018',
                zIndex,
                cursor: !isCenter ? 'pointer' : 'default',
              }}
              onClick={() => {
                if (config.offset === -1 || config.offset === -2) handlePrev();
                if (config.offset === 1 || config.offset === 2) handleNext();
              }}
              whileHover={!isCenter ? { scale: 1.02 } : {}}
            >
              {/* Image */}
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
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

              {/* Center card content overlay */}
              {isCenter && (
                <>
                  {/* Gradient overlay with blur */}
                  <div
                    className="absolute left-0 right-0 bottom-0"
                    style={{
                      height: '242px',
                      background: 'linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
                      backdropFilter: 'blur(2.2px)',
                    }}
                  />

                  {/* Arrow button */}
                  <motion.div
                    className="absolute flex items-center justify-center"
                    style={{
                      width: '63px',
                      height: '63px',
                      right: '20px',
                      top: '13px',
                      background: '#000000',
                      borderRadius: '45px',
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg width="31" height="31" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute left-0 right-0 bottom-0 flex flex-col justify-end"
                    style={{
                      padding: '29px',
                      gap: '21px',
                    }}
                  >
                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: '22px',
                        lineHeight: '66px',
                        textTransform: 'capitalize',
                        color: '#F5F2E9',
                      }}
                    >
                      {destinations[index].title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 500,
                        fontSize: '17.6px',
                        lineHeight: '31px',
                        color: '#F5F2E9',
                        maxWidth: '360px',
                      }}
                    >
                      {destinations[index].description}
                    </p>
                  </motion.div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex items-center"
        style={{
          top: '843px',
          gap: '12px',
          zIndex: 10,
        }}
      >
        {/* Previous Button */}
        <motion.button
          onClick={handlePrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center"
          style={{
            width: '44px',
            height: '44px',
            opacity: 0.4,
          }}
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <circle cx="22" cy="22" r="21" stroke="#FFFFFF" strokeWidth="1" />
            <path
              d="M25 15L18 22L25 29"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>

        {/* Next Button */}
        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center"
          style={{
            width: '44px',
            height: '44px',
          }}
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <circle cx="22" cy="22" r="21" stroke="#D4AF37" strokeWidth="1" />
            <path
              d="M19 15L26 22L19 29"
              fill="#D4AF37"
            />
            <path
              d="M19 15L26 22L19 29"
              stroke="#D4AF37"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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

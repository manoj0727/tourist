'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

// All 8 images
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
    id: 1,
    title: 'Dilwara Temples',
    description: 'The Dilwara Temples are celebrated for their exquisite white marble carvings and architectural brilliance.',
  },
  {
    id: 2,
    title: 'Sunset Point',
    description: 'Sunset Point is famed for stunning evening views as the sky glows orange, gold, and violet over the Aravalli ranges.',
  },
  {
    id: 3,
    title: 'Achalgarh Fort',
    description: 'Achalgarh Fort is a historic fort with grand gates and the nearby Achaleshwar Mahadev Temple.',
  },
  {
    id: 4,
    title: 'Peace Park',
    description: 'It was maintained by the Brahma Kumaris, is a serene retreat for meditation, relaxation, and nature walks.',
  },
  {
    id: 5,
    title: 'Nakki Lake',
    description: 'It is a tranquil blue lake framed by hills and bustling markets, perfect for boating, strolls, and evening views.',
  },
  {
    id: 6,
    title: 'Guru Shikhar',
    description: "Guru Shikhar, Rajasthan's highest peak, offers panoramic views and the sacred Guru Dattatreya Temple.",
  },
  {
    id: 7,
    title: 'Wildlife Sanctuary',
    description: 'Mount Abu Wildlife Sanctuary is home to leopards, wild boars, and over 250 species of birds in lush forests.',
  },
  {
    id: 8,
    title: 'Honeymoon Point',
    description: 'Honeymoon Point offers breathtaking panoramic views of the valleys and is perfect for romantic getaways.',
  },
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  // Get image index with wrapping
  const getImageIndex = useCallback((offset: number) => {
    return (activeIndex + offset + images.length) % images.length;
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const currentDestination = destinations[activeIndex % destinations.length];

  // Animation variants for smooth sliding
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
    }),
  };

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section
      className="relative overflow-hidden mx-auto"
      style={{
        width: '1445px',
        height: '972px',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg2.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        {/* Dark overlay for depth */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Green tint overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(19, 32, 25, 0.4)',
          }}
        />
      </div>

      {/* Top Gradient Overlay - Green fade from top */}
      <div
        className="absolute"
        style={{
          width: '1449.07px',
          height: '298.56px',
          left: 'calc(50% - 1449.07px/2)',
          top: '0px',
          background: 'linear-gradient(180deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Secondary Top Gradient - Lighter */}
      <div
        className="absolute"
        style={{
          width: '1445.44px',
          height: '405.27px',
          left: 'calc(50% - 1445.44px/2)',
          top: '13.34px',
          background: 'linear-gradient(180deg, #132019 0%, rgba(108, 100, 73, 0) 100%)',
        }}
      />

      {/* Bottom Gradient Overlay - Green fade from bottom */}
      <div
        className="absolute"
        style={{
          width: '1441.25px',
          height: '212.18px',
          left: 'calc(50% - 1441.25px/2)',
          bottom: '4.57px',
          background: 'linear-gradient(0deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
        style={{
          width: '513.81px',
          height: '139px',
          position: 'absolute',
          left: 'calc(50% - 513.81px/2 + 5.5px)',
          top: '85.26px',
          gap: '40px',
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="baron-neue"
          style={{
            width: '513.81px',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '16px',
            textAlign: 'center',
            color: '#D4AF37',
          }}
        >
          Destinations
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            width: '513.81px',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            fontSize: '40px',
            lineHeight: '54px',
            textAlign: 'center',
            textTransform: 'capitalize',
            color: '#F5F2E9',
            textShadow: '3px 2px 0px rgba(0, 0, 0, 0.5)',
          }}
        >
          Top Destinations to visit Mount Abu
        </motion.h2>
      </motion.div>

      {/* Slider Container */}
      <div
        className="absolute"
        style={{
          width: '1223.43px',
          height: '482.47px',
          left: '127.74px',
          top: '292.26px',
        }}
      >
        {/* Background Cards - Layer 1 (Outer) - positions -2 and +2 */}
        <div
          className="absolute flex flex-row justify-between items-center"
          style={{
            width: '1192.48px',
            height: '407.57px',
            left: 'calc(50% - 1192.48px/2)',
            top: '36.54px',
          }}
        >
          {/* Left Outer Card (-2) */}
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={`outer-left-${getImageIndex(-2)}`}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="relative overflow-hidden"
              style={{
                width: '331.24px',
                height: '407.57px',
                border: '2px solid #122018',
                borderRadius: '13.22px',
                opacity: 0.4,
              }}
            >
              <Image
                src={images[getImageIndex(-2)]}
                alt="Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          </AnimatePresence>

          {/* Right Outer Card (+2) */}
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={`outer-right-${getImageIndex(2)}`}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="relative overflow-hidden"
              style={{
                width: '331.24px',
                height: '407.57px',
                border: '2px solid #122018',
                borderRadius: '13.22px',
                opacity: 0.4,
              }}
            >
              <Image
                src={images[getImageIndex(2)]}
                alt="Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Background Cards - Layer 2 (Inner) - positions -1 and +1 */}
        <div
          className="absolute flex flex-row items-center"
          style={{
            width: '882.48px',
            height: '407.57px',
            left: 'calc(50% - 882.48px/2)',
            top: '37.77px',
            gap: '220px',
          }}
        >
          {/* Left Inner Card (-1) */}
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={`inner-left-${getImageIndex(-1)}`}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.05
              }}
              className="relative overflow-hidden"
              style={{
                width: '331.24px',
                height: '407.57px',
                border: '2px solid #122018',
                borderRadius: '13.22px',
                opacity: 0.65,
              }}
            >
              <Image
                src={images[getImageIndex(-1)]}
                alt="Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
            </motion.div>
          </AnimatePresence>

          {/* Right Inner Card (+1) */}
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={`inner-right-${getImageIndex(1)}`}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.05
              }}
              className="relative overflow-hidden"
              style={{
                width: '331.24px',
                height: '407.57px',
                border: '2px solid #122018',
                borderRadius: '13.22px',
                opacity: 0.65,
              }}
            >
              <Image
                src={images[getImageIndex(1)]}
                alt="Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Center Featured Card */}
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={`center-${activeIndex}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="absolute overflow-hidden"
            style={{
              width: '418.58px',
              height: '482.47px',
              left: 'calc(50% - 418.58px/2 - 18.68px)',
              top: '0px',
              border: '4px solid #122018',
              borderRadius: '13.22px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Featured Image */}
            <Image
              src={images[activeIndex]}
              alt={currentDestination.title}
              fill
              className="object-cover"
              priority
            />

            {/* Gradient Overlay */}
            <div
              className="absolute"
              style={{
                width: '418.58px',
                height: '242.15px',
                left: 'calc(50% - 418.58px/2)',
                top: '240.32px',
                background: 'linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
                backdropFilter: 'blur(2.2px)',
              }}
            />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute flex flex-col justify-center items-start"
              style={{
                width: '360.2px',
                left: '29.19px',
                top: '334.87px',
                gap: '20.93px',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '22.03px',
                  lineHeight: '66px',
                  textTransform: 'capitalize',
                  color: '#F5F2E9',
                }}
              >
                {currentDestination.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  fontSize: '17.62px',
                  lineHeight: '31px',
                  color: '#F5F2E9',
                }}
              >
                {currentDestination.description}
              </p>
            </motion.div>

            {/* Arrow Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute flex items-center justify-center"
              style={{
                width: '62.85px',
                height: '62.85px',
                left: '335.97px',
                top: '13.22px',
                background: '#000000',
                borderRadius: '44.78px',
                padding: '6.29px',
              }}
            >
              <svg
                width="31"
                height="31"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.57"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons - Bottom Center */}
      <div
        className="absolute flex flex-row items-center"
        style={{
          width: '100px',
          height: '44px',
          left: 'calc(50% - 100px/2)',
          top: '842.74px',
          gap: '12px',
        }}
      >
        {/* Previous Button */}
        <motion.button
          onClick={handlePrev}
          whileHover={{ scale: 1.1, opacity: 0.8 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center"
          style={{
            width: '44px',
            height: '44px',
            opacity: 0.4,
          }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
          >
            <circle
              cx="22"
              cy="22"
              r="21"
              stroke="#FFFFFF"
              strokeWidth="1"
            />
            <path
              d="M25 15L18 22L25 29"
              stroke="#FFFFFF"
              strokeWidth="2"
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
          className="relative flex items-center justify-center"
          style={{
            width: '44px',
            height: '44px',
          }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
          >
            <circle
              cx="22"
              cy="22"
              r="21"
              stroke="#D4AF37"
              strokeWidth="1"
            />
            <path
              d="M19 15L26 22L19 29"
              fill="#D4AF37"
            />
          </svg>
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div
        className="absolute flex flex-row items-center justify-center"
        style={{
          width: '200px',
          left: 'calc(50% - 100px)',
          top: '900px',
          gap: '8px',
        }}
      >
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1);
              setActiveIndex(index);
            }}
            whileHover={{ scale: 1.2 }}
            className="transition-all duration-300"
            style={{
              width: index === activeIndex ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: index === activeIndex ? '#D4AF37' : 'rgba(255, 255, 255, 0.3)',
            }}
          />
        ))}
      </div>

      {/* Custom Styles for Baron Neue font */}
      <style jsx global>{`
        @font-face {
          font-family: 'Baron Neue';
          src: url('/fonts/BaronNeue-Black.otf') format('opentype');
          font-weight: 900;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Baron Neue';
          src: url('/fonts/BaronNeue-Bold.otf') format('opentype');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
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

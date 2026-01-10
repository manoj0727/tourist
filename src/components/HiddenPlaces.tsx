'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const places = [
  {
    id: 1,
    name: 'Nakki Lake',
    image: '/images/1.jpg',
    description:
      'A sacred lake nestled in the heart of Mount Abu, surrounded by hills and ancient rocks. Legend says it was carved by gods using their nails. The serene waters reflect the beauty of the Aravalli range.',
  },
  {
    id: 2,
    name: 'Dilwara Jain Temple',
    image: '/images/2.jpg',
    description:
      'An architectural marvel dating back to the 11th-13th century, renowned for its extraordinary marble carvings. The intricate detailing is considered among the finest in India.',
  },
  {
    id: 3,
    name: 'Sunset Point',
    image: '/images/3.jpg',
    description:
      'One of the most spectacular viewpoints in Mount Abu, offering breathtaking panoramic views of the sun setting behind the Aravalli mountains.',
  },
  {
    id: 4,
    name: 'Toad Rock',
    image: '/images/4.jpg',
    description:
      'A unique natural rock formation resembling a toad about to leap. This geological wonder offers stunning views of the lake and surrounding hills.',
  },
  {
    id: 5,
    name: 'Guru Shikhar',
    image: '/images/5.jpg',
    description:
      'Standing at 1,722 meters, Guru Shikhar is the highest peak in the Aravalli Range with 360-degree views stretching to the horizon.',
  },
  {
    id: 6,
    name: 'Achalgarh Fort',
    image: '/images/6.jpg',
    description:
      'An ancient fortification rebuilt by Maharana Kumbha in the 15th century. The fort complex includes beautiful Jain temples with exquisite carvings.',
  },
];

export default function HiddenPlaces() {
  const [activePlace, setActivePlace] = useState(0);
  const currentPlace = places[activePlace];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePlace((prev) => (prev + 1) % places.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActivePlace((prev) => (prev - 1 + places.length) % places.length);
  };

  const handleNext = () => {
    setActivePlace((prev) => (prev + 1) % places.length);
  };

  return (
    <section
      className="relative overflow-hidden mx-auto w-full max-w-[1440px] min-h-[800px] md:min-h-[900px] lg:min-h-[975px]"
      style={{
        background: '#17261E',
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{ opacity: 0.3 }}
      >
        <Image
          src="/images/bg4.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient Overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #132019 0%, rgba(19, 32, 25, 0.3) 30%, rgba(19, 32, 25, 0.3) 60%, #132019 100%)',
        }}
      />

      {/* Bottom Gradient - connects with About cloud border */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '200px',
          background: 'linear-gradient(0deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
          zIndex: 5,
        }}
      />

      {/* Extra bottom solid for seamless cloud connection */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '60px',
          background: '#132019',
          zIndex: 6,
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative md:absolute flex flex-col items-center w-full px-4 pt-12 md:pt-0 md:top-[80px] gap-4"
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
          }}
        />
        <p
          className="baron-neue text-lg md:text-xl lg:text-2xl text-center tracking-[4px]"
          style={{
            color: '#D4AF37',
          }}
        >
          Hidden Places
        </p>
        <h2
          className="text-2xl md:text-3xl lg:text-[42px] font-medium text-center leading-tight md:leading-[54px] px-4"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            color: '#FFFFFF',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}
        >
          Unexplored Gems of Mount Abu
        </h2>
      </motion.div>

      {/* Main Content Area */}
      <div
        className="relative md:absolute flex flex-col-reverse lg:flex-row mt-8 md:mt-0 px-4 sm:px-8 md:px-12 lg:px-[80px] md:top-[280px] md:left-[80px] md:right-[80px] gap-8 lg:gap-0 pb-20 md:pb-0"
      >
        {/* Left Side - Animated Place Name */}
        <div
          className="relative lg:absolute w-full max-w-[450px] mx-auto lg:mx-0 lg:left-0 lg:top-0 lg:h-full"
        >
          {/* Current Place Name - Large Animated */}
          <div className="relative h-[80px] sm:h-[100px] lg:h-[120px] mb-4 sm:mb-6 lg:mb-[30px]">
            <AnimatePresence mode="wait">
              <motion.h3
                key={`name-${activePlace}`}
                initial={{ opacity: 0, y: 40, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -40, rotateX: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="baron-neue absolute text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight"
                style={{
                  color: '#D4AF37',
                  textShadow: '0 4px 30px rgba(212, 175, 55, 0.3)',
                }}
              >
                {currentPlace.name}
              </motion.h3>
            </AnimatePresence>
          </div>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${activePlace}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-7 lg:leading-8 mb-6 sm:mb-8 lg:mb-10"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: 'rgba(245, 242, 233, 0.8)',
              }}
            >
              {currentPlace.description}
            </motion.p>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6">
            {/* Prev/Next Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full"
                style={{
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'rgba(255,255,255,0.05)',
                }}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </motion.button>

              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full"
                style={{
                  border: '1px solid #D4AF37',
                  background: 'rgba(212, 175, 55, 0.15)',
                }}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </motion.button>
            </div>

            {/* Explore Button */}
            <motion.button
              whileHover={{
                scale: 1.02,
                background: 'rgba(212, 175, 55, 0.5)',
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 sm:gap-3 h-10 sm:h-12 lg:h-14 px-4 sm:px-6 lg:px-8 rounded-lg"
              style={{
                background: 'rgba(212, 175, 55, 0.25)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
              }}
            >
              <span
                className="text-xs sm:text-sm lg:text-[15px] font-medium tracking-wider"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#FFFFFF',
                }}
              >
                Explore All
              </span>
              <motion.svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.button>
          </div>

        </div>

        {/* Right Side - Main Image */}
        <div
          className="relative lg:absolute w-full max-w-[750px] mx-auto lg:mx-0 lg:right-0 lg:top-0 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[520px]"
        >
          {/* Main Featured Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${activePlace}`}
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -50 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:absolute overflow-hidden w-full max-w-[520px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[520px] mx-auto lg:mx-0 lg:right-[100px] lg:top-0 rounded-2xl lg:rounded-3xl"
              style={{
                border: '3px solid rgba(212, 175, 55, 0.6)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              }}
            >
              <Image
                src={currentPlace.image}
                alt={currentPlace.name}
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, transparent 50%)',
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Decorative Elements */}
          <motion.div
            className="absolute hidden lg:block w-20 h-20 sm:w-24 sm:h-24 lg:w-[120px] lg:h-[120px] right-4 sm:right-8 lg:right-[60px] -top-4 sm:-top-6 lg:-top-[30px] rounded-full"
            style={{
              border: '1px solid rgba(212, 175, 55, 0.2)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

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

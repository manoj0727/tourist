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
      className="relative overflow-hidden mx-auto"
      style={{
        width: '1440px',
        height: '975px',
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
        className="absolute flex flex-col items-center"
        style={{
          width: '100%',
          top: '80px',
          gap: '16px',
        }}
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
          className="baron-neue"
          style={{
            fontSize: '24px',
            lineHeight: '24px',
            textAlign: 'center',
            color: '#D4AF37',
            letterSpacing: '4px',
          }}
        >
          Hidden Places
        </p>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '42px',
            fontWeight: 500,
            lineHeight: '54px',
            textAlign: 'center',
            color: '#FFFFFF',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}
        >
          Unexplored Gems of Mount Abu
        </h2>
      </motion.div>

      {/* Main Content Area */}
      <div
        className="absolute"
        style={{
          top: '280px',
          left: '80px',
          right: '80px',
          height: '550px',
        }}
      >
        {/* Left Side - Animated Place Name */}
        <div
          className="absolute"
          style={{
            left: 0,
            top: 0,
            width: '450px',
            height: '100%',
          }}
        >
          {/* Current Place Name - Large Animated */}
          <div className="relative" style={{ height: '120px', marginBottom: '30px' }}>
            <AnimatePresence mode="wait">
              <motion.h3
                key={`name-${activePlace}`}
                initial={{ opacity: 0, y: 40, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -40, rotateX: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="baron-neue absolute"
                style={{
                  fontSize: '56px',
                  lineHeight: '1.1',
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
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '32px',
                color: 'rgba(245, 242, 233, 0.8)',
                marginBottom: '40px',
              }}
            >
              {currentPlace.description}
            </motion.p>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6">
            {/* Prev/Next Buttons */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'rgba(255,255,255,0.05)',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </motion.button>

              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  border: '1px solid #D4AF37',
                  background: 'rgba(212, 175, 55, 0.15)',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
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
              className="flex items-center justify-center gap-3"
              style={{
                height: '56px',
                padding: '0 32px',
                background: 'rgba(212, 175, 55, 0.25)',
                backdropFilter: 'blur(4px)',
                borderRadius: '8px',
                border: '1px solid rgba(212, 175, 55, 0.4)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  letterSpacing: '1px',
                }}
              >
                Explore All
              </span>
              <motion.svg
                width="20"
                height="20"
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
          className="absolute"
          style={{
            right: 0,
            top: 0,
            width: '750px',
            height: '520px',
          }}
        >
          {/* Main Featured Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${activePlace}`}
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -50 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute overflow-hidden"
              style={{
                width: '520px',
                height: '520px',
                right: '100px',
                top: 0,
                borderRadius: '24px',
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
            className="absolute"
            style={{
              width: '120px',
              height: '120px',
              right: '60px',
              top: '-30px',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              borderRadius: '50%',
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

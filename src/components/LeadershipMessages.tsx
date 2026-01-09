'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const leaders = [
  {
    id: 1,
    name: 'Shri Bhajan Lal Sharma',
    designation: 'Chief Minister, Rajasthan',
    message:
      "Mount Abu is not only a crown jewel of Rajasthan's tourism but also a symbol of our state's commitment to sustainable development and civic excellence. As Chief Minister, I am proud of the efforts being made by the Mount Abu Nagar Palika to preserve its natural beauty and enhance the quality of life for its residents and visitors. I encourage every citizen and tourist to experience the unique blend of spirituality, history, and nature that Mount Abu offers, and I assure continued support from the state government for its growth and prosperity.",
    image: '/images/cm-rajasthan.png',
  },
  {
    id: 2,
    name: 'Shri Bhajan Lal Sharma',
    designation: 'Chief Minister, Rajasthan',
    message:
      "Mount Abu is not only a crown jewel of Rajasthan's tourism but also a symbol of our state's commitment to sustainable development and civic excellence. As Chief Minister, I am proud of the efforts being made by the Mount Abu Nagar Palika to preserve its natural beauty and enhance the quality of life for its residents and visitors. I encourage every citizen and tourist to experience the unique blend of spirituality, history, and nature that Mount Abu offers, and I assure continued support from the state government for its growth and prosperity.",
    image: '/images/cm-rajasthan.png',
  },
];

export default function LeadershipMessages() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentLeader = leaders[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % leaders.length);
  };

  return (
    <section
      className="relative overflow-hidden mx-auto"
      style={{
        width: '1440px',
        height: '929px',
        background: '#132019',
      }}
    >
      {/* Background Image - with overlay blend mode */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg11.jpg"
          alt="Background"
          fill
          className="object-cover"
          style={{ mixBlendMode: 'overlay', opacity: 0.26 }}
        />
      </div>

      {/* Mountain Silhouette at bottom */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '184px',
        }}
      >
        <Image
          src="/images/mountain.png"
          alt="Mountain"
          fill
          className="object-cover object-bottom"
          style={{ opacity: 0.5 }}
        />
      </div>

      {/* Top Gradient */}
      <div
        className="absolute left-0 right-0 top-0"
        style={{
          height: '218px',
          background: 'linear-gradient(180deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Bottom Gradient */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '218px',
          background: 'linear-gradient(0deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Main Content */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          width: '1141px',
          height: '682px',
          left: 'calc(50% - 1141px/2)',
          top: '140px',
          gap: '80px',
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center"
          style={{
            width: '1141px',
            gap: '26px',
          }}
        >
          <p
            className="baron-neue"
            style={{
              fontSize: '24px',
              lineHeight: '24px',
              textAlign: 'center',
              color: '#D4AF37',
            }}
          >
            Testimonials
          </p>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              fontSize: '40px',
              lineHeight: '54px',
              textAlign: 'center',
              textTransform: 'capitalize',
              color: '#FFFFFF',
            }}
          >
            Leadership messages
          </h2>
        </motion.div>

        {/* Speaker Content */}
        <div
          className="flex flex-col items-center"
          style={{
            width: '1141px',
            height: '484px',
            gap: '60px',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`leader-${activeIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
              style={{
                width: '1141px',
                height: '380px',
                gap: '58px',
              }}
            >
              {/* Image Container */}
              <div
                className="relative"
                style={{
                  width: '373px',
                  height: '380px',
                  flexShrink: 0,
                }}
              >
                {/* Golden Border Circle */}
                <div
                  className="absolute"
                  style={{
                    width: '360px',
                    height: '360px',
                    left: '0px',
                    top: '20px',
                    border: '1.76px solid #D4AF37',
                    borderRadius: '402px',
                  }}
                />

                {/* Gray Background Circle with CM Image */}
                <div
                  className="absolute"
                  style={{
                    width: '360px',
                    height: '360px',
                    left: '13px',
                    top: '0px',
                    background: '#B7B5AF',
                    borderRadius: '50%',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={currentLeader.image}
                    alt={currentLeader.name}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                    }}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div
                className="flex flex-col items-start"
                style={{
                  width: '710px',
                  height: '320px',
                  gap: '24px',
                }}
              >
                {/* Name and Designation */}
                <div
                  className="flex flex-col items-start"
                  style={{
                    gap: '12px',
                  }}
                >
                  <h3
                    className="baron-neue"
                    style={{
                      fontSize: '32px',
                      lineHeight: '32px',
                      color: '#D4AF37',
                    }}
                  >
                    {currentLeader.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '24px',
                      textTransform: 'capitalize',
                      color: '#F5F2E9',
                    }}
                  >
                    {currentLeader.designation}
                  </p>
                </div>

                {/* Message */}
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '28px',
                    color: '#F5F2E9',
                    width: '710px',
                  }}
                >
                  {currentLeader.message}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div
            className="flex items-center"
            style={{
              gap: '12px',
            }}
          >
            {/* Previous Button */}
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid #FFFFFF',
                opacity: 0.4,
              }}
            >
              <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                <path
                  d="M6 1L1 6.5L6 12M1 6.5H15"
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
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid #D4AF37',
              }}
            >
              <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                <path
                  d="M10 1L15 6.5L10 12M15 6.5H1"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

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

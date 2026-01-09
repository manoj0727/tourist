'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const newsItems = [
  {
    id: 1,
    category: 'Fairs and Festivals for the next 5 years',
    title: "Experience Mount Abu's Vibrant Festivals",
    date: '2025-26 To 2029-30',
    description: '',
    image: '/images/bg7-1.png',
    hasPdf: true,
  },
  {
    id: 2,
    category: 'Festivals',
    title: 'Winter Festival',
    date: '29th and 30th Dec',
    description:
      "Experience the charm of winter in Mount Abu with a vibrant celebration of culture, music, dance, and heritage, set against scenic hills, iconic landmarks, and the festive spirit of Rajasthan's only hill station.",
    image: '/images/bg7-2.jpg',
    hasPdf: false,
  },
  {
    id: 3,
    category: 'Fairs and Festivals for the next 5 years',
    title: "Experience Mount Abu's Vibrant Festivals",
    date: '2025-26 To 2029-30',
    description: '',
    image: '/images/bg7-1.png',
    hasPdf: true,
  },
];

export default function NewsUpdates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentNews = newsItems[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % newsItems.length);
  };

  return (
    <section
      className="relative overflow-hidden mx-auto"
      style={{
        width: '1440px',
        height: '964px',
        background: '#17261E',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg7.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(81, 73, 51, 0.6)',
          }}
        />
      </div>

      {/* Top Gradient */}
      <div
        className="absolute left-0 right-0 top-0"
        style={{
          height: '217px',
          background: 'linear-gradient(180deg, rgba(127, 109, 84, 0) 0%, #7F6D54 100%)',
          transform: 'matrix(1, 0, 0, -1, 0, 0)',
        }}
      />

      {/* Bottom Gradient */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '250px',
          background: 'linear-gradient(0deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Main Content */}
      <div
        className="absolute flex flex-col items-start"
        style={{
          width: '1250px',
          height: '663px',
          left: 'calc(50% - 1250px/2)',
          top: 'calc(50% - 663px/2 - 16px)',
          gap: '60px',
        }}
      >
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end"
          style={{
            width: '1250px',
            height: '78px',
          }}
        >
          {/* Title */}
          <div
            className="flex flex-col justify-center items-start"
            style={{ gap: '26px' }}
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
              Updates
            </p>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: '40px',
                lineHeight: '54px',
                textTransform: 'capitalize',
                color: '#FFFFFF',
              }}
            >
              News & Updates
            </h2>
          </div>

          {/* View More Button */}
          <motion.button
            whileHover={{ scale: 1.02, background: 'rgba(212, 175, 55, 0.6)' }}
            whileTap={{ scale: 0.98 }}
            className="flex justify-center items-center"
            style={{
              padding: '12px 24px',
              width: '130px',
              height: '48px',
              background: 'rgba(212, 175, 55, 0.44)',
              backdropFilter: 'blur(2px)',
              borderRadius: '6px',
            }}
          >
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                textDecoration: 'underline',
                color: '#FFFFFF',
              }}
            >
              View More
            </span>
          </motion.button>
        </motion.div>

        {/* Card Container */}
        <div
          className="relative"
          style={{
            width: '1250px',
            height: '525px',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`card-${activeIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute"
              style={{
                width: '1250px',
                height: '525px',
                background: '#F5F2E9',
                borderRadius: '24px',
                overflow: 'hidden',
              }}
            >
              {/* Decorative Background Image */}
              <div
                className="absolute"
                style={{
                  width: '895px',
                  height: '548px',
                  left: 'calc(50% - 895px/2 - 290px)',
                  top: 'calc(50% - 548px/2)',
                  mixBlendMode: 'overlay',
                  opacity: 0.5,
                }}
              >
                <Image
                  src="/images/7.jpg"
                  alt="Decorative"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Side Image */}
              <div
                className="absolute"
                style={{
                  width: '788px',
                  height: '525px',
                  left: '566px',
                  top: 0,
                }}
              >
                <Image
                  src={currentNews.image}
                  alt={currentNews.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Container */}
              <div
                className="absolute flex flex-col items-start"
                style={{
                  padding: '47px 60px 50px 45px',
                  gap: '3px',
                  left: 0,
                  top: 0,
                }}
              >
                {/* Category */}
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: '14.4px',
                    lineHeight: '15px',
                    color: '#111111',
                  }}
                >
                  {currentNews.category}
                </p>

                {/* Heading */}
                <div style={{ padding: '15px 0 22px' }}>
                  <h3
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      fontSize: '34px',
                      lineHeight: '41px',
                      color: '#2D4A2D',
                      maxWidth: '434px',
                    }}
                  >
                    {currentNews.title}
                  </h3>
                </div>

                {/* Date */}
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '15px',
                    color: '#111111',
                  }}
                >
                  {currentNews.date}
                </p>

                {/* Description (if exists) */}
                {currentNews.description && (
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 400,
                      fontSize: '20px',
                      lineHeight: '24px',
                      color: '#111111',
                      maxWidth: '382px',
                      marginTop: '30px',
                    }}
                  >
                    {currentNews.description}
                  </p>
                )}
              </div>

              {/* PDF Download Button (if applicable) */}
              {currentNews.hasPdf && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="absolute flex justify-center items-center"
                  style={{
                    width: '228px',
                    height: '40px',
                    left: '312px',
                    top: '452px',
                    background: 'rgba(255, 0, 4, 0.7)',
                    backdropFilter: 'blur(14.76px)',
                    borderRadius: '8px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '20px',
                      color: '#FFFFFF',
                    }}
                  >
                    Download PDF
                  </span>
                </motion.button>
              )}

              {/* Navigation Buttons */}
              <div
                className="absolute flex items-center"
                style={{
                  left: '45px',
                  top: '451px',
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
                    border: '1px solid rgba(45, 74, 45, 0.48)',
                    opacity: 0.4,
                  }}
                >
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                  >
                    <path
                      d="M6 1L1 6.5L6 12M1 6.5H15"
                      stroke="rgba(45, 74, 45, 0.48)"
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
                    border: '1px solid #14211A',
                  }}
                >
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                  >
                    <path
                      d="M10 1L15 6.5L10 12M15 6.5H1"
                      stroke="#14211A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Montserrat:wght@400;500;600;700&display=swap');

        @font-face {
          font-family: 'Baron Neue';
          src: url('/fonts/BaronNeue.otf') format('opentype');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        .baron-neue {
          font-family: 'Baron Neue', 'Poppins', sans-serif;
        }
      `}</style>
    </section>
  );
}

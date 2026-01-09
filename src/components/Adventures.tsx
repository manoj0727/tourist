'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const treks = [
  {
    id: 1,
    label: 'Trek 1',
    name: 'Shanti shikhar',
    from: 'Limdi Kothi to',
    description:
      'This is a calm and refreshing trek through forested paths of the Aravalli hills. The route is shaded and rich in natural vegetation, making it pleasant even during warmer months. Shanti Shikhar offers quiet surroundings and scenic views, ideal for relaxation and nature appreciation. The trek is easy to moderate and suitable for beginners.',
    guide: 'Rabisankar Mishra',
    images: {
      main: '/images/3-1.jpg',
      top: '/images/3-2.jpg',
      bottom: '/images/3-3.jpg',
    },
  },
  {
    id: 2,
    label: 'Trek 2',
    name: 'Aadesh cave',
    from: 'Forest Trail to',
    description:
      'Explore the mystical Aadesh Cave through scenic forest trails. This moderate trek takes you through dense vegetation and rocky terrain, offering glimpses of local wildlife and breathtaking valley views. The cave itself is a natural wonder with unique rock formations.',
    guide: 'Mohan Singh',
    images: {
      main: '/images/3-2.jpg',
      top: '/images/3-3.jpg',
      bottom: '/images/3-1.jpg',
    },
  },
  {
    id: 3,
    label: 'Trek 3',
    name: 'Craigs point',
    from: 'Sunset Point to',
    description:
      'A scenic trek leading to one of the most spectacular viewpoints in Mount Abu. Craigs Point offers panoramic views of the surrounding valleys and is particularly stunning during sunrise. The trail passes through mixed forests with diverse flora and fauna.',
    guide: 'Lakshman Rao',
    images: {
      main: '/images/3-3.jpg',
      top: '/images/3-1.jpg',
      bottom: '/images/3-2.jpg',
    },
  },
  {
    id: 4,
    label: 'Trek 4',
    name: 'Table Rock',
    from: 'Base Camp to',
    description:
      'Table Rock trek is an adventurous journey to a unique flat-topped rock formation. The trail offers challenging terrain for experienced trekkers with rewarding views at the summit. Perfect for photography enthusiasts and adventure seekers.',
    guide: 'Vijay Kumar',
    images: {
      main: '/images/3-1.jpg',
      top: '/images/3-3.jpg',
      bottom: '/images/3-2.jpg',
    },
  },
];

export default function Adventures() {
  const [activeTrek, setActiveTrek] = useState(0);
  const currentTrek = treks[activeTrek];

  const handlePrev = () => {
    setActiveTrek((prev) => (prev - 1 + treks.length) % treks.length);
  };

  const handleNext = () => {
    setActiveTrek((prev) => (prev + 1) % treks.length);
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
      {/* Background Image with Overlay */}
      <div
        className="absolute"
        style={{
          width: '1550.4px',
          height: '974.61px',
          left: 'calc(50% - 1550.4px/2 - 0.73px)',
          top: 'calc(50% - 974.61px/2 - 0.19px)',
        }}
      >
        <Image
          src="/images/bg3.jpg"
          alt="Background"
          fill
          className="object-cover"
          style={{
            mixBlendMode: 'overlay',
            opacity: 0.54,
          }}
        />
      </div>

      {/* Gradient Overlays */}
      {/* Top gradient */}
      <div
        className="absolute"
        style={{
          width: '1441.25px',
          height: '212.18px',
          left: 'calc(50% - 1441.25px/2 - 0.73px)',
          top: 0,
          background: 'linear-gradient(180deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />
      {/* Bottom gradient */}
      <div
        className="absolute"
        style={{
          width: '1441.25px',
          height: '212.18px',
          left: 'calc(50% - 1441.25px/2 - 0.23px)',
          bottom: 0,
          background: 'linear-gradient(0deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />
      {/* Left gradient */}
      <div
        className="absolute"
        style={{
          width: '356.37px',
          height: '974.22px',
          left: '-0.23px',
          top: 'calc(50% - 974.22px/2)',
          background: 'linear-gradient(90deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />
      {/* Right gradient */}
      <div
        className="absolute"
        style={{
          width: '193.09px',
          height: '939.85px',
          right: 0,
          top: 'calc(50% - 939.85px/2)',
          background: 'linear-gradient(270deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute flex flex-col items-center"
        style={{
          width: '1190px',
          left: 'calc(50% - 1190px/2 - 0.23px)',
          top: 'calc(50% - 78px/2 - 332.09px)',
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
          Adventures
        </p>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '40px',
            fontWeight: 500,
            lineHeight: '54px',
            textAlign: 'center',
            textTransform: 'capitalize',
            color: '#FFFFFF',
          }}
        >
          Eco tourism & adventures
        </h2>
      </motion.div>

      {/* Navigation Arrows */}
      <div
        className="absolute flex items-center"
        style={{
          gap: '12px',
          left: '1235.93px',
          top: '743.89px',
        }}
      >
        {/* Previous Button */}
        <motion.button
          onClick={handlePrev}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
          style={{
            width: '44px',
            height: '44px',
            opacity: 0.4,
          }}
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <circle cx="22" cy="22" r="21" stroke="#FFFFFF" strokeWidth="1" />
            <path d="M25 15L18 22L25 29" stroke="#FFFFFF" strokeWidth="1.5" />
          </svg>
        </motion.button>

        {/* Next Button */}
        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
          style={{
            width: '44px',
            height: '44px',
          }}
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <circle cx="22" cy="22" r="21" stroke="#D4AF37" strokeWidth="1" />
            <path d="M19 15L26 22L19 29" stroke="#D4AF37" strokeWidth="1.5" />
          </svg>
        </motion.button>
      </div>

      {/* Image Grid - Right Side */}
      <motion.div
        key={activeTrek}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute"
        style={{
          width: '483.43px',
          height: '373.41px',
          left: '852.49px',
          top: 'calc(50% - 373.41px/2)',
        }}
      >
        {/* Main Large Image */}
        <div
          className="absolute overflow-hidden"
          style={{
            width: '299.53px',
            height: '373.41px',
            left: 0,
            top: 0,
            borderRadius: '13.0119px',
          }}
        >
          <Image
            src={currentTrek.images.main}
            alt={currentTrek.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Top Right Small Image */}
        <div
          className="absolute overflow-hidden"
          style={{
            width: '166.56px',
            height: '143.62px',
            left: '316.87px',
            top: 0,
            borderRadius: '13.0119px',
          }}
        >
          <Image
            src={currentTrek.images.top}
            alt={`${currentTrek.name} activity`}
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Right Image */}
        <div
          className="absolute overflow-hidden"
          style={{
            width: '166.56px',
            height: '212.44px',
            left: '316.87px',
            top: '160.97px',
            borderRadius: '13.0119px',
          }}
        >
          <Image
            src={currentTrek.images.bottom}
            alt={`${currentTrek.name} view`}
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Content - Left Side */}
      <motion.div
        key={`content-${activeTrek}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute flex flex-col"
        style={{
          width: '652px',
          left: '112px',
          top: '288.89px',
          gap: '24px',
        }}
      >
        {/* Title Section */}
        <div className="flex flex-col" style={{ gap: '20px' }}>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '24px',
              textTransform: 'capitalize',
              color: '#F5F2E9',
            }}
          >
            {currentTrek.from}
          </p>
          <h3
            className="baron-neue"
            style={{
              fontSize: '32px',
              lineHeight: '32px',
              color: '#D4AF37',
            }}
          >
            {currentTrek.name}
          </h3>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '28px',
            color: '#F5F2E9',
          }}
        >
          {currentTrek.description}
        </p>

        {/* Guide */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '24px',
            textTransform: 'capitalize',
            color: '#D4AF37',
          }}
        >
          Official Guides- {currentTrek.guide}
        </p>
      </motion.div>

      {/* Trek Timeline/Tabs */}
      <div
        className="absolute"
        style={{
          width: '810px',
          height: '76px',
          left: 0,
          top: '623.89px',
        }}
      >
        {/* Progress Line */}
        <div
          className="absolute"
          style={{
            width: '764.31px',
            height: '2.94px',
            left: 0,
            top: '32.7px',
            background:
              'linear-gradient(90deg, rgba(161, 133, 42, 0) 0%, #D4AF37 21.63%, rgba(110, 91, 29, 0.1) 54.37%)',
          }}
        />

        {/* Trek Tabs */}
        <div
          className="absolute flex items-center"
          style={{
            gap: '72px',
            left: '112.29px',
            top: 0,
          }}
        >
          {treks.map((trek, index) => (
            <motion.button
              key={trek.id}
              onClick={() => setActiveTrek(index)}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-start"
              style={{
                gap: '16px',
                opacity: index === activeTrek ? 1 : 0.55,
              }}
            >
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: '15px',
                  textTransform: 'capitalize',
                  color: '#F5F2E9',
                }}
              >
                {trek.label}
              </p>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: index === activeTrek ? '#D4AF37' : '#79631E',
                }}
              />
              <p
                className="baron-neue"
                style={{
                  fontSize: '16px',
                  lineHeight: '16px',
                  textAlign: 'center',
                  color: '#D4AF37',
                }}
              >
                {trek.name}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <motion.button
        whileHover={{ scale: 1.02, background: 'rgba(212, 175, 55, 0.6)' }}
        whileTap={{ scale: 0.98 }}
        className="absolute flex items-center justify-center"
        style={{
          width: '171px',
          height: '48px',
          left: '112px',
          top: '751.89px',
          padding: '12px 24px',
          gap: '10px',
          background: 'rgba(212, 175, 55, 0.44)',
          backdropFilter: 'blur(2px)',
          borderRadius: '6px',
        }}
      >
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            textDecoration: 'underline',
            color: '#FFFFFF',
          }}
        >
          View More
        </span>
      </motion.button>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

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

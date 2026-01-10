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
      className="relative overflow-hidden mx-auto w-full max-w-[1440px] min-h-[700px] md:min-h-[850px] lg:min-h-[975px]"
      style={{
        background: '#17261E',
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
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
        className="absolute left-0 right-0 top-0 h-[150px] md:h-[212px]"
        style={{
          background: 'linear-gradient(180deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />
      {/* Bottom gradient */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[150px] md:h-[212px]"
        style={{
          background: 'linear-gradient(0deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />
      {/* Left gradient */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[100px] md:w-[250px] lg:w-[356px]"
        style={{
          background: 'linear-gradient(90deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />
      {/* Right gradient */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[50px] md:w-[120px] lg:w-[193px]"
        style={{
          background: 'linear-gradient(270deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1190px] mx-auto px-4 sm:px-6 lg:px-0 pt-12 md:pt-16 lg:pt-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-12"
        >
          <p
            className="baron-neue text-lg md:text-xl lg:text-2xl text-center"
            style={{
              lineHeight: '24px',
              color: '#D4AF37',
            }}
          >
            Adventures
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-[40px] font-medium text-center capitalize"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              lineHeight: '1.35',
              color: '#FFFFFF',
            }}
          >
            Eco tourism & adventures
          </h2>
        </motion.div>

        {/* Content Grid - Stacks on mobile */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8 md:mt-12">
          {/* Content - Left Side */}
          <motion.div
            key={`content-${activeTrek}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col w-full lg:w-[55%] xl:w-[652px] gap-4 md:gap-6 order-2 lg:order-1"
          >
            {/* Title Section */}
            <div className="flex flex-col gap-3 md:gap-5">
              <p
                className="text-base md:text-lg lg:text-xl font-medium capitalize"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  lineHeight: '24px',
                  color: '#F5F2E9',
                }}
              >
                {currentTrek.from}
              </p>
              <h3
                className="baron-neue text-2xl md:text-[28px] lg:text-[32px]"
                style={{
                  lineHeight: '1',
                  color: '#D4AF37',
                }}
              >
                {currentTrek.name}
              </h3>
            </div>

            {/* Description */}
            <p
              className="text-base md:text-lg lg:text-xl font-medium"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: '1.4',
                color: '#F5F2E9',
              }}
            >
              {currentTrek.description}
            </p>

            {/* Guide */}
            <p
              className="text-base md:text-lg lg:text-xl font-medium capitalize"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: '24px',
                color: '#D4AF37',
              }}
            >
              Official Guides- {currentTrek.guide}
            </p>
          </motion.div>

          {/* Image Grid - Right Side */}
          <motion.div
            key={activeTrek}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full lg:w-[45%] xl:w-[483px] h-[280px] sm:h-[320px] md:h-[373px] order-1 lg:order-2"
          >
            {/* Main Large Image */}
            <div
              className="absolute overflow-hidden left-0 top-0 w-[60%] md:w-[62%] h-full rounded-xl md:rounded-[13px]"
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
              className="absolute overflow-hidden right-0 top-0 w-[35%] md:w-[34%] h-[38%] rounded-xl md:rounded-[13px]"
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
              className="absolute overflow-hidden right-0 bottom-0 w-[35%] md:w-[34%] h-[57%] rounded-xl md:rounded-[13px]"
            >
              <Image
                src={currentTrek.images.bottom}
                alt={`${currentTrek.name} view`}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Trek Timeline/Tabs */}
        <div className="relative mt-8 md:mt-12 lg:mt-16 w-full max-w-[810px]">
          {/* Progress Line */}
          <div
            className="absolute left-0 right-0 top-[32px] h-[3px] hidden sm:block"
            style={{
              background:
                'linear-gradient(90deg, rgba(161, 133, 42, 0) 0%, #D4AF37 21.63%, rgba(110, 91, 29, 0.1) 54.37%)',
            }}
          />

          {/* Trek Tabs */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-8 md:gap-12 lg:gap-[72px] justify-center sm:justify-start">
            {treks.map((trek, index) => (
              <motion.button
                key={trek.id}
                onClick={() => setActiveTrek(index)}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center sm:items-start gap-2 sm:gap-4"
                style={{
                  opacity: index === activeTrek ? 1 : 0.55,
                }}
              >
                <p
                  className="text-xs font-medium capitalize hidden sm:block"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    lineHeight: '15px',
                    color: '#F5F2E9',
                  }}
                >
                  {trek.label}
                </p>
                <div
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
                  style={{
                    background: index === activeTrek ? '#D4AF37' : '#79631E',
                  }}
                />
                <p
                  className="baron-neue text-xs sm:text-sm lg:text-base text-center"
                  style={{
                    lineHeight: '16px',
                    color: '#D4AF37',
                  }}
                >
                  {trek.name}
                </p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Bottom Row - View More Button and Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-8 md:mt-12 pb-12 md:pb-16 lg:pb-24">
          {/* View More Button */}
          <motion.button
            whileHover={{ scale: 1.02, background: 'rgba(212, 175, 55, 0.6)' }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center w-full sm:w-auto min-w-[171px] h-12 px-6 py-3 rounded-md"
            style={{
              gap: '10px',
              background: 'rgba(212, 175, 55, 0.44)',
              backdropFilter: 'blur(2px)',
            }}
          >
            <span
              className="text-base font-normal underline"
              style={{
                fontFamily: "'Poppins', sans-serif",
                lineHeight: '24px',
                color: '#FFFFFF',
              }}
            >
              View More
            </span>
          </motion.button>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            {/* Previous Button */}
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 md:w-11 md:h-11"
              style={{
                opacity: 0.4,
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="21" stroke="#FFFFFF" strokeWidth="1" />
                <path d="M25 15L18 22L25 29" stroke="#FFFFFF" strokeWidth="1.5" />
              </svg>
            </motion.button>

            {/* Next Button */}
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 md:w-11 md:h-11"
            >
              <svg width="100%" height="100%" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="21" stroke="#D4AF37" strokeWidth="1" />
                <path d="M19 15L26 22L19 29" stroke="#D4AF37" strokeWidth="1.5" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

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

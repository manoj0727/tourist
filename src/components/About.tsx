'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section
      className="relative overflow-hidden mx-auto w-full max-w-[1440px] min-h-[800px] md:min-h-[1200px] lg:min-h-[1450px]"
      style={{
        background: '#F5F2E9',
      }}
    >
      {/* Dark background behind cloud - matches HiddenPlaces bottom */}
      <div
        className="absolute left-0 right-0 top-0 h-[60px] md:h-[80px] lg:h-[100px]"
        style={{
          background: '#132019',
          zIndex: 1,
        }}
      />

      {/* Cloud Border - Vector shape */}
      <div
        className="relative w-full h-[60px] md:h-[80px] lg:h-[100px]"
        style={{
          zIndex: 10,
        }}
      >
        <Image
          src="/images/bg15.png"
          alt="Cloud border"
          fill
          className="object-cover"
          style={{
            objectFit: 'cover',
            objectPosition: 'bottom',
          }}
        />
      </div>


      {/* Background Pattern */}
      <div
        className="absolute w-full max-w-[1732px] h-[600px] md:h-[900px] lg:h-[1200px] left-1/2 -translate-x-1/2 top-[60px] md:top-[80px] lg:top-[100px] opacity-[0.14]"
      >
        <Image
          src="/images/bg4.jpg"
          alt="Background Pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* About 1 - Welcome to Mount Abu (Left Text, Right Image) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16 lg:pt-24"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div
            className="flex flex-col items-start w-full lg:w-[546px] order-2 lg:order-1"
            style={{ gap: '33px' }}
          >
            {/* Header */}
            <div
              className="flex flex-col items-start"
              style={{ gap: '26px', width: '100%' }}
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="baron-neue text-lg md:text-xl lg:text-2xl"
                style={{
                  lineHeight: '16px',
                  textAlign: 'center',
                  color: '#D4AF37',
                }}
              >
                About
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl lg:text-[32px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  lineHeight: '1.4',
                  textTransform: 'capitalize',
                  color: '#132019',
                }}
              >
                Welcome to Mount Abu
              </motion.h2>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                lineHeight: '1.4',
                color: '#132019',
              }}
            >
              Discover Rajasthan&apos;s Only Hill Station
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg lg:text-xl"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                lineHeight: '1.4',
                color: '#000000',
              }}
            >
              Nestled in the Aravalli Hills, Mount Abu is Rajasthan&apos;s only hill station—blessed with cool climate, lush greenery, serene lakes, and ancient temples. A perfect blend of nature, spirituality, and adventure, it welcomes travelers year-round.
            </motion.p>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative overflow-hidden w-full sm:w-[320px] md:w-[380px] lg:w-[420px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl order-1 lg:order-2 mx-auto lg:mx-0 flex-shrink-0"
          >
            <Image
              src="/images/5-2.png"
              alt="Sunset Point Mount Abu"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* About 2 - Nagar Palika Mount Abu (Left Image, Right Text) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full max-w-[1215px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative overflow-hidden w-full sm:w-[320px] md:w-[380px] lg:w-[420px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl mx-auto lg:mx-0 flex-shrink-0"
          >
            <Image
              src="/images/5-1.jpg"
              alt="Nagar Palika Building"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <div
            className="flex flex-col items-start lg:items-end w-full lg:w-[546px] text-left lg:text-right"
            style={{ gap: '33px' }}
          >
            {/* Header */}
            <div
              className="flex flex-col items-start lg:items-end"
              style={{ gap: '26px', width: '100%' }}
            >
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="baron-neue text-lg md:text-xl lg:text-2xl"
                style={{
                  lineHeight: '16px',
                  color: '#D4AF37',
                }}
              >
                About
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-2xl md:text-3xl lg:text-[40px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  lineHeight: '1.35',
                  textTransform: 'capitalize',
                  color: '#132019',
                }}
              >
                Nagar Palika Mount Abu
              </motion.h2>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base md:text-lg lg:text-xl"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                lineHeight: '1.4',
                color: '#132019',
              }}
            >
              Serving our community
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base md:text-lg lg:text-xl"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                lineHeight: '1.4',
                color: '#000000',
              }}
            >
              Nagar Palika Mount Abu is dedicated to developing and maintaining the city&apos;s beauty, infrastructure, and public services. With a focus on tourism, sustainability, and citizen welfare, it ensures Mount Abu remains clean, vibrant, and welcoming for all.
            </motion.p>
          </div>
        </div>
      </motion.div>

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

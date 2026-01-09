'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section
      className="relative overflow-hidden mx-auto"
      style={{
        width: '1440px',
        height: '1450px',
        background: '#F5F2E9',
      }}
    >
      {/* Dark background behind cloud - matches HiddenPlaces bottom */}
      <div
        className="absolute left-0 right-0 top-0"
        style={{
          height: '100px',
          background: '#132019',
          zIndex: 1,
        }}
      />

      {/* Cloud Border - Vector shape */}
      <div
        className="relative w-full"
        style={{
          height: '100px',
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
        className="absolute"
        style={{
          width: '1732px',
          height: '1200px',
          left: 'calc(50% - 1732px/2)',
          top: '100px',
          opacity: 0.14,
        }}
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
        className="absolute"
        style={{
          width: '1216px',
          height: '609px',
          left: '123px',
          top: '195px',
        }}
      >
        {/* Left Content */}
        <div
          className="absolute flex flex-col items-start"
          style={{
            width: '546px',
            left: 0,
            top: '62px',
            gap: '33px',
          }}
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
              className="baron-neue"
              style={{
                fontSize: '24px',
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
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: '32px',
                lineHeight: '44px',
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
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '28px',
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
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '28px',
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
          className="absolute overflow-hidden"
          style={{
            width: '420px',
            height: '450px',
            left: '700px',
            top: '80px',
            borderRadius: '12px',
          }}
        >
          <Image
            src="/images/5-2.png"
            alt="Sunset Point Mount Abu"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* About 2 - Nagar Palika Mount Abu (Left Image, Right Text) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute"
        style={{
          width: '1215px',
          height: '598px',
          left: '106px',
          top: '720px',
        }}
      >
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute overflow-hidden"
          style={{
            width: '420px',
            height: '450px',
            left: 0,
            top: '80px',
            borderRadius: '12px',
          }}
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
          className="absolute flex flex-col items-end"
          style={{
            width: '546px',
            left: '669px',
            top: '204px',
            gap: '33px',
          }}
        >
          {/* Header */}
          <div
            className="flex flex-col items-end"
            style={{ gap: '26px', width: '100%' }}
          >
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="baron-neue"
              style={{
                fontSize: '24px',
                lineHeight: '16px',
                textAlign: 'center',
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
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: '40px',
                lineHeight: '54px',
                textAlign: 'right',
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
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '28px',
              textAlign: 'right',
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
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '28px',
              textAlign: 'right',
              color: '#000000',
            }}
          >
            Nagar Palika Mount Abu is dedicated to developing and maintaining the city&apos;s beauty, infrastructure, and public services. With a focus on tourism, sustainability, and citizen welfare, it ensures Mount Abu remains clean, vibrant, and welcoming for all.
          </motion.p>
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

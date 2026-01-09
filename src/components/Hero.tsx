'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const leaders = [
    {
      name: 'Shri Bhajan Lal Sharma',
      title: 'Chief Minister, Rajasthan',
      image: '/images/cm-rajasthan.png',
    },
    {
      name: 'Shri Jhabar Singh Kharra',
      title: "Hon'ble Minister of UDH",
      image: '/images/minister-udh.png',
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden mx-auto"
      style={{
        width: '1440px',
        height: '912px',
      }}
    >
      {/* Background Image */}
      <div
        className="absolute"
        style={{
          width: '1752.2px',
          height: '1095.12px',
          left: 'calc(50% - 1752.2px/2 + 8.16px)',
          top: 'calc(50% - 1095.12px/2)',
        }}
      >
        <Image
          src="/images/hero1.png"
          alt="Mount Abu"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Premium Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Bottom Gradient - connects smoothly with ImageSlider */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '280px',
          background: 'linear-gradient(0deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
          zIndex: 5,
        }}
      />

      {/* Main Hero Content - Left Aligned */}
      <div className="absolute z-10" style={{ left: '80px', top: '280px' }}>
        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
          style={{
            width: '60px',
            height: '3px',
            background: 'linear-gradient(90deg, #D4AF37 0%, #F7BE03 100%)',
          }}
        />

        {/* Majestic - Elegant Accent Text */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: '24px',
            letterSpacing: '12px',
            textTransform: 'uppercase',
            color: '#D4AF37',
            marginBottom: '16px',
          }}
        >
          Majestic
        </motion.p>

        {/* Mount Abu - Main Title with Premium Styling */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: '140px',
            lineHeight: '0.9',
            color: '#FFFFFF',
            textShadow: '0 4px 30px rgba(0,0,0,0.4), 0 8px 60px rgba(0,0,0,0.2)',
            letterSpacing: '-4px',
          }}
        >
          Mount
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: '140px',
            lineHeight: '1',
            color: '#FFFFFF',
            textShadow: '0 4px 30px rgba(0,0,0,0.4), 0 8px 60px rgba(0,0,0,0.2)',
            letterSpacing: '-4px',
            marginTop: '-10px',
          }}
        >
          Abu
        </motion.h1>

        {/* Subtitle with Golden Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center mt-8"
          style={{ gap: '16px' }}
        >
          <div
            style={{
              width: '40px',
              height: '1px',
              background: 'rgba(255,255,255,0.5)',
            }}
          />
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            Rajasthan&apos;s Only Hill Station
          </p>
        </motion.div>

        {/* Decorative Bottom Line */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-8"
          style={{
            width: '120px',
            height: '2px',
            background: 'linear-gradient(90deg, #D4AF37 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Dilwara Jain Temple Text - Repositioned */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute z-10"
        style={{
          right: '80px',
          top: '320px',
          textAlign: 'right',
        }}
      >
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: '14px',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '8px',
          }}
        >
          Featured Destination
        </p>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '1.2',
            color: '#F7BE03',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
          }}
        >
          Dilwara Jain
        </h2>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '1.2',
            color: '#F7BE03',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
          }}
        >
          Temple
        </h2>
      </motion.div>

      {/* Explore Indicator - Center Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute z-10 left-1/2 -translate-x-1/2"
        style={{
          bottom: '60px',
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
          style={{ gap: '8px' }}
        >
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            Explore
          </span>
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Leader Cards - Bottom Right Corner */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute flex flex-row items-center z-20"
        style={{
          right: '20px',
          bottom: '40px',
          gap: '21px',
        }}
      >
        {leaders.map((leader, index) => (
          <motion.div
            key={leader.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
            className="flex flex-col justify-center items-center"
            style={{
              width: '183px',
              height: '252.45px',
              padding: '18px',
              gap: '20px',
              background: 'rgba(19, 32, 25, 0.3)',
              border: '1px solid #D4AF37',
              backdropFilter: 'blur(8px)',
              borderRadius: '12.8px',
            }}
          >
            {/* Profile Image */}
            <div
              className="relative overflow-hidden"
              style={{
                width: '115px',
                height: '115px',
                background: 'rgba(245, 242, 233, 0.11)',
                backdropFilter: 'blur(0.46px)',
                borderRadius: '125.35px',
                border: '2px solid rgba(212, 175, 55, 0.3)',
              }}
            >
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Name and Title */}
            <div
              className="flex flex-col justify-center items-center"
              style={{ gap: '10px' }}
            >
              <p
                className="text-center capitalize"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '20px',
                  color: '#F5F2E9',
                }}
              >
                {leader.name}
              </p>
              <p
                className="text-center"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: '13px',
                  lineHeight: '18px',
                  color: 'rgba(245, 242, 233, 0.7)',
                }}
              >
                {leader.title}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;

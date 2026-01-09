'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AppDownload() {
  return (
    <section
      className="relative overflow-hidden mx-auto"
      style={{
        width: '1440px',
        height: '662px',
        background: '#121E17',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg12.jpg"
          alt="Background"
          fill
          className="object-cover"
          style={{ opacity: 0.3 }}
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

      {/* Bottom Gradient - connects with ConnectWithUs top */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '280px',
          background: 'linear-gradient(0deg, #121E17 0%, rgba(18, 30, 23, 0) 100%)',
        }}
      />

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute"
        style={{
          width: '1280px',
          height: '385px',
          left: 'calc(50% - 1280px/2)',
          top: 'calc(50% - 385px/2 - 35px)',
          background: '#F5F2E9',
          borderRadius: '24px',
          overflow: 'hidden',
        }}
      >
        {/* Left Gradient Fade */}
        <div
          className="absolute left-0 top-0 bottom-0"
          style={{
            width: '184px',
            background: 'linear-gradient(270deg, rgba(245, 242, 233, 0) 0%, #F5F2E9 100%)',
            zIndex: 10,
          }}
        />

        {/* Right Gradient Fade */}
        <div
          className="absolute right-0 top-0 bottom-0"
          style={{
            width: '160px',
            background: 'linear-gradient(90deg, rgba(245, 242, 233, 0) 0%, #F5F2E9 100%)',
            zIndex: 10,
          }}
        />

        {/* Left Content - Positioned absolutely */}
        <div
          className="absolute flex flex-col justify-center items-start"
          style={{
            width: '436px',
            left: '80px',
            top: '44px',
            gap: '28px',
            zIndex: 5,
          }}
        >
          {/* Text Content */}
          <div
            className="flex flex-col items-start"
            style={{
              width: '436px',
              gap: '12px',
            }}
          >
            <h2
              className="baron-neue"
              style={{
                fontSize: '32px',
                lineHeight: '32px',
                fontWeight: 900,
                textTransform: 'capitalize',
                color: '#121E17',
              }}
            >
              Get our application
            </h2>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '17px',
                color: '#17261E',
                width: '436px',
              }}
            >
              Complete digital companion: Instant token approvals with QR tracking,
              real-time complaint filing & status updates with photo evidence,
              essential certificates access, live municipal alerts, ward maps,
              & 24/7 service dashboard—all from your phone
            </p>
          </div>

          {/* QR Code Boxes */}
          <div
            className="flex items-start"
            style={{
              gap: '28px',
            }}
          >
            {/* Google Play QR */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center"
              style={{
                width: '140px',
                height: '140px',
                background: '#FFFFFF',
                border: '0.57px solid #D4D4D4',
                borderRadius: '7px',
              }}
            >
              {/* Google Play Logo */}
              <svg width="82" height="90" viewBox="0 0 82 90" fill="none">
                <path d="M5.5 2.5L45.5 45L5.5 87.5C3.5 85.5 2 82 2 78V12C2 8 3.5 4.5 5.5 2.5Z" fill="#4285F4"/>
                <path d="M5.5 2.5L45.5 45L60 30L15 2C12 0 8 0.5 5.5 2.5Z" fill="#34A853"/>
                <path d="M45.5 45L60 60L15 88C12 90 8 89.5 5.5 87.5L45.5 45Z" fill="#FCBC03"/>
                <path d="M45.5 45L60 30L80 42C82 43.5 82 46.5 80 48L60 60L45.5 45Z" fill="#EA4335"/>
              </svg>
            </motion.div>

            {/* App Store QR */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center"
              style={{
                width: '140px',
                height: '140px',
                background: '#FFFFFF',
                border: '0.57px solid #D4D4D4',
                borderRadius: '7px',
              }}
            >
              {/* Apple Logo */}
              <svg width="61" height="75" viewBox="0 0 61 75" fill="none">
                <path d="M50.4 39.5c-.1-8.7 7.1-12.9 7.4-13.1-4-5.9-10.3-6.7-12.5-6.8-5.3-.5-10.4 3.1-13.1 3.1-2.7 0-6.9-3.1-11.3-3-5.8.1-11.2 3.4-14.2 8.6-6.1 10.5-1.6 26.1 4.4 34.6 2.9 4.2 6.4 8.9 10.9 8.7 4.4-.2 6.1-2.8 11.4-2.8 5.3 0 6.9 2.8 11.5 2.7 4.7-.1 7.7-4.3 10.6-8.5 3.3-4.9 4.7-9.6 4.8-9.8-.1-.1-9.2-3.5-9.3-14 0-8.6 7-12.7 7.3-12.9-4-5.9-10.2-6.6-12.4-6.7l.5-.1zM41.1 13.1c2.4-2.9 4-6.9 3.6-10.9-3.5.1-7.7 2.3-10.2 5.2-2.2 2.6-4.2 6.7-3.7 10.7 3.9.3 7.9-2 10.3-5z" fill="#000"/>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Phone Mockup Image */}
        <div
          className="absolute"
          style={{
            width: '728px',
            height: '385px',
            right: '-100px',
            top: 0,
          }}
        >
          {/* Phone Image */}
          <Image
            src="/images/12-1.jpg"
            alt="Hand holding smartphone"
            fill
            className="object-cover"
            style={{
              objectPosition: 'center',
            }}
          />

          {/* Logo Overlay - positioned on phone screen area */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              width: '104px',
              height: '220px',
              left: '233px',
              top: '128px',
              background: 'rgba(219, 214, 214, 0.75)',
              borderRadius: '12px',
            }}
          >
            <div className="relative" style={{ width: '70px', height: '80px' }}>
              <Image
                src="/nav_img.png"
                alt="Nagar Palika Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </motion.div>

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

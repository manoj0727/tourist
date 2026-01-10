'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AppDownload() {
  return (
    <section
      className="relative overflow-hidden mx-auto w-full max-w-[1440px] min-h-[500px] md:min-h-[662px]"
      style={{
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
        className="absolute left-0 right-0 top-0 h-[120px] md:h-[218px]"
        style={{
          background: 'linear-gradient(180deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Bottom Gradient - connects with ConnectWithUs top */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[150px] md:h-[280px]"
        style={{
          background: 'linear-gradient(0deg, #121E17 0%, rgba(18, 30, 23, 0) 100%)',
        }}
      />

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative md:absolute w-[calc(100%-32px)] max-w-[1280px] mx-auto md:left-1/2 md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-[calc(50%+35px)] my-8 md:my-0"
        style={{
          background: '#F5F2E9',
          borderRadius: '24px',
          overflow: 'hidden',
        }}
      >
        {/* Left Gradient Fade - Hidden on mobile */}
        <div
          className="absolute left-0 top-0 bottom-0 hidden md:block w-[100px] lg:w-[184px]"
          style={{
            background: 'linear-gradient(270deg, rgba(245, 242, 233, 0) 0%, #F5F2E9 100%)',
            zIndex: 10,
          }}
        />

        {/* Right Gradient Fade - Hidden on mobile */}
        <div
          className="absolute right-0 top-0 bottom-0 hidden md:block w-[80px] lg:w-[160px]"
          style={{
            background: 'linear-gradient(90deg, rgba(245, 242, 233, 0) 0%, #F5F2E9 100%)',
            zIndex: 10,
          }}
        />

        {/* Content Container - Flexbox for responsive layout */}
        <div className="flex flex-col md:flex-row md:items-stretch min-h-[385px]">
          {/* Left Content */}
          <div
            className="relative flex flex-col justify-center items-center md:items-start p-6 sm:p-8 md:p-0 md:pl-10 lg:pl-20 md:py-11 gap-5 md:gap-7 w-full md:w-1/2 lg:w-[436px] flex-shrink-0"
            style={{
              zIndex: 5,
            }}
          >
            {/* Text Content */}
            <div className="flex flex-col items-center md:items-start gap-3 w-full max-w-[436px]">
              <h2
                className="baron-neue text-center md:text-left text-2xl sm:text-[28px] md:text-[32px] leading-tight"
                style={{
                  fontWeight: 900,
                  textTransform: 'capitalize',
                  color: '#121E17',
                }}
              >
                Get our application
              </h2>
              <p
                className="text-center md:text-left text-sm leading-[17px] w-full max-w-[436px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  color: '#17261E',
                }}
              >
                Complete digital companion: Instant token approvals with QR tracking,
                real-time complaint filing & status updates with photo evidence,
                essential certificates access, live municipal alerts, ward maps,
                & 24/7 service dashboard—all from your phone
              </p>
            </div>

            {/* QR Code Boxes */}
            <div className="flex items-start gap-4 sm:gap-7">
              {/* Google Play QR */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] bg-white rounded-[7px]"
                style={{
                  border: '0.57px solid #D4D4D4',
                }}
              >
                {/* Google Play Logo */}
                <svg className="w-[60px] h-[66px] sm:w-[70px] sm:h-[78px] md:w-[82px] md:h-[90px]" viewBox="0 0 82 90" fill="none">
                  <path d="M5.5 2.5L45.5 45L5.5 87.5C3.5 85.5 2 82 2 78V12C2 8 3.5 4.5 5.5 2.5Z" fill="#4285F4"/>
                  <path d="M5.5 2.5L45.5 45L60 30L15 2C12 0 8 0.5 5.5 2.5Z" fill="#34A853"/>
                  <path d="M45.5 45L60 60L15 88C12 90 8 89.5 5.5 87.5L45.5 45Z" fill="#FCBC03"/>
                  <path d="M45.5 45L60 30L80 42C82 43.5 82 46.5 80 48L60 60L45.5 45Z" fill="#EA4335"/>
                </svg>
              </motion.div>

              {/* App Store QR */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] bg-white rounded-[7px]"
                style={{
                  border: '0.57px solid #D4D4D4',
                }}
              >
                {/* Apple Logo */}
                <svg className="w-[45px] h-[55px] sm:w-[52px] sm:h-[64px] md:w-[61px] md:h-[75px]" viewBox="0 0 61 75" fill="none">
                  <path d="M50.4 39.5c-.1-8.7 7.1-12.9 7.4-13.1-4-5.9-10.3-6.7-12.5-6.8-5.3-.5-10.4 3.1-13.1 3.1-2.7 0-6.9-3.1-11.3-3-5.8.1-11.2 3.4-14.2 8.6-6.1 10.5-1.6 26.1 4.4 34.6 2.9 4.2 6.4 8.9 10.9 8.7 4.4-.2 6.1-2.8 11.4-2.8 5.3 0 6.9 2.8 11.5 2.7 4.7-.1 7.7-4.3 10.6-8.5 3.3-4.9 4.7-9.6 4.8-9.8-.1-.1-9.2-3.5-9.3-14 0-8.6 7-12.7 7.3-12.9-4-5.9-10.2-6.6-12.4-6.7l.5-.1zM41.1 13.1c2.4-2.9 4-6.9 3.6-10.9-3.5.1-7.7 2.3-10.2 5.2-2.2 2.6-4.2 6.7-3.7 10.7 3.9.3 7.9-2 10.3-5z" fill="#000"/>
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Phone Mockup Image */}
          <div className="relative w-full md:w-1/2 lg:flex-1 h-[250px] sm:h-[300px] md:h-[385px] md:-mr-[50px] lg:-mr-[100px]">
            {/* Phone Image */}
            <Image
              src="/images/12-1.jpg"
              alt="Hand holding smartphone"
              fill
              className="object-cover object-center"
            />

            {/* Logo Overlay - positioned on phone screen area */}
            <div
              className="absolute flex items-center justify-center w-[70px] h-[150px] sm:w-[85px] sm:h-[180px] md:w-[104px] md:h-[220px] left-1/2 -translate-x-1/2 md:left-[32%] md:translate-x-0 top-[20%] sm:top-[18%] md:top-[128px] rounded-xl"
              style={{
                background: 'rgba(219, 214, 214, 0.75)',
              }}
            >
              <div className="relative w-[45px] h-[52px] sm:w-[55px] sm:h-[65px] md:w-[70px] md:h-[80px]">
                <Image
                  src="/nav_img.png"
                  alt="Nagar Palika Logo"
                  fill
                  className="object-contain"
                />
              </div>
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

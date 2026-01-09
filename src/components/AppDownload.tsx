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
          src="/images/12-1.jpg"
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

      {/* Bottom Gradient */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '254px',
          background: 'linear-gradient(0deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute flex items-center justify-center"
        style={{
          width: '1280px',
          height: '385px',
          left: 'calc(50% - 1280px/2)',
          top: 'calc(50% - 385px/2 - 35px)',
          background: '#F5F2E9',
          borderRadius: '24px',
          overflow: 'hidden',
          gap: '118px',
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

        {/* Left Content */}
        <div
          className="flex flex-col justify-center items-start"
          style={{
            width: '436px',
            height: '297px',
            gap: '28px',
            zIndex: 5,
            paddingLeft: '80px',
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
              <svg width="70" height="85" viewBox="0 0 70 85" fill="none">
                <path d="M57.5 45C57.5 36 49 30 49 30C49 30 50 24 47 18C44 12 38 10 38 10C38 10 35 17 35 24C35 31 38 35 38 35C38 35 30 38 25 47C20 56 22 68 22 68C22 68 26 74 33 78C40 82 46 80 46 80C46 80 52 78 56 72C60 66 60 58 60 58C60 58 57.5 54 57.5 45Z" fill="#000"/>
                <path d="M38 0C38 0 32 2 32 10C32 18 38 22 38 22C38 22 44 20 44 12C44 4 38 0 38 0Z" fill="#000"/>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Phone Mockup */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: '451px',
            height: '385px',
          }}
        >
          {/* Background Image - Hand with Phone */}
          <div
            className="absolute"
            style={{
              width: '728px',
              height: '385px',
              left: '-140px',
              top: 0,
            }}
          >
            <Image
              src="/images/12-1.jpg"
              alt="Hand holding smartphone"
              fill
              className="object-cover"
              style={{
                objectPosition: 'center',
              }}
            />
          </div>

          {/* Phone Screen Overlay */}
          <div
            className="absolute overflow-hidden"
            style={{
              width: '122px',
              height: '261px',
              left: '183px',
              top: '44px',
              background: '#FFFFFF',
              borderRadius: '16px',
            }}
          >
            {/* App Preview with Logo */}
            <div
              className="flex flex-col items-center justify-center h-full"
              style={{
                background: 'linear-gradient(180deg, #1a3a2a 0%, #0d1f15 100%)',
                padding: '20px',
              }}
            >
              <div className="relative" style={{ width: '60px', height: '68px' }}>
                <Image
                  src="/nav_img.png"
                  alt="Nagar Palika Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p
                className="text-center mt-3"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '8px',
                  fontWeight: 600,
                  color: '#D4AF37',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Nagar Palika
              </p>
              <p
                className="text-center"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '7px',
                  fontWeight: 500,
                  color: '#F5F2E9',
                  textTransform: 'uppercase',
                }}
              >
                Mount Abu
              </p>

              {/* Mini Service Icons */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['Token', 'Complaint', 'Certificate', 'Alerts'].map((service) => (
                  <div
                    key={service}
                    className="flex flex-col items-center"
                    style={{
                      width: '40px',
                      padding: '4px',
                      background: 'rgba(212, 175, 55, 0.1)',
                      borderRadius: '4px',
                    }}
                  >
                    <div
                      style={{
                        width: '16px',
                        height: '16px',
                        background: '#D4AF37',
                        borderRadius: '4px',
                        marginBottom: '2px',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '5px',
                        color: '#F5F2E9',
                        textAlign: 'center',
                      }}
                    >
                      {service}
                    </span>
                  </div>
                ))}
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

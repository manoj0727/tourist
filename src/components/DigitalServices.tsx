'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Digital Construction Token',
    description: 'Instant eco-zone approvals with QR token generation',
    image: '/images/8-1.jpg',
    position: { left: '38px', top: '247px' },
    height: '473px',
  },
  {
    id: 2,
    title: 'Complaint Redressal & Tracking',
    description: 'File complaints without login, get real-time SMS updates',
    image: '/images/8-2.jpg',
    position: { left: '388px', top: '310px' },
    height: '473px',
  },
  {
    id: 3,
    title: 'Vital Certificates (Birth/Death)',
    description: 'Instant download from government portal',
    image: '/images/8-3.jpg',
    position: { left: '738px', top: '247px' },
    height: '473px',
  },
  {
    id: 4,
    title: 'Marriage Certificate',
    description: 'Register marriage digitally, get certified copy online',
    image: '/images/8-4.jpg',
    position: { left: '1088px', top: '310px' },
    height: '459px',
  },
];

export default function DigitalServices() {
  return (
    <section
      className="relative overflow-hidden mx-auto"
      style={{
        width: '1440px',
        height: '887px',
        background: '#14211A',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg8.jpg"
          alt="Background"
          fill
          className="object-cover"
          style={{ objectPosition: 'center top' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(100, 104, 42, 0.7)',
          }}
        />
      </div>

      {/* Top Gradient - connects with NewsUpdates bottom */}
      <div
        className="absolute left-0 right-0 top-0"
        style={{
          height: '250px',
          background: 'linear-gradient(180deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Bottom Gradient - connects with InfoGuidelines top */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '200px',
          background: 'linear-gradient(0deg, #17261E 0%, rgba(23, 38, 30, 0) 100%)',
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute flex flex-col justify-center items-center"
        style={{
          width: '572px',
          left: 'calc(50% - 572px/2)',
          top: '100px',
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
          Services
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
          Streamlined Digital Services
        </h2>
      </motion.div>

      {/* Service Cards */}
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 * index }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="absolute flex flex-col justify-center items-center"
          style={{
            width: '315px',
            height: service.height,
            left: service.position.left,
            top: service.position.top,
            padding: '24px',
            gap: '24px',
            background: 'rgba(19, 32, 25, 0.2)',
            border: '1px solid rgba(245, 242, 233, 0.16)',
            backdropFilter: 'blur(3px)',
            borderRadius: '17px',
            cursor: 'pointer',
          }}
        >
          {/* Card Image */}
          <div
            className="relative overflow-hidden"
            style={{
              width: '267px',
              height: '230px',
              borderRadius: '12px',
            }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Card Content */}
          <div
            className="flex flex-col justify-center items-start"
            style={{
              width: '267px',
              gap: '19px',
            }}
          >
            {/* Title */}
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '29px',
                textTransform: 'capitalize',
                color: '#F5F2E9',
              }}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '28px',
                color: '#F5F2E9',
              }}
            >
              {service.description}
            </p>

            {/* Read More Link */}
            <motion.span
              whileHover={{ x: 5 }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '17px',
                textDecoration: 'underline',
                color: '#D4AF37',
                cursor: 'pointer',
              }}
            >
              Read More
            </motion.span>
          </div>
        </motion.div>
      ))}

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

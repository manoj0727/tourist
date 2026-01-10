'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Digital Construction Token',
    description: 'Instant eco-zone approvals with QR token generation',
    image: '/images/8-1.jpg',
  },
  {
    id: 2,
    title: 'Complaint Redressal & Tracking',
    description: 'File complaints without login, get real-time SMS updates',
    image: '/images/8-2.jpg',
  },
  {
    id: 3,
    title: 'Vital Certificates (Birth/Death)',
    description: 'Instant download from government portal',
    image: '/images/8-3.jpg',
  },
  {
    id: 4,
    title: 'Marriage Certificate',
    description: 'Register marriage digitally, get certified copy online',
    image: '/images/8-4.jpg',
  },
];

export default function DigitalServices() {
  return (
    <section
      className="relative overflow-hidden mx-auto w-full max-w-[1440px] min-h-[887px] lg:h-[887px]"
      style={{
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
        className="absolute left-0 right-0 top-0 h-[150px] sm:h-[200px] lg:h-[250px]"
        style={{
          background: 'linear-gradient(180deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Bottom Gradient - connects with InfoGuidelines top */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[150px] sm:h-[200px]"
        style={{
          background: 'linear-gradient(0deg, #17261E 0%, rgba(23, 38, 30, 0) 100%)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-[100px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center w-full max-w-[572px] gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16"
        >
          <p
            className="baron-neue text-lg sm:text-xl lg:text-2xl text-center"
            style={{
              color: '#D4AF37',
            }}
          >
            Services
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-[40px] lg:leading-[54px] text-center capitalize"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              color: '#FFFFFF',
            }}
          >
            Streamlined Digital Services
          </h2>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="w-full max-w-[1400px] flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center md:items-start gap-6 lg:gap-4 xl:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`flex flex-col justify-center items-center w-full max-w-[315px] p-4 sm:p-6 gap-4 sm:gap-6 rounded-[17px] cursor-pointer ${index % 2 === 1 ? 'lg:mt-[63px]' : ''}`}
              style={{
                background: 'rgba(19, 32, 25, 0.2)',
                border: '1px solid rgba(245, 242, 233, 0.16)',
                backdropFilter: 'blur(3px)',
              }}
            >
              {/* Card Image */}
              <div
                className="relative overflow-hidden w-full max-w-[267px] h-[200px] sm:h-[230px] rounded-xl"
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
                className="flex flex-col justify-center items-start w-full max-w-[267px] gap-4 sm:gap-5"
              >
                {/* Title */}
                <h3
                  className="text-xl sm:text-2xl capitalize"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    lineHeight: '1.2',
                    color: '#F5F2E9',
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-base sm:text-lg lg:text-xl"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 500,
                    lineHeight: '1.4',
                    color: '#F5F2E9',
                  }}
                >
                  {service.description}
                </p>

                {/* Read More Link */}
                <motion.span
                  whileHover={{ x: 5 }}
                  className="text-sm underline cursor-pointer"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 500,
                    color: '#D4AF37',
                  }}
                >
                  Read More
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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

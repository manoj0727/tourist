'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const socialCards = [
  {
    id: 'facebook',
    title: 'Facebook',
    description: 'Follow updates, photos and announcements from Mount Abu Nagar Parishad.',
    image: '/images/13-1.png',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    description: 'See visual stories of events, initiatives and life in Mount Abu.',
    image: '/images/13-3.jpg',
  },
  {
    id: 'youtube',
    title: 'YouTube',
    description: 'Watch event coverage, public messages and awareness videos.',
    image: '/images/13-2.jpg',
  },
  {
    id: 'twitter',
    title: 'Twitter',
    description: 'Get quick alerts, notices and service updates in real time.',
    image: '/images/13-4.png',
  },
  {
    id: 'helpline',
    title: 'Helpline',
    description: 'Call for service assistance, complaints or emergency municipal support.',
    image: '/images/13-5.jpg',
  },
  {
    id: 'address',
    title: 'Office Address',
    description: 'Visit the Nagar Parishad office for in-person support and submissions.',
    image: '/images/13-6.jpg',
  },
];

export default function ConnectWithUs() {
  return (
    <section
      className="relative overflow-hidden mx-auto w-full max-w-[1440px] min-h-[800px] lg:min-h-[1044px] py-12 md:py-16 lg:py-0"
      style={{
        background: '#121E17',
      }}
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg13.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(19, 32, 25, 0.68)',
          }}
        />
      </div>

      {/* Top Gradient */}
      <div
        className="absolute left-0 right-0 top-0 h-[120px] md:h-[180px] lg:h-[220px]"
        style={{
          background: 'linear-gradient(180deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Bottom Gradient - Dark Green */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[120px] md:h-[180px] lg:h-[218px]"
        style={{
          background: 'linear-gradient(0deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Bottom Gradient - Brown/Olive transition to footer */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[150px] md:h-[220px] lg:h-[285px]"
        style={{
          background: 'linear-gradient(0deg, #4C4832 0%, rgba(76, 72, 50, 0) 100%)',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 gap-8 md:gap-12 lg:gap-[60px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center w-full gap-4 md:gap-5 lg:gap-[26px]"
        >
          <p
            className="baron-neue text-lg sm:text-xl md:text-2xl text-center"
            style={{
              lineHeight: '24px',
              color: '#D4AF37',
            }}
          >
            Connect With Us
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-center capitalize text-white px-2"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              lineHeight: '1.35',
            }}
          >
            Stay updated and reach out anytime
          </h2>
        </motion.div>

        {/* Cards Grid - Responsive Layout */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-[21px]">
          {/* Facebook Card - Full height on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-[#F5F2E9] rounded-[9px] overflow-hidden cursor-pointer border border-black/20 sm:row-span-2"
          >
            <div className="relative w-full h-[200px] sm:h-[280px] lg:h-[358px] rounded-b-[20px] overflow-hidden shadow-[inset_0px_-8px_40px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/13-1.png"
                alt="Facebook"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start p-4 lg:p-[16px_19px] gap-2 lg:gap-[9px]">
              <h3
                className="text-lg sm:text-xl lg:text-[23px] text-black"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  lineHeight: '125%',
                }}
              >
                Facebook
              </h3>
              <p
                className="text-sm lg:text-[14px] max-w-[357px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  lineHeight: '120%',
                  color: 'rgba(0, 0, 0, 0.4)',
                }}
              >
                Follow updates, photos and announcements from Mount Abu Nagar Parishad.
              </p>
            </div>
          </motion.div>

          {/* Instagram Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-[#F5F2E9] rounded-[9px] overflow-hidden cursor-pointer border border-black/20"
          >
            <div className="relative w-full h-[120px] sm:h-[100px] lg:h-[127px] rounded-b-[20px] overflow-hidden shadow-[inset_0px_-8px_40px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/13-3.jpg"
                alt="Instagram"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start p-4 lg:p-[16px_19px] gap-2 lg:gap-[9px]">
              <h3
                className="text-lg sm:text-xl lg:text-[23px] text-black"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  lineHeight: '125%',
                }}
              >
                Instagram
              </h3>
              <p
                className="text-sm lg:text-[14px] max-w-[357px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  lineHeight: '120%',
                  color: 'rgba(0, 0, 0, 0.4)',
                }}
              >
                See visual stories of events, initiatives and life in Mount Abu.
              </p>
            </div>
          </motion.div>

          {/* YouTube Card - Tall on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-[#F5F2E9] rounded-[9px] overflow-hidden cursor-pointer border border-black/20"
          >
            <div className="relative w-full h-[180px] sm:h-[180px] lg:h-[241px] rounded-b-[20px] overflow-hidden shadow-[inset_0px_-8px_40px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/13-2.jpg"
                alt="YouTube"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start p-4 lg:p-[16px_19px] gap-2 lg:gap-[9px]">
              <h3
                className="text-lg sm:text-xl lg:text-[23px] text-black"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  lineHeight: '125%',
                }}
              >
                YouTube
              </h3>
              <p
                className="text-sm lg:text-[14px] max-w-[357px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  lineHeight: '120%',
                  color: 'rgba(0, 0, 0, 0.4)',
                }}
              >
                Watch event coverage, public messages and awareness videos.
              </p>
            </div>
          </motion.div>

          {/* Twitter Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-[#F5F2E9] rounded-[9px] overflow-hidden cursor-pointer border border-black/20"
          >
            <div className="relative w-full h-[120px] sm:h-[100px] lg:h-[127px] rounded-b-[20px] overflow-hidden shadow-[inset_0px_-8px_40px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/13-4.png"
                alt="Twitter"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start p-4 lg:p-[16px_19px] gap-2 lg:gap-[9px]">
              <h3
                className="text-lg sm:text-xl lg:text-[23px] text-black"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  lineHeight: '125%',
                }}
              >
                Twitter
              </h3>
              <p
                className="text-sm lg:text-[14px] max-w-[357px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  lineHeight: '120%',
                  color: 'rgba(0, 0, 0, 0.4)',
                }}
              >
                Get quick alerts, notices and service updates in real time.
              </p>
            </div>
          </motion.div>

          {/* Helpline Card - Tall on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-[#F5F2E9] rounded-[9px] overflow-hidden cursor-pointer border border-black/20"
          >
            <div className="relative w-full h-[180px] sm:h-[180px] lg:h-[241px] rounded-b-[20px] overflow-hidden shadow-[inset_0px_-8px_40px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/13-5.jpg"
                alt="Helpline"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start p-4 lg:p-[16px_19px] gap-2 lg:gap-[9px]">
              <h3
                className="text-lg sm:text-xl lg:text-[23px] text-black"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  lineHeight: '125%',
                }}
              >
                Helpline
              </h3>
              <p
                className="text-sm lg:text-[14px] max-w-[357px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  lineHeight: '120%',
                  color: 'rgba(0, 0, 0, 0.4)',
                }}
              >
                Call for service assistance, complaints or emergency municipal support.
              </p>
            </div>
          </motion.div>

          {/* Office Address Card - Wide on desktop (spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-[#F5F2E9] rounded-[9px] overflow-hidden cursor-pointer border border-black/20 sm:col-span-2 lg:col-span-2"
          >
            <div className="relative w-full h-[120px] sm:h-[100px] lg:h-[136px] rounded-b-[20px] overflow-hidden shadow-[inset_0px_-8px_40px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/13-6.jpg"
                alt="Office Address"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start p-4 lg:p-[16px_19px] gap-2 lg:gap-[9px]">
              <h3
                className="text-lg sm:text-xl lg:text-[23px] text-black"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  lineHeight: '125%',
                }}
              >
                Office Address
              </h3>
              <p
                className="text-sm lg:text-[14px] max-w-full lg:max-w-[564px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  lineHeight: '120%',
                  color: 'rgba(0, 0, 0, 0.4)',
                }}
              >
                Visit the Nagar Parishad office for in-person support and submissions.
              </p>
            </div>
          </motion.div>
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

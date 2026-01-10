'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const tenders = [
  {
    id: 1,
    title: 'Tender Title',
    department: 'Department',
    estimatedValue: 'Estimated Value',
    bidClosingDate: 'Bid Closing Date',
  },
  {
    id: 2,
    title: 'Tender Title',
    department: 'Department',
    estimatedValue: 'Estimated Value',
    bidClosingDate: 'Bid Closing Date',
  },
  {
    id: 3,
    title: 'Tender Title',
    department: 'Department',
    estimatedValue: 'Estimated Value',
    bidClosingDate: 'Bid Closing Date',
  },
  {
    id: 4,
    title: 'Tender Title',
    department: 'Department',
    estimatedValue: 'Estimated Value',
    bidClosingDate: 'Bid Closing Date',
  },
  {
    id: 5,
    title: 'Tender Title',
    department: 'Department',
    estimatedValue: 'Estimated Value',
    bidClosingDate: 'Bid Closing Date',
  },
  {
    id: 6,
    title: 'Tender Title',
    department: 'Department',
    estimatedValue: 'Estimated Value',
    bidClosingDate: 'Bid Closing Date',
  },
  {
    id: 7,
    title: 'Tender Title',
    department: 'Department',
    estimatedValue: 'Estimated Value',
    bidClosingDate: 'Bid Closing Date',
  },
];

const tableHeaders = [
  'Tender Title',
  'Department',
  'Estimated Value',
  'Bid Closing Date',
  'NIT Download (PDF)',
];

export default function Tenders() {
  return (
    <section
      className="relative overflow-hidden mx-auto w-full max-w-[1440px] min-h-[800px] lg:min-h-[1211px] py-16 lg:py-0"
      style={{
        background: '#17261E',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg10.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Top Gradient - connects with InfoGuidelines bottom */}
      <div
        className="absolute left-0 right-0 top-0 h-[200px] lg:h-[350px]"
        style={{
          background: 'linear-gradient(180deg, #0a0f0c 0%, rgba(10, 15, 12, 0) 100%)',
        }}
      />

      {/* Bottom Gradient */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[150px] lg:h-[212px]"
        style={{
          background: 'linear-gradient(0deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Main Content */}
      <div className="relative flex flex-col justify-center items-center w-full max-w-[1261px] mx-auto px-4 sm:px-6 lg:px-0 py-12 lg:py-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 gap-10 lg:gap-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center w-full gap-4 lg:gap-[26px]"
        >
          <p
            className="baron-neue text-lg sm:text-xl lg:text-2xl leading-6 text-center"
            style={{
              color: '#D4AF37',
            }}
          >
            Tender
          </p>
          <h2
            className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[54px] text-center capitalize text-white max-w-[1006px]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            View active municipal tenders with key details and NIT downloads.
          </h2>
        </motion.div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start w-full max-w-[1261px] rounded-xl lg:rounded-[20px] overflow-hidden"
        >
          {/* Table Header - Hidden on mobile */}
          <div className="hidden lg:flex items-center w-full h-[60px]">
            {tableHeaders.map((header) => (
              <div
                key={header}
                className="flex justify-center items-center flex-1 h-[60px] px-5 py-4"
                style={{
                  background: '#D49D37',
                  border: '0.84px solid rgba(0, 0, 0, 0.1)',
                }}
              >
                <span
                  className="font-medium text-base leading-6 text-white"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {header}
                </span>
              </div>
            ))}
          </div>

          {/* Table Body */}
          <div className="flex flex-col items-start w-full">
            {tenders.map((tender, rowIndex) => (
              <motion.div
                key={tender.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * rowIndex }}
                className="flex flex-col lg:flex-row items-stretch lg:items-center w-full lg:h-[88px]"
              >
                {/* Mobile Card Header */}
                <div
                  className="lg:hidden flex justify-between items-center w-full px-4 py-3"
                  style={{
                    background: '#D49D37',
                    border: '0.84px solid rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <span
                    className="font-medium text-base text-white"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {tender.title}
                  </span>
                </div>

                {/* Tender Title - Desktop only */}
                <div
                  className="hidden lg:flex justify-center items-center flex-1 h-[88px] px-5 py-6"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '0.84px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span
                    className="font-normal text-lg lg:text-xl leading-5 text-center"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#F5F2E9',
                    }}
                  >
                    {tender.title}
                  </span>
                </div>

                {/* Department */}
                <div
                  className="flex justify-between lg:justify-center items-center flex-1 min-h-[56px] lg:h-[88px] px-4 lg:px-5 py-3 lg:py-6"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '0.84px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span className="lg:hidden text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Department
                  </span>
                  <span
                    className="font-light text-base lg:text-xl leading-5"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#F5F2E9',
                    }}
                  >
                    {tender.department}
                  </span>
                </div>

                {/* Estimated Value */}
                <div
                  className="flex justify-between lg:justify-center items-center flex-1 min-h-[56px] lg:h-[88px] px-4 lg:px-5 py-3 lg:py-6"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '0.84px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span className="lg:hidden text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Estimated Value
                  </span>
                  <span
                    className="font-light text-base lg:text-xl leading-5"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#F5F2E9',
                    }}
                  >
                    {tender.estimatedValue}
                  </span>
                </div>

                {/* Bid Closing Date */}
                <div
                  className="flex justify-between lg:justify-center items-center flex-1 min-h-[56px] lg:h-[88px] px-4 lg:px-5 py-3 lg:py-6"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '0.84px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span className="lg:hidden text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Bid Closing Date
                  </span>
                  <span
                    className="font-light text-base lg:text-xl leading-5"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#F5F2E9',
                    }}
                  >
                    {tender.bidClosingDate}
                  </span>
                </div>

                {/* Download PDF Button */}
                <div
                  className="flex justify-center items-center flex-1 min-h-[72px] lg:h-[88px] px-4 lg:px-5 py-4 lg:py-6"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '0.84px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex justify-center items-center w-full max-w-[171px] h-10 px-4 lg:px-6 py-2.5 rounded-lg"
                    style={{
                      background: 'rgba(255, 0, 4, 0.29)',
                      backdropFilter: 'blur(14.76px)',
                    }}
                  >
                    <span
                      className="font-medium text-sm lg:text-base leading-5 text-center text-white whitespace-nowrap"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      Download PDF
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Inter:wght@400;500;600&display=swap');

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

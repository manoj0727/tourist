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
      className="relative overflow-hidden mx-auto"
      style={{
        width: '1440px',
        height: '1211px',
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
        className="absolute left-0 right-0 top-0"
        style={{
          height: '350px',
          background: 'linear-gradient(180deg, #0a0f0c 0%, rgba(10, 15, 12, 0) 100%)',
        }}
      />

      {/* Bottom Gradient */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '212px',
          background: 'linear-gradient(0deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Main Content */}
      <div
        className="absolute flex flex-col justify-center items-start"
        style={{
          width: '1261px',
          height: '888px',
          left: 'calc(50% - 1261px/2)',
          top: 'calc(50% - 888px/2)',
          gap: '80px',
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center"
          style={{
            width: '1261px',
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
            Tender
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
              maxWidth: '1006px',
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
          className="flex flex-col items-start"
          style={{
            width: '1261px',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          {/* Table Header */}
          <div
            className="flex items-center"
            style={{ width: '1261px', height: '60px' }}
          >
            {tableHeaders.map((header, index) => (
              <div
                key={header}
                className="flex justify-center items-center"
                style={{
                  flex: 1,
                  height: '60px',
                  padding: '17px 20px',
                  background: '#D49D37',
                  border: '0.84px solid rgba(0, 0, 0, 0.1)',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#FFFFFF',
                  }}
                >
                  {header}
                </span>
              </div>
            ))}
          </div>

          {/* Table Body */}
          <div
            className="flex flex-col items-start"
            style={{
              width: '1261px',
            }}
          >
            {tenders.map((tender, rowIndex) => (
              <motion.div
                key={tender.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * rowIndex }}
                className="flex items-center"
                style={{ width: '1261px', height: '88px' }}
              >
                {/* Tender Title */}
                <div
                  className="flex justify-center items-center"
                  style={{
                    flex: 1,
                    height: '88px',
                    padding: '24px 20px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '0.84px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 400,
                      fontSize: '20px',
                      lineHeight: '20px',
                      textAlign: 'center',
                      color: '#F5F2E9',
                    }}
                  >
                    {tender.title}
                  </span>
                </div>

                {/* Department */}
                <div
                  className="flex justify-center items-center"
                  style={{
                    flex: 1,
                    height: '88px',
                    padding: '24px 20px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '0.84px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 300,
                      fontSize: '20px',
                      lineHeight: '20px',
                      color: '#F5F2E9',
                    }}
                  >
                    {tender.department}
                  </span>
                </div>

                {/* Estimated Value */}
                <div
                  className="flex justify-center items-center"
                  style={{
                    flex: 1,
                    height: '88px',
                    padding: '24px 20px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '0.84px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 300,
                      fontSize: '20px',
                      lineHeight: '20px',
                      color: '#F5F2E9',
                    }}
                  >
                    {tender.estimatedValue}
                  </span>
                </div>

                {/* Bid Closing Date */}
                <div
                  className="flex justify-center items-center"
                  style={{
                    flex: 1,
                    height: '88px',
                    padding: '24px 20px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '0.84px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 300,
                      fontSize: '20px',
                      lineHeight: '20px',
                      color: '#F5F2E9',
                    }}
                  >
                    {tender.bidClosingDate}
                  </span>
                </div>

                {/* Download PDF Button */}
                <div
                  className="flex justify-center items-center"
                  style={{
                    flex: 1,
                    height: '88px',
                    padding: '24px 20px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '0.84px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex justify-center items-center"
                    style={{
                      width: '171px',
                      height: '40px',
                      padding: '10px 24px',
                      background: 'rgba(255, 0, 4, 0.29)',
                      backdropFilter: 'blur(14.76px)',
                      borderRadius: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '125%',
                        textAlign: 'center',
                        color: '#FFFFFF',
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

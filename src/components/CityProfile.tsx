'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const areaStats = [
  { label: 'Area In Sq. km.', value: '21.64 sq. km' },
  { label: 'No. of wards', value: '25' },
  { label: 'Population estimate', value: '30,545' },
  { label: 'Ward boundries', value: 'Attached', isLink: true },
  { label: 'Rental Properties of corporation', value: '25' },
  { label: 'Number of Slums', value: '0' },
  { label: 'Solid waste per day', value: '9.1 Tones' },
  { label: 'Street Light poles', value: '150' },
  { label: 'No. of employee in the municipal board', value: '135' },
];

const houseStats = [
  { label: 'No of House holds', value: '', isHeader: true },
  { label: 'Residential', value: '4500' },
  { label: 'Shops & Offices', value: '550' },
  { label: 'Open Plots', value: '0' },
];

const birthStats = [
  { label: 'Birth/Death', value: '', isHeader: true },
  { label: 'Registration per year', value: '800' },
  { label: 'Certificate per year', value: '900' },
];

export default function CityProfile() {
  return (
    <section
      className="relative overflow-hidden mx-auto w-full max-w-[1440px] min-h-[800px] md:min-h-[1008px] py-12 md:py-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg6.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
          }}
        />
      </div>

      {/* Main Content Container */}
      <div
        className="relative md:absolute flex flex-col items-center w-full max-w-[1245px] px-4 sm:px-6 lg:px-0 mx-auto md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 gap-8 md:gap-[60px]"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center w-full max-w-[1245px] gap-4 md:gap-[26px]"
        >
          <p
            className="baron-neue text-lg md:text-2xl text-center"
            style={{
              lineHeight: '24px',
              color: '#D4AF37',
            }}
          >
            CITY PROFILE
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-[40px] font-medium text-center capitalize text-white"
            style={{
              fontFamily: "'Poppins', sans-serif",
              lineHeight: '1.35',
            }}
          >
            Mount Abu and its environment
          </h2>
        </motion.div>

        {/* Stats Cards Container */}
        <div
          className="relative w-full max-w-[1245px] flex flex-col lg:flex-row gap-6 lg:gap-[30px]"
        >
          {/* Left Card - Area Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center items-center w-full lg:w-[622px] p-4 sm:p-5 gap-4 sm:gap-[30px] rounded-3xl"
            style={{
              background: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid #D4AF37',
            }}
          >
            <div
              className="flex flex-col items-start w-full gap-4 sm:gap-[30px]"
            >
              {areaStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-1 sm:gap-[18px]"
                >
                  <span
                    className="text-base sm:text-lg md:text-xl lg:text-2xl"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      lineHeight: '1.5',
                      color: '#F5F2E9',
                    }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="text-base sm:text-lg md:text-xl lg:text-2xl"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      lineHeight: '1.25',
                      color: stat.isLink ? '#D4AF37' : '#F5F2E9',
                      textDecoration: stat.isLink ? 'underline' : 'none',
                      cursor: stat.isLink ? 'pointer' : 'default',
                    }}
                  >
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - House and Birth Stats */}
          <div className="flex flex-col gap-6 lg:gap-[30px] w-full lg:w-[593px]">
            {/* Right Top Card - House Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col justify-center items-center w-full p-5 sm:p-[30px_20px] gap-4 sm:gap-[18px] rounded-3xl"
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid #D4AF37',
              }}
            >
              {houseStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-1 sm:gap-[18px]"
                >
                  <span
                    className="text-base sm:text-lg md:text-xl lg:text-2xl"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: stat.isHeader ? 500 : 400,
                      lineHeight: '1.5',
                      color: '#F5F2E9',
                    }}
                  >
                    {stat.label}
                  </span>
                  {stat.value && (
                    <span
                      className="text-base sm:text-lg md:text-xl lg:text-2xl"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 400,
                        lineHeight: '1.25',
                        color: '#F5F2E9',
                      }}
                    >
                      {stat.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Right Bottom Card - Birth/Death Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col justify-center items-center w-full p-5 sm:p-[30px_20px] gap-4 sm:gap-[18px] rounded-3xl"
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid #D4AF37',
              }}
            >
              {birthStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-1 sm:gap-[18px]"
                >
                  <span
                    className="text-base sm:text-lg md:text-xl lg:text-2xl"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: stat.isHeader ? 500 : 400,
                      lineHeight: '1.5',
                      color: '#F5F2E9',
                    }}
                  >
                    {stat.label}
                  </span>
                  {stat.value && (
                    <span
                      className="text-base sm:text-lg md:text-xl lg:text-2xl"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 400,
                        lineHeight: '1.25',
                        color: '#F5F2E9',
                      }}
                    >
                      {stat.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient - Transition to News section */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[150px] md:h-[265px]"
        style={{
          background: 'linear-gradient(0deg, #7F6D54 0%, rgba(127, 109, 84, 0) 100%)',
        }}
      />

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

        @font-face {
          font-family: 'Baron Neue';
          src: url('/fonts/BaronNeue.otf') format('opentype');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        .baron-neue {
          font-family: 'Baron Neue', 'Poppins', sans-serif;
        }
      `}</style>
    </section>
  );
}

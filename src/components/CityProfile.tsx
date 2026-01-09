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
      className="relative overflow-hidden mx-auto"
      style={{
        width: '1440px',
        height: '1008px',
      }}
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
        className="absolute flex flex-col items-center"
        style={{
          width: '1245px',
          height: '744px',
          left: 'calc(50% - 1245px/2)',
          top: 'calc(50% - 744px/2)',
          gap: '60px',
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
            width: '1245px',
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
            CITY PROFILE
          </p>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '40px',
              fontWeight: 500,
              lineHeight: '54px',
              textAlign: 'center',
              textTransform: 'capitalize',
              color: '#FFFFFF',
            }}
          >
            Mount Abu and its environment
          </h2>
        </motion.div>

        {/* Stats Cards Container */}
        <div
          className="relative"
          style={{
            width: '1245px',
            height: '606px',
          }}
        >
          {/* Left Card - Area Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute flex flex-col justify-center items-center"
            style={{
              width: '622px',
              height: '604px',
              left: '0.5px',
              top: '2px',
              padding: '20px',
              gap: '30px',
              background: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid #D4AF37',
              borderRadius: '24px',
            }}
          >
            <div
              className="flex flex-col items-start"
              style={{ width: '582px', height: '564px', gap: '30px' }}
            >
              {areaStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  className="flex justify-between items-center"
                  style={{
                    width: '582px',
                    height: '36px',
                    gap: '18px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: '24px',
                      lineHeight: '36px',
                      color: '#F5F2E9',
                    }}
                  >
                    {stat.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: '24px',
                      lineHeight: '20px',
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

          {/* Right Top Card - House Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute flex flex-col justify-center items-center"
            style={{
              width: '593px',
              height: '312px',
              left: '652px',
              top: '0px',
              padding: '30px 20px',
              gap: '18px',
              background: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid #D4AF37',
              borderRadius: '24px',
            }}
          >
            {houseStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="flex justify-between items-center"
                style={{
                  width: '553px',
                  height: '36px',
                  gap: '18px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: stat.isHeader ? 500 : 400,
                    fontSize: '24px',
                    lineHeight: '36px',
                    color: '#F5F2E9',
                  }}
                >
                  {stat.label}
                </span>
                {stat.value && (
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: '24px',
                      lineHeight: '20px',
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
            className="absolute flex flex-col justify-center items-center"
            style={{
              width: '591px',
              height: '264px',
              left: '652px',
              top: '342px',
              padding: '30px 20px',
              gap: '18px',
              background: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid #D4AF37',
              borderRadius: '24px',
            }}
          >
            {birthStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="flex justify-between items-center"
                style={{
                  width: '551px',
                  height: '36px',
                  gap: '18px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: stat.isHeader ? 500 : 400,
                    fontSize: '24px',
                    lineHeight: '36px',
                    color: '#F5F2E9',
                  }}
                >
                  {stat.label}
                </span>
                {stat.value && (
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: '24px',
                      lineHeight: '20px',
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

      {/* Bottom Gradient - Transition to News section */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '265px',
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

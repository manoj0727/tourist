'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const guidelines = [
  {
    id: 1,
    title: 'Nagar Palika Act',
    buttonText: 'Download PDF',
    buttonColor: 'rgba(255, 0, 4, 0.29)',
  },
  {
    id: 2,
    title: 'Construction Guidelines',
    buttonText: 'Download PDF',
    buttonColor: 'rgba(255, 0, 4, 0.29)',
  },
  {
    id: 3,
    title: 'Wards List',
    buttonText: 'View Map',
    buttonColor: 'rgba(0, 34, 255, 0.29)',
  },
  {
    id: 4,
    title: 'Eco Sensitive Zone',
    buttonText: 'Download PDF',
    buttonColor: 'rgba(255, 0, 4, 0.29)',
  },
  {
    id: 5,
    title: 'Restaurent Licences',
    buttonText: 'Apply Online',
    buttonColor: 'rgba(0, 255, 0, 0.29)',
  },
  {
    id: 6,
    title: 'Land Purchase Guidelines',
    buttonText: 'Download PDF',
    buttonColor: 'rgba(255, 0, 4, 0.29)',
  },
  {
    id: 7,
    title: 'Tenders',
    buttonText: 'View Tenders',
    buttonColor: 'rgba(255, 238, 0, 0.29)',
  },
  {
    id: 8,
    title: 'Taxes',
    buttonText: 'Download PDF',
    buttonColor: 'rgba(255, 0, 4, 0.29)',
  },
  {
    id: 9,
    title: 'Budget',
    buttonText: 'Download PDF',
    buttonColor: 'rgba(255, 0, 4, 0.29)',
  },
];

export default function InfoGuidelines() {
  return (
    <section
      className="relative overflow-hidden mx-auto"
      style={{
        width: '1440px',
        height: '975px',
        background: '#17261E',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg9.jpg"
          alt="Background"
          fill
          className="object-cover"
          style={{ mixBlendMode: 'overlay', opacity: 0.54 }}
        />
      </div>

      {/* Top Gradient - connects with DigitalServices bottom */}
      <div
        className="absolute left-0 right-0 top-0"
        style={{
          height: '200px',
          background: 'linear-gradient(180deg, #17261E 0%, rgba(23, 38, 30, 0) 100%)',
        }}
      />

      {/* Bottom Gradient - connects with Tenders top */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '300px',
          background: 'linear-gradient(0deg, #0a0f0c 0%, rgba(10, 15, 12, 0) 100%)',
        }}
      />

      {/* Left Gradient */}
      <div
        className="absolute left-0 top-0 bottom-0"
        style={{
          width: '212px',
          background: 'linear-gradient(90deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Right Gradient */}
      <div
        className="absolute right-0 top-0 bottom-0"
        style={{
          width: '212px',
          background: 'linear-gradient(270deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Main Content */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          width: '1190px',
          height: '740px',
          left: 'calc(50% - 1190px/2)',
          top: 'calc(50% - 740px/2)',
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
            width: '1190px',
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
            All you need
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
            Information & Guidelines
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div
          className="flex flex-col items-start"
          style={{
            width: '1190px',
            gap: '40px',
          }}
        >
          {/* Row 1 */}
          <div
            className="flex items-start"
            style={{
              width: '1190px',
              gap: '40px',
            }}
          >
            {guidelines.slice(0, 3).map((item, index) => (
              <GuidelineCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Row 2 */}
          <div
            className="flex items-start"
            style={{
              width: '1190px',
              gap: '40px',
            }}
          >
            {guidelines.slice(3, 6).map((item, index) => (
              <GuidelineCard key={item.id} item={item} index={index + 3} />
            ))}
          </div>

          {/* Row 3 */}
          <div
            className="flex items-start"
            style={{
              width: '1190px',
              gap: '40px',
            }}
          >
            {guidelines.slice(6, 9).map((item, index) => (
              <GuidelineCard key={item.id} item={item} index={index + 6} />
            ))}
          </div>
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

function GuidelineCard({
  item,
  index,
}: {
  item: { id: number; title: string; buttonText: string; buttonColor: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="flex flex-col justify-center items-center"
      style={{
        width: '370px',
        height: '174px',
        padding: '14px 0 18px',
        gap: '6px',
        background:
          'linear-gradient(0deg, rgba(245, 242, 233, 0.06), rgba(245, 242, 233, 0.06)), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 100%)',
        backdropFilter: 'blur(0.5px)',
        borderRadius: '13.6px',
        cursor: 'pointer',
      }}
    >
      {/* Title */}
      <div
        className="flex justify-center items-center"
        style={{
          padding: '18px 19px',
        }}
      >
        <h3
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '125%',
            textAlign: 'center',
            color: '#FFFFFF',
            width: '221px',
          }}
        >
          {item.title}
        </h3>
      </div>

      {/* Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex justify-center items-center"
        style={{
          width: '227px',
          height: '40px',
          padding: '10px 3px',
          background: item.buttonColor,
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
          {item.buttonText}
        </span>
      </motion.button>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const socialCards = [
  {
    id: 'facebook',
    title: 'Facebook',
    description: 'Follow updates, photos and announcements from Mount Abu Nagar Parishad.',
    image: '/images/13-1.png',
    imageHeight: '358px',
    cardWidth: '409px',
    cardHeight: '482px',
    position: { left: '0px', top: '0px' },
  },
  {
    id: 'instagram',
    title: 'Instagram',
    description: 'See visual stories of events, initiatives and life in Mount Abu.',
    image: '/images/13-3.jpg',
    imageHeight: '127px',
    cardWidth: '409px',
    cardHeight: '234px',
    position: { left: '430px', top: '0px' },
  },
  {
    id: 'youtube',
    title: 'YouTube',
    description: 'Watch event coverage, public messages and awareness videos.',
    image: '/images/13-2.jpg',
    imageHeight: '241px',
    cardWidth: '409px',
    cardHeight: '362px',
    position: { left: '860px', top: '0px' },
  },
  {
    id: 'twitter',
    title: 'Twitter',
    description: 'Get quick alerts, notices and service updates in real time.',
    image: '/images/13-4.png',
    imageHeight: '127px',
    cardWidth: '409px',
    cardHeight: '234px',
    position: { left: '430px', top: '248px' },
  },
  {
    id: 'helpline',
    title: 'Helpline',
    description: 'Call for service assistance, complaints or emergency municipal support.',
    image: '/images/13-5.jpg',
    imageHeight: '241px',
    cardWidth: '409px',
    cardHeight: '350px',
    position: { left: '860px', top: '379px' },
  },
  {
    id: 'address',
    title: 'Office Address',
    description: 'Visit the Nagar Parishad office for in-person support and submissions.',
    image: '/images/13-6.jpg',
    imageHeight: '136px',
    cardWidth: '839px',
    cardHeight: '234px',
    position: { left: '0px', top: '495px' },
  },
];

export default function ConnectWithUs() {
  return (
    <section
      className="relative overflow-hidden mx-auto"
      style={{
        width: '1440px',
        height: '1044px',
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
        className="absolute left-0 right-0 top-0"
        style={{
          height: '220px',
          background: 'linear-gradient(180deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Bottom Gradient - Dark Green */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '218px',
          background: 'linear-gradient(0deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Bottom Gradient - Brown/Olive transition to footer */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '285px',
          background: 'linear-gradient(0deg, #4C4832 0%, rgba(76, 72, 50, 0) 100%)',
        }}
      />

      {/* Main Content */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          width: '1270px',
          height: '867px',
          left: 'calc(50% - 1270px/2)',
          top: 'calc(50% - 867px/2)',
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
            width: '1270px',
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
            Connect With Us
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
            Stay updated and reach out anytime
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div
          className="relative"
          style={{
            width: '1270px',
            height: '729px',
          }}
        >
          {socialCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="absolute"
              style={{
                width: card.cardWidth,
                height: card.cardHeight,
                left: card.position.left,
                top: card.position.top,
                background: '#F5F2E9',
                border: '0.71px solid rgba(0, 0, 0, 0.2)',
                borderRadius: '9px',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              {/* Card Image */}
              <div
                className="relative w-full"
                style={{
                  height: card.imageHeight,
                  borderRadius: '0 0 20px 20px',
                  overflow: 'hidden',
                  boxShadow: 'inset 0px -8px 40px rgba(0, 0, 0, 0.2)',
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div
                className="flex flex-col items-start"
                style={{
                  padding: '16px 19px',
                  gap: '9px',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: '23px',
                    lineHeight: '125%',
                    color: '#000000',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '120%',
                    color: 'rgba(0, 0, 0, 0.4)',
                    maxWidth: card.id === 'address' ? '564px' : '357px',
                  }}
                >
                  {card.description}
                </p>
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

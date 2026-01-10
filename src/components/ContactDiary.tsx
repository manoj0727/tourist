'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const contactsTable1 = [
  { id: 1, name: 'Sh. Rajendra Singh', post: 'Executive Officer', department: 'Administration' },
  { id: 2, name: 'Smt. Priya Sharma', post: 'Chief Municipal Officer', department: 'Finance' },
  { id: 3, name: 'Sh. Rajendra Singh', post: 'Executive Officer', department: 'Engineering' },
  { id: 4, name: 'Smt. Priya Sharma', post: 'Chief Municipal Officer', department: 'Revenue' },
  { id: 5, name: 'Sh. Rajendra Singh', post: 'Executive Officer', department: 'Sanitation' },
  { id: 6, name: 'Smt. Priya Sharma', post: 'Chief Municipal Officer', department: 'Planning' },
  { id: 7, name: 'Sh. Rajendra Singh', post: 'Executive Officer', department: 'Water Supply' },
  { id: 8, name: 'Smt. Priya Sharma', post: 'Clerk', department: 'Records' },
];

const contactsTable2 = [
  { id: 1, name: 'Sh. Rajendra Singh', post: 'Junior Engineer', department: 'Roads' },
  { id: 2, name: 'Smt. Priya Sharma', post: 'Account Officer', department: 'Accounts' },
  { id: 3, name: 'Sh. Rajendra Singh', post: 'Health Officer', department: 'Health' },
  { id: 4, name: 'Smt. Priya Sharma', post: 'Tax Inspector', department: 'Tax' },
  { id: 5, name: 'Sh. Rajendra Singh', post: 'Assistant Engineer', department: 'Drainage' },
  { id: 6, name: 'Smt. Priya Sharma', post: 'Superintendent', department: 'General' },
  { id: 7, name: 'Sh. Rajendra Singh', post: 'Sanitary Inspector', department: 'Cleanliness' },
  { id: 8, name: 'Smt. Priya Sharma', post: 'Cashier', department: 'Treasury' },
];

const tableHeaders = ['Name', 'Post', 'Department'];

function ContactTable({ contacts, delay = 0 }: { contacts: typeof contactsTable1; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col w-full max-w-[600px] rounded-[14px] overflow-hidden shrink-0"
      style={{
        border: '0.84px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Table Header */}
      <div className="flex w-full h-[50px] md:h-[60px]">
        {tableHeaders.map((header) => (
          <div
            key={header}
            className="flex justify-center items-center flex-1 h-[50px] md:h-[60px] px-2 sm:px-4 md:px-5 py-3 md:py-[17px]"
            style={{
              background: '#D49D37',
              border: '0.84px solid rgba(0, 0, 0, 0.1)',
            }}
          >
            <span
              className="text-[11px] sm:text-[13px] md:text-[15px] font-semibold leading-5 md:leading-6 text-white uppercase tracking-[0.5px] text-center"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {header}
            </span>
          </div>
        ))}
      </div>

      {/* Table Body */}
      <div className="flex flex-col w-full">
        {contacts.map((contact, index) => (
          <motion.div
            key={contact.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.03 * index }}
            className="flex w-full h-[60px] sm:h-[65px] md:h-[69px]"
          >
            {/* Name */}
            <div
              className="flex items-center justify-center flex-1 h-full px-2 sm:px-3 md:px-4 py-4 md:py-6"
              style={{
                background: 'rgba(0, 0, 0, 0.2)',
                border: '0.84px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <span
                className="text-[12px] sm:text-[14px] md:text-[16px] font-medium leading-4 md:leading-5 text-center"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#F5F2E9',
                }}
              >
                {contact.name}
              </span>
            </div>

            {/* Post */}
            <div
              className="flex items-center justify-center flex-1 h-full px-2 sm:px-3 md:px-4 py-4 md:py-6"
              style={{
                background: 'rgba(0, 0, 0, 0.2)',
                border: '0.84px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <span
                className="text-[11px] sm:text-[13px] md:text-[15px] font-normal leading-4 md:leading-5 text-center"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#F5F2E9',
                }}
              >
                {contact.post}
              </span>
            </div>

            {/* Department */}
            <div
              className="flex items-center justify-center flex-1 h-full px-2 sm:px-3 md:px-4 py-4 md:py-6"
              style={{
                background: 'rgba(0, 0, 0, 0.2)',
                border: '0.84px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <span
                className="text-[11px] sm:text-[13px] md:text-[15px] font-normal leading-4 md:leading-5 text-center"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#F5F2E9',
                }}
              >
                {contact.department}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ContactDiary() {
  return (
    <section
      className="relative overflow-hidden mx-auto w-full max-w-[1440px] min-h-[900px] md:min-h-[1132px] lg:h-[1132px]"
    >
      {/* Background Image - clearly visible */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg14.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Light overlay for subtle tint */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(19, 32, 25, 0.35)',
        }}
      />

      {/* Top Gradient - connects with ConnectWithUs bottom */}
      <div
        className="absolute left-0 right-0 top-0 h-[120px] md:h-[218px]"
        style={{
          background: 'linear-gradient(180deg, #4C4832 0%, rgba(76, 72, 50, 0) 100%)',
        }}
      />

      {/* Bottom Gradient - connects smoothly with Footer cloud border */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[200px] md:h-[300px]"
        style={{
          background: 'linear-gradient(0deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Extra bottom solid color for seamless connection */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[40px] md:h-[60px]"
        style={{
          background: '#132019',
        }}
      />

      {/* Main Content */}
      <div
        className="relative md:absolute flex flex-col items-center w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-0 mx-auto md:left-1/2 md:-translate-x-1/2 pt-16 md:pt-0 md:top-[110px] gap-8 md:gap-[60px] pb-20 md:pb-0"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center w-full gap-4 md:gap-[26px]"
        >
          <p
            className="baron-neue text-lg md:text-2xl leading-6 text-center"
            style={{
              color: '#D4AF37',
            }}
          >
            Contact Diary
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-[40px] font-medium leading-8 sm:leading-10 md:leading-[54px] text-center capitalize text-white max-w-[731px] px-2"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Find the right municipal officer and contact number in one place.
          </h2>
        </motion.div>

        {/* Tables Container - Side by Side on desktop, stacked on mobile */}
        <div
          className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full gap-6 md:gap-10"
        >
          <ContactTable contacts={contactsTable1} delay={0} />
          <ContactTable contacts={contactsTable2} delay={0.2} />
        </div>
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

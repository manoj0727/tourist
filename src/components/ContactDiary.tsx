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
      className="flex flex-col"
      style={{
        width: '600px',
        border: '0.84px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '14px',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {/* Table Header */}
      <div className="flex" style={{ width: '100%', height: '60px' }}>
        {tableHeaders.map((header) => (
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
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: '15px',
                lineHeight: '24px',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {header}
            </span>
          </div>
        ))}
      </div>

      {/* Table Body */}
      <div className="flex flex-col" style={{ width: '100%' }}>
        {contacts.map((contact, index) => (
          <motion.div
            key={contact.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.03 * index }}
            className="flex"
            style={{ width: '100%', height: '69px' }}
          >
            {/* Name */}
            <div
              className="flex items-center justify-center"
              style={{
                flex: 1,
                height: '69px',
                padding: '24px 16px',
                background: 'rgba(0, 0, 0, 0.2)',
                border: '0.84px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '20px',
                  textAlign: 'center',
                  color: '#F5F2E9',
                }}
              >
                {contact.name}
              </span>
            </div>

            {/* Post */}
            <div
              className="flex items-center justify-center"
              style={{
                flex: 1,
                height: '69px',
                padding: '24px 16px',
                background: 'rgba(0, 0, 0, 0.2)',
                border: '0.84px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '20px',
                  textAlign: 'center',
                  color: '#F5F2E9',
                }}
              >
                {contact.post}
              </span>
            </div>

            {/* Department */}
            <div
              className="flex items-center justify-center"
              style={{
                flex: 1,
                height: '69px',
                padding: '24px 16px',
                background: 'rgba(0, 0, 0, 0.2)',
                border: '0.84px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '20px',
                  textAlign: 'center',
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
      className="relative overflow-hidden mx-auto"
      style={{
        width: '1440px',
        height: '1132px',
      }}
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
        className="absolute left-0 right-0 top-0"
        style={{
          height: '218px',
          background: 'linear-gradient(180deg, #4C4832 0%, rgba(76, 72, 50, 0) 100%)',
        }}
      />

      {/* Bottom Gradient - connects smoothly with Footer cloud border */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '300px',
          background: 'linear-gradient(0deg, #132019 0%, rgba(19, 32, 25, 0) 100%)',
        }}
      />

      {/* Extra bottom solid color for seamless connection */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '60px',
          background: '#132019',
        }}
      />

      {/* Main Content */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          width: '1280px',
          left: 'calc(50% - 1280px/2)',
          top: '110px',
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
            width: '100%',
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
            Contact Diary
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
              maxWidth: '731px',
            }}
          >
            Find the right municipal officer and contact number in one place.
          </h2>
        </motion.div>

        {/* Tables Container - Side by Side */}
        <div
          className="flex items-start justify-center"
          style={{
            width: '100%',
            gap: '40px',
          }}
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

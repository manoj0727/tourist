'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const adventureLinks = [
  'Monuments',
  'Trek',
  'Religious Places',
  'Important Places',
  'Hotels',
  'Hospital',
  'Fairs and Festivals',
  'Water Bodies',
  'Water Point',
  'Parking',
  'Schools & Institutes',
  'Rock Climbing',
  'Market',
];

const quickLinks = [
  'Administrative Office',
  'Rajasthan Sampark',
  'Pehchan',
  'Eproc',
  'Other govt. Links',
  'Notices',
  'Tenders',
  'Complaints',
  'Digital Construction',
  'Token',
  'Emergency contacts',
];

const connectLinks = ['About Us', 'Contact Us'];

export default function Footer() {
  return (
    <footer
      className="relative mx-auto"
      style={{
        width: '1440px',
      }}
    >
      {/* Dark background behind cloud - matches ContactDiary bottom */}
      <div
        className="absolute left-0 right-0 top-0"
        style={{
          height: '100px',
          background: '#132019',
          zIndex: 1,
        }}
      />

      {/* Cloud Border - Vector shape */}
      <div
        className="relative w-full"
        style={{
          height: '100px',
          zIndex: 10,
        }}
      >
        <Image
          src="/images/bg15.png"
          alt="Cloud border"
          fill
          className="object-cover"
          style={{
            objectFit: 'cover',
            objectPosition: 'bottom',
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div
        className="relative"
        style={{
          background: '#F5F2E9',
          padding: '40px 64px',
          marginTop: '-20px',
          zIndex: 5,
        }}
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ opacity: 0.08 }}
        >
          <Image
            src="/images/bg15-1.png"
            alt="Background pattern"
            fill
            className="object-contain"
            style={{ objectPosition: 'center' }}
          />
        </div>

        {/* Footer Content */}
        <div
          className="relative flex justify-between items-start"
          style={{
            maxWidth: '1186px',
            margin: '0 auto',
            gap: '60px',
          }}
        >
          {/* Left Section - Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
            style={{
              width: '320px',
              gap: '24px',
            }}
          >
            {/* Logo */}
            <div className="relative" style={{ width: '107px', height: '122px' }}>
              <Image
                src="/nav_img.png"
                alt="Nagar Palika Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Social Icons */}
            <div className="flex items-center" style={{ gap: '8px' }}>
              {/* Facebook */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '99px',
                  background: 'rgba(0,0,0,0.05)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z"
                    fill="#000000"
                  />
                </svg>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '99px',
                  background: 'rgba(0,0,0,0.05)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                    fill="#000000"
                  />
                </svg>
              </motion.a>

              {/* Twitter/X */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '99px',
                  background: 'rgba(0,0,0,0.05)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"
                    fill="#000000"
                  />
                </svg>
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '99px',
                  background: 'rgba(0,0,0,0.05)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M15.665 4.10001C15.665 4.10001 15.51 3.03501 15.035 2.55501C14.435 1.92001 13.76 1.91751 13.45 1.88001C11.24 1.72001 8.00249 1.72001 8.00249 1.72001H7.99749C7.99749 1.72001 4.75999 1.72001 2.54999 1.88001C2.23999 1.91751 1.56499 1.92001 0.964994 2.55501C0.489994 3.03501 0.339994 4.10001 0.339994 4.10001C0.339994 4.10001 0.179993 5.35001 0.179993 6.60251V7.78001C0.179993 9.03001 0.334994 10.2825 0.334994 10.2825C0.334994 10.2825 0.489994 11.3475 0.964994 11.8275C1.56499 12.4625 2.35999 12.4425 2.71499 12.51C3.95999 12.63 7.99999 12.6675 7.99999 12.6675C7.99999 12.6675 11.24 12.6625 13.45 12.5025C13.76 12.465 14.435 12.4625 15.035 11.8275C15.51 11.3475 15.665 10.2825 15.665 10.2825C15.665 10.2825 15.82 9.03251 15.82 7.78001V6.60251C15.82 5.35001 15.665 4.10001 15.665 4.10001ZM6.34999 9.54751V4.84751L10.6 7.20251L6.34999 9.54751Z"
                    fill="#000000"
                  />
                </svg>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '99px',
                  background: 'rgba(0,0,0,0.05)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    fill="#000000"
                  />
                </svg>
              </motion.a>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '17px',
                textTransform: 'capitalize',
                color: '#000000',
              }}
            >
              The Nagar Palika Mount Abu is the local governing body responsible for the
              administration and development of the hill station. Located near the Polo Ground, it
              oversees various municipal functions including sanitation, water supply, infrastructure
              development, and public services.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-start"
            style={{ gap: '16px' }}
          >
            {/* Phone */}
            <div className="flex items-center" style={{ gap: '8px' }}>
              <div
                className="flex items-center justify-center"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '99px',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M14.5 11.15V13.15C14.5 13.6 14.35 13.95 14.05 14.2C13.75 14.45 13.4 14.55 13 14.5C11.1 14.3 9.3 13.7 7.65 12.7C6.1 11.8 4.8 10.5 3.9 8.95C2.9 7.3 2.3 5.5 2.1 3.6C2.05 3.2 2.15 2.85 2.4 2.55C2.65 2.25 3 2.1 3.45 2.1H5.45C5.8 2.1 6.1 2.2 6.35 2.4C6.6 2.6 6.75 2.85 6.8 3.15L7.1 4.65C7.15 4.95 7.1 5.2 6.95 5.4C6.8 5.6 6.6 5.75 6.35 5.85L5.4 6.35C6.15 7.65 7.35 8.85 8.65 9.6L9.15 8.65C9.25 8.4 9.4 8.2 9.6 8.05C9.8 7.9 10.05 7.85 10.35 7.9L11.85 8.2C12.15 8.25 12.4 8.4 12.6 8.65C12.8 8.9 12.9 9.2 12.9 9.55V11.15H14.5Z"
                    stroke="#000000"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#000000',
                }}
              >
                +91 8305591122
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center" style={{ gap: '8px' }}>
              <div
                className="flex items-center justify-center"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '99px',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M1.33334 4L6.77662 7.63333C7.21739 7.92979 7.43778 8.07802 7.67702 8.13459C7.88832 8.18464 8.10836 8.18464 8.31966 8.13459C8.5589 8.07802 8.77929 7.92979 9.22006 7.63333L14.6667 4M4.53334 13.3333H11.4667C12.5868 13.3333 13.1468 13.3333 13.5747 13.1154C13.951 12.9236 14.2569 12.6176 14.4487 12.2413C14.6667 11.8135 14.6667 11.2534 14.6667 10.1333V5.86667C14.6667 4.74656 14.6667 4.18651 14.4487 3.75869C14.2569 3.38236 13.951 3.0764 13.5747 2.88465C13.1468 2.66667 12.5868 2.66667 11.4667 2.66667H4.53334C3.41323 2.66667 2.85318 2.66667 2.42535 2.88465C2.04903 3.0764 1.74307 3.38236 1.55132 3.75869C1.33334 4.18651 1.33334 4.74656 1.33334 5.86667V10.1333C1.33334 11.2534 1.33334 11.8135 1.55132 12.2413C1.74307 12.6176 2.04903 12.9236 2.42535 13.1154C2.85318 13.3333 3.41323 13.3333 4.53334 13.3333Z"
                    stroke="#000000"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#000000',
                }}
              >
                palikaabu@gmail.com
              </span>
            </div>

            {/* Address */}
            <div className="flex items-start" style={{ gap: '8px' }}>
              <div
                className="flex items-center justify-center"
                style={{
                  width: '32px',
                  height: '27px',
                  borderRadius: '99px',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z"
                    stroke="#000000"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14.6667C10.6667 12 13.3333 9.61217 13.3333 6.66667C13.3333 3.72116 10.9455 1.33333 8 1.33333C5.05448 1.33333 2.66666 3.72116 2.66666 6.66667C2.66666 9.61217 5.33333 12 8 14.6667Z"
                    stroke="#000000"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#000000',
                }}
              >
                Nagar Palika Mount Abu
                <br />
                Near Polo Ground
              </span>
            </div>
          </motion.div>

          {/* Adventure Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start"
            style={{ gap: '16px' }}
          >
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '20px',
                textTransform: 'capitalize',
                color: '#132019',
              }}
            >
              Adventure
            </h4>
            <div className="flex flex-col items-start" style={{ gap: '8px' }}>
              {adventureLinks.map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ x: 3, color: '#D4AF37' }}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '24px',
                    textTransform: 'capitalize',
                    color: '#000000',
                  }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links & Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-start"
            style={{ gap: '26px' }}
          >
            {/* Quick Links */}
            <div className="flex flex-col items-start" style={{ gap: '16px' }}>
              <h4
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '20px',
                  textTransform: 'capitalize',
                  color: '#132019',
                }}
              >
                Quick Links
              </h4>
              <div className="flex flex-col items-start" style={{ gap: '8px' }}>
                {quickLinks.map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    whileHover={{ x: 3, color: '#D4AF37' }}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '24px',
                      textTransform: 'capitalize',
                      color: '#000000',
                    }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="flex flex-col items-start" style={{ gap: '16px' }}>
              <h4
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '20px',
                  textTransform: 'capitalize',
                  color: '#132019',
                }}
              >
                Connect
              </h4>
              <div className="flex flex-col items-start" style={{ gap: '8px' }}>
                {connectLinks.map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    whileHover={{ x: 3, color: '#D4AF37' }}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '24px',
                      textTransform: 'capitalize',
                      color: '#000000',
                    }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative flex justify-center items-center"
          style={{
            marginTop: '40px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '17px',
              textTransform: 'capitalize',
              color: '#000000',
            }}
          >
            © 2025 Nagar Palika Mount Abu. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
      `}</style>
    </footer>
  );
}

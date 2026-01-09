'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (name: string) => {
    setExpandedSections(prev =>
      prev.includes(name)
        ? prev.filter(s => s !== name)
        : [...prev, name]
    );
  };

  const menuItems = [
    { name: 'HOME', href: '#home', expandable: false },
    {
      name: 'MOUNT ABU TOURIST INFORMATION',
      href: '#tourism',
      expandable: true,
      subItems: [
        { name: 'TOP DESTINATIONS', href: '#destinations' },
        { name: 'ECO TOURISM & ADVENTURES', href: '#eco-tourism' },
        { name: 'UNEXPLORED GEMS OF MOUNT ABU', href: '#unexplored' },
      ]
    },
    {
      name: 'MUNICIPAL SERVICES',
      href: '#municipal',
      expandable: true,
      subItems: [
        { name: 'DIGITAL CONSTRUCTION TOKEN', href: '#' },
        { name: 'COMPLAINT REDRESSAL & TRACKING', href: '#' },
        { name: 'VITAL CERTIFICATES (BIRTH/DEATH)', href: '#' },
        { name: 'MARRIAGE CERTIFICATE', href: '#' },
      ]
    },
    { name: 'ABOUT MUNICIPAL COUNCIL', href: '#about', expandable: false },
    { name: 'VIEW MAP', href: '#map', expandable: false },
    { name: 'CITY PROFILE', href: '#profile', expandable: false },
    {
      name: 'NEWS & UPDATES',
      href: '#news',
      expandable: true,
      subItems: [
        { name: 'NOTICES', href: '#notices' },
        { name: 'TENDERS', href: '#tenders' },
      ]
    },
    {
      name: 'INFORMATION & GUIDELINES',
      href: '#info',
      expandable: true,
      subItems: [
        { name: 'NAGAR PALIKA ACT', href: '#' },
        { name: 'WARDS MAP', href: '#' },
        { name: 'CONSTRUCTION GUIDELINES', href: '#' },
        { name: 'ECO-SENSITIVE ZONE', href: '#' },
        { name: 'LAND PURCHASE GUIDELINES', href: '#' },
        { name: 'RESTAURANT LICENCES', href: '#' },
        { name: 'TAXES', href: '#taxes' },
        { name: 'BUDGET', href: '#budget' },
      ]
    },
    { name: 'TESTIMONIALS', href: '#testimonials', expandable: false },
    {
      name: 'IMPORTANT LINKS',
      href: '#links',
      expandable: true,
      subItems: [
        { name: 'RAJASTHAN SAMPARK', href: '#' },
        { name: 'PEHCHAN', href: '#' },
        { name: 'E-PROC', href: '#' },
        { name: 'OTHER GOVT. LINKS', href: '#' },
      ]
    },
    { name: 'CONTACT DIARY', href: '#contact', expandable: false },
    {
      name: 'MORE',
      href: '#more',
      expandable: true,
      subItems: [
        { name: 'GET OUR APPLICATION', href: '#' },
        { name: 'CONNECT WITH US', href: '#' },
      ]
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
    { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'X', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  ];

  return (
    <>
      {/* Header */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className="mx-auto border-b border-white/20"
          style={{
            maxWidth: '1440px',
            height: '122px',
            padding: '16px 82px',
            background: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <div className="flex items-center justify-between h-full">
            {/* Logo - Left */}
            <motion.a
              href="#home"
              className="flex items-center"
              style={{ gap: '10px' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative overflow-hidden" style={{ width: '41.82px', height: '47.58px' }}>
                <Image
                  src="/nav_img.png"
                  alt="Nagar Palika Mount Abu"
                  fill
                  className="object-contain"
                />
              </div>
              <span
                className="text-white baron-neue"
                style={{
                  fontWeight: 900,
                  fontSize: '24px',
                  lineHeight: '24px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                Nagar Palika Mount Abu
              </span>
            </motion.a>

            {/* Right Side - Hindi Button & Menu Button */}
            <div className="flex items-center justify-between" style={{ gap: '30px' }}>
              {/* Hindi Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center"
                style={{
                  width: '100px',
                  height: '48px',
                  borderRadius: '25px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <span
                  className="text-white baron-neue"
                  style={{
                    fontWeight: 900,
                    fontSize: '20px',
                    lineHeight: '24px',
                  }}
                >
                  हिन्दी
                </span>
              </motion.button>

              {/* Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-center"
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                }}
              >
                <motion.div
                  className="relative"
                  style={{ width: '51.43px', height: '51.43px' }}
                >
                  {/* Hamburger Icon */}
                  <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-1/2 -translate-x-1/2 bg-white"
                    style={{ width: '26.8px', height: '2px', top: '12px' }}
                  />
                  <motion.span
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-1/2 -translate-x-1/2 bg-white"
                    style={{ width: '26.8px', height: '2px', top: '24px' }}
                  />
                  <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-1/2 -translate-x-1/2 bg-white"
                    style={{ width: '26.8px', height: '2px', top: '36px' }}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menu Overlay and Side Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Overlay - Left side */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed z-30 left-0 right-0 bottom-0"
              style={{
                top: '122px',
                background: 'rgba(0, 0, 0, 0.25)',
                backdropFilter: 'blur(5px)',
              }}
            />

            {/* Right Side Panel Menu - Below Header */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed z-40 right-0 bottom-0"
              style={{
                top: '122px',
                width: '50%',
                height: 'calc(100vh - 122px)',
                background: 'rgba(19, 32, 25, 0.95)',
                backdropFilter: 'blur(2px)',
                padding: '60px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '24px',
                overflowY: 'auto',
              }}
            >
              {/* Menu Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-start w-full"
                style={{
                  gap: '24px',
                  opacity: 0.85,
                }}
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={`${item.name}-${index}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.03 }}
                    className="w-full"
                  >
                    {item.expandable ? (
                      <div className="flex flex-col">
                        <button
                          onClick={() => toggleSection(item.name)}
                          className="flex flex-row justify-between items-center w-full group"
                          style={{ gap: '50px', width: '527px' }}
                        >
                          <span
                            className="text-white hover:text-white/80 transition-colors text-left baron-neue"
                            style={{
                              fontWeight: 900,
                              fontSize: '24px',
                              lineHeight: '24px',
                              letterSpacing: '1.19px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {item.name}
                          </span>
                          {/* Plus Icon */}
                          <motion.div
                            animate={{ rotate: expandedSections.includes(item.name) ? 45 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative flex items-center justify-center flex-shrink-0"
                            style={{ width: '24px', height: '24px' }}
                          >
                            <span
                              className="absolute bg-white"
                              style={{ width: '14px', height: '2.4px', borderRadius: '1px' }}
                            />
                            <span
                              className="absolute bg-white"
                              style={{ width: '2.4px', height: '14px', borderRadius: '1px' }}
                            />
                          </motion.div>
                        </button>

                        {/* Sub Items */}
                        <AnimatePresence>
                          {expandedSections.includes(item.name) && item.subItems && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                              style={{ paddingLeft: '10px', paddingTop: '34px' }}
                            >
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {item.subItems.map((subItem, subIndex) => (
                                  <motion.a
                                    key={subItem.name}
                                    href={subItem.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: subIndex * 0.08 }}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block baron-neue hover:opacity-80 transition-opacity"
                                    style={{
                                      fontWeight: 900,
                                      fontSize: '20px',
                                      lineHeight: '20px',
                                      letterSpacing: '2px',
                                      textTransform: 'uppercase',
                                      color: '#D4AF37',
                                    }}
                                  >
                                    {subItem.name}
                                  </motion.a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white hover:text-white/80 transition-colors block baron-neue"
                        style={{
                          fontWeight: 900,
                          fontSize: '24px',
                          lineHeight: '24px',
                          letterSpacing: '1.19px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.name}
                      </a>
                    )}
                  </motion.div>
                ))}

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-row items-center"
                  style={{ gap: '17.82px', marginTop: '24px' }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href="#"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.08 }}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center text-white hover:text-white/80 transition-colors"
                      style={{
                        width: '35.63px',
                        height: '35.63px',
                        border: '1.19px solid #FFFFFF',
                        borderRadius: '29.69px',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d={social.icon} />
                      </svg>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Custom Styles */}
      <style jsx global>{`
        @font-face {
          font-family: 'Baron Neue';
          src: url('/fonts/BaronNeue.otf') format('opentype');
          font-weight: 900;
          font-style: normal;
          font-display: swap;
        }

        .baron-neue {
          font-family: 'Baron Neue', 'Montserrat', sans-serif;
        }
      `}</style>
    </>
  );
};

export default Navbar;

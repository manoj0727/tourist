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
          className="w-full border-b border-white/20 h-14 sm:h-16 md:h-[70px] lg:h-[80px] px-4 sm:px-6 md:px-12 lg:px-20"
          style={{
            background: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <div className="flex items-center justify-between h-full w-full">
            {/* Logo - Left */}
            <motion.a
              href="#home"
              className="flex items-center gap-2 md:gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative overflow-hidden w-8 h-9 sm:w-10 sm:h-11 md:w-[42px] md:h-[48px]">
                <Image
                  src="/nav_img.png"
                  alt="Nagar Palika Mount Abu"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <span
                className="text-white rajdhani text-sm sm:text-base md:text-lg lg:text-2xl hidden sm:block"
                style={{
                  fontWeight: 900,
                  lineHeight: '1',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                Nagar Palika Mount Abu
              </span>
            </motion.a>

            {/* Right Side - Hindi Button & Menu Button */}
            <div className="flex items-center gap-3 md:gap-6 lg:gap-8">
              {/* Hindi Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center justify-center w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 rounded-full border border-white/30"
              >
                <span
                  className="text-white rajdhani text-sm sm:text-base md:text-lg"
                  style={{
                    fontWeight: 900,
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
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
              >
                <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
                  {/* Hamburger Icon */}
                  <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-1/2 -translate-x-1/2 bg-white w-5 sm:w-6 md:w-7 h-0.5 top-1 sm:top-2"
                  />
                  <motion.span
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-1/2 -translate-x-1/2 bg-white w-5 sm:w-6 md:w-7 h-0.5 top-3 sm:top-4"
                  />
                  <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-1/2 -translate-x-1/2 bg-white w-5 sm:w-6 md:w-7 h-0.5 top-5 sm:top-6"
                  />
                </div>
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
              className="fixed z-30 left-0 right-0 bottom-0 top-14 sm:top-16 md:top-[70px] lg:top-[80px]"
              style={{
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
              className="fixed z-40 right-0 bottom-0 top-14 sm:top-16 md:top-[70px] lg:top-[80px] w-full sm:w-[85%] md:w-[70%] lg:w-[50%] p-6 sm:p-8 md:p-10 lg:p-[60px] flex flex-col items-start gap-4 sm:gap-5 md:gap-6 overflow-y-auto"
              style={{
                background: 'rgba(19, 32, 25, 0.95)',
                backdropFilter: 'blur(2px)',
              }}
            >
              {/* Menu Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-start w-full gap-4 sm:gap-5 md:gap-6"
                style={{
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
                          className="flex flex-row justify-between items-center w-full group gap-4 sm:gap-6 md:gap-8 lg:gap-[50px]"
                        >
                          <span
                            className="text-white hover:text-white/80 transition-colors text-left rajdhani text-sm sm:text-base md:text-lg lg:text-2xl"
                            style={{
                              fontWeight: 900,
                              lineHeight: '1.2',
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
                              className="overflow-hidden pl-2 sm:pl-3 pt-4 sm:pt-6 md:pt-8"
                            >
                              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                                {item.subItems.map((subItem, subIndex) => (
                                  <motion.a
                                    key={subItem.name}
                                    href={subItem.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: subIndex * 0.08 }}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block rajdhani hover:opacity-80 transition-opacity text-xs sm:text-sm md:text-base lg:text-xl"
                                    style={{
                                      fontWeight: 900,
                                      lineHeight: '1.2',
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
                        className="text-white hover:text-white/80 transition-colors block rajdhani text-sm sm:text-base md:text-lg lg:text-2xl"
                        style={{
                          fontWeight: 900,
                          lineHeight: '1.2',
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
                  className="flex flex-row items-center gap-3 sm:gap-4 mt-4 sm:mt-6"
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href="#"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.08 }}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center text-white hover:text-white/80 transition-colors w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white"
                    >
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="currentColor">
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
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');

        .rajdhani {
          font-family: 'Rajdhani', sans-serif;
        }
      `}</style>
    </>
  );
};

export default Navbar;

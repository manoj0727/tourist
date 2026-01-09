'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const destinations = [
  {
    id: 1,
    name: 'Dilwara Temples',
    description: 'Marvel at the intricate marble carvings of these 11th-century Jain temples',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=2070&auto=format&fit=crop',
    category: 'Heritage',
    rating: 4.9,
    duration: '2-3 hours',
  },
  {
    id: 2,
    name: 'Nakki Lake',
    description: 'Enjoy boat rides on this serene lake surrounded by hills and gardens',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
    category: 'Nature',
    rating: 4.7,
    duration: '1-2 hours',
  },
  {
    id: 3,
    name: 'Sunset Point',
    description: 'Witness the most breathtaking sunsets over the Aravalli mountains',
    image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?q=80&w=2070&auto=format&fit=crop',
    category: 'Viewpoint',
    rating: 4.8,
    duration: '1 hour',
  },
  {
    id: 4,
    name: 'Guru Shikhar',
    description: 'Trek to the highest peak in the Aravalli Range at 1,722 meters',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
    category: 'Adventure',
    rating: 4.6,
    duration: '3-4 hours',
  },
  {
    id: 5,
    name: 'Wildlife Sanctuary',
    description: 'Explore diverse flora and fauna in this protected forest reserve',
    image: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?q=80&w=2072&auto=format&fit=crop',
    category: 'Wildlife',
    rating: 4.5,
    duration: '2-3 hours',
  },
  {
    id: 6,
    name: 'Achalgarh Fort',
    description: 'Discover ancient ruins and temples with panoramic mountain views',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop',
    category: 'Heritage',
    rating: 4.4,
    duration: '2 hours',
  },
];

const categories = ['All', 'Heritage', 'Nature', 'Viewpoint', 'Adventure', 'Wildlife'];

const Destinations = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredDestinations =
    activeCategory === 'All'
      ? destinations
      : destinations.filter((d) => d.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="destinations" ref={ref} className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-4"
          >
            Explore Places
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular{' '}
            <span className="text-[#c9a227]">Destinations</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover the most enchanting places in Mount Abu, from ancient temples
            to serene lakes and breathtaking viewpoints
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#1e3a5f] text-white shadow-lg shadow-[#1e3a5f]/30'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              variants={cardVariants}
              layout
              onHoverStart={() => setHoveredCard(destination.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  animate={{
                    scale: hoveredCard === destination.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-full h-full"
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${destination.image}')` }}
                  />
                </motion.div>

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === destination.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                />

                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#1e3a5f]"
                >
                  {destination.category}
                </motion.div>

                {/* Rating */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="absolute top-4 right-4 px-3 py-1 bg-[#c9a227] rounded-full text-xs font-semibold text-white flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {destination.rating}
                </motion.div>

                {/* Explore Button - Shows on Hover */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredCard === destination.id ? 1 : 0,
                    y: hoveredCard === destination.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-white text-[#1e3a5f] font-semibold rounded-full shadow-lg"
                >
                  Explore
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1e3a5f] transition-colors"
                >
                  {destination.name}
                </motion.h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {destination.duration}
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-1 text-[#c9a227] font-medium text-sm"
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredCard === destination.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1e3a5f] to-[#c9a227] origin-left"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(30, 58, 95, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full hover:bg-[#2d5a8a] transition-all duration-300 inline-flex items-center gap-2"
          >
            View All Destinations
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;

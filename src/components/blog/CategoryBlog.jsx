import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CategoryButton = ({ category, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 1.1 }}
      transition={{ duration: 0.15 }}
      className={`
        relative px-6 py-3 rounded-full font-semibold text-sm sm:text-base whitespace-nowrap
        transition-all duration-300 
        ${isActive 
          ? 'text-primary bg-primary/10' 
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }
      `}
    >
      {category}
      
      {/* Active Underline */}
      {isActive && (
        <motion.div
          layoutId="activeCategory"
          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-primary rounded-full"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

export default function CategoryBlog() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = [
    'All',
    'Dance Tips',
    'Events',
    'Training',
    'Wedding'
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    console.log(`Filtering by: ${category}`);
    // Add your filter logic here
  };

  return (
    <div className="min-h-full bg-linear-to-br  py-16 px-4 sm:px-6 lg:px-8"
      style={{ background: 'var(--color-elegantLight)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Dance <span className="text-primary">Blog</span>
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Explore articles, tips, and inspiration from our dance community
          </p>
        </motion.div>

        {/* Categories Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Desktop View - Centered */}
          <div className="hidden sm:flex justify-center items-center gap-3 flex-wrap">
            {categories.map((category) => (
              <CategoryButton
                key={category}
                category={category}
                isActive={activeCategory === category}
                onClick={() => handleCategoryClick(category)}
              />
            ))}
          </div>

          {/* Mobile View - Horizontal Scroll */}
          <div className="sm:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex gap-3 min-w-max pb-2">
              {categories.map((category) => (
                <CategoryButton
                  key={category}
                  category={category}
                  isActive={activeCategory === category}
                  onClick={() => handleCategoryClick(category)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Sample Blog Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-48 bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-6xl">💃</span>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                  {activeCategory === 'All' ? categories[Math.floor(Math.random() * (categories.length - 1)) + 1] : activeCategory}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sample Blog Post {item}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover amazing dance tips and techniques for your next performance.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-primary font-semibold text-sm hover:text-[#e03558] transition-colors"
                >
                  Read More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Active Filter Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            Showing: <span className="font-semibold text-primary">{activeCategory}</span>
          </p>
        </motion.div>
      </div>

      {/* Custom Scrollbar Hide CSS */}
      
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Calendar,
  Music,
  Sparkles,
  Users,
  Heart,
  Star,
} from 'lucide-react';

/* -------------------- DATA -------------------- */

const reasons = [
  {
    id: 1,
    icon: Award,
    title: 'Experienced Instructors',
    description:
      'Learn from certified professionals with years of expertise in dance and choreography.',
  },
  {
    id: 2,
    icon: Users,
    title: 'Personalized Lessons',
    description:
      'Customized training programs tailored to your skill level and goals.',
  },
  {
    id: 3,
    icon: Calendar,
    title: 'Flexible Timings',
    description:
      'Choose from morning, evening, or weekend batches that fit your schedule.',
  },
  {
    id: 4,
    icon: Music,
    title: 'Performance Opportunities',
    description:
      'Showcase your skills at events, competitions, and live performances.',
  },
  {
    id: 5,
    icon: Sparkles,
    title: 'Premium Studio Ambience',
    description:
      'Train in a modern facility with state-of-the-art equipment and inspiring atmosphere.',
  },
  {
    id: 6,
    icon: Heart,
    title: 'Wedding Specialists',
    description:
      'Expert choreography for your special day, creating unforgettable moments.',
  },
];

/* -------------------- ANIMATIONS -------------------- */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -120, // 👈 LEFT SIDE
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
};

/* -------------------- CARD -------------------- */

const ReasonCard = ({ reason }) => {
  const Icon = reason.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="relative group h-full"
    >
      <div
        className="
          relative h-full rounded-xl shadow-xl
          p-4 sm:p-5 md:p-6
          border-2 border-primary
          transition-all duration-300
          group-hover:border-secondary
        "
        style={{
          background: 'rgba(255,255,255,0.06)',
        }}
      >
        {/* Icon */}
        <div className="relative mb-3 md:mb-4">
          <div
            className="
              absolute inset-0
              w-12 h-12 md:w-14 md:h-14
              rounded-full blur-xl opacity-40
            "
          />
          <div
            className="
              relative flex items-center justify-center
              w-12 h-12 md:w-14 md:h-14
              rounded-full
            "
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
        </div>

        {/* Content */}
        <h3
          className="text-lg md:text-xl font-bold mb-1 md:mb-2"
          style={{ color: 'var(--color-elegantDark)' }}
        >
          {reason.title}
        </h3>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
};

/* -------------------- SECTION -------------------- */

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 md:py-20 ">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-1 mx-auto mb-4 rounded-full"
            style={{
              background:
                'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-md mb-4"
            style={{
              background:
                'linear-gradient(135deg, rgba(246,70,108,0.1), rgba(242,139,0,0.1))',
              borderColor: 'var(--color-primary)',
            }}
          >
            <Star size={16} style={{ color: 'var(--color-primary)' }} />
            <span
              className="text-sm font-semibold"
              style={{ color: 'var(--color-elegantDark)' }}
            >
              Academy
            </span>
          </motion.div>

          <h2
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ color: 'var(--color-elegantDark)' }}
          >
            Why Choose{' '}
            <span style={{ color: 'var(--color-primary)' }}>
              Our Academy
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of expert training, personalized
            attention, and world-class facilities that make us the premier choice
            for dance enthusiasts.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4 sm:gap-6 md:gap-8
          "
        >
          {reasons.map((reason) => (
            <ReasonCard key={reason.id} reason={reason} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

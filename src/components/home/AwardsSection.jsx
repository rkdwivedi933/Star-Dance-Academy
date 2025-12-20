import { motion } from "framer-motion";
import { Award, Layers, Star, Sparkles, Trophy } from "lucide-react";

/* ---------------- Award Item ---------------- */

const AwardItem = ({ award, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative grid md:grid-cols-[1fr_auto_1fr] gap-10 mb-24 items-start group"
    >
      {/* ---------------- Left Content (Enhanced) ---------------- */}
      <div className="md:text-right flex flex-col items-end gap-4">
        {/* Year Badge with Shimmer */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative px-8 py-4 text-3xl font-bold tracking-wider overflow-hidden"
        >
          {/* Shimmer overlay */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
          />
          <span
            className="relative bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
            }}
          >
            {award.year}
          </span>
        </motion.div>

        {/* Premium Info Card */}
        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          transition={{ duration: 0.3 }}
          className="max-w-xs text-right relative overflow-hidden"
        >
          {/* Gradient border */}
          <div
            className="absolute inset-0 rounded-2xl p-px"
            style={{
              background:
                "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
            }}
          >
            <div className="w-full h-full bg-white rounded-2xl" />
          </div>

          {/* Content */}
          <div className="relative  p-5 shadow-xl">
            <div className="flex items-center justify-end gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-xs uppercase tracking-[0.15em] font-semibold text-secondary">
                Milestone
              </span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed font-light">
              A defining year marking excellence and creative growth.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ---------------- Center Timeline Dot ---------------- */}
      <div className="flex justify-center relative">
        {/* Outer glow ring */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-8 h-8 rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--color-primary), transparent)",
          }}
        />

        {/* Main dot */}
        <motion.div
          whileHover={{ scale: 1.3 }}
          className="w-4 h-4 rounded-full z-10 shadow-lg border-2 border-white"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
          }}
        />
      </div>

      {/* ---------------- Right Premium Card ---------------- */}
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden"
      >
        {/* Gradient border wrapper */}
        <div
          className="absolute inset-0 rounded-2xl p-px opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
          }}
        >
          <div className="w-full h-full bg-white rounded-2xl" />
        </div>

        {/* Card content */}
        <div className="relative  p-8 shadow-2xl">
          {/* Decorative corner accent */}
        

          {/* Icon with backdrop */}
          <div className="relative mb-4 inline-flex">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="p-3 rounded-xl shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, rgba(246,70,108,0.1), rgba(242,139,0,0.1))",
              }}
            >
              <Trophy className="w-6 h-6 text-secondary" />
            </motion.div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 leading-tight">
            {award.title}
          </h3>

          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: "var(--color-secondary)" }}
            />
            <p className="text-xs tracking-[0.15em] uppercase font-semibold text-secondary">
              {award.organization}
            </p>
          </div>

          <p className="text-gray-600 text-base leading-relaxed mb-5 font-light">
            {award.description}
          </p>

          {award.image && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
              {/* Image overlay gradient */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                
              />
            </motion.div>
          )}

          {/* Bottom accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
            className="h-1 mt-6 rounded-full origin-left"
            style={{
              background:
                "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ---------------- Main Section ---------------- */

const AwardsSection = () => {
  const awards = [
    {
      year: "2025",
      title: "International Dance Excellence Award",
      organization: "World Dance Council",
      description:
        "Recognized for outstanding contribution to contemporary dance education and innovative teaching methodologies.",
      image:
        "https://images.unsplash.com/photo-1568953395240-cc77cc517e15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
    },
    {
      year: "2024",
      title: "Best Dance Academy",
      organization: "National Arts Foundation",
      description:
        "Awarded for excellence in professional dance training programs and commitment to artistic development.",
    },
    {
      year: "2023",
      title: "Choreography Innovation Prize",
      organization: "European Dance Association",
      description:
        "Honored for innovative choreography blending classical and modern styles with cultural authenticity.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: "var(--color-secondary)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-28"
        >
          {/* Top accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-24 h-1 mx-auto mb-6 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
            }}
          />

          {/* Premium badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-xl border mb-8 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(246,70,108,0.08), rgba(242,139,0,0.08))",
              borderColor: "var(--color-primary)",
            }}
          >
            {/* Shimmer effect */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 3,
              }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
            />

            <Award size={20} style={{ color: "var(--color-primary)" }} />
            <span className="text-sm font-semibold tracking-wide text-gray-800 relative">
              AWARDS & ACCOLADES
            </span>
          </motion.div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Awards &{" "}
            <span
              className="  text-primary"
              
            >
              Recognition
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Celebrating milestones that define our journey of{" "}
            <span className="font-medium text-gray-800">
              excellence and innovation
            </span>
            .
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line with gradient */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden md:block"
            style={{
              background:
                "linear-gradient(180deg, transparent, var(--color-primary) 20%, var(--color-secondary) 80%, transparent)",
            }}
          />

          {awards.map((award, index) => (
            <AwardItem key={index} award={award} index={index} />
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default AwardsSection;
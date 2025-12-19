import { motion } from "framer-motion";
import { Images } from "lucide-react";
import { useState } from "react";

export default function AnimatedImageCards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1200&auto=format&fit=crop",
      rotate: 6,
      title: "Mountain Vista",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1710064057043-d301e344e348?w=600&auto=format&fit=crop&q=60",
      rotate: -10,
      title: "Ocean Waves",
    },
    {
      src: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1200&auto=format&fit=crop",
      rotate: 6,
      title: "Desert Dunes",
    },
    {
      src: "https://images.unsplash.com/photo-1582135739731-e748a423f4fa?w=600&auto=format&fit=crop&q=60",
      rotate: -10,
      title: "Forest Path",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="relative overflow-hidden flex flex-col py-20 items-center bg-gray-100 justify-center p-8 gap-14">
      
      {/* Heading */}
      <div className="text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-20 h-1 mx-auto mb-5 rounded-full bg-linear-to-r from-primary to-secondary"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg border mb-5
                     bg-linear-to-br from-primary/10 to-secondary/10 border-primary"
        >
          <Images size={18} className="text-primary" />
          <span className="text-sm font-semibold text-zinc-800">
            Highlights
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-bold mb-3 text-zinc-900">
          Gallery <span className="text-primary">Highlights</span>
        </h2>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Capturing moments of grace, energy, and celebration
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full"
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative group cursor-pointer"
          >
            {/* Glow */}
            <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-70 blur-xl
                            bg-linear-to-r from-primary via-secondary transition-opacity" />

            <motion.div
              className="relative bg-white rounded-2xl overflow-hidden shadow-2xl"
              style={{ rotate: img.rotate }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative aspect-3/4 overflow-hidden">
                <motion.img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-0 p-6">
                  <h3 className="text-white text-2xl font-bold">
                    {img.title}
                  </h3>
                  <div className="w-12 h-1 mt-2 rounded-full bg-linear-to-r from-primary to-secondary" />
                </div>
              </div>
            </motion.div>

            {/* Particles */}
            {hoveredIndex === i &&
              [...Array(6)].map((_, p) => (
                <motion.div
                  key={p}
                  className="absolute w-2 h-2 rounded-full bg-linear-to-r from-primary to-secondary"
                  initial={{ x: "50%", y: "50%", opacity: 0 }}
                  animate={{
                    x: `${50 + Math.cos((p * Math.PI) / 3) * 100}%`,
                    y: `${50 + Math.sin((p * Math.PI) / 3) * 100}%`,
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Award, Medal, Sparkles, X, Images } from "lucide-react";

/* =========================
   ANIMATION VARIANTS
========================= */
const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};



const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 0 rgba(255,180,0,0)",
      "0 0 40px rgba(255,180,0,0.45)",
      "0 0 0 rgba(255,180,0,0)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function AwardsAcademy() {
  const [selectedImage, setSelectedImage] = useState(null);

  const awards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=900",
      title: "National Dance Championship",
      award: "1st Place – Contemporary Division",
      year: "2025",
      location: "New York City",
      description:
        "Our senior ensemble stunned the judges with precision, emotion, and flawless synchronization.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=900",
      title: "International Ballet Competition",
      award: "Gold Medal – Solo Performance",
      year: "2024",
      location: "Paris, France",
      description:
        "A breathtaking Swan Lake performance showcasing control, balance, and storytelling.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=900",
      title: "Regional Hip‑Hop Battle",
      award: "Grand Prize Winner",
      year: "2024",
      location: "Los Angeles, CA",
      description:
        "Explosive energy, sharp freestyle, and unbeatable stage presence secured victory.",
    },
  ];

  return (
    <div className="relativev  overflow-hidden bg-gray-100">
      

      {/* HERO */}
      <section className="relative  py-10 text-center bg-linear-to-r  text-black">
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
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-3 text-zinc-900"
        >
          Awards &  <span className="text-primary">Achievements</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Excellence • Discipline • Passion
        </motion.p>
      </section>

      {/* GRID */}
      <section className=" px-4 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1  lg:grid-cols-3 gap-16">
          {awards.map((award, i) => (
            <AwardCard
              key={award.id}
              award={award}
              index={i}
              onClick={() => setSelectedImage(award)}
            />
          ))}
        </div>
      </section>

      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}

function AwardCard({ award, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      whileHover={{ y: -16, scale: 1.03 }}
      className="relative bg-white border-2 border-primary rounded-3xl shadow-2xl overflow-hidden group"
    >
      {/* IMAGE */}
      <div
  onClick={onClick}
  className="relative aspect-video w-full overflow-hidden cursor-pointer group"
>
  <img
    src={award.image}
    alt={award.title}
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

  {/* YEAR BADGE */}
  <motion.div
    variants={glowPulse}
    animate="animate"
    className="absolute top-4 left-4 px-4 py-2 rounded-full text-lg font-bold text-white backdrop-blur bg-primary/50"
  >
    {award.year}
  </motion.div>

  {/* Trophy */}
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 260 }}
    className="absolute top-4 right-4"
  >
    <Trophy className="w-10 h-10 text-secondary drop-shadow-lg" />
  </motion.div>
</div>


      {/* CONTENT */}
      <div className="p-6">
        <span className="text-sm uppercase tracking-wider text-secondary">
          {award.location}
        </span>
        <h2 className="text-3xl font-serif mt-2 mb-3">
          {award.title}
        </h2>
        <div className="flex items-center gap-2 text-primary font-semibold mb-4">
          <Medal className="w-5 h-5" />
          {award.award}
        </div>
        <p className="text-gray-600 leading-relaxed">
          {award.description}
        </p>
      </div>
    </motion.div>
  );
}

function Lightbox({ image, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <button className="absolute top-6 right-6 text-white" onClick={onClose}>
        <X size={32} />
      </button>

      <motion.div
        initial={{ scale: 0.8, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl w-full"
      >
        <img
          src={image.image}
          alt={image.title}
          className="w-full max-h-[80vh] object-contain rounded-2xl border-4 border-secondary"
        />
        <div className="text-center mt-6 text-white">
          <h3 className="text-3xl font-serif">{image.title}</h3>
          <p className="text-secondary font-semibold">{image.award}</p>
          <p className="text-white/70">
            {image.location} • {image.year}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

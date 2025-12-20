import { motion } from "framer-motion";
import {
  Zap,
  Sparkles,
  Music,
  Theater,
  Flame,
  HeartHandshake,
} from "lucide-react";

export default function DanceClassesSection() {
  const classes = [
    {
      icon: Zap,
      name: "Hip Hop",
      description:
        "Urban street dance with high energy, powerful moves, and expressive freestyle elements.",
      image:
        "https://plus.unsplash.com/premium_photo-1710064217185-8351ee74d564?w=600&auto=format&fit=crop&q=60",
    },
    {
      icon: Sparkles,
      name: "Contemporary",
      description:
        "Fluid and expressive movement combining modern dance techniques with emotional storytelling.",
      image:
        "https://images.unsplash.com/photo-1550026593-cb89847b168d?w=600&auto=format&fit=crop&q=60",
    },
    {
      icon: Music,
      name: "Bollywood",
      description:
        "Vibrant Indian dance fusion with colorful expressions, dramatic moves, and cinematic flair.",
      image:
        "https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?w=600&auto=format&fit=crop&q=60",
    },
    {
      icon: Theater,
      name: "Kathak / Classical",
      description:
        "Traditional Indian classical dance with intricate footwork, graceful spins, and rich cultural heritage.",
      image:
        "https://images.unsplash.com/photo-1479812627010-aa5bd9d173b1?w=600&auto=format&fit=crop&q=60",
    },
    {
      icon: Flame,
      name: "Free Style",
      description:
        "Unleash your creativity with improvisational dance, blending multiple styles and personal expression.",
      image:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80",
    },
    {
      icon: Theater,
      name: "Zumba",
      description:
        "High‑energy fitness dance inspired by Latin rhythms and cardio movement.",
      image:
        "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&auto=format&fit=crop&q=60",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 14 },
    },
  };

  return (
    <section className="relative py-20 px-4 bg-elegantLight overflow-hidden">
      {/* floating glow blobs */}
      
      

      <div className="max-w-7xl mx-auto relative z-10">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className="w-20 h-1 mx-auto mb-4 rounded-full"
                              style={{ 
                                background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`
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
            <HeartHandshake size={16} style={{ color: 'var(--color-primary)' }} />
            <span
              className="text-sm font-semibold"
              style={{ color: 'var(--color-elegantDark)' }}
            >
              Classes
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-elegantDark mb-4">
            Classes <span className="text-primary">Offered</span>
          </h2>
          <p className="text-lg text-elegantDark/80 max-w-2xl mx-auto">
            Discover your rhythm with our diverse dance programs
          </p>
        </motion.div>

        {/* cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {classes.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ rotateX: 6, rotateY: -6, y: -14 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="group perspective"
              >
                <div className="relative h-full rounded-2xl bg-white/80 backdrop-blur-xl border-2 border-primary shadow-2xl overflow-hidden">
                  {/* shimmer overlay */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                  />

                  {/* image */}
                  <div className="relative h-44 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  {/* content */}
                  <div className="p-8 text-center relative">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-16 h-16 -mt-16 mb-5 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center"
                    >
                      <Icon className="w-8 h-8 text-secondary" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-elegantDark mb-3">
                      {item.name}
                    </h3>
                    <p className="text-elegantDark/80 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

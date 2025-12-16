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
        "https://plus.unsplash.com/premium_photo-1710064217185-8351ee74d564?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEhpcCUyMEhvcHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      icon: Sparkles,
      name: "Contemporary",
      description:
        "Fluid and expressive movement combining modern dance techniques with emotional storytelling.",
      image:
        "https://images.unsplash.com/photo-1550026593-cb89847b168d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGVtcG9yYXJ5JTIwZGFuY2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      icon: Music,
      name: "Bollywood",
      description:
        "Vibrant Indian dance fusion with colorful expressions, dramatic moves, and cinematic flair.",
      image:
        "https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9sbHl3b29kJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      icon: Theater,
      name: "Kathak / Classical",
      description:
        "Traditional Indian classical dance with intricate footwork, graceful spins, and rich cultural heritage.",
      image:
        "https://images.unsplash.com/photo-1479812627010-aa5bd9d173b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8S2F0aGFrfGVufDB8fDB8fHww",
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
        "Unleash your creativity with improvisational dance, blending multiple styles and personal expression.",
      image:
        "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8enVtYmF8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <section className="relative w-full py-20 px-6 bg-elegantLight/90 overflow-hidden">
      {/* soft background glow */}
      

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div
            className="w-20 h-1 rounded-full mx-auto mb-6"
            style={{ backgroundColor: "var(--color-secondary)" }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg border mb-5"
            style={{
              background:
                "linear-gradient(135deg, rgba(246,70,108,0.1), rgba(242,139,0,0.1))",
              borderColor: "var(--color-primary)",
            }}
          >
            <HeartHandshake size={18} className="text-primary" />
            <span className="text-sm font-semibold text-elegantDark">
              Classes
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-elegantDark">
            Classes <span className="text-primary">Offered</span>
          </h2>

          <p className="text-lg text-elegantDark/80 max-w-2xl mx-auto">
            Discover your rhythm with our diverse dance programs
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {classes.map((classItem, index) => {
            const Icon = classItem.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative h-full rounded-2xl bg-white/70 backdrop-blur-xl border border-secondary/30 shadow-xl overflow-hidden">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={classItem.image}
                      alt={classItem.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/25" />
                  </div>

                  {/* Content */}
                  <div className="p-7 text-center relative">
                    {/* Icon */}
                    <div className="w-16 h-16 -mt-14 mb-5 mx-auto rounded-full flex items-center justify-center bg-white shadow-lg border border-secondary/30">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-elegantDark">
                      {classItem.name}
                    </h3>

                    <p className="text-sm md:text-base text-elegantDark/85 leading-relaxed font-medium">
                      {classItem.description}
                    </p>
                  </div>

                  {/* bottom accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

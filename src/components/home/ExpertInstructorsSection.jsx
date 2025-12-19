import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Instagram,
  Facebook,
  Youtube,
  AwardIcon,
} from "lucide-react";

/* ================= INSTRUCTOR CARD ================= */

const ExpertInstructorCard = ({
  image,
  name,
  role,
  shortBio,
  fullBio,
  socialLinks,
  index,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  const handleToggle = () => {
    if (!isExpanded) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 150);
    }
    setIsExpanded((prev) => !prev);
  };

  const socialIcons = {
    instagram: Instagram,
    facebook: Facebook,
    youtube: Youtube,
  };

  return (
  <motion.div
  ref={cardRef}
  initial={{
    opacity: 0,
    scale: 0.65,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
  }}
  viewport={{ once: true, amount: 0.35 }}
  transition={{
    type: "spring",
    stiffness: 40,   // 👈 kam = smooth
    damping: 10,     // 👈 zyada = no jhatka
    mass: 1.2,       // 👈 thoda heavy feel
  }}
  whileHover={{ y: -6 }}
  className="
  bg-white rounded-xl overflow-hidden shadow-sm 
  hover:shadow-xl transition-all duration-300
  w-full max-w-[380px]
"

>


      {/* IMAGE */}
      <div className="h-[250px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 transition">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{role}</p>

        {/* SOCIAL */}
        <div className="flex gap-3 mb-4">
          {Object.entries(socialLinks).map(([platform, url]) => {
            const Icon = socialIcons[platform];
            return (
              Icon && (
                <a
                  key={platform}
                  href={url}
                  className="text-gray-400 hover:text-primary transition"
                >
                  <Icon size={20} />
                </a>
              )
            );
          })}
        </div>

        {/* BIO */}
        <p className="text-sm text-gray-600">{shortBio}</p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <p className="text-sm text-gray-600 mt-4 pt-4 border-t">
                {fullBio}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BUTTON */}
        <button
          onClick={handleToggle}
          className="mt-6 w-full  hover:bg-primary text-white py-3 rounded flex items-center justify-center gap-2 uppercase text-sm tracking-wide transition"
          style={{
    background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)`,
  }}
        >
          {isExpanded ? "Close" : "Expand"}
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>
    </motion.div>
  );
};

/* ================= MAIN SECTION ================= */

const ExpertInstructorsSection = () => {
  const instructors = [
    {
      image:
        "https://images.unsplash.com/photo-1623813754430-44650fd2a905?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
      name: "Isabella Martinez",
      role: "Principal Ballet Instructor",
      shortBio:
        "Former principal dancer with the Royal Ballet. 15+ years of experience.",
      fullBio:
        "Trained at the Royal Ballet School, performed across Europe, and mentored dancers who joined international companies.",
      socialLinks: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Marcus Chen",
      role: "Contemporary Director",
      shortBio:
        "Award-winning choreographer specializing in contemporary fusion.",
      fullBio:
        "Blends Eastern & Western dance traditions. Featured in Dance Magazine and global masterclasses.",
      socialLinks: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
  
    {
      image:
        "https://images.unsplash.com/photo-1688888745596-da40843a8d45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      name: "David Thompson",
      role: "Hip Hop Instructor",
      shortBio:
        "International hip hop champion & street dance pioneer.",
      fullBio:
        "Winner of multiple world championships and collaborator with top music artists.",
      socialLinks: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
  ];

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-1 mx-auto mb-4 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg border mb-5"
            style={{
              background:
                "linear-gradient(135deg, rgba(246, 70, 108, 0.1), rgba(242, 139, 0, 0.1))",
              borderColor: "var(--color-primary)",
            }}
          >
            <AwardIcon size={18} style={{ color: "var(--color-primary)" }} />
            <span className="text-sm font-semibold">
              Instructors
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Expert <span className="text-primary">Instructors</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn from world-class professionals shaping the next generation of dancers.
          </p>
        </div>

        {/* GRID */}
     <div
  className="
    grid gap-8 items-start justify-center
    grid-cols-[repeat(auto-fit,minmax(400px,1fr))]
  "
>

          {instructors.map((item, index) => (
            <ExpertInstructorCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertInstructorsSection;

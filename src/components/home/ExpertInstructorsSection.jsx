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
      initial={{ opacity: 0, scale: 0.65 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 10,
        mass: 1.2,
      }}
      whileHover={{ y: -6 }}
      className="
        bg-white rounded-xl overflow-hidden
        
        
         sm:px-8 lg:px-0
        shadow-sm hover:shadow-xl
        transition-all duration-300 
      "
    >
      
   {/* IMAGE */}
<div className="w-full h-[220px] sm:h-60 lg:h-[250px] overflow-hidden bg-gray-100 ">
  <img
    src={image}
    alt={name}
    className="
      w-full h-full
      object-cover sm:object-cover lg:object-contain
      transition-transform duration-500
    "
  />
</div>


      {/* CONTENT */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2">{name}</h3>
        {/* <p className="text-gray-600 text-sm mb-2">{role}</p> */}

        {/* SOCIAL */}
        <div className="flex gap-3 mb-2">
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
        <p className="text-sm text-gray-600 line-clamp-2">{shortBio}</p>

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
          className="
            mt-6 w-full
            hover:bg-primary text-white
            py-3 rounded
            flex items-center justify-center gap-2
            uppercase text-xs sm:text-sm tracking-wide
            transition
          "
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
        "https://images.unsplash.com/photo-1724435811349-32d27f4d5806?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGJveXN8ZW58MHx8MHx8fDA%3D",
      name: "Rishi Singh Parihar",
      // role: "Principal Ballet Instructor",
      shortBio:
  "Boogie Woogie Session 1 specialist with 8+ years of professional teaching and stage performance experience.",
fullBio:
  "Professionally trained dancer with a strong foundation in classical techniques and international exposure. Has performed across multiple stages, guided aspiring dancers, and helped students grow into confident, performance-ready artists.",

      socialLinks: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1618482563290-c0161d5f0d1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      name: "Subham Singh",
      // role: "Contemporary Director",
      shortBio:
  "Dance professional with 4 years of practical training and performance experience.",

fullBio:
  "Received professional dance training through multiple workshops and intensive camps in Delhi and Ahmedabad, Gujarat. Participated in renowned platforms such as Hussle Hood, Jashn-e-Kala, Rolls of Dancing, and TWB.",

      socialLinks: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1669782051640-1f503f31d916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      name: "Sam Singh Rajput",
      // role: "Hip Hop Instructor",
     shortBio:
  "Professionally trained dancer with 4 years of advanced learning in Delhi.",

fullBio:
  "Holds a professional Hip-Hop diploma from a recognized Delhi dance studio. Has been selected for major dance camps and platforms such as Hustle Hood, Dance Deewane Season 03, and Jashn-e-Kala, gaining valuable stage and performance experience.",

      socialLinks: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1573967889948-f78a7a4a9b05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
      name: "Aditya Verma",
      // role: "Hip Hop Instructor",
      shortBio:
  "Dedicated hip-hop instructor with a strong foundation in street dance styles.",

fullBio:
  "A passionate dance professional focused on hip-hop and street dance training. Known for energetic teaching methods and helping students build confidence, rhythm, and performance skills.",

      socialLinks: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1694871420373-e9c1031b91ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      name: "Anurag Rajput",
      // role: "Hip Hop Instructor",
    shortBio:
  "Experienced hip-hop dancer with a strong background in street dance styles.",

fullBio:
  "A dedicated dance professional with hands-on experience in hip-hop and street dance. Actively involved in performances, training sessions, and creative collaborations.",

      socialLinks: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1642365042569-c5c322660b7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
      name: "Ankit Rawat",
      // role: "Hip Hop Instructor",
    shortBio:
  "Highly skilled hip-hop dancer with expertise in street dance styles.",

fullBio:
  "An accomplished dance professional with extensive experience in hip-hop and street dance. Has participated in high-level competitions, stage performances, and creative collaborations with fellow artists.",

      socialLinks: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
      },
    },
  ];

  return (
    <section className="py-20 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">
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
            <span className="text-sm font-semibold">Instructors</span>
          </motion.div>

          <h2 className="text-4xl  md:text-6xl font-bold mb-4">
            Expert <span className="text-primary">Instructors</span>
          </h2>

          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Learn from world-class professionals shaping the next generation of
            dancers.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            justify-items-center
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

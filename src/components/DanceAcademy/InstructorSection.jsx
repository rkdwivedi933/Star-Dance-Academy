import { motion } from "framer-motion";
import { Award, Star, Users, Music, Heart } from "lucide-react";

export default function InstructorSection() {
  const instructor = {
    name: "Priya Sharma",
    title: "Founder & Lead Choreographer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=80",
    bio: "With over 15 years of experience in dance education and performance, Priya has trained thousands of students and choreographed for prestigious events across the country. Her teaching philosophy blends discipline, creativity, and confidence-building.",
    skills: [
      { icon: Award, text: "15+ Years Experience" },
      { icon: Star, text: "Award-Winning Choreographer" },
      { icon: Users, text: "2000+ Students Trained" },
      { icon: Music, text: "Multi-Style Specialist" },
    ],
  };

  return (
    <section className="relative w-full py-16 md:py-24  bg-elegantLight">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-white shadow-sm mb-5">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-gray-700">
              Meet Our Instructor
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Lead <span className="text-primary">Instructor</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Learn from a mentor trusted by students and parents alike
          </p>
        </motion.div>

       {/* Card */}
{/* Card */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="
    rounded-3xl overflow-hidden bg-white shadow-xl
    border border-primary
    mx-4 sm:mx-6 lg:mx-0 
  "
>
  <div className="grid grid-cols-1 md:grid-cols-5 ">

    {/* Image */}
<div className="md:col-span-2 relative h-52 sm:h-64 md:h-[350px] lg:h-[460px]">
  <img
    src={instructor.image}
    alt={instructor.name}
    className="
      w-full h-full object-cover
      md:absolute md:inset-0
      scale-100 md:scale-105
    "
  />
</div>



    {/* Content */}
   <div
  className="
    md:col-span-3
    p-4 sm:p-6 md:p-4
    flex flex-col
    justify-start md:justify-center
    text-left pt-80
    m-auto
  "
>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
          {instructor.name}
        </h3>

        <p className="text-base sm:text-lg font-medium text-primary mt-1">
          {instructor.title}
        </p>
      </motion.div>

      <motion.p
  className="
    mt-3 sm:mt-6
    text-sm
    text-gray-600
    leading-relaxed
    max-w-prose
  "
>

        {instructor.bio}
      </motion.p>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="
          mt-5 sm:mt-8
    grid grid-cols-1 sm:grid-cols-2
    gap-3
        "
      >
        {instructor.skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="
                flex items-center gap-2 p-2 rounded-lg border bg-gray-50
              "
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                {skill.text}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  </div>
</motion.div>


      </div>
    </section>
  );
}

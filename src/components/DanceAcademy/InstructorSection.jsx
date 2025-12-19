import React from "react";
import { motion } from "framer-motion";
import { Trophy, Users, Music, Sparkles } from "lucide-react";

export default function InstructorSection() {
  return (
    <section className="min-h-full bg-white flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-20 h-1 mx-auto mb-4 rounded-full"
        style={{
          background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`,
        }}
      />
      <div className="flex justify-center">
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
          <Sparkles size={18} style={{ color: "var(--color-primary)" }} />
          <span
            className="text-sm font-semibold"
            style={{ color: "var(--color-elegantDark)" }}
          >
            Instructor
          </span>
        </motion.div>
      </div>
      {/* Section Title (outside phone) */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold  mb-2">
          Our Lead <span className="text-primary">Instructor</span>
        </h1>
        <p className="text-gray-600  text-xl ">
          Learn from a mentor trusted by students
          <br className="hidden sm:block" /> and parents alike.
        </p>
      </motion.div>

      {/* Phone Frame */}
      <div className="w-full max-w-sm">
        <div className="relative bg-white rounded-[2.5rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-gray-800 rounded-b-3xl z-10" />

          {/* Content */}
          <div className="pt-10 pb-8 px-5">
            {/* Instructor Image */}
            <motion.div
              className="mb-5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-linear-to-br from-gray-100 to-gray-50 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=600&auto=format&fit=crop&q=60"
                  alt="Priya Sharma"
                  className="w-full h-64 object-cover"
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              className="text-center mb-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-800">Priya Sharma</h2>
              <p className="text-orange-500 font-semibold">
                Founder & Lead Choreographer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-600 text-center text-sm leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              With 15+ years of experience, Priya has trained thousands of
              students and choreographed for prestigious events across the
              country. Her teaching blends discipline, creativity, and
              confidence.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <StatCard
                icon={<Trophy className="w-7 h-7 text-orange-500" />}
                title="15+ Years"
                subtitle="Experience"
                gradient="from-orange-50 to-yellow-50"
              />
              <StatCard
                icon={<span className="text-2xl">⭐</span>}
                title="Award Winning"
                subtitle="Choreographer"
                gradient="from-orange-50 to-yellow-50"
              />
              <StatCard
                icon={<Users className="w-7 h-7 text-blue-500" />}
                title="2000+"
                subtitle="Students"
                gradient="from-blue-50 to-indigo-50"
              />
              <StatCard
                icon={<Music className="w-7 h-7 text-pink-500" />}
                title="Multi‑Style"
                subtitle="Specialist"
                gradient="from-pink-50 to-purple-50"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, title, subtitle, gradient }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`rounded-2xl p-4 bg-linear-to-br ${gradient} border border-black/5 shadow-sm`}
    >
      <div className="mb-2">{icon}</div>
      <p className="font-bold text-gray-800 text-sm">{title}</p>
      <p className="text-xs text-gray-600">{subtitle}</p>
    </motion.div>
  );
}

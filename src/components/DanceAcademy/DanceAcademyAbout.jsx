import { motion } from "framer-motion";

export default function DanceAcademyAbout() {
  return (
    <div
      className="relative w-full py-20 md:py-20 lg:py-20 px-4"
    
    >
     

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="space-y-8"
          >
            {/* Section Title */}
            <div className="space-y-3">
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-16 h-1 rounded-full"
                style={{ backgroundColor: "var(--color-secondary)" }}
              />
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold"
                style={{ color: "var(--color-elegantDark)" }}
              >
                About Our Academy
              </h2>
            </div>

            {/* Who We Are */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              <h3
                className="text-base md:text-xl font-semibold"
                style={{ color: "var(--color-elegantDark)" }}
              >
                Who We Are
              </h3>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: "var(--color-elegantDark)", opacity: 0.85 }}
              >
                We are a{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-secondary)" }}
                >
                  passionate team
                </span>{" "}
                of professional dancers and choreographers dedicated to
                nurturing talent and spreading the joy of dance. With years of{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-secondary)" }}
                >
                  experience
                </span>{" "}
                in various dance forms, we create a vibrant community where
                everyone can discover their rhythm.
              </p>
            </motion.div>

            {/* What We Teach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3"
            >
              <h3
                className="text-base md:text-xl font-semibold"
                style={{ color: "var(--color-elegantDark)" }}
              >
                What We Teach
              </h3>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: "var(--color-elegantDark)", opacity: 0.85 }}
              >
                From{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-secondary)" }}
                >
                  classical dance forms
                </span>{" "}
                to contemporary styles,{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-secondary)" }}
                >
                  Bollywood choreography
                </span>
                , hip-hop, Zumba fitness, and{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-secondary)" }}
                >
                  wedding performances
                </span>{" "}
                — we offer comprehensive training for all ages and skill levels.
                Our curriculum is designed to build technique, confidence, and
                creativity.
              </p>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-3"
            >
              <h3
                className="text-base md:text-xl font-semibold"
                style={{ color: "var(--color-elegantDark)" }}
              >
                Our Mission
              </h3>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: "var(--color-elegantDark)", opacity: 0.85 }}
              >
                Our mission is to inspire and empower individuals through the{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-secondary)" }}
                >
                  art of dance
                </span>
                . We believe dance is more than movement — it's a form of{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-secondary)" }}
                >
                  self-expression
                </span>
                , a celebration of culture, and a path to{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-secondary)" }}
                >
                  physical and mental wellness
                </span>
                . We strive to create a welcoming space where passion meets
                excellence.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="relative mt-4"
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4"
              style={{ borderColor: "var(--color-secondary)" }}
            >
              {/* Image - replace with your actual image */}
              <img
                src="https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800&q=80"
                alt="Dance Academy"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Heart, Flame, Users, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogSection = ({ limit, clamp = 2 }) => {
  const blogs = [
    {
      id: 1,
      tag: "Wedding Dance",
      tagIcon: Heart,
      image:
        "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&auto=format&fit=crop&q=60",
      title: "Perfect Wedding Dance for Your Big Day",
      description:
        "Make your wedding unforgettable with a beautifully choreographed couple dance that tells your love story.",
      date: "Nov 1, 2025",
      author: "Star Dance Academy",
      readTime: "5 min read",
    },
    {
      id: 2,
      tag: "Zumba",
      tagIcon: Flame,
      image:
        "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80",
      title: "Why Zumba Is the Best Fun Workout",
      description:
        "Burn calories, boost energy, and stay fit while enjoying high-energy Zumba dance sessions.",
      date: "Nov 12, 2024",
      author: "Star Dance Academy",
      readTime: "6 min read",
    },
    {
      id: 3,
      tag: "Couple Dance",
      tagIcon: Users,
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80",
      title: "Couple Dance That Builds Chemistry",
      description:
        "Learn romantic and fun couple dance styles designed to strengthen coordination and bonding.",
      date: "Nov 10, 2024",
      author: "Star Dance Academy",
      readTime: "4 min read",
    },
  ];

  /* 🔥 PAGE LOAD SLIDE-IN FROM RIGHT */
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 1000, // 👉 right se start
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-full relative overflow-hidden py-20 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="w-20 h-1 mx-auto mb-4 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
            }}
          />

          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg border mb-5"
            style={{
              background:
                "linear-gradient(135deg, rgba(246,70,108,.1), rgba(242,139,0,.1))",
              borderColor: "var(--color-primary)",
            }}
          >
            <BookOpen size={18} className="text-primary" />
            <span className="text-sm font-semibold text-gray-800">
              Blog
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Dance <span className="text-primary">Insights</span> &{" "}
            <span className="text-secondary">Tips</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our latest articles on dance techniques, fitness tips, and
            wedding choreography inspiration
          </p>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
>

          {blogs.slice(0, limit ?? blogs.length).map((blog) => {
            const Icon = blog.tagIcon;

            return (
              <motion.article
                key={blog.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                onClick={() => navigate(`/blog-details/${blog.id}`)}
                className="relative bg-white rounded-3xl border-2 border-primary overflow-hidden group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-primary px-4 py-2 rounded-full">
                    <Icon className="w-4 h-4 text-white" />
                    <span className="text-white text-xs font-semibold">
                      {blog.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition line-clamp-1">
                    {blog.title}
                  </h3>

                  <p className={`text-gray-600 text-sm mb-4 line-clamp-${clamp}`}>
                    {blog.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {blog.readTime}
                    </span>
                    <span className="text-primary text-sm font-medium">
                      Read More →
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => navigate("/blog")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 cursor-pointer rounded-full font-semibold text-white shadow-xl"
            style={{
              background:
                "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
            }}
          >
            Explore All Blog
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogSection;

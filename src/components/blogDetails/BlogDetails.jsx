import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { blogDetailsData } from "../blogDetails/blogDetailsData";

import { Leaf, Calendar, Timer, User, ChevronRight } from "lucide-react";

const icons = { Leaf };

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogDetailsData.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-full flex items-center justify-center text-black text-xl">
        Blog Not Found
      </div>
    );
  }

  return (
    <div className="min-h-full text-black relative overflow-hidden pt-28 pb-20 px-5 bg-elegantLight/90">

    
      

      <div className="max-w-4xl mx-auto relative z-10">

        

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight bg-linear-to-r 
                     text-primary bg-clip-text"
        >
          {blog.title}
        </motion.h1>

        {/* Meta Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-900"
        >
          <span className="flex items-center gap-1">
            <User size={16} /> {blog.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={16} /> {blog.date}
          </span>
          <span className="flex items-center gap-1">
            <Timer size={16} /> {blog.readTime}
          </span>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="relative"
        >
          <img
            src={blog.image}
            className="w-full rounded-3xl mt-10 shadow-2xl hover:scale-[1.02]
                       transition-transform duration-500"
          />

          {/* Glow border */}
          <div className="absolute inset-0 rounded-3xl  pointer-events-none" />
        </motion.div>

        {/* Sections */}
        <div className="mt-14 space-y-12">
          {blog.sections.map((section, i) => {
            const Icon = icons[section.icon];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative p-7 rounded-3xl 
                           bg-white/5 backdrop-blur-xl
                           border border-primary 
                           shadow-xl transition-all duration-500"
              >
                {/* internal floating bubbles */}
                <motion.div
                  animate={{ y: [0, -10, 0], opacity: [0.15, 0.3, 0.15] }}
                  transition={{ repeat: Infinity, duration: 6 }}
                  className="absolute -top-4 -right-4 w-10 h-10  blur-xl rounded-full"
                />
               

                {/* Section Heading */}
                <div className="flex items-center gap-2 mb-3">
                  {Icon && (
                    <Icon className="text-primary drop-shadow-[0_0_5px_rgba(0,255,0,0.4)]" />
                  )}
                  <h2 className="text-2xl font-bold text-primary">
                    {section.heading}
                  </h2>
                </div>

                {/* Paragraph */}
                {section.content && (
                  <p className="text-gray-900 font-medium whitespace-pre-line">
                    {section.content}
                  </p>
                )}

                {/* List */}
                {section.list && (
                  <ul className="space-y-4 mt-5">
                    {section.list.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 group hover:translate-x-1 transition-all"
                      >
                        <ChevronRight className="text-gray-900 mt-1" />
                        <p>
                          <span className="text-gray-900 font-semibold">
                            {item.title}:
                          </span>{" "}
                          <span className="">{item.desc}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

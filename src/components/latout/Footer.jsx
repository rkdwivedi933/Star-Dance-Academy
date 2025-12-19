import { AnimatePresence, motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleClickAdd = () => {
    navigate("/address");
  };

  /* ================= BACKGROUND IMAGES ================= */
  const bgImages = [
    "https://images.unsplash.com/photo-1669628745031-6a3843daf9aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1547153760-18fc86324498?w=1920&q=80",
    "https://images.unsplash.com/photo-1597368457044-fd0c441b3038?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  /* ===================================================== */

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Zumba", path: "/zumba" },
    { name: "Wedding ", path: "/wedding" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
  ];
const footerLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms of Service", path: "/terms-of-service" },
  { label: "Rules & Regulations", path: "/rules-and-regulations" },
  { label: "404", path: "/*" },
];
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative overflow-hidden text-elegantDark ">
      {/* ================= BACKGROUND CAROUSEL ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 " />
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0 bg-cover bg-center min-h-[520px] lg:min-h-[420px] overflow-hidden"
            style={{ backgroundImage: `url(${bgImages[current]})` }}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 2}}
          />
        </AnimatePresence>

        {/* DARK + GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-b " />
      </div>
      {/* ======================================================= */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
      >
        {/* ======== YOUR ORIGINAL CONTENT (UNCHANGED) ======== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-serif font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Star Dance Academy
            </h3>
            <p className="text-gray-100 leading-relaxed text-sm">
              Empowering dancers of all ages with passion, precision, and
              performance. Join us to discover your rhythm and express your
              artistry.
            </p>
            <motion.div variants={itemVariants} className="space-y-4">
            
            {/* HORIZONTAL DIVIDER */}
           <div></div>

            {/* BOTTOM BAR */}{" "}
            
          </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 w-20 bg-linear-to-r from-primary to-secondary rounded-full origin-left"
            />
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <motion.span
                    onClick={() => navigate(link.path)}
                    className="cursor-pointer relative inline-block text-gray-100 hover:text-primary text-sm group"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-100">
                <Phone className="w-5 h-5 mt-0.5" />
                <span className="text-sm">+91 98765 43210</span>
              </div>

              <a
                href="mailto:info@stardanceacademy.com"
                className="flex items-start space-x-3 text-gray-100 hover:text-primary"
              >
                <Mail className="w-5 h-5 mt-0.5" />
                <span className="text-sm">info@stardanceacademy.com</span>
              </a>

              <div
                onClick={handleClickAdd}
                className="flex items-start space-x-3 text-gray-100 cursor-pointer"
              >
                <MapPin className="w-5 h-5 mt-0.5" />
                <span className="text-sm">
                  123 Dance Street, Arts District
                  <br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>
          </motion.div>


          {/* Social */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-100"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
              
            </div>
            
           
            {/* HORIZONTAL DIVIDER */}
           <div></div>

            {/* BOTTOM BAR */}{" "}
            
          </motion.div>
          <div className="">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 lg:gap-40 text-gray-100 text-sm text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/20">

 <p className="whitespace-nowrap text-center md:text-left">
  © 2025{" "}
  <span className="text-primary font-semibold">
    Star Dance Academy
  </span>{" "}
  All rights reserved.
</p>


   <div className="flex items-center gap-4 md:px-6 whitespace-nowrap text-center md:text-left">
      {footerLinks.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          className="hover:text-primary cursor-pointer transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>

  <div className="flex items-center gap-2 whitespace-nowrap text-center md:text-left">
  <span>Designed & Developed By</span>

  <a
    href="https://www.tfptechnologies.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:opacity-90 transition"
  >
    <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow">
      <span className="text-green-900 font-bold text-xs">
        TFP
      </span>
    </div>
    <span className="text-primary font-semibold">
      TFP Technologies
    </span>
  </a>
</div>


</div>

          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

import { AnimatePresence, motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {
  const navigate = useNavigate();

  const handleClickAdd = () => {
    navigate("/address");
  };

  /* BACKGROUND IMAGES */
  const bgImages = [
    "https://images.unsplash.com/photo-1669628745031-6a3843daf9aa?w=600",
    "https://images.unsplash.com/photo-1547153760-18fc86324498?w=1920",
    "https://images.unsplash.com/photo-1597368457044-fd0c441b3038?w=600",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Zumba", path: "/zumba" },
    { name: "Wedding", path: "/wedding" },
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
    
  ];

  return (
    <footer className="relative overflow-hidden text-gray-100">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0 bg-cover bg-center min-h-[420px]"
            style={{ backgroundImage: `url(${bgImages[current]})` }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 2 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ABOUT */}
          <div>
            <h3 className="text-2xl font-bold text-primary">
              Star Dance Academy
            </h3>
            <p className="text-sm mt-3">
              Empowering dancers of all ages with passion, precision, and performance. Join us to discover your rhythm and express your artistry.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <span
                    onClick={() => navigate(link.path)}
                    className="cursor-pointer hover:text-primary transition"
                  >
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <Phone size={16} /> +91 98765 43210
              </div>
              <div className="flex gap-2">
                <Mail size={16} /> info@stardanceacademy.com
              </div>
              <div
                onClick={handleClickAdd}
                className="flex gap-2 cursor-pointer"
              >
                <MapPin size={16} />
                Mumbai, Maharashtra
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    className="w-10 h-10 border rounded-full flex items-center justify-center hover:text-primary transition"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR (FIXED) ================= */}
        <div className="mt-10 pt-6 border-t border-white/20">
          <div
            className="
              flex flex-col md:flex-row
              items-center justify-between
              gap-4
              text-sm
            "
          >
            {/* LEFT */}
            <p className="whitespace-nowrap shrink-0">
              © 2025{" "}
              <span className="text-primary font-semibold">
                Star Dance Academy
              </span>{" "}
              All rights reserved.
            </p>

            {/* CENTER */}
            <div className="flex flex-wrap md:flex-nowrap gap-x-6 gap-y-2 justify-center">
              {footerLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="whitespace-nowrap hover:text-primary transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
              <span>Designed & Developed By</span>
              <a
                href="https://www.tfptechnologies.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center overflow-hidden">
  <img
    src="https://www.tfptechnologies.in/_next/static/media/logo2.2e00e4b8.png"
    alt="TFP Logo"
    className="w-4 h-4 object-contain"
  />
</div>

                <span className="text-primary font-semibold">
                  TFP Technologies
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* ===================================================== */}
      </div>
    </footer>
  );
};

export default Footer;

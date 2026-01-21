import { motion } from "framer-motion";
import { PhoneCall, MessageCircle, MapPin, Phone } from "lucide-react";

import OpeningHoursSection from "./OpeningHoursSection";


const ContactCard = ({ icon: Icon, title, children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-6"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
            <Icon
              className="w-8 h-8 sm:w-10 sm:h-10 text-white"
              strokeWidth={2}
            />
          </div>
        </motion.div>

        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
          {title}
        </h3>

        <div className="w-full">{children}</div>
      </div>
    </motion.div>
  );
};

export default function EnrollContactInfo() {
  const phoneNumber = "+916264249659";
  const whatsappNumber = "916264249659";

  return (
    <div className="min-h-full bg-linear-to-br bg-white py-20 sm:py-20 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
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
            <Phone size={18} style={{ color: "var(--color-primary)" }} />
            <span
              className="text-sm font-semibold"
              style={{ color: "var(--color-elegantDark)" }}
            >
              Contact
            </span>
          </motion.div>
          <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            We're here to help with all your dance needs
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 md:w-full gap-6 sm:gap-8 mb-16 ">
          {/* Phone Number Card */}
          <ContactCard icon={PhoneCall} title="Call Us" delay={0.2}>
            <motion.a
              href={`tel:${phoneNumber}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="text-2xl sm:text-3xl font-bold  text-primary hover:text-[#e03558] transition-colors inline-block "
            >
              {phoneNumber}
            </motion.a>
            <p className="text-gray-500 text-sm mt-2">
              Mon - Sat: 8:30 AM - 9:00 PM
            </p>
          </ContactCard>

          {/* WhatsApp Card */}
          <ContactCard icon={MessageCircle} title="WhatsApp" delay={0.4}>
            <motion.a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(242, 139, 0, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-linear-to-r from-primary to-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              Chat with Us
            </motion.a>
            <p className="text-gray-500 text-sm mt-3">
              Quick responses guaranteed
            </p>
          </ContactCard>

          {/* Address Card */}
          <ContactCard icon={MapPin} title="Visit Us" delay={0.6}>
            <div className="text-gray-700 text-base sm:text-lg leading-relaxed">
              <p className="font-semibold mb-1">Star Dance & Fitness Academy</p>
              <p>Second Floor Above Hidden Cafe Next to Vidya Marriage Garden</p>
              <p>Near Old Bus Stand, Satna, Madhya Pradesh 485001</p>
            </div>
            <motion.a
              href="https://www.google.com/maps/place/Star+Dance+%26+Fitness+Academy/@24.5727052,80.8401807,805m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39847f9b6b4d11bb:0x1c5e727de46bca90!8m2!3d24.5727052!4d80.8427556!16s%2Fg%2F11gxn0p75c?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 text-primary hover:text-[#e03558] font-semibold text-sm mt-4 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </motion.a>
          </ContactCard>
        </div>
        <div>
          <OpeningHoursSection />

          
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, MessageSquare, Send, MessageCircle } from 'lucide-react';

const InputField = ({ icon: Icon, label, type = "text", required = false, value, onChange, multiline = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  const InputComponent = multiline ? 'textarea' : 'input';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileFocus={{ y: -2 }}
      className="relative "
    >
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <Icon 
            className={`w-5 h-5 transition-colors duration-300 ${
              isFocused ? 'text-primary' : 'text-gray-400'
            }`}
          />
        </div>
        
        <InputComponent
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          rows={multiline ? 5 : undefined}
          className={`
            w-full pl-12 pr-4 py-4 
            bg-white border-2 rounded-xl
            text-gray-900 text-base
            transition-all duration-300
            focus:outline-none focus:border-primary 
            hover:border-gray-400
            ${multiline ? 'resize-none' : ''}
            ${isFocused ? 'border-primary' : 'border-gray-200'}
          `}
          placeholder=" "
        />
        
        <label
          className={`
            absolute left-12 transition-all duration-300 pointer-events-none
            ${isFocused || value 
              ? '-top-2.5 left-10 text-xs bg-white px-2 text-primary" font-semibold' 
              : 'top-4 text-gray-500'
            }
          `}
        >
          {label} {required && <span className="text-primary">*</span>}
        </label>
      </div>
    </motion.div>
  );
};

export default function EnrollForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  
const handleSubmit = (e) => {
  e.preventDefault();

  const phoneNumber = "916264249659"; 

  const message = `
New Inquiry From Star Dance & Fitness Academy 

 Name: ${formData.fullName}
 Phone: ${formData.phone}
 Email: ${formData.email || 'Not provided'}

 Message:
${formData.message}
`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
};

  return (
    <div className="min-h-full  bg-gray-100  py-20 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
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
                  background: 'linear-gradient(135deg, rgba(246, 70, 108, 0.1), rgba(242, 139, 0, 0.1))',
                  borderColor: 'var(--color-primary)'
                }}
              >
                <MessageCircle size={18} style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--color-elegantDark)' }}>
                  Contact Form
                </span>
              </motion.div>
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
            Send Us a <span className="text-primary">Message</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Fill out the form below and we'll get back to you shortly
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative Glow */}
          
          
          {/* Form Card */}
          <div className="relative bg-white rounded-2xl  p-6 sm:p-10 lg:p-12">
            {/* Decorative Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary rounded-tl-2xl opacity-30" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-secondary rounded-br-2xl opacity-30" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <InputField
                icon={User}
                label="Full Name"
                required
                value={formData.fullName}
                onChange={handleChange('fullName')}
              />

              {/* Phone Number */}
              <InputField
                icon={Phone}
                label="Phone Number"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange('phone')}
              />

              {/* Email */}
              <InputField
                icon={Mail}
                label="Email Address (Optional)"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
              />

              {/* Message */}
              <InputField
                icon={MessageSquare}
                label="Your Message / Inquiry"
                required
                multiline
                value={formData.message}
                onChange={handleChange('message')}
              />

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: 1.02,
                  
                }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full group overflow-hidden"
              >
               
                
                {/* Main Button */}
                <div onSubmit={handleSubmit}  className="relative bg-linear-to-r from-primary to-secondary text-white py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg transition-all overflow-hidden">
                 
                  
                  {/* Button Content */}
                  <span className="relative flex items-center justify-center gap-3 cursor-pointer">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </div>
              </motion.button>

              {/* Privacy Note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center text-sm text-gray-500 mt-4"
              >
                 Your information is safe and will never be shared
              </motion.p>
            </form>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600">
            Prefer to call? Reach us at{' '}
            <a href="tel:+919876543210" className="text-primary font-semibold hover:underline">
              +91 6264249659
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
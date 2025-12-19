import { motion } from "framer-motion";
import { Clock, CalendarDays, Sparkles } from "lucide-react";

export default function ZumbaClassTimings() {
  const scheduleData = [
    { id: 1, days: "Monday – Friday", time: "7 AM – 8 AM" },
    { id: 2, days: "Monday – Friday", time: "6 PM – 7 PM" },
    { id: 3, days: "Saturday", time: "10 AM – 11 AM" },
    { id: 4, days: "Sunday", time: "Closed", closed: true },
  ];

  return (
    <section className="relative py-20 px-4 bg-linear-to-br bg-white  overflow-hidden">
      
    

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.div
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className="w-20 h-1 mx-auto mb-4 rounded-full"
                              style={{ 
                                background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`
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
      background: 'linear-gradient(135deg, rgba(246, 70, 108, 0.1), rgba(242, 139, 0, 0.1))',
      borderColor: 'var(--color-primary)'
    }}
  >
    <Sparkles size={18} style={{ color: 'var(--color-primary)' }} />
    <span
      className="text-sm font-semibold"
      style={{ color: 'var(--color-elegantDark)' }}
    >
      Services
    </span>
  </motion.div>
</div>


          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Zumba Class <span className="text-primary">Schedule</span> 
          </h2>

          <p className="text-gray-600 text-xl max-w-xl mx-auto">
            High-energy sessions designed to keep you fit, confident & happy 
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scheduleData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="relative rounded-3xl p-[1.5px] border  border-primary ">
                <div className="relative rounded-3xl bg-white/80 backdrop-blur-xl p-7 shadow-xl">

                  {/* Hover glow */}
                  

                  <div className="relative z-10 space-y-6">
                    {/* Days */}
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-primary/10">
                        <CalendarDays className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                          Days
                        </p>
                        <p className={`text-lg font-bold ${
                          item.closed ? "text-gray-400" : "text-gray-900"
                        }`}>
                          {item.days}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

                    {/* Time */}
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-secondary/10">
                        <Clock className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                          Time
                        </p>
                        <p className={`text-lg font-bold ${
                          item.closed
                            ? "text-gray-400 italic"
                            : "text-gray-900"
                        }`}>
                          {item.time}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-14">
          <p className="text-gray-700 font-medium">
             Feel the music. Burn the calories.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Please arrive 10 minutes early to warm up.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

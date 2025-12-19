import React, { useState, useEffect } from 'react';


export default function GalleryHeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes glow {
          0%,100% { opacity: 0.5; filter: blur(20px); }
          50% { opacity: 0.8; filter: blur(30px); }
        }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 1.2s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow { animation: glow 4s ease-in-out infinite; }
      `}</style>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1741671322773-411c5658ec6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-transparent to-black/40" />
      </div>


      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 w-full text-center">
          <div className="space-y-8 flex flex-col items-center">

            {/* Heading */}
            <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
             
                <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Our Dance
                </span>
                <span className="block mt-2">Gallery</span>
              </h1>
            </div>

            {/* Description */}
            <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
             Moments of Passion, Energy & Art
              </p>
            </div>

            {/* CTA */}
            

          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-teal-500/50 to-transparent" />
    </div>
  );
}

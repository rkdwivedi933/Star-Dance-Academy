import { useState, useEffect } from "react";
import { Building2, Factory, Cpu, MessageSquareQuote } from "lucide-react";
import { motion } from 'framer-motion';
import { div } from "framer-motion/client";

const testimonialsData = [
  { 
    id: 1, 
    icon: Building2, 
    title: "SBI Bank Team, Satna", 
    description: 'Our team loved the dance sessions here—energetic environment, expert instructors, and a refreshing break from our daily routine. Highly recommended!' 
  },
  { 
    id: 2, 
    icon: Cpu, 
    title: "TFP Technologies, Satna", 
    description: 'The Zumba classes were a perfect blend of fitness and fun. Our team enjoyed every session—modern studio, great vibes, and truly uplifting energy.' 
  },
  { 
    id: 3, 
    icon: Factory, 
    title: "Cement Factory Team", 
    description: 'The wedding dance choreography was smooth, easy to learn, and beautifully executed. The trainers made us confident, even with no dance background.' 
  },
  { 
    id: 4, 
    icon: Building2, 
    title: "Retail Corp Solutions", 
    description: 'Our couple dance preparation was amazing—the instructors were patient, creative, and helped us perfect every move with grace and comfort.' 
  },
  { 
    id: 5, 
    icon: Factory, 
    title: "Manufacturing Ltd, Satna", 
    description: 'From classical to Bollywood, the dance academy offers top-notch training. Excellent guidance, supportive atmosphere, and a memorable experience.' 
  },
];


const TestimonialCard = ({ testimonial }) => {
  const Icon = testimonial.icon;
  return (
    
    <div className="bg-linear-to-br from-primary/50 to-secondary/50  rounded-2xl p-6 md:p-8  w-full max-w-[300px] mx-auto shrink-0">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-transparent flex items-center justify-center border-4 border-secondary shadow-lg">
          <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="text-white text-xl md:text-2xl font-bold text-center mb-2 line-clamp-2">{testimonial.title}</h3>
     
      <p className="text-white text-center leading-relaxed italic text-sm md:text-base pb-5 line-clamp-3">{testimonial.description}</p>
    </div>
  );
};

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const maxIndex = Math.max(0, testimonialsData.length - visibleCards);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev < maxIndex ? prev + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div className="py-10  overflow-hidden"
     >
      <div className="max-w-7xl mx-auto">
        
        

        <div className="relative">
          <div className="overflow-hidden  ">
            <div
              className="flex    transition-transform duration-500 "
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {testimonialsData.map(testimonial => (
                
                //  THE FIX: WRAPPER ADDED HERE 
                <div
                  key={testimonial.id}
                  className="w-full shrink-0 sm:w-[50%] md:w-[50%] lg:w-[33.33%]"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>

              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-secondary/20" : "w-3 bg-primary/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

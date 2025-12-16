import HeroSection from "../components/home/HeroSection";
import ServicesCards from "../components/home/ServicesCards";
import GalleryPreview from "../components/home/GalleryItem";


import TestimonialsCarousel from "../components/home/TestimonialsCarousel";

import CTASection from "../components/home/CTASection";
import InstructorsSection from "../components/home/InstructorsSection";

import BlogSection from "../components/home/BlogSection";
import AboutSection from "../components/home/AboutSection";
import WhyChooseUs from "../components/home/WhyChooseUs";

function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesCards />
      <GalleryPreview />
      <WhyChooseUs/>

      <AboutSection />

      <BlogSection />
      <InstructorsSection />
      <TestimonialsCarousel />
      <CTASection />
    </div>
  );
}

export default Home;

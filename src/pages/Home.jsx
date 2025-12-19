import HeroSection from "../components/home/HeroSection";
import ServicesCards from "../components/home/ServicesCards";
import GalleryPreview from "../components/home/GalleryItem";

import CTASection from "../components/home/CTASection";

import BlogSection from "../components/home/BlogSection";
import AboutSection from "../components/home/AboutSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ExpertInstructorsSection from "../components/home/ExpertInstructorsSection";
import AwardsSection from "../components/home/AwardsSection";

import MainTrust from "../components/home/MainTrust";

import AwardsAcedemy from "../components/home/AwardsAcedemy";
import AnimatedImageCards from "../components/home/AnimatedImageCards";
import AnimatedBackground from "../components/latout/AnimatedBackground";

function Home() {
  return (
    <div>
      <HeroSection />

      <section className="relative overflow-hidden">
        <AnimatedBackground />

        {/* CONTENT */}
        <div className="relative z-10">
          <ServicesCards />
        </div>
      </section>
      <AboutSection />

      
      <GalleryPreview />
      <section className="relative overflow-hidden">
        <AnimatedBackground />

        {/* CONTENT */}
        <div className="relative z-10">
          <WhyChooseUs />
        </div>
      </section>
      <AnimatedImageCards />

      <ExpertInstructorsSection />
       <AwardsAcedemy />
      <section className="relative overflow-hidden">
        <AnimatedBackground />

        {/* CONTENT */}
        <div className="relative z-10">
          <AwardsSection />
        </div>
      </section>
     
      <BlogSection />
      <MainTrust />

      <CTASection />
    </div>
  );
}

export default Home;

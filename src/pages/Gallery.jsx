
import CTAGallery from "../components/gallery/CTAGallery";
import GalleryHeroSection from "../components/gallery/GalleryHeroSection";
import GalleryImg from "../components/gallery/GalleryImg ";

import MainGallery from "../components/gallery/MainGallery";


function Gallery() {
  return (
    <div>
      <GalleryHeroSection/>
      
      <GalleryImg />
      <MainGallery />
      <CTAGallery/>
    </div>
  );
}

export default Gallery;

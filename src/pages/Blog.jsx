import React from "react";

import BlogIntroSection from "../components/blog/BlogIntroSection";

import FeaturedArticle from "../components/blog/FeaturedArticle";

import OurBlog from "../components/blog/OurBlog";
import BlogHeroSection from "../components/blog/BlogHeroSection";
import CTABlog from "../components/blog/CTABlog";

function Blog() {
  return (
    <div>
      <BlogHeroSection />

      <BlogIntroSection />

      <OurBlog />
      <FeaturedArticle />

      <CTABlog />
    </div>
  );
}

export default Blog;

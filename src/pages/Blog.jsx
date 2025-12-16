import React from "react";
import BlogPageHeader from "../components/blog/BlogPageHeader";
import BlogIntroSection from "../components/blog/BlogIntroSection";

import FeaturedArticle from "../components/blog/FeaturedArticle";
import BlogCTA from "../components/blog/BlogCTA";
import OurBlog from "../components/blog/OurBlog";

function Blog() {
  return (
    <div>
      <BlogPageHeader />
      <BlogIntroSection />

      <OurBlog />
      <FeaturedArticle />

      <BlogCTA />
    </div>
  );
}

export default Blog;

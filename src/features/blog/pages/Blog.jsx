import React from "react";
import { motion } from "framer-motion";
import { blogPosts } from "../data/blogData";
import BlogCard from "../components/BlogCard";


const Blog = () => {
  return (
    <div className="font-poppins text-gray-800">
      
      {/* 🌅 HERO SECTION — Modern + Interactive CTA */}
     <section className="relative h-[70vh] flex flex-col items-center justify-center overflow-hidden">

  {/* Hero Image — High Priority */}
  <img
    src="/assets/blopage/banner.webp"
    alt="Travel Stories & Guides"
    className="absolute inset-0 w-full h-full object-cover"
    fetchpriority="high"
    decoding="async"
    width="1920"
    height="1080"
  />

  {/* Dark elegant overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20"></div>

  {/* Text */}
  <div className="relative z-10 text-center px-6">
    <motion.h1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl"
    >
      Travel Stories & Guides
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="text-gray-200 text-lg md:text-xl mt-3 max-w-2xl mx-auto"
    >
      Discover tips, destinations & real adventures from our travel experts.
    </motion.p>

    {/* CTA Button */}
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="#latest-articles"
      className="mt-8 inline-block bg-[#105050] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#0e3c3c] transition-colors duration-300"
    >
      Explore Destinations
    </motion.a>
  </div>
</section>


      {/* 📰 BLOG GRID SECTION */}
      <section id="latest-articles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#105050] mb-12"
          >
            Latest Articles
          </motion.h2>

          {/* Blog Cards Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Blog;

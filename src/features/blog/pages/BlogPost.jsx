import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Blog post not found.</h2>
        <Link to="/blog" className="text-blue-600 underline mt-4 block">
          Back to Blog
        </Link>
      </div>
    );
  }

  // Related posts (exclude current)
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="font-poppins text-[var(--color-darkGray)]">

      {/* ================= PARALLAX HERO ================= */}
      <div
        className="relative h-screen bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${post.image})`,
        }}
      >
        <div className="text-center text-white px-6 md:px-12">

          <h1 className="text-5xl md:text-7xl font-playfair font-bold mt-4 leading-tight">
            {post.title}
          </h1>
            <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#content"
            className="mt-8 inline-block bg-[#105050] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#0e3c3c] transition-colors duration-300"
          >
            Explore More
          </motion.a>


        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto" id="content">
        {/* Intro */}
        <p className="text-lg md:text-xl mb-16 leading-relaxed text-[var(--color-darkGray)]">
          {post.excerpt}
        </p>

        {/* Dynamically Render Sections */}
        <div className="space-y-24">
          {post.content.map((section, idx) => (
            <div
              key={idx}
              className={`md:flex md:items-center md:gap-12 ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img
                  src={section.image || post.image} // Section-specific image or default
                  alt={section.title}
                  className="rounded-xl shadow-lg object-cover w-full h-80 md:h-[400px] hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-primary)] mb-4">
                  {section.title}
                </h2>
                <p className="text-lg md:text-xl leading-relaxed mb-4">
                  {section.description}
                </p>

                {section.highlights && section.highlights.length > 0 && (
                  <ul className="list-disc list-inside space-y-2 text-lg md:text-xl">
                    {section.highlights.map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          {/* Conclusion */}
          {post.conclusion && (
            <p className="text-lg md:text-xl mt-16 font-semibold">
              {post.conclusion}
            </p>
          )}
        </div>

        {/* ================= RELATED POSTS ================= */}
{/* ================= RELATED POSTS ================= */}
{relatedPosts.length > 0 && (
  <div className="mt-32">
    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[var(--color-primary)] mb-8 text-center">
      You Might Also Like
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {relatedPosts.map((rp) => (
        <Link
          to={`/blog/${rp.id}`}
          key={rp.id}
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition relative"
        >
          <div className="overflow-hidden rounded-t-xl">
            <img
              src={rp.image}
              alt={rp.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="p-6 bg-white">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-[var(--color-accent)] transition">
              {rp.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              {rp.excerpt}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
)}


        {/* Back Button */}
        <div className="mt-20 text-center">
          <Link
            to="/blog"
            className="text-[var(--color-accent)] hover:text-[var(--color-primary)] font-semibold text-lg"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;

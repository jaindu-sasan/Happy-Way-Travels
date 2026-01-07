import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-green-900 mb-2">{post.title}</h3>
        <p className="text-sm text-gray-500 mb-3">{post.date}  {post.author}</p>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link
          to={`/blog/${post.id}`}
          className="text-green-800 font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

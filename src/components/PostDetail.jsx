import { useEffect, useState } from "react";
import {
  FaCalendar,
  FaCalendarAlt,
  FaHome,
  FaLink,
  FaRegCheckCircle,
  FaTag,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const PostDetail = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://jsonplaceholder.org/posts/${id}`)
        .then((response) => response.json())
        .then((json) => setPosts(json));
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  });

  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* main content */}
      <main className="px-4 md:px-16 lg:px-32 py-8 bg-gray-50">
        {/* Navigate to Home */}
        <div className="mb-6">
          <Link
            to="/"
            className="flex items-center text-green-500 hover:underline"
          >
            <FaHome className="text-2xl mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="mb-6">
          <img
            src={posts.image}
            alt={posts.title}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">{posts.title}</h1>
        <p className="text-gray-700 mb-4">{posts.content}</p>
        <div className="text-gray-600 space-y-4">
          <div className="flex items-center space-x-2">
            <FaTag className="text-green-500" />
            <p>
              <strong>Category:</strong> {posts.category}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaRegCheckCircle className="text-blue-500" />
            <p>
              <strong>Status:</strong> {posts.status}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-yellow-500" />
            <p>
              <strong>Published At:</strong> {posts.publishedAt}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCalendar className="text-red-500" />
            <p>
              <strong>Updated At:</strong> {posts.updatedAt}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaLink className="text-purple-500" />
            <p>
              <strong>Slug:</strong> {posts.slug}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default PostDetail;

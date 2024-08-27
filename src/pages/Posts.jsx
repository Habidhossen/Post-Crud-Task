import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // fetch posts from api
  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setPosts(json));
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, []);

  // delete post
  const handleDeletePost = async (postId) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE",
      });
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // filter posts based on search value
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className="px-32 py-8 bg-gray-50">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">
            Total Posts: {filteredPosts?.length}
          </h1>

          <div>
            <input
              type="text"
              placeholder="Search post..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <Link to="/add-post">
              <button className="ml-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                Add Post
              </button>
            </Link>
          </div>
        </div>

        {/* Content */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <PostCard
                post={post}
                key={post.id}
                handleDeletePost={handleDeletePost}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Posts;

import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdCancel, MdSave } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const handleDeletePost = (postId) => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE",
      });
      setPosts(posts.filter((post) => post.id !== postId));
      toast.success("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // add post
  const handleAddPost = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: Date.now(), title, body }),
        }
      );
      const newPost = await response.json();
      setPosts([newPost, ...posts]);

      // reset form fields
      setTitle("");
      setBody("");
      // close modal
      setIsModalOpen(false);
      // show toast
      toast.success("Post added successfully!");
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  // filter posts based on search value
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* main */}
      <main className="px-4 md:px-16 lg:px-32 py-8 bg-gray-50">
        {/* Header */}
        <div className="sm:flex-row md:flex lg:flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-center">
            Total Posts: {filteredPosts?.length}
          </h1>

          <div className="flex justify-between mt-4">
            <input
              type="text"
              placeholder="Search post..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <button
              onClick={() => setIsModalOpen(true)}
              className="ml-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition flex items-center justify-center gap-2"
            >
              <IoMdAdd className="text-lg" />
              Add Post
            </button>
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

        {/* Add Post Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-5/6 md:w-1/2 lg:w-1/2">
              <h2 className="text-xl font-bold mb-4">Add New Post</h2>
              <form onSubmit={handleAddPost}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="body"
                  >
                    Body
                  </label>
                  <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    rows="5"
                    required
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition flex items-center justify-center gap-2"
                  >
                    <MdCancel />
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition flex items-center justify-center gap-2"
                  >
                    <MdSave />
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Toast Container */}
        <ToastContainer />
      </main>
    </>
  );
};

export default Posts;

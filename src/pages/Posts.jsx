import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

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

  return (
    <main className="px-32 py-16 bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1>Total Posts: {posts?.length}</h1>

        <div>
          <input type="text" placeholder="search post..." />
          <button>Add Post</button>
        </div>
      </div>

      {/* Content */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
              <div className="mt-4 flex justify-between gap-4">
                <button className="w-full border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
                  Edit
                </button>
                <button className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Posts;

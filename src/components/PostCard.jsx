const PostCard = ({ post, handleDeletePost }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col h-full">
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-700">{post.body}</p>
      </div>
      <div className="mt-4 flex justify-between gap-4">
        <button className="w-full border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition">
          Edit
        </button>
        <button
          onClick={() => handleDeletePost(post.id)}
          className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;

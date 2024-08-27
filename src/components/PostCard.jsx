import { MdDelete } from "react-icons/md";

const PostCard = ({ post, handleDeletePost }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col h-full">
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-700">{post.body}</p>
      </div>
      <div className="mt-4 flex justify-between gap-4">
        <button
          onClick={() => handleDeletePost(post.id)}
          className="w-full border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition flex items-center justify-center gap-2"
        >
          <MdDelete className="text-lg" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;

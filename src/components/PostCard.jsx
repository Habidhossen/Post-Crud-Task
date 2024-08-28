import { FaArrowRight, FaCalendar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const PostCard = ({ post, handleDeletePost }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex-grow md:flex lg:flex items-start gap-4">
      {/* Image */}
      <img
        src={post.thumbnail}
        alt={post.title}
        className="w-[500px] h-w-[500px] object-cover rounded-md mb-4 md:mb-0 lg:mb-0"
      />
      {/* Content */}
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-700 mb-4">{post.content.slice(0, 200)}...</p>
        <div className="text-gray-700 text-sm mb-4 flex items-center gap-2">
          <FaCalendar className="text-green-500" />
          <p>
            <strong>Published on:</strong> {post.publishedAt || Date.now()}
          </p>
        </div>
        {/* Read More Link */}
        <Link
          to={`/posts/${post.id}`}
          className="text-green-500 hover:underline flex items-center gap-2"
        >
          Read more
          <FaArrowRight />
        </Link>
      </div>
      {/* Delete Button */}
      <div className="flex-shrink-0 mt-4">
        <button
          onClick={() => handleDeletePost(post.id)}
          className="border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition flex items-center justify-center gap-2"
        >
          <MdDelete className="text-lg" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;

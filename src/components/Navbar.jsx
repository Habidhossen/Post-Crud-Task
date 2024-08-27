import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth); // get logged in user info from firebase

  return (
    <nav className="px-32 flex items-center justify-between h-[75px] bg-green-500">
      <h2 className="text-xl font-bold text-white">
        Logged in user: {user?.email}
      </h2>

      <button
        onClick={() => signOut(auth)}
        className="ml-4 bg-white text-red-500 px-4 py-2 rounded-md hover:bg-red-50 transition"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;

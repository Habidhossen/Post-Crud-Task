import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdLogout } from "react-icons/md";
import { auth } from "../config/firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth); // get logged in user info from firebase

  return (
    <nav className="px-4 md:px-16 lg:px-32 flex items-center justify-between h-[75px] bg-green-500">
      <h2 className="text-xl font-bold text-white">user: {user?.email}</h2>
      <button
        onClick={() => signOut(auth)}
        className="ml-4 bg-white text-red-500 px-4 py-2 rounded-md hover:bg-red-50 transition flex items-center justify-center gap-2"
      >
        <MdLogout />
        Logout
      </button>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-end w-full">
      <div className="px-8 py-6">
        <ul className="flex items-center gap-x-6">
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/wallet">
              <button
                type="button"
                className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 text-gray-700 shadow-btnShadowGrey"
              >
                Connect wallet
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

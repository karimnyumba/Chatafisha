import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-end w-full">
      <div className="px-8 py-6">
        <ul className="flex items-center gap-x-6">
          <li className="hover:underline" onClick={() => {navigate("/")}}>
            Home
          </li>
          <li className="hover:underline" onClick={() => {navigate("/pages/login")}}>
            Login
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

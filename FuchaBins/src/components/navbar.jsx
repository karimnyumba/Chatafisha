import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-end w-full">
      <div className="px-8 py-6">
        <ul className="flex items-center gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/wallet">
              <button
                type="button"
                className="p-2 rounded-full bg-btnGrey shadow-btnShadowGrey"
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

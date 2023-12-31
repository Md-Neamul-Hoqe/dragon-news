import { Link, NavLink } from "react-router-dom";
import userDefaultImg from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut, setError } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((res) => setError(res))
      .catch((error) => setError(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-transparent py-10 max-w-6xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-light-gray">
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-light-gray">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          <div className="w-12 rounded-full">
            {/* <div className="w-12 rounded-full ring ring-dark ring-offset-base-100 ring-offset-2"> */}
            <img
              src={user?.photoURL || userDefaultImg}
              alt={user && user.displayName}
            />
          </div>
        </div>
        {user ? (
          <button onClick={handleSignOut} className="btn">
            {user.displayName}
          </button>
        ) : (
          <Link
            className="btn ms-3 px-10 rounded-none bg-dark text-white"
            to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo@2x.png";
import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { IoPeopleOutline } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";
import "animate.css";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    LogOut();
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/updateProfile">Update Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl w-1/2 animate__slideInLeft">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-2">
        {user ? (
          <>
            <h2 className=" animate__slideInRight">{user.email}</h2>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full  animate__slideInRight">
                <img
                  title={user.displayName}
                  alt="Tailwind CSS Navbar component"
                  src={user.photoURL}
                />
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="btn glass bg-indigo-400 animate__slideInRight"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link
            to={"/login"}
            className="btn glass bg-indigo-400 animate__slideInRight text-white"
          >
            <FaSignInAlt />
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

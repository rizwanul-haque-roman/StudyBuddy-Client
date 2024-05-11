import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleDopdown = () => {
    setDropdown(!dropdown);
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline text-[#E58014]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/assignments"
          className={({ isActive }) =>
            isActive ? "underline text-[#E58014]" : ""
          }
        >
          Assignments
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/creatAssignments"
          className={({ isActive }) =>
            isActive ? "underline text-[#E58014]" : ""
          }
        >
          Create Assignments
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pendingAssignments"
          className={({ isActive }) =>
            isActive ? "underline text-[#E58014]" : ""
          }
        >
          Pending Assignments
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="absolute w-full z-50">
      <div className=" container mx-auto navbar">
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
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-xl text-[#264790]">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-3">
            <Link>
              <button className="btn btn-sm bg-[#E58014] hover:bg-[#E58014] text-white font-semibold border-none  drop-shadow-[0_8px_8px_rgba(247,186,51)]">
                Log In
              </button>
            </Link>
            <p>Or</p>
            <Link to={"/register"}>
              <button className="btn btn-sm bg-[#E58014] hover:bg-[#E58014] text-white font-semibold border-none  drop-shadow-[0_8px_8px_rgba(247,186,51)]">
                Register
              </button>
            </Link>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div onClick={handleDopdown} className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            {dropdown && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#FEF3DB] rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

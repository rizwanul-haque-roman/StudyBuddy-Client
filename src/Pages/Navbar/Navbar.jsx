import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import profile from "../../assets/profile.png";
import axios from "axios";
import Theme from "../../theme/Theme";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdown, setDropdown] = useState(false);
  const [navdropdown, setNavDropdown] = useState(false);

  const handleLogOut = () => {
    const loggedOutUser = { email: user.email };
    console.log("logged out user:", loggedOutUser);
    axios
      .post("https://study-buddy-server-six.vercel.app/logout", loggedOutUser, {
        withCredentials: true,
      })
      .then((res) => console.log(res.data));

    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const handleDopdown = () => {
    setDropdown(!dropdown);
  };
  const handleNavDopdown = () => {
    setNavDropdown(!navdropdown);
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
      {user && (
        <>
          <li>
            <NavLink
              to="/CreateAssignments"
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
      )}
    </>
  );

  return (
    <div className="absolute w-full z-50">
      <div className=" container mx-auto navbar">
        <div className="navbar-start">
          <div onClick={handleNavDopdown} className="dropdown">
            <div
              onClick={handleDopdown}
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
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
            {navdropdown && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 border border-[#ffbf0051] rounded-box w-52"
              >
                {links}
              </ul>
            )}
          </div>
          <Link to={"/"}>
            <img className="w-2/3 lg:w-full" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-xl text-[#264790]">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {!user && (
            <div className="flex gap-3">
              <Link to={"/login"}>
                <button className="btn btn-sm bg-[#E58014] hover:bg-[#E58014] text-white font-semibold border-none  ">
                  LogIn
                </button>
              </Link>
              <p>Or</p>
              <Link to={"/register"}>
                <button className="btn btn-sm bg-[#E58014] hover:bg-[#E58014] text-white font-semibold border-none  ">
                  Register
                </button>
              </Link>
            </div>
          )}
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div
                  onClick={handleDopdown}
                  className="w-10 rounded-full bg-orange-400"
                >
                  <img
                    alt="Profile Photo"
                    src={user?.photoURL ? user?.photoURL : profile}
                  />
                </div>
              </div>
              {dropdown && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#f0b73c61] rounded-box w-52"
                >
                  <li>
                    <p className="justify-between">Name: {user?.displayName}</p>
                  </li>
                  <li>
                    <p>Email: {user?.email}</p>
                  </li>
                  <Link to={"/mySubmission"}>
                    <button className="w-full my-3 btn btn-sm bg-[#E58014] hover:bg-[#E58014] text-white font-semibold border-none">
                      My Submission
                    </button>
                  </Link>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-sm bg-[#E58014] hover:bg-[#E58014] text-white font-semibold border-none"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
          <div className="ml-2">
            <Theme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

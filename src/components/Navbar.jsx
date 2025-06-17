import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ className }) {
  const [isLog, setIsLog] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function logout() {
    localStorage.removeItem("token");
    setIsLog(false);
  }

  function toggleMobileMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLog(true);
    }
  }, [isLog]);

  return (
    <>
      <nav
        className={`${className} bg-gray-50 border-gray-200 dark:bg-gray-900`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              JadiJago
            </span>
          </Link>
          
          <div className="flex sm:hidden">
            <span
              id="mobile-menu-button"
              onClick={toggleMobileMenu}
              className="text-white cursor-pointer"
            >
              &#9776;
            </span>
          </div>
          {isOpen ? (
          <div
            className="flex flex-col pt-4 items-center justify-between w-full sm:w-auto"
            id="mobile-menu"
          >
            {isLog ? (
              <>
                <Link to="/" className="text-white px-4 py-2 text-center">
                  Home
                </Link>
                <Link
                  to="/courses"
                  className="text-white px-4 py-2 text-center"
                >
                  Explore
                </Link>
                <Link to="/cart" className="text-white px-4 py-2 text-center">
                  Cart
                </Link>
                <Link
                  to="/my-courses"
                  className="text-white px-4 py-2 text-center"
                >
                  My Courses
                </Link>
                <Link
                  onClick={logout}
                  className="text-white flex justify-center items-center px-4 py-2 text-center cursor-pointer"
                >
                  Log out
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Log in
                </Link>
              </>
            )}
          </div>
          ) : null}
        </div>
      </nav>
    </>
  );
}

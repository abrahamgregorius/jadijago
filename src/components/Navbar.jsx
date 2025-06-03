import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ className }) {
  const [isLog, setIsLog] = useState(false);

  function logout() {
    localStorage.removeItem("token");
    setIsLog(false);
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
          <div className="flex gap-2 md:order-2  md:space-x-0 rtl:space-x-reverse">
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
                <div>
                  <form>
                    <div class="relative">
                      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          class="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="search"
                        class="block w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search in site"
                        required
                      />
                    </div>
                  </form>
                </div>
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
        </div>
      </nav>
    </>
  );
}

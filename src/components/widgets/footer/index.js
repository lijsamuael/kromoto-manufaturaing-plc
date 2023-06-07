import {Link } from "react-router-dom"
export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="/images/logo-black.png"
              className="h-16 mr-3"
              alt="Company Logo"
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline ml-4">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="/home" className="hover:underline">
            Kromoto
          </a>
          . All Rights Reserved.
        </span>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Designed by
          <a href="/home" className="hover:underline">
            ERP Solutions PLC
          </a>
        </span>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <a
            href="https:/linkedin.com/in/lijsamuael"
            className="hover:underline"
          >
            Developers
          </a>
        </span>
      </div>
    </footer>
  );
}

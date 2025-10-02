import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-extrabold text-indigo-600 hover:text-indigo-800 transition duration-150"
            >
              Global Events Hub
            </a>
          </div>

          <nav className="flex space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-indigo-600 font-bold transition duration-150 p-2 rounded-lg"
            >
              Home
            </Link>
            <Link
              to="/events"
              className="text-gray-600 hover:text-indigo-600 font-bold transition duration-150 p-2 rounded-lg"
            >
              Events
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

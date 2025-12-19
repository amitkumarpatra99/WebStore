import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Mobiles", link: "/#" },
  { id: 3, name: "Electronics", link: "/#" },
  { id: 4, name: "Fashion", link: "/#" },
  { id: 5, name: "Home", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Top Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-300">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center tracking-wide">
            <div className="w-10 h-10 bg-gradient-to-tr from-primary to-secondary rounded-xl flex items-center justify-center text-white font-extrabold shadow-lg shadow-primary/30">W</div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              WebStore
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link} className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200 text-base">
                  {data.name}
                </a>
              </li>
            ))}
            {/* Dropdown */}
            <li className="group relative cursor-pointer font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              <a href="#" className="flex items-center gap-1">
                Trending
                <FaCaretDown className="group-hover:rotate-180 transition-transform duration-300" />
              </a>
              <div className="absolute top-full right-0 mt-4 w-48 rounded-xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 p-2 hidden group-hover:block transition-all animate-fadeIn">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a href={data.link} className="block px-4 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors">
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative group hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-[200px] transition-all duration-300 group-hover:w-[300px] rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
            <IoMdSearch className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 group-hover:text-primary transition-colors" />
          </div>

          {/* Cart Button */}
          <button
            onClick={handleOrderPopup}
            className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 group"
          >
            <FaCartShopping className="text-xl" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary text-white text-[10px] flex items-center justify-center rounded-full shadow-sm">2</span>
          </button>

          {/* Dark Mode */}
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import DarkMode from "./DarkMode";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useAuth } from "../../context/AuthContext";
import { FaUser, FaHeart } from "react-icons/fa6";
import { useWishlist } from "../../context/WishlistContext";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Mobiles", link: "/mobiles" },
  { id: 3, name: "Electronics", link: "/electronics" },
  { id: 4, name: "Fashion", link: "/fashion" },
  { id: 5, name: "Orders", link: "/orders" },
];

const DropdownLinks = [
  { id: 1, name: "Top Products", link: "/top-products" },
  { id: 2, name: "Best Selling", link: "/best-selling" },
  { id: 3, name: "Top Rated", link: "/top-rated" },
];

const Navbar = ({ handleOrderPopup }) => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = React.useState(false);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-300">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center tracking-wide">
            <div className="w-10 h-10 bg-gradient-to-tr from-primary to-secondary rounded-xl flex items-center justify-center text-white font-extrabold shadow-lg shadow-primary/30">W</div>
            <div className="flex flex-col justify-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-none">
                WebStore
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-400 tracking-[0.2em] -mt-0.5 uppercase pl-0.5">
                BY MR PATRA
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {Menu.map((data) => (
              <li key={data.id}>
                <Link to={data.link} className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200 text-base">
                  {data.name}
                </Link>
              </li>
            ))}
            {/* Dropdown */}
            <li className="group relative cursor-pointer font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              <span className="flex items-center gap-1">
                Trending
                <FaCaretDown className="group-hover:rotate-180 transition-transform duration-300" />
              </span>
              {/* Dropdown with invisible bridge */}
              <div className="absolute top-full right-0 hidden group-hover:block w-48 pt-4 transition-all animate-fadeIn z-50">
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-100 dark:border-gray-700 p-2">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <Link to={data.link} className="block px-4 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors">
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="w-[200px] transition-all duration-300 group-hover:w-[300px] rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
            <IoMdSearch className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 group-hover:text-primary transition-colors cursor-pointer" onClick={() => searchQuery.trim() && navigate(`/search?q=${searchQuery}`)} />
          </div>

          {/* Wishlist Button */}
          <Link
            to="/wishlist"
            className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 transition-all duration-300 group"
          >
            <FaHeart className="text-xl group-hover:animate-pulse" />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full shadow-sm">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          {/* Cart Button */}
          <Link
            to="/cart"
            className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 group"
          >
            <FaCartShopping className="text-xl" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-white text-[10px] flex items-center justify-center rounded-full shadow-sm animate-bounce">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Dark Mode */}
          <DarkMode />

          {/* User Section */}
          <div className="relative group cursor-pointer">
            {user ? (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                {/* User Dropdown */}
                {/* User Dropdown with invisible bridge */}
                <div className="absolute top-full right-0 hidden group-hover:block w-48 pt-4 transition-all animate-fadeIn z-50">
                  <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-gray-100 dark:border-gray-700 p-2">
                    <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700 mb-2">
                      <p className="font-bold text-gray-800 dark:text-white truncate">{user.name}</p>
                      <p className="text-xs text-gray-400 truncate">{user.email}</p>
                    </div>
                    <ul>
                      <li>
                        <Link to="/profile" className="block px-4 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors">
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/orders" className="block px-4 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors">
                          My Orders
                        </Link>
                      </li>
                      <li>
                        <button onClick={handleLogout} className="w-full text-left block px-4 py-2 rounded-lg text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold shadow-md hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 w-2/3 h-screen bg-white dark:bg-gray-900 shadow-2xl z-[9999] p-6 lg:hidden transition-all duration-300 ${showMenu ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-primary">Menu</h1>
          <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer" size={30} />
        </div>
        <ul className="flex flex-col gap-6">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                onClick={toggleMenu}
                className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 block"
              >
                {data.name}
              </Link>
            </li>
          ))}
          {/* Mobile Dropdown Links */}
          <li className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <span className="text-sm text-gray-400 uppercase tracking-widest mb-4 block">Categories</span>
            <div className="flex flex-col gap-4 pl-2">
              {DropdownLinks.map((data) => (
                <Link
                  key={data.id}
                  to={data.link}
                  onClick={toggleMenu}
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  {data.name}
                </Link>
              ))}
            </div>
          </li>
          {/* Mobile Auth */}
          <li className="border-t border-gray-200 dark:border-gray-700 pt-4">
            {user ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 px-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-md">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white">{user.name}</p>
                    <p className="text-xs text-gray-400">{user.email}</p>
                  </div>
                </div>
                <button onClick={handleLogout} className="text-left text-red-500 font-medium px-2 py-2 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors">
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={toggleMenu}
                className="block text-center w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-lg"
              >
                Login / Signup
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

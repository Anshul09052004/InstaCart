import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuBike } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    isAdmin: true,
  };

  const cartCount = 5;

  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 text-2xl font-bold "
      >
        <LuBike size={30} />
        <span>InstaCart</span>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex gap-8 font-medium">
        <Link className=" text-grey-200  hover:text-green-600" to="/">
          Home
        </Link>

        <Link className="hover:text-green-600" to="/product">
          Products
        </Link>

        <Link className="hover:text-green-600" to="/deals">
          Deals
        </Link>
      </div>

      {/* Search */}
      <form className="hidden lg:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-80">
        <IoMdSearch className="text-gray-500 text-xl" />

        <input
          type="text"
          placeholder="Search grocery items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent outline-none ml-2 w-full"
        />
      </form>

      {/* Right Side */}
      <div className="flex items-center gap-6 relative">
        {/* Cart */}
        <button className="relative">
          <FaShoppingCart size={25} />

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

        {/* User */}
        {user ? (
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="bg-green-600 text-white w-10 h-10 rounded-full font-bold"
            >
              {user.name.charAt(0).toUpperCase()}
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white shadow-xl rounded-lg border z-50">
                <div className="p-4 border-b">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>

                <div className="flex flex-col">
                  <Link
                    to="/orders"
                    className="px-4 py-2 hover:bg-gray-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    My Orders
                  </Link>

                  <Link
                    to="/addresses"
                    className="px-4 py-2 hover:bg-gray-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Addresses
                  </Link>

                  <Link
                    to="/products"
                    className="px-4 py-2 hover:bg-gray-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Products
                  </Link>

                  <Link
                    to="/deals"
                    className="px-4 py-2 hover:bg-gray-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Deals
                  </Link>

                  {user.isAdmin && (
                    <Link
                      to="/admin"
                      className="px-4 py-2 hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Admin Panel
                    </Link>
                  )}

                  <button
                    onClick={logoutHandler}
                    className="text-left px-4 py-2 text-red-500 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-green-600 text-white px-5 py-2 rounded-lg"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
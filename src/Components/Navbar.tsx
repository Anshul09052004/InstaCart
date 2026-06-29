import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuBike } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CiCircleChevDown } from "react-icons/ci";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useCart } from "../Context/CartContext";
import { FiBox } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { FaShield } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi"
import {RiShoppingBasket2Line} from "react-icons/ri"


function Navbar() {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    isAdmin: true,
  };

  const {
    setCartOpen,
    cartCount,
  } = useCart();

  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/login");
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">
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
        <form onSubmit={handleSearch} className="hidden lg:flex items-center bg-gray-100 rounded-xl px-4 h-11 w-80">
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
        <div className="flex items-center gap-4 relative">
          {/* Cart */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative"
          >
            <FaShoppingCart className="text-2xl md:text-3xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}


          </button>

          {/* User */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="hidden md:flex items-center gap-2"
              >
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <CiCircleChevDown className="text-xl text-gray-600" />
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
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <FiBox size={20} />
                      <span>My Orders</span>
                    </Link>

                    <Link
                      to="/addresses"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <IoLocationSharp size={20} />
                      <span>Addresses</span>
                    </Link>

                    <Link
                      to="/product"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    ><IoCartOutline size={20} />
                      <span>Products</span>
                    </Link>

                    <Link
                      to="/deals"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                     <RiShoppingBasket2Line size={20} />
                      <span>Deals</span>
                    </Link>

                    {user.isAdmin && (
                      <Link
                        to="/admin"
                         className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <FaShield size={20} />
                        <span>Admin Dashboard</span>
                      </Link>
                    )}

                    <button
                      onClick={logoutHandler}
                       className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    >
                      <FiLogOut size={20} />
                      <span> Logout</span>

                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden md:block bg-green-600 hover:bg-green-700 transition text-white px-5 py-2 rounded-lg"
            >
              Login
            </Link>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-3xl"
          >
            {mobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div >
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">

          <div className="p-5 space-y-4">

            <form className="flex items-center bg-gray-100 rounded-xl px-4 h-11">
              <IoMdSearch className="text-xl text-gray-500" />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none ml-2 w-full"
              />
            </form>

            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-green-600"
            >
              Home
            </Link>

            <Link
              to="/product"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-green-600"
            >
              Products
            </Link>

            <Link
              to="/deals"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-green-600"
            >
              Deals
            </Link>

            {user && (
              <>
                <Link
                  to="/orders"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-green-600"
                >
                  My Orders
                </Link>

                <Link
                  to="/addresses"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-green-600"
                >
                  Addresses
                </Link>

                {user.isAdmin && (
                  <Link
                    to="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block hover:text-green-600"
                  >
                    Admin Panel
                  </Link>
                )}

                <button
                  onClick={logoutHandler}
                  className="text-red-500"
                >
                  Logout
                </button>
              </>
            )}

          </div>

        </div>
      )}
    </nav>


  );
}


export default Navbar;
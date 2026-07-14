import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import UserProfile from "./UserProfile";
import { useUser } from "../dataProvider/useUser.js";
import { useSearch } from "../context/UtilisStates.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSearchbar, setShowSearchbar] = useState(false)
  const [searchInputField, setSearchInputField] = useState("")
  const { data: userData, isLoading, error, refetch } = useUser();
  const navigate = useNavigate();
  const location = useLocation()
  const { searchField, setSearchField } = useSearch()

  useEffect(() => {
    if (location.pathname === "/products") {
      setShowSearchbar(true);
    } else {
      setShowSearchbar(false);
    }
  }, [location.pathname]);

  return (
    <div className="w-full bg-[#640d14] shadow-lg">
      <div className="h-16 flex items-center justify-between px-4 md:px-6">

        <div className="flex gap-20">
          <div className="flex items-center gap-4 text-white">
            {/* Hamburger (mobile only) */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>

            {/* <Link to="/" className="font-bold text-lg">
              Logo
            </Link> */}
          </div>


          <div className="hidden md:flex gap-6 font-semibold text-white tracking-wide">
            <Link to="/" className="hover:text-yellow-200">Home</Link>
            <Link to="/products" className="hover:text-yellow-200">Jewellery</Link>
            <Link to="/new-collection" className="hover:text-yellow-200">What's New?</Link>
            {/* <Link to="/products" className="hover:text-yellow-200">Type</Link> */}
            {/* <Link to="/products" className="hover:text-yellow-200">Category</Link> */}
            {/* <Link to="/login" className="hover:text-yellow-200">Login</Link> */}
            <Link to="/our-story" className="hover:text-yellow-200">Our Story</Link>
          </div>
        </div>


        <div className="flex items-center gap-3 text-white">
          {/* Search Input */}
          {showSearchbar && (
            <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-1">
              <input
                type="text"
                value={searchField}
                onChange={(e)=> setSearchField(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-lg border-[0.5px] bg-[#640d14] border-gray-100 px-4 py-2 text-sm text-white outline-none transition focus:border-gray-200 focus:ring-1 focus:ring-gray-200"
              />
            </div>
          )}

          <CgProfile
            size={24}
            className="cursor-pointer flex-shrink-0"
            onClick={() => setShowProfile(true)}
          />

          <UserProfile
            open={showProfile}
            onClose={() => setShowProfile(false)}
          />

          <IoHeartOutline
            size={24}
            className="cursor-pointer flex-shrink-0"
            onClick={() => navigate("/wishlist")}
          />

          <div
            className="relative cursor-pointer flex-shrink-0"
            onClick={() => navigate("/cart")}
          >
            <BsCart3 size={24} />
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-pink-600">
              {userData?.cart?.length || 0}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#640d14] text-white px-4 pb-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Jewellery</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>What's New?</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Type</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Category</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
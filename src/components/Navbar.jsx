import React from 'react';
import { Link } from 'react-router-dom';
// import { FiInstagram } from "react-icons/fi";
// import { FaLinkedin } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className="mx-32 h-16 flex items-center justify-between px-6 rounded-full shadow-lg">
            {/* Left side - Links */}
            <div className="flex gap-6 font-semibold text-white tracking-wide relative">
                <Link
                    to="/"
                    className="hover:text-yellow-200 transition-colors duration-300"
                >
                    Home
                </Link>

                {/* Jewellery Dropdown */}
                <div className="group relative">
                    <Link
                        to="/products"
                        className="hover:text-yellow-200 transition-colors duration-300"
                    >
                        Jewellery
                    </Link>

                    {/* Dropdown */}
                    <div
                        className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg 
                            opacity-0 translate-y-4 invisible 
                            group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 
                            transition-all duration-300 ease-out"
                    >
                        <Link
                            to="/jewellery/rings"
                            className="block px-4 py-2 hover:bg-[#660B05]/40 border-b-2 border-gray-100"
                        >
                            All Jewellery
                        </Link>
                        <Link
                            to="/jewellery/necklace"
                            className="block px-4 py-2 hover:bg-[#660B05]/40 border-b-2 border-gray-100"
                        >
                            Festive Wear
                        </Link>
                        <Link
                            to="/jewellery/earrings"
                            className="block px-4 py-2 hover:bg-[#660B05]/40 border-b-2 border-gray-100"
                        >
                            Daily Wear
                        </Link>
                    </div>
                </div>


                {/* What's New */}
                <div className="group relative">
                    <Link
                        to="/contact"
                        className="hover:text-yellow-200 transition-colors duration-300"
                    >
                        What's New?
                    </Link>
                    <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg 
                            opacity-0 translate-y-4 invisible 
                            group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 
                            transition-all duration-300 ease-out">
                        <Link to="/new/collections" className="block px-4 py-2 hover:bg-[#660B05]/40 border-b-2 border-gray-100">
                            Earrings
                        </Link>
                        <Link to="/new/trending" className="block px-4 py-2 hover:bg-[#660B05]/40 border-b-2 border-gray-100">
                            Necklaces
                        </Link>
                        <Link to="/new/trending" className="block px-4 py-2 hover:bg-[#660B05]/40 border-b-2 border-gray-100">
                            Sets
                        </Link>
                        <Link to="/new/trending" className="block px-4 py-2 hover:bg-[#660B05]/40 border-b-2 border-gray-100">
                            Anklets
                        </Link>
                        <Link to="/new/trending" className="block px-4 py-2 hover:bg-[#660B05]/40 border-b-2 border-gray-100">
                            Rings
                        </Link>
                    </div>
                </div>

                {/* Type */}
                <div className="group relative">
                    <Link
                        to="/products"
                        className="hover:text-yellow-200 transition-colors duration-300"
                    >
                        Type
                    </Link>
                    <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg 
                            opacity-0 translate-y-4 invisible 
                            group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 
                            transition-all duration-300 ease-out">
                        <Link to="/type/gold" className="block px-4 py-2 hover:bg-[#660B05]/40 border-b-2 border-gray-100">
                            Gold
                        </Link>
                        <Link to="/type/silver" className="block px-4 py-2 hover:bg-[#660B05]/40 border-b-2 border-gray-100">
                            Silver
                        </Link>
                        <Link to="/type/diamond" className="block px-4 py-2 hover:bg-[#660B05]/40 border-b-2 border-gray-100">
                            Diamond
                        </Link>
                    </div>
                </div>

                {/* Category */}
                <div className="group relative">
                    <Link
                        to="/products"
                        className="hover:text-yellow-200 transition-colors duration-300"
                    >
                        Category
                    </Link>
                    <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg 
                            opacity-0 translate-y-4 invisible 
                            group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 
                            transition-all duration-300 ease-out">
                        <Link to="/category/men" className="block px-4 py-2 hover:bg-[#660B05]/40 border-b-2 border-gray-100">
                            Men
                        </Link>
                        <Link to="/category/women" className="block px-4 py-2 hover:bg-[#660B05]/40 border-b-2 border-gray-100">
                            Women
                        </Link>
                        <Link to="/category/kids" className="block px-4 py-2 hover:bg-[#660B05]/40 border-b-2 border-gray-100">
                            Kids
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right side - Icons */}
            <div className="flex gap-5 text-white text-xl">
                <button className="hover:text-yellow-200 transition-transform duration-300 hover:scale-110">
                    <CgProfile />
                </button>
                <button className="hover:text-yellow-200 transition-transform duration-300 hover:scale-110">
                    <IoMdSearch />
                </button>
                <button className="hover:text-yellow-200 transition-transform duration-300 hover:scale-110">
                    <IoHeartOutline />
                </button>
                <button className="hover:text-yellow-200 transition-transform duration-300 hover:scale-110 relative">
                    <BsCart3 />
                    {/* Cart Badge */}
                    <span className="absolute -top-2 -right-2 bg-white text-pink-600 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow">
                        2
                    </span>
                </button>
            </div>
        </div>

    )
}

export default Navbar
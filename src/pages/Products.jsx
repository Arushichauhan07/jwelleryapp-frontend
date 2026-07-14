import React, { useState, useRef, useEffect } from "react";
import { FaFilter } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import { useProducts } from "../dataProvider/useUser"
import { useSearch } from "../context/UtilisStates";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";

const apiUrl = import.meta.env.VITE_API_URL;

const categories = ["All", "Necklace", "Earrings", "Pendants", "Bracelets", "Anklets", "Rings", "Bangles"];
const sortOptions = ["Default", "Price: Low to High", "Price: High to Low", "Latest"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Default");
  const [showFilter, setShowFilter] = useState(false);
  const location = useLocation()

    useEffect(()=> {
    if(location?.state?.category){
      setSelectedCategory(location?.state?.category)
    }else{
      setSelectedCategory("All")
    }
  },[location?.state?.category])

  const { data: productsData, error, isLoading } = useProducts()
  const { searchField } = useSearch()

  // const [productsData, setProductsData] = useState([]);
  const filterRef = useRef();
  const navigate = useNavigate()

  const [page, setPage] = useState(1);
  const productsPerPage = 8;

  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;

  // Close the popover if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setShowFilter(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const products = productsData?.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      category: category._id,
    }))
  );

  // Filter products by category
  let filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  if (searchField) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchField.toLowerCase())
    );
  }

  if (sortBy === "Price: Low to High") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  } else if (sortBy === "Price: High to Low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  } else if (sortBy === "Latest") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  const paginatedProducts = filteredProducts?.slice(start, end);

  const totalPages = Math.ceil(filteredProducts?.length / productsPerPage);

  const getPagination = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1);

    if (page > 4) {
      pages.push("...");
    }

    const start = Math.max(2, page - 2);
    const end = Math.min(totalPages - 1, page + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 3) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="py-16 px-6 md:px-20 bg-gradient-to-b from-white via-pink-50 to-white">
      {/* Heading */}
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-sm sm:text-base rounded-full border transition-all whitespace-nowrap ${selectedCategory === cat
                  ? "bg-[#8C1007] text-white shadow-md"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filter Icon */}
        <div className="relative self-center md:self-auto" ref={filterRef}>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="p-3 rounded-full bg-[#8C1007] text-white hover:bg-[#660B05] transition-all"
          >
            <FaFilter size={18} />
          </button>

          {/* Popover */}
          {showFilter && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-amber-400 rounded-lg shadow-lg z-20 p-3">
              <h4 className="font-semibold mb-2">Sort By</h4>

              <div className="flex flex-col gap-2">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setShowFilter(false);
                    }}
                    className={`text-left px-3 py-2 rounded-md transition-all ${sortBy === option
                        ? "bg-[#8C1007] text-white"
                        : "hover:bg-gray-100"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>



      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {paginatedProducts?.length > 0 ? (
          paginatedProducts?.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={p.images[0]}
                  alt={p.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
                <p className="text-[#660B05] font-bold">₹{p.price.toLocaleString()}</p>
                <button onClick={() => navigate(`/product/${p._id}`)} className="mt-3 px-4 py-2 bg-[#660B05] text-white rounded-lg shadow-md hover:bg-[#8B0000] transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : isLoading ? (
          <div className="col-span-full flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-4">
              {/* Outer Ring */}
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37]/30"></div>

                {/* Rotating Gold Ring */}
                <div className="absolute inset-0 rounded-full border-t-4 border-[#D4AF37] animate-spin"></div>

                {/* Diamond Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rotate-45 bg-gradient-to-br from-[#F8E7A1] to-[#D4AF37] shadow-lg"></div>
                </div>
              </div>

              {/* Loading Text */}
              <p className="text-[#8B6F47] text-lg font-semibold tracking-widest animate-pulse">
                Loading Collection...
              </p>
            </div>
          </div>
        ) : (
          <div className="col-span-full flex justify-center items-center py-16">
            <div className="w-full max-w-lg flex flex-col items-center justify-center px-8 py-12 border-2 border-dashed border-yellow-400 rounded-3xl bg-yellow-50 shadow-sm">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100 mb-4">
                <span className="text-3xl">📦</span>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">
                No Products Found
              </h3>

              <p className="mt-3 text-center text-gray-500">
                We couldn't find any products in this category.
                <br />
                Try selecting a different category or check back later.
              </p>
            </div>
          </div>
        )}
      </div>

      {paginatedProducts?.length > 8 && (
        <div className="flex items-center justify-center gap-2 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="w-10 h-10 rounded-full border flex items-center justify-center disabled:opacity-50"
        >
          <FaLessThan />
        </button>

        {getPagination().map((item, index) =>
          item === "..." ? (
            <span key={index} className="px-2 text-gray-500">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => setPage(item)}
              className={`w-10 h-10 rounded-full transition ${page === item
                ? "bg-[#660B05] text-white"
                : "border hover:bg-gray-100"
                }`}
            >
              {item}
            </button>
          )
        )}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="w-10 h-10 rounded-full border flex items-center justify-center disabled:opacity-50"
        >
          <FaGreaterThan />
        </button>
      </div>
      )}

      
    </div>
  );
};

export default Products;

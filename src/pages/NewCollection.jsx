import React, { useState, useRef, useEffect } from "react";
import { FaFilter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../dataProvider/useUser"

const products = [
  { name: "Elegant Gold Ring", price: 15000, img: "https://i.pinimg.com/736x/21/c1/17/21c117edb0c5eaf9e0247e6c3a0e3630.jpg", category: "Rings", date: "2025-09-01" },
  { name: "Diamond Necklace", price: 55000, img: "https://i.pinimg.com/736x/df/03/bc/df03bcddd6a90e87671bee370c39c123.jpg", category: "Necklaces", date: "2025-09-05" },
  { name: "Pearl Earrings", price: 8500, img: "https://i.pinimg.com/736x/89/a9/88/89a98813e40e5f80042bef2254730760.jpg", category: "Earrings", date: "2025-08-25" },
  { name: "Gold Bracelet", price: 22000, img: "https://i.pinimg.com/736x/63/69/51/6369516319953956d3936777cd04292f.jpg", category: "Bracelets", date: "2025-09-10" },
  { name: "Anklet", price: 6000, img: "https://i.pinimg.com/736x/e0/21/e0/e021e0c0de3b396ed5c3f4feae4ac823.jpg", category: "Anklets", date: "2025-09-08" },
  { name: "Pendant", price: 12000, img: "https://i.pinimg.com/736x/ce/f2/c9/cef2c9a6e8130954f2c199eae2a1390f.jpg", category: "Pendants", date: "2025-09-12" },
];

const categories = ["All", "Necklaces", "Earrings", "Pendants", "Bracelets", "Anklets", "Rings"];
const sortOptions = ["Default", "Price: Low to High", "Price: High to Low", "Latest"];

const NewCollection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Default");
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef();
  const navigate = useNavigate()
  const { data: productsData, error, isLoading } = useProducts()

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

  // Filter products by category
  let filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-4 px-6 md:px-20 bg-gradient-to-b from-white via-pink-50 to-white">
      {/* Heading */}
      <div className="relative flex items-center justify-between mb-10">
        {/* Filter Icon */}
        <div className="relative" ref={filterRef}>
          {/* Small Popover */}
          {showFilter && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10 p-3">
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

      {/* Category Filters */}
      <div className="flex gap-3 flex-wrap justify-center items-center my-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition-all ${selectedCategory === cat
              ? "bg-[#8C1007] text-white shadow-md"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
                <p className="text-[#660B05] font-bold">₹{p.price.toLocaleString()}</p>
                <button 
                // onClick={() => navigate("/products", { state: { product: p } })} 
                className="mt-3 px-4 py-2 bg-[#660B05] text-white rounded-lg shadow-md hover:bg-[#8B0000] transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default NewCollection;

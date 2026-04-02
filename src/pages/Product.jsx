import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaTruck, FaHeadset, FaUndo, FaLock } from "react-icons/fa";

const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  if (!product) return <p className="text-center mt-20 text-gray-500">No product data passed!</p>;

  const handleAddToCart = () => setAddedToCart(true);
  const handleAddToWishlist = () => setAddedToWishlist(!addedToWishlist);

  // Delivery features
  const features = [
    {
      icon: <FaTruck className="text-2xl text-[#660B05]" />,
      title: "FREE SHIPPING",
      description: "Free shipping on shopping worth Rs.600 or above",
    },
    {
      icon: <FaHeadset className="text-2xl text-[#660B05]" />,
      title: "Dedicated Support",
      description: "Call us at 8882188858 or email care@everstylish.com",
    },
    {
      icon: <FaUndo className="text-2xl text-[#660B05]" />,
      title: "EASY RETURNS",
      description: "Request a return in My Account within 48 hours.",
    },
    {
      icon: <FaLock className="text-2xl text-[#660B05]" />,
      title: "100% SECURE PAYMENT",
      description: "Secure payment with Cards/Netbanking/Wallets/COD",
    },
  ];

  // Suggested products (mock data, can come from API)
  const suggestedProducts = [
    {
      id: 1,
      name: "Elegant Bracelet",
      price: 799,
      img: "https://i.pinimg.com/1200x/4a/d9/b2/4ad9b2d7c30bc7586463d489690ea37a.jpg",
    },
    {
      id: 2,
      name: "Golden Earrings",
      price: 1299,
      img: "https://i.pinimg.com/736x/2f/43/fd/2f43fd86bab521fe34e5b23b2b293052.jpg",
    },
    {
      id: 3,
      name: "Trendy Necklace",
      price: 1599,
      img: "https://i.pinimg.com/1200x/ec/e8/b0/ece8b08a516f6d44dc22c8e4c1b10eb5.jpg",
    },
    {
      id: 4,
      name: "Silver Anklet",
      price: 499,
      img: "https://i.pinimg.com/1200x/2c/c5/5c/2cc55c8c4aeeda00a60e9bec6db181c1.jpg",
    },
  ];

  return (
    <div>
      {/* Product Details */}
      <div className="max-w-6xl mx-auto p-6 md:p-12 bg-white rounded-xl shadow-lg mt-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Product Image */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl shadow-md hover:scale-105 transform transition-transform duration-500"
            />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-2xl font-bold text-[#660B05]">₹{product.price.toLocaleString()}</p>

            <p className="text-gray-700">
              This is a premium {product.category} crafted with high-quality materials. Perfect for gifting or daily wear.
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mt-4">
              <span className="font-semibold">Quantity:</span>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 px-3 py-2 border rounded-md focus:outline-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleAddToCart}
                disabled={addedToCart}
                className={`flex items-center gap-2 px-6 py-3 bg-[#8C1007] text-white rounded-lg shadow-md hover:bg-[#660B05] transition-all ${
                  addedToCart ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                <FaShoppingCart />
                {addedToCart ? "Added" : "Add to Cart"}
              </button>

              <button
                onClick={handleAddToWishlist}
                className={`flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-gray-100 transition-all ${
                  addedToWishlist ? "text-red-600" : "text-gray-700"
                }`}
              >
                <FaHeart />
                {addedToWishlist ? "Wishlisted" : "Add to Wishlist"}
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-gray-600">
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Added on:</strong> {product.date}
              </p>
              <p>
                <strong>SKU:</strong> #{Math.floor(Math.random() * 100000)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery & Returns */}
      <div className="max-w-6xl mx-auto py-12 px-6 md:px-12">
        <div className="text-center mb-10 flex items-center justify-center gap-4">
          <hr className="border-gray-300 w-12" />
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">DELIVERY & RETURNS</h2>
          <hr className="border-gray-300 w-12" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="p-4 bg-gray-100 rounded-full flex justify-center items-center">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-800">{f.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products You Might Like */}
      <div className="max-w-6xl mx-auto py-12 px-6 md:px-12">
        <div className="text-center mb-10 flex items-center justify-center gap-4">
          <hr className="border-gray-300 w-12" />
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">YOU MIGHT ALSO LIKE</h2>
          <hr className="border-gray-300 w-12" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {suggestedProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition cursor-pointer"
              onClick={() => navigate("/product", { state: { product: item } })}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-[#660B05] font-bold">₹{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

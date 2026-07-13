import React from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaTrash,
  FaEye,
  FaStar,
} from "react-icons/fa";
import { useUser } from "../dataProvider/useUser.js";
import { useNavigate } from "react-router-dom";


const Wishlist = () => {
    const navigate = useNavigate();
    const { data: userData, isLoading, error, refetch  } = useUser();
    const wishlistProducts = userData?.wishlist || [];
  return (
    <section className="min-h-screen bg-[#FFF8EF] py-12 px-6 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h1 className="text-5xl font-bold text-[#6D0F24]">
              My Wishlist
            </h1>

            <p className="text-gray-600 mt-3">
              {wishlistProducts.length} Items Saved
            </p>
          </div>

          <button className="mt-5 md:mt-0 bg-[#D4AF37] hover:bg-yellow-500 transition px-6 py-3 rounded-lg font-semibold text-[#6D0F24] shadow">
            Move All To Cart
          </button>
        </div>

        {/* Empty State */}

        {wishlistProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 shadow text-center">

            <Heart
              size={70}
              className="mx-auto text-[#D4AF37]"
            />

            <h2 className="text-3xl font-bold mt-6 text-[#6D0F24]">
              Wishlist is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              Save your favourite jewellery here.
            </p>

            <button className="mt-8 bg-[#6D0F24] text-white px-8 py-3 rounded-lg">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Products */}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              {wishlistProducts.map((product) => (
                <div
                  key={product._id}
                  onClick={() => navigate(`/product/${product._id}`)}
                  className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300"
                >
                  {/* Image */}

                  <div className="relative group">

                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-72 w-full object-cover"
                    />

                    <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-red-100">
                      <FaTrash
                        size={18}
                        className="text-[#6D0F24]"
                      />
                    </button>
                  </div>

                  {/* Details */}

                  <div className="p-5">

                    <h3 className="font-bold text-lg text-[#6D0F24]">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-2">

                      <FaStar
                        size={16}
                        fill="#D4AF37"
                        color="#D4AF37"
                      />

                      <span>{product.rating}</span>
                    </div>

                    <div className="mt-4 flex items-center gap-3">

                      <span className="text-2xl font-bold text-[#6D0F24]">
                        ₹{product.price}
                      </span>

                    </div>

                    {/* Buttons */}

                    <div className="flex gap-3 mt-6">

                      <button onClick={(e) => {e.stopPropagation()}} className="flex-1 bg-[#6D0F24] hover:bg-[#52091b] text-white py-3 rounded-lg flex justify-center items-center gap-2 transition">

                        <FaShoppingCart size={18} />

                        Cart
                      </button>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
import React from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useUser } from "../dataProvider/useUser.js";
import axios from "axios";
import { toast } from "react-hot-toast";

const apiUrl = import.meta.env.VITE_API_URL;

const Cart = () => {
  const navigate = useNavigate();

  const { data: userData, isLoading, error, refetch } = useUser();

  const subtotal =
    userData?.cart?.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    ) || 0;

  const finalBillingAmount = subtotal + 100

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading Cart...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        Failed to load cart.
      </div>
    );
  }

  if (!userData?.cart?.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white rounded-2xl p-16 shadow text-center">
        <h2 className="text-3xl font-bold">Your Cart is Empty</h2>

        <p className="mt-3 text-gray-500">
          Looks like you haven't added anything yet.
        </p>

        <button
          onClick={() => navigate("/products")}
          className="mt-6 bg-[#640d14] text-white px-6 py-3 rounded-lg hover:bg-[#4e0a10]"
        >
          Continue Shopping
        </button>
        </div>
      </div>
    );
  }

  const token = localStorage.getItem("token")

  const handleAddToCart = async (productId) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/cart/${productId}`,
        {
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("Product added to cart")
        refetch()
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/removecartitem/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("Product added to cart")
        refetch()
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveEntireItemFromCart = async (productId) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/removeentirecartitem/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("Product added to cart")
        refetch()
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8EF]/50 py-10 px-4 rounded-2xl">
      <div className="max-w-7xl mx-auto">

        {userData?.cart?.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 shadow text-center">
            <h2 className="text-3xl font-bold">Your Cart is Empty</h2>

            <p className="mt-3 text-gray-500">
              Looks like you haven't added anything yet.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="mt-6 bg-[#640d14] text-white px-6 py-3 rounded-lg hover:bg-[#4e0a10]"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {userData?.cart?.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl shadow-md p-5 flex flex-col sm:flex-row gap-5"
                >
                  <img
                    src={item.product.images?.[0]}
                    alt={item.product.name}
                    className="w-32 h-32 rounded-xl object-cover border"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold">
                        {item.product.name}
                      </h2>

                      <p className="text-gray-500 mt-1">
                        Category: {item.product.category}
                      </p>

                      <p className="text-gray-500">
                        Stock: {item.product.stock}
                      </p>

                      <p className="text-[#640d14] text-xl font-bold mt-3">
                        ₹{item.product.price.toLocaleString()}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-between items-center gap-4 mt-6">
                      {/* Quantity */}
                      <div className="flex items-center border rounded-lg overflow-hidden">
                        <button onClick={() => handleRemoveFromCart(item.product._id)} className="px-4 py-2 hover:bg-gray-100">
                          <FiMinus />
                        </button>

                        <span className="px-5 font-semibold">
                          {item.quantity}
                        </span>

                        <button onClick={() => handleAddToCart(item.product._id)} className="px-4 py-2 hover:bg-gray-100">
                          <FiPlus />
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="text-lg font-semibold">
                        ₹
                        {(item.product.price * item.quantity).toLocaleString()}
                      </div>

                      {/* Remove */}
                      <button onClick={() => handleRemoveEntireItemFromCart(item.product._id)} className="flex items-center gap-2 text-red-500 hover:text-red-700">
                        <FiTrash2 size={18} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-24">
              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Total Items</span>
                  <span>{userData.cart.length}</span>
                </div>

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">₹100</span>
                </div>

                <div className="flex justify-between">
                  <span>GST</span>
                  <span>Included</span>
                </div>

                <hr />

                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>

                  <span className="text-[#640d14]">
                    ₹{finalBillingAmount.toLocaleString()}
                  </span>
                </div>
              </div>

              <button onClick={() => navigate("/checkout")} className="w-full mt-8 bg-[#640d14] text-white py-4 rounded-xl font-semibold hover:bg-[#4b0910] transition">
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate("/products")}
                className="w-full mt-4 border border-[#640d14] text-black py-4 rounded-xl font-semibold hover:bg-[#4b0910] hover:text-white transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
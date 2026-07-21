import React from "react";
import {
  Check,
  Package,
  Truck,
  MapPin,
  CreditCard,
  ShoppingBag,
  ArrowRight,
  Copy,
  Sparkles,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("location", location)

  // You can pass this order data from your checkout page
  const order = location.state?.order || {
    orderId: "ORD-20260721-8456",
    orderDate: "21 July 2026",
    estimatedDelivery: "25 - 28 July 2026",
    paymentMethod: "Cash on Delivery",
    totalAmount: 2499,
    address: {
      name: "Arushi Chauhan",
      phone: "+91 98765 43210",
      address: "Mansarovar, Jaipur",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302020",
    },
    items: [
      {
        id: 1,
        name: "Elegant Gold Necklace",
        image:
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
        quantity: 1,
        price: 2499,
      },
    ],
  };

  const trackingSteps = [
    {
      title: "Order Placed",
      description: "Your order has been successfully placed",
      icon: Check,
      completed: true,
    },
    {
      title: "Order Confirmed",
      description: "We are preparing your jewellery",
      icon: Package,
      completed: true,
    },
    {
      title: "Shipped",
      description: "Your order will be shipped soon",
      icon: Truck,
      completed: false,
    },
    {
      title: "Out for Delivery",
      description: "Your order is on its way to you",
      icon: MapPin,
      completed: false,
    },
    {
      title: "Delivered",
      description: "Enjoy your beautiful jewellery ✨",
      icon: Check,
      completed: false,
    },
  ];

  const copyOrderId = () => {
    navigator.clipboard.writeText(order.orderId);
  };

  return (
    <div className="min-h-screen bg-[#FFF8EF] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Success Header */}
        <div className="mb-8 text-center">

          {/* Success Icon */}
          <div className="relative mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#6B1E2B] shadow-xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#D4AF37]">
              <Check
                size={38}
                strokeWidth={3}
                className="text-[#D4AF37]"
              />
            </div>

            <Sparkles
              size={22}
              className="absolute -right-2 -top-2 text-[#D4AF37]"
            />

            <Sparkles
              size={18}
              className="absolute -bottom-1 -left-3 text-[#D4AF37]"
            />
          </div>

          <h1 className="text-3xl font-bold text-[#6B1E2B] sm:text-4xl">
            Order Placed Successfully!
          </h1>

          <p className="mt-3 text-gray-600">
            Thank you for shopping with us. Your beautiful jewellery is on its
            way ✨
          </p>
        </div>

        {/* Order Information */}
        <div className="mb-6 grid gap-5 md:grid-cols-3">

          {/* Order ID */}
          <div className="rounded-2xl border border-[#ead8bd] bg-white p-5 shadow-sm">
            <p className="mb-2 text-sm text-gray-500">
              Order ID
            </p>

            <div className="flex items-center justify-between gap-2">
              <p className="font-bold text-[#6B1E2B]">
                #{order.orderId}
              </p>

              <button
                onClick={copyOrderId}
                className="rounded-lg p-2 text-gray-500 transition hover:bg-[#FFF8EF] hover:text-[#6B1E2B]"
                title="Copy Order ID"
              >
                <Copy size={17} />
              </button>
            </div>

            <p className="mt-2 text-xs text-gray-500">
              Ordered on {order.orderDate}
            </p>
          </div>

          {/* Delivery Date */}
          <div className="rounded-2xl border border-[#ead8bd] bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-xl bg-[#FFF8EF] p-3">
                <Truck className="text-[#6B1E2B]" size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Estimated Delivery
                </p>

                <p className="font-bold text-[#6B1E2B]">
                  {order.estimatedDelivery}
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              We'll notify you when your order is shipped.
            </p>
          </div>

          {/* Total */}
          <div className="rounded-2xl bg-[#6B1E2B] p-5 text-white shadow-lg">
            <p className="mb-2 text-sm text-[#f2d98b]">
              Total Amount
            </p>

            <p className="text-3xl font-bold">
              ₹{order.totalAmount}
            </p>

            <p className="mt-2 text-sm text-white/70">
              Payment: {order.paymentMethod}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Tracking Timeline */}
          <div className="rounded-2xl border border-[#ead8bd] bg-white p-6 shadow-sm lg:col-span-2">

            <div className="mb-7 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#6B1E2B]">
                  Order Tracking
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Track your order journey
                </p>
              </div>

              <Truck
                size={28}
                className="text-[#D4AF37]"
              />
            </div>

            <div className="space-y-0">

              {trackingSteps.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === trackingSteps.length - 1;

                return (
                  <div
                    key={step.title}
                    className="relative flex gap-4"
                  >

                    {/* Timeline Line */}
                    {!isLast && (
                      <div
                        className={`absolute left-[19px] top-10 h-14 w-[2px] ${
                          step.completed
                            ? "bg-[#6B1E2B]"
                            : "bg-gray-200"
                        }`}
                      />
                    )}

                    {/* Icon */}
                    <div
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                        step.completed
                          ? "bg-[#6B1E2B] text-[#D4AF37]"
                          : "border-2 border-gray-200 bg-white text-gray-400"
                      }`}
                    >
                      <Icon size={18} />
                    </div>

                    {/* Content */}
                    <div className="pb-7">
                      <h3
                        className={`font-semibold ${
                          step.completed
                            ? "text-[#6B1E2B]"
                            : "text-gray-400"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {step.description}
                      </p>

                      {index === 0 && (
                        <p className="mt-1 text-xs font-medium text-[#D4AF37]">
                          Completed
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Track Button */}
            <button
            //   onClick={() =>
            //     navigate(`/track-order/${order.orderId}`)
            //   }
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#6B1E2B] py-3 font-semibold text-white transition hover:bg-[#521620]"
            >
              Track Full Order
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Delivery Address */}
          <div className="rounded-2xl border border-[#ead8bd] bg-white p-6 shadow-sm">

            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-[#FFF8EF] p-3">
                <MapPin
                  size={22}
                  className="text-[#6B1E2B]"
                />
              </div>

              <div>
                <h2 className="font-bold text-[#6B1E2B]">
                  Delivery Address
                </h2>

                <p className="text-sm text-gray-500">
                  Shipping to
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-[#FFF8EF] p-4">
              <p className="font-semibold text-gray-800">
                {order.address}
              </p>

              {/* <p className="mt-2 text-sm leading-6 text-gray-600">
                {order.address.address}
                <br />
                {order.address.city}, {order.address.state}
                <br />
                PIN: {order.address.pincode}
              </p> */}

              <p className="mt-3 text-sm text-gray-600">
                📞 {order.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Ordered Products */}
        <div className="mt-6 rounded-2xl border border-[#ead8bd] bg-white p-6 shadow-sm">

          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-[#FFF8EF] p-3">
              <ShoppingBag
                size={22}
                className="text-[#6B1E2B]"
              />
            </div>

            <div>
              <h2 className="font-bold text-[#6B1E2B]">
                Items in Your Order
              </h2>

              <p className="text-sm text-gray-500">
                {order.items.length} item
                {order.items.length > 1 ? "s" : ""}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-xl bg-[#FFF8EF] p-3"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="h-20 w-20 rounded-xl object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">
                    {item.product.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <p className="font-bold text-[#6B1E2B]">
                  ₹{item.product.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Summary */}
        <div className="mt-6 rounded-2xl border border-[#ead8bd] bg-white p-6 shadow-sm">

          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-[#FFF8EF] p-3">
              <CreditCard
                size={22}
                className="text-[#6B1E2B]"
              />
            </div>

            <h2 className="font-bold text-[#6B1E2B]">
              Payment Summary
            </h2>
          </div>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span className="text-gray-500">
                Payment Method
              </span>

              <span className="font-medium text-gray-800">
                {order.paymentMethod}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">
                Order Total
              </span>

              <span className="font-medium text-gray-800">
                ₹{order.totalAmount.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="border-t border-dashed border-gray-200 pt-3">
              <div className="flex justify-between">
                <span className="text-lg font-bold text-gray-800">
                  Total Paid
                </span>

                <span className="text-lg font-bold text-[#6B1E2B]">
                  ₹{order.totalAmount.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <button
            onClick={() => navigate("/products")}
            className="rounded-xl border-2 border-[#6B1E2B] px-8 py-3 font-semibold text-[#6B1E2B] transition hover:bg-[#6B1E2B] hover:text-white"
          >
            Continue Shopping
          </button>

          <button
            // onClick={() =>
            //   navigate(`/track-order/${order.orderId}`)
            // }
            className="flex items-center justify-center gap-2 rounded-xl bg-[#6B1E2B] px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-[#521620]"
          >
            Track My Order
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Footer Message */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Thank you for choosing us. We hope you love your jewellery ✨
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;
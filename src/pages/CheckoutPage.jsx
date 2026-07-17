import React, { useState, useActionState } from "react";
import {
    FiMapPin,
    FiEdit2,
    FiPlus,
    FiCreditCard,
    FiSmartphone,
    FiDollarSign,
} from "react-icons/fi";
import { Dialog } from 'primereact/dialog';
import axios from "axios";
import { useUser } from "../dataProvider/useUser";

const apiUrl = import.meta.env.VITE_API_URL;


const CheckoutPage = () => {
    const [selectedPayment, setSelectedPayment] = useState("razorpay");
    const [openUpiOptions, setOpenUpiOptions] = useState(false);
    const [editDetails, setEditDetails] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: "",
        phoneNo: "",
        address: ""
    })
    const [upiApp, setUpiApp] = useState("");
    const { data: userData, isLoading, error, refetch } = useUser();

    console.log("userData", userData)

    const products = userData?.cart

    console.log("products", products)

    const subtotal = products?.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
    );

    const shipping = 0;
    const total = subtotal + shipping;

    const handlePayment = async () => {
        try {
            const response = await axios.post(`${apiUrl}/payment/create`, {
                amount: total,
                paymentMethod: "upi",
                app: upiApp
            });

            window.location.href = response.data.redirectUrl;
        } catch (error) {
            console.log("error", error)
        }
    };

    const handlePaymentViaCard = async () => {

        const response = await axios.post(`${apiUrl}/payment/createpaymentviacard`, {
            amount: total,
        });

        const options = {

            key: "rzp_test_TCwGcGLmFE3pyv",

            amount: response.data.amount,

            currency: response.data.currency,

            name: "Aarna Jewels",

            description: "Jewellery Purchase",

            order_id: response.data.id,

            handler: function (res) {

                console.log(res);

            }

        };

        const razor = new window.Razorpay(options);

        razor.open();
    };

    const token = localStorage.getItem("token")

    const updateUserDetails = async (prevState, formData) => {
        const address = formData.get("address")?.trim();
        const phone = formData.get("phone")?.trim();

        if (!/^\d{10}$/.test(phone)) {
            return {
                success: false,
                message: "Phone number must be exactly 10 digits.",
            };
        }

        if (!address || !phone) {
            return {
                success: false,
                message: "Address and phone number are required.",
            };
        }

        try {
            const response = await axios.patch(
                `${apiUrl}/editUser`,
                {
                    address,
                    phone,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setEditDetails(false);
            refetch()

            return {
                success: true,
                message:
                    response?.data?.message || "Profile updated successfully!",
            };
        } catch (error) {
            console.log("error", error)
            return {
                success: false,
                message:
                    error?.response?.data?.message ||
                    "Something went wrong.",
            };
        }
    };

    const [state, formAction, isPending] = useActionState(updateUserDetails, {
        success: false,
        message: "",
    });

    return (
        <div className="bg-gray-100 min-h-screen py-10 rounded-2xl">
            <div className="max-w-7xl mx-auto px-5">

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Side */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Address */}
                        <div className="bg-white rounded-2xl shadow p-6">
                            <div className="flex justify-between items-center mb-5">
                                <h2 className="text-xl font-semibold flex items-center gap-2">
                                    <FiMapPin />
                                    Shipping Address
                                </h2>

                                <div className="flex gap-3">
                                    <button onClick={() => setEditDetails(true)} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#640d14] hover:bg-[#52091b] text-white transition">
                                        <FiEdit2 />
                                        Edit Details
                                    </button>

                                    <Dialog
                                        header="Edit User Details"
                                        visible={editDetails}
                                        onHide={() => setEditDetails(false)}
                                        style={{
                                            width: "420px",
                                            backgroundColor: "#F9F6EE",
                                            padding: "1.5rem",
                                            borderRadius: "16px",
                                        }}

                                    >
                                        <form action={formAction} className="space-y-5 mt-2">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">
                                                    Address
                                                </label>

                                                <textarea
                                                    name="address"
                                                    defaultValue={userData?.address || ""}
                                                    rows={4}
                                                    className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#6D0F24]"
                                                    placeholder="Enter your address"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium mb-2">
                                                    Phone Number
                                                </label>

                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    defaultValue={userData?.phone || ""}
                                                    placeholder="Enter phone number"
                                                    maxLength={10}
                                                    pattern="[0-9]{10}"
                                                    inputMode="numeric"
                                                    className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                                    onInput={(e) => {
                                                        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                                                    }}
                                                />
                                            </div>

                                            {state.message && (
                                                <p
                                                    className={`text-sm ${state.success ? "text-green-600" : "text-red-600"
                                                        }`}
                                                >
                                                    {state.message}
                                                </p>
                                            )}

                                            <div className="flex justify-end gap-3 pt-2">
                                                <button
                                                    type="button"
                                                    onClick={() => setEditDetails(false)}
                                                    className="rounded-lg border border-gray-300 px-5 py-2 hover:bg-gray-100"
                                                >
                                                    Cancel
                                                </button>

                                                <button
                                                    type="submit"
                                                    disabled={isPending}
                                                    className="rounded-lg bg-[#6D0F24] hover:bg-[#4b0910] px-5 py-2 text-white disabled:opacity-60"
                                                >
                                                    {isPending ? "Saving..." : "Save Changes"}
                                                </button>
                                            </div>
                                        </form>
                                    </Dialog>
                                </div>
                            </div>

                            <div className="border rounded-xl p-5">
                                <p className="font-semibold text-lg">
                                    {userData?.name || "Customer"}
                                </p>

                                <div className="mt-2">
                                    {userData?.address ? (
                                        <p className="text-gray-600">{userData.address}</p>
                                    ) : (
                                        <p className="text-sm italic text-gray-400">
                                            No address added yet.
                                        </p>
                                    )}
                                </div>

                                <div className="mt-2">
                                    {userData?.phone ? (
                                        <p className="text-gray-600">{userData.phone}</p>
                                    ) : (
                                        <p className="text-sm italic text-gray-400">
                                            No phone number added yet.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Payment */}
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h2 className="text-xl font-semibold mb-6">
                                Payment Method
                            </h2>

                            <div className="space-y-4">
                                <label
                                    className={`flex items-center justify-between border rounded-xl p-5 cursor-pointer ${selectedPayment === "razorpay"
                                        ? "border-black bg-gray-50"
                                        : ""
                                        }`}
                                    onClick={() => handlePaymentViaCard()}
                                >
                                    <div className="flex items-center gap-4">
                                        <FiCreditCard size={22} />

                                        <div>
                                            <h3 className="font-semibold">
                                                Razorpay (UPI/Card/Net Banking)
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                Secure online payment
                                            </p>
                                        </div>
                                    </div>

                                    {/* <input
                                        type="radio"
                                        checked={selectedPayment === "razorpay"}
                                        onChange={() => setSelectedPayment("razorpay")}
                                    /> */}
                                </label>

                                <label
                                    className={`flex items-center justify-between border rounded-xl p-5 cursor-pointer ${selectedPayment === "upi"
                                        ? "border-black bg-gray-50"
                                        : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <FiSmartphone size={22} />

                                        <div>
                                            <h3 className="font-semibold">UPI</h3>

                                            <p className="text-sm text-gray-500">
                                                Google Pay / PhonePe / Paytm
                                            </p>
                                        </div>
                                    </div>

                                    <input
                                        type="radio"
                                        checked={selectedPayment === "upi"}
                                        onChange={() => setSelectedPayment("upi")}
                                    />
                                </label>


                                <Dialog
                                    header="Choose UPI App"
                                    visible={selectedPayment === "upi"}
                                    style={{
                                        width: "420px",
                                        backgroundColor: "#F9F6EE",
                                        padding: "1.5rem",
                                        borderRadius: "16px",
                                    }}
                                    onHide={() => setSelectedPayment("")}
                                >
                                    <div className="flex flex-col gap-4 py-2">
                                        {/* Google Pay */}
                                        <button
                                            onClick={() => setUpiApp("gpay")}
                                            className={`flex items-center gap-4 rounded-xl border p-4 transition-all duration-200 border-[#640d14] hover:shadow-md ${upiApp === "gpay"
                                                ? "border-[#640d14] bg-red-50 ring-2 ring-red-200"
                                                : "border-gray-200 bg-white"
                                                }`}
                                        >
                                            <img
                                                src="/images/gpay.png"
                                                alt="Google Pay"
                                                className="h-10 w-10 object-contain"
                                            />
                                            <span className="text-base font-medium text-gray-800">
                                                Google Pay
                                            </span>
                                        </button>

                                        {/* PhonePe */}
                                        <button
                                            onClick={() => setUpiApp("phonepe")}
                                            className={`flex items-center gap-4 rounded-xl border p-4 transition-all duration-200 border-[#640d14] hover:shadow-md ${upiApp === "phonepe"
                                                ? "border-[#640d14] bg-red-50 ring-2 ring-red-200"
                                                : "border-gray-200 bg-white"
                                                }`}
                                        >
                                            <img
                                                src="/images/phonepe.png"
                                                alt="PhonePe"
                                                className="h-10 w-10 object-contain"
                                            />
                                            <span className="text-base font-medium text-gray-800">
                                                PhonePe
                                            </span>
                                        </button>

                                        {/* Paytm */}
                                        <button
                                            onClick={() => setUpiApp("paytm")}
                                            className={`flex items-center gap-4 rounded-xl border p-4 transition-all duration-200 border-[#640d14] hover:shadow-md ${upiApp === "paytm"
                                                ? "border-[#640d14] bg-red-50 ring-2 ring-red-200"
                                                : "border-gray-200 bg-white"
                                                }`}
                                        >
                                            <img
                                                src="/images/paytm.png"
                                                alt="Paytm"
                                                className="h-10 w-10 object-contain"
                                            />
                                            <span className="text-base font-medium text-gray-800">
                                                Paytm
                                            </span>
                                        </button>

                                        <button
                                            disabled={!upiApp}
                                            onClick={handlePayment}
                                            className="w-full mt-4 border border-[#640d14] text-[#640d14] py-4 rounded-xl font-semibold hover:bg-[#640d14] hover:text-white transition"
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </Dialog>

                                <label
                                    className={`flex items-center justify-between border rounded-xl p-5 cursor-pointer ${selectedPayment === "cod"
                                        ? "border-black bg-gray-50"
                                        : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <FiDollarSign size={22} />

                                        <div>
                                            <h3 className="font-semibold">
                                                Cash on Delivery
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                Pay after delivery
                                            </p>
                                        </div>
                                    </div>

                                    <input
                                        type="radio"
                                        checked={selectedPayment === "cod"}
                                        onChange={() => setSelectedPayment("cod")}
                                    />
                                </label>
                            </div>
                        </div>

                        {/* Products */}
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h2 className="text-xl font-semibold mb-6">
                                Order Items
                            </h2>

                            <div className="space-y-6">
                                {products?.map((product) => (
                                    <div
                                        key={product.product.id}
                                        className="flex gap-5 border-b pb-5 last:border-none"
                                    >
                                        <img
                                            src={product.product.images[0]}
                                            alt={product.product.name}
                                            className="w-28 h-28 rounded-xl object-cover"
                                        />

                                        <div className="flex-1">
                                            <h3 className="font-semibold text-lg">
                                                {product.product.name}
                                            </h3>

                                            <p className="text-gray-500 mt-2">
                                                Quantity : {product.quantity}
                                            </p>

                                            <p className="font-bold text-xl mt-3">
                                                ₹{product.product.price}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div>
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                            <h2 className="text-xl font-semibold mb-6">
                                Order Summary
                            </h2>

                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>

                                    <span>₹{subtotal}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Shipping</span>

                                    <span className="text-green-600">
                                        Free
                                    </span>
                                </div>

                                <div className="border-t pt-4 flex justify-between font-bold text-lg">
                                    <span>Total</span>

                                    <span>₹{total}</span>
                                </div>
                            </div>

                            <button className="w-full mt-8 bg-[#640d14] text-white py-4 rounded-xl font-semibold hover:bg-[#4b0910] transition">
                                {selectedPayment === "cod"
                                    ? "Place Order"
                                    : "Proceed to Payment"}
                            </button>

                            {/* <div className="mt-5 text-sm text-gray-500 text-center">
                                Secure Checkout powered by Razorpay
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
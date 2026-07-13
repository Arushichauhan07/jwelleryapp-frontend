import React, { useState, useEffect } from "react";
import {
    FiX,
    FiUser,
    FiSettings,
    FiBell,
    FiHelpCircle,
    FiLogOut,
    FiChevronRight,
} from "react-icons/fi";
import axios from "axios";
import { useUser } from "../dataProvider/useUser.js";

const apiUrl = import.meta.env.VITE_API_URL;

export default function UserProfile({ open, onClose }) {
    // const [userData, setUserData] = useState(null);
    const { data: userData, isLoading, error } = useUser();

    console.log("User data from useUser hook:", userData);

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>Something went wrong</p>;
    console.log(userData);

    // const fetchUserProfile = async () => {
    //     try {
    //         const response = await axios.get(`${apiUrl}/userdetails`, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
    //             },
    //         });

    //         console.log("User profile data:", response.data);
    //         setUserData(response.data.userDetails);
    //     } catch (error) {
    //         console.error("Error fetching user profile:", error);
    //     }
    // }

    // useEffect(() => {
    //     fetchUserProfile();
    // }, [open]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        onClose();
        window.location.reload();
    }
    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300
        ${open
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-screen w-[380px] bg-white
    border-l border-gray-200 rounded-l-2xl
    shadow-xl
    z-50
    transition-transform duration-300 ease-in-out
    ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-7 py-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://i.pravatar.cc/120"
                            alt=""
                            className="w-14 h-14 rounded-full object-cover"
                        />

                        <div>
                            <h2 className="font-semibold text-lg text-gray-800">
                                {userData?.name}
                            </h2>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
                    >
                        <FiX size={20} />
                    </button>
                </div>

                {/* User Card */}
                <div className="p-6">
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 ">
                        <p className="text-xs uppercase tracking-wide text-gray-400">
                            Email
                        </p>

                        <p className="mt-1 text-sm text-gray-700">
                            {userData?.email}
                        </p>

                        <div className="mt-6 flex justify-between">
                            <div>
                                <p className="text-xs text-gray-400">
                                    Orders
                                </p>

                                <h3 className="text-xl font-semibold text-[#6A2E40]">
                                    18
                                </h3>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400">
                                    Phone No.
                                </p>

                                <h3 className="text-xl font-semibold text-[#6A2E40]">
                                    {userData?.phone || "N/A"}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu */}
                <div className="px-4 space-y-1">
                    {[
                        { title: "Profile", icon: <FiUser /> },
                        { title: "Settings", icon: <FiSettings /> },
                        { title: "Notifications", icon: <FiBell /> },
                        { title: "Help & Support", icon: <FiHelpCircle /> },
                    ].map((item) => (
                        <button
                            key={item.title}
                            className="flex w-full items-center justify-between rounded-xl px-4 py-3
        text-gray-700
        hover:bg-[#FFF8E6]
        hover:text-[#6A2E40]
        transition"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-gray-500">
                                    {item.icon}
                                </span>

                                <span>{item.title}</span>
                            </div>

                            <FiChevronRight
                                size={16}
                                className="text-gray-400"
                            />
                        </button>
                    ))}
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-5">
                    <button onClick={() => handleLogout()}
                        className="flex w-full items-center justify-center gap-2
      rounded-xl
      border border-gray-300
      py-3
      text-gray-700
      hover:bg-red-50
      hover:border-red-200
      hover:text-red-600
      transition"
                    >
                        <FiLogOut />
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
}
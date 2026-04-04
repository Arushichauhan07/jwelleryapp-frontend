import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FiMenu, FiHome, FiUsers, FiShoppingCart, FiSettings } from "react-icons/fi";
import { FaDatabase } from "react-icons/fa";

import { useNavigate, useLocation } from "react-router-dom";

const AdminDashboard = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div
                className={`bg-[#640d14] text-white transition-all duration-300 
                ${isCollapsed ? "w-16" : "md:w-64 w-full"} p-4`}
            >
                {/* Toggle Button */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="relative w-10 h-10 flex items-center justify-center"
                >
                    <div className="relative w-6 h-6">

                        {/* Top Line */}
                        <span
                            className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 
                                ${!isCollapsed ? "rotate-[-45deg] top-3 left-1" : "top-1 left-0"}`}
                        ></span>

                        {/* Middle Line */}
                        <span
                            className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 
                            ${!isCollapsed ? "opacity-0" : "top-3"}`}
                        ></span>

                        {/* Bottom Line */}
                        <span
                            className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 
                            ${!isCollapsed ? "rotate-[45deg] top-3 left-1" : "top-5 left-0"}`}
                        ></span>

                    </div>
                </button>

                {/* Menu Items */}
                <div className="flex flex-col gap-4 mt-6">
                    <div className={`flex items-center gap-3 p-2 rounded cursor-pointer transition
                            ${isActive("/admin") ? "bg-[#2d0508] text-white" : "hover:bg-[#2d0508]"}`} onClick={() => navigate("/admin")}>
                        <FiHome />
                        {!isCollapsed && <span>Dashboard</span>}
                    </div>

                    <div className={`flex items-center gap-3 p-2 rounded cursor-pointer transition
                            ${isActive("/admin/users") ? "bg-[#2d0508] text-white" : "hover:bg-[#2d0508]"}`} onClick={() => navigate("/admin/users")}>
                        <FiUsers />
                        {!isCollapsed && <span>Users</span>}
                    </div>

                    <div className={`flex items-center gap-3 p-2 rounded cursor-pointer transition
                            ${isActive("/admin/orders") ? "bg-[#2d0508] text-white" : "hover:bg-[#2d0508]"}`} onClick={() => navigate("/admin/orders")}>
                        <FiShoppingCart />
                        {!isCollapsed && <span>Orders</span>}
                    </div>

                    <div className={`flex items-center gap-3 p-2 rounded cursor-pointer transition
                            ${isActive("/admin/products") ? "bg-[#2d0508] text-white" : "hover:bg-[#2d0508]"}`} onClick={() => navigate("/admin/products")}>
                        <FaDatabase />
                        {!isCollapsed && <span>Products</span>}
                    </div>

                    <div className={`flex items-center gap-3 p-2 rounded cursor-pointer transition
                            ${isActive("/admin/settings") ? "bg-[#2d0508] text-white" : "hover:bg-[#2d0508]"}`} onClick={() => navigate("/admin/settings")}>
                        <FiSettings />
                        {!isCollapsed && <span>Settings</span>}
                    </div>
                </div>
            </div>

            <div className={` flex-1
                    ${!isCollapsed ? "hidden md:block" : ""}
                    transition-all duration-300 overflow-y-auto p-4`}>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminDashboard;
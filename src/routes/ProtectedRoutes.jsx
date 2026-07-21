import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";

const ProtectedRoute = ({ isLoggedIn }) => {
    const location = useLocation();

    if (!isLoggedIn) {
        toast.error("Please login first!");

        return (
            <Navigate
                to="/"
                replace
                state={{ from: location.pathname }}
            />
        );
    }

    return <Outlet />;
};

export default ProtectedRoute;
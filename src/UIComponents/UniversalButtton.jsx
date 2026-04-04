import React from "react";
import clsx from "clsx";

const UniversalButton = ({
  label,             
  children,           
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className = "",
  fullWidth = false,
  ...props
}) => {
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-700 hover:bg-gray-100",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };

  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {/* Left Icon */}
      {leftIcon && !loading && <span>{leftIcon}</span>}

      {/* Label / Children */}
      {loading ? (
        <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
      ) : (
        label || children   // 👈 priority to label
      )}

      {/* Right Icon */}
      {rightIcon && !loading && <span>{rightIcon}</span>}
    </button>
  );
};

export default UniversalButton;
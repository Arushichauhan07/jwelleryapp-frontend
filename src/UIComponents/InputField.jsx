import React, { useState } from "react";
import { FiInfo, FiEye, FiEyeOff } from "react-icons/fi";

const InputField = ({
  label,
  tooltip,
  type = "text",
  error,
  leftIcon,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-1 relative">
      
      {/* Label + Tooltip */}
      {label && (
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">
            {label}
          </label>

          {/* Tooltip Icon */}
          {tooltip && (
            <div
              className="relative flex items-center"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <FiInfo className="text-gray-400 cursor-pointer" />

              {/* Tooltip Box */}
              {showTooltip && (
                <div className="absolute bottom-6 left-0 z-50 w-52 p-2 text-xs text-black bg-gray-200 rounded-md shadow-lg">
                  {tooltip}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Input Box */}
      <div
        className={`flex items-center border rounded-lg px-3 py-2 transition
        ${error ? "border-red-500" : "border-gray-300 focus-within:ring-2 focus-within:ring-blue-300"}`}
      >
        {/* Left Icon */}
        {leftIcon && <span className="mr-2">{leftIcon}</span>}

        {/* Input */}
        <input
          type={isPassword && showPassword ? "text" : type}
          className="flex-1 outline-none bg-transparent"
          {...props}
        />

        {/* Password Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>

      {/* Error */}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default InputField;
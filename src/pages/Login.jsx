import { useEffect, useState, useActionState } from "react";
import { FaGoogle } from "react-icons/fa";
import InputField from "../UIComponents/InputField";
import { GoogleLogin } from "@react-oauth/google";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const Login = ({ showPopup, setShowPopup }) => {
    const [isLogin, setIsLogin] = useState(true);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setShowPopup(false);
            return;
        }

        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 1000); // 1 minute

        return () => clearTimeout(timer);
    }, []);

    const authAction = async (prevState, formData) => {
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
        };

        try {
            const endpoint = isLogin
                ? `${apiUrl}/login`
                : `${apiUrl}/register`;

            const response = await axios.post(endpoint, data);

            console.log("Auth response:", response);
            if (response.data.success) {
                localStorage.setItem("token", response.data.token);
                setShowPopup(false);
            }

            return {
                success: true,
                error: null,
            };
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.message || "Something went wrong",
            };
        }
    };

    const [state, formAction, isPending] = useActionState(authAction, {
        success: false,
        error: null,
    });

    const handleContinueWithGoogle = async (credentialResponse) => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/sign-up",
                {
                    token: credentialResponse.credential,
                }
            );

            if (response.data.success) {
                localStorage.setItem("token", response.data.token);
                setShowPopup(false);
            }

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    if (!showPopup) return null;


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-5">
            <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl animate-[fadeIn_.4s_ease]">

                <h2 className="text-3xl font-bold text-center text-[#8C1007]">
                    {isLogin ? "Welcome Back" : "Create Account"}
                </h2>

                <p className="mt-2 text-center text-gray-500">
                    {isLogin
                        ? "Login to save your wishlist and orders."
                        : "Join us to explore exclusive collections."}
                </p>

                <form action={formAction} className="mt-8 space-y-5">

                    {!isLogin && (
                        <InputField
                            name="name"
                            label="Full Name"
                            placeholder="Enter your name"
                        />
                    )}

                    <InputField
                        name="email"
                        label="Email"
                        placeholder="Enter your email"
                    />

                    <InputField
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="Enter password"
                    />

                    {state.error && (
                        <p className="text-red-500 text-sm">
                            {state.error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full rounded-xl bg-gradient-to-r from-[#8C1007] to-[#B71C10] py-3.5 text-white font-semibold text-lg"
                    >
                        {isPending
                            ? "Please wait..."
                            : isLogin
                                ? "Login"
                                : "Create Account"}
                    </button>

                </form>

                <div className="mt-5">
                    <GoogleLogin
                        onSuccess={handleContinueWithGoogle}
                        onError={() => console.log("Login Failed")}
                    />
                </div>

                <p className="mt-8 text-center text-sm text-gray-500">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}

                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="ml-2 font-semibold text-[#8C1007] hover:underline"
                    >
                        {isLogin ? "Sign Up" : "Login"}
                    </button>
                </p>

            </div>
        </div>
    );
};

export default Login;
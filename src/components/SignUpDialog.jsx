import React, { useEffect, useState } from "react";

const SignupDialog = () => {
    const [show, setShow] = useState(false);

    // Show dialog after 10 seconds
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setShow(true);
    //     }, 10000);

    //     return () => clearInterval(timer);
    // }, []);

    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
            <div className="relative bg-gradient-to-br from-[#FFF0C4] to-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center border border-[#660B05]/30">
                {/* Glow border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-[#660B05] pointer-events-none"></div>

                {/* Close button */}
                <button
                    className="absolute top-3 right-3 text-[#660B05] hover:text-[#3E0703] text-lg font-bold"
                    onClick={() => setShow(false)}
                >
                    ✕
                </button>

                <h2 className="text-3xl font-bold mb-3 text-[#3E0703] tracking-wide">
                    Extra 10% off on your first order!
                </h2>
                <p className="text-[#3E0703]/80 mb-6 text-lg font-medium">
                    Be the first to explore our new launches
                </p>

                <div className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border-2 border-[#660B05] rounded-xl py-3 px-4 text-[#3E0703] focus:outline-none focus:ring-2 focus:ring-[#660B05] placeholder:text-[#660B05]/70 transition duration-300"
                    />
                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full border-2 border-[#660B05] rounded-xl py-3 px-4 text-[#3E0703] focus:outline-none focus:ring-2 focus:ring-[#660B05] placeholder:text-[#660B05]/70 transition duration-300"
                    />

                    <button className="w-full bg-gradient-to-r from-[#660B05] to-[#3E0703] hover:scale-105 transform transition duration-300 text-white py-3 rounded-xl shadow-lg">
                        Submit
                    </button>
                </div>
            </div>
        </div>

    );
};

export default SignupDialog;

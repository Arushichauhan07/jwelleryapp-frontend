import React from "react";

const ShopByBudget = () => {
    const budgets = [
        { range: "Under ₹1,000" },
        { range: "Under ₹5,000" },
        { range: "Under ₹10,000" },
        { range: "Above ₹10,000" },
    ];

    return (
        <section className="py-16 px-6 md:px-12 lg:px-20 text-center">
            {/* Heading */}
            <div className="relative flex items-center justify-center mb-12">
                <h2 className="relative px-6 text-3xl md:text-4xl font-bold text-gray-800">
                    Shop by Budget
                </h2>
            </div>

            {/* Circles */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                {budgets.map((budget, i) => (
                    <div
                        key={i}
                        className="w-40 h-40 flex items-center justify-center rounded-full
             bg-gradient-to-br from-[#8B0000] via-[#660B05] to-[#400202]
             text-white font-semibold text-lg text-center shadow-lg 
             border-4 border-white hover:border-yellow-400
             hover:shadow-2xl transition-all duration-300 transform hover:scale-110 cursor-pointer relative"
                    >
                        {/* Subtle glow ring */}
                        <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl opacity-0 hover:opacity-100 transition-opacity"></div>

                        {/* Text */}
                        <span className="px-4 drop-shadow-md">{budget.range}</span>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default ShopByBudget;

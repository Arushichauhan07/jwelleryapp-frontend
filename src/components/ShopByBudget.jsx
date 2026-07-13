import React from "react";

const ShopByBudget = () => {
    const budgets = [
        { range: "Under ₹1,000" },
        { range: "Under ₹5,000" },
        { range: "Under ₹10,000" },
        { range: "Above ₹10,000" },
    ];

    return (
        <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20 text-center">
            {/* Heading */}
            <div className="relative flex items-center justify-center mb-8 md:mb-12">
                <h2 className="relative px-4 sm:px-6 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                    Shop by Budget
                </h2>
            </div>

            {/* Budget Circles */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 md:gap-8 justify-items-center">
                {budgets.map((budget, i) => (
                    <div
                        key={i}
                        className="
          relative
          w-28 h-28
          sm:w-36 sm:h-36
          md:w-40 md:h-40
          lg:w-44 lg:h-44
          flex items-center justify-center
          rounded-full
          bg-gradient-to-br
          from-[#8B0000]
          via-[#660B05]
          to-[#400202]
          text-white
          font-semibold
          text-sm
          sm:text-base
          md:text-lg
          text-center
          shadow-lg
          border-4 border-white
          hover:border-yellow-400
          hover:shadow-2xl
          hover:scale-105
          transition-all
          duration-300
          cursor-pointer
        "
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        {/* Text */}
                        <span className="relative z-10 px-3 sm:px-4 leading-snug">
                            {budget.range}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShopByBudget;

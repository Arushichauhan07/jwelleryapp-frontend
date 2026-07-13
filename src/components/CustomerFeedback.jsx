import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { IoChevronForwardSharp } from "react-icons/io5";
import { GrFormPrevious } from "react-icons/gr";

const testimonials = [
    {
        name: "Aarushi Mehta",
        title: "Woww..!",
        feedback:
            "Absolutely stunning craftsmanship! The gold ring I bought feels so elegant and the detailing is just perfect.",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 5,
    },
    {
        name: "Rohan Kapoor",
        title: "Loved it!",
        feedback:
            "I ordered a chain for my wife’s birthday – she loved it! Packaging was premium and delivery was quick.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 4,
    },
    {
        name: "Simran Kaur",
        title: "Unique Designs",
        feedback:
            "The designs are unique and aesthetic. I’m already planning my next purchase!",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
    },
    {
        name: "Aditya Sharma",
        title: "Superb Quality",
        feedback:
            "The quality is superb, definitely worth the price. Highly recommended!",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5,
    },
    {
        name: "Neha Verma",
        title: "Classy!",
        feedback:
            "These earrings are so classy and lightweight, I wear them every day!",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        rating: 5,
    },
    {
        name: "Aarushi Mehta",
        title: "Woww..!",
        feedback:
            "Absolutely stunning craftsmanship! The gold ring I bought feels so elegant and the detailing is just perfect.",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 5,
    }
];

const CustomerFeedback = () => {
    const [current, setCurrent] = useState(0);
     const [itemsPerPage, setItemsPerPage] = useState(3);

    // Auto-slide every 3s
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrent((prev) =>
            prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
        );
    };

    const handlePrev = () => {
        setCurrent((prev) =>
            prev - itemsPerPage < 0
                ? Math.max(testimonials.length - itemsPerPage, 0)
                : prev - itemsPerPage
        );
    };

   

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1); // Mobile
            } else {
                setItemsPerPage(3); // Tablet & Desktop
            }
        };

        handleResize(); // Run on initial load

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="w-full py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="mx-auto max-w-7xl text-center">
                {/* Heading */}
                <div className="relative flex items-center justify-center mb-16 sm:mb-24">
                    <div className="w-full h-px bg-gray-300"></div>

                    <h2 className="absolute bg-white px-4 sm:px-6 mb-5 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                        What Our Customers Say
                    </h2>
                </div>

                {/* Carousel */}
                <div className="relative flex items-center">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 md:-left-5 lg:-left-10 z-10 rounded-full bg-white shadow-lg p-2 sm:p-3 hover:scale-105 transition"
                    >
                        <GrFormPrevious className="text-[#3E0703] text-xl sm:text-2xl" />
                    </button>

                    {/* Cards */}
                    <div className="flex justify-center gap-4 md:gap-6 w-full transition-all duration-500">
                        {testimonials
                            .slice(current, current + itemsPerPage)
                            .map((t, i) => (
                                <div
                                    key={i}
                                    className="
                relative
                bg-white
                border border-[#FFF0C4]
                shadow-md
                hover:shadow-xl
                rounded-2xl
                p-5 sm:p-6
                pt-14
                transition-all
                duration-300
                w-full
                max-w-[320px]
              "
                                >
                                    {/* Image */}
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                                        <img
                                            src={t.image}
                                            alt={t.name}
                                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-[#660B05]"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-10 text-lg sm:text-xl font-semibold text-gray-800">
                                        {t.title}
                                    </h3>

                                    {/* Feedback */}
                                    <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                                        "{t.feedback}"
                                    </p>

                                    {/* Stars */}
                                    <div className="flex justify-center mt-4">
                                        {Array.from({ length: t.rating }).map((_, idx) => (
                                            <FaStar
                                                key={idx}
                                                className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>

                                    {/* Name */}
                                    <p className="mt-3 text-green-600 font-medium text-sm sm:text-base">
                                        - {t.name}
                                    </p>
                                </div>
                            ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-0 md:-right-5 lg:-right-10 z-10 rounded-full bg-white shadow-lg p-2 sm:p-3 hover:scale-105 transition"
                    >
                        <IoChevronForwardSharp className="text-[#3E0703] text-xl sm:text-2xl" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomerFeedback;

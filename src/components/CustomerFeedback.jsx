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
    const itemsPerPage = 3;

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

    return (
        <section className="w-full py-16 px-6 md:px-20 relative">
            <div className=" mx-auto text-center">
                {/* Heading */}
                <div className="relative flex items-center justify-center mb-28">
                    {/* Line */}
                    <div className="w-full h-[1.5px] bg-gray-300"></div>

                    {/* Heading */}
                    <h2 className="absolute bg-white px-6 text-3xl md:text-4xl font-bold text-gray-800">
                        What Our Customers Say
                    </h2>
                </div>


                {/* Carousel */}
                <div className="relative flex items-center">
                    {/* Prev Button */}
                    <button
                        onClick={handlePrev}
                        className="absolute -left-6 md:-left-10 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-10"
                    >
                        <GrFormPrevious className="text-[#3E0703] text-2xl"/>
                    </button>

                    {/* Cards */}
                    <div className="flex gap-6 justify-center w-full transition-all duration-500">
                        {testimonials.slice(current, current + itemsPerPage).map((t, i) => (
                            <div
                                key={i}
                                className="relative bg-white shadow-md p-6 border border-[#FFF0C4] hover:shadow-xl transition-all duration-300 text-center rounded-2xl w-80"
                            >
                                {/* Image */}
                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-26 h-26 object-cover border-2 border-[#660B05] rounded-full"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-12">
                                    {t.title}
                                </h3>

                                {/* Feedback */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    “{t.feedback}”
                                </p>

                                {/* Stars */}
                                <div className="flex justify-center mb-3">
                                    {Array.from({ length: t.rating }).map((_, idx) => (
                                        <FaStar
                                            key={idx}
                                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>

                                {/* Name */}
                                <p className="text-green-600 font-medium">- {t.name}</p>
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="absolute -right-6 md:-right-10 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-10"
                    >
                        <IoChevronForwardSharp className="text-[#3E0703] text-2xl"/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomerFeedback;

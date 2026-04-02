import React from 'react'
import HeroSectionCarousel from './HeroSectionCarousel'
import CustomerFeedback from './CustomerFeedback'
import ShopByBudget from './ShopByBudget'

const HeroSection = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <HeroSectionCarousel/>
                <div className="max-w-7xl mx-auto py-12 text-center">
                    {/* Heading */}
                    <h2 className="text-4xl font-bold mb-2 text-gray-800 animate-fadeIn mt-3">Find your perfect match</h2>
                    <p className="text-gray-600 mb-8 animate-fadeIn animate-delay-100">Shop by category</p>

                    {/* Category Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Necklace", img: "https://i.pinimg.com/1200x/df/03/bc/df03bcddd6a90e87671bee370c39c123.jpg" },
                            { name: "Rings", img: "https://i.pinimg.com/1200x/21/c1/17/21c117edb0c5eaf9e0247e6c3a0e3630.jpg" },
                            { name: "Earrings", img: "https://i.pinimg.com/736x/89/a9/88/89a98813e40e5f80042bef2254730760.jpg" },
                            { name: "Bracelets", img: "https://i.pinimg.com/736x/63/69/51/6369516319953956d3936777cd04292f.jpg" },
                            { name: "Anklets", img: "https://i.pinimg.com/1200x/e0/21/e0/e021e0c0de3b396ed5c3f4feae4ac823.jpg" },
                            { name: "Pendants", img: "https://i.pinimg.com/1200x/ce/f2/c9/cef2c9a6e8130954f2c199eae2a1390f.jpg" },
                            { name: "Sets", img: "https://i.pinimg.com/736x/ca/37/90/ca37901b3c4bf3473d2e60562489efda.jpg" },
                        ].map((cat, i) => (
                            <div
                                key={i}
                                className="flex flex-col gap-2 overflow-hidden transform transition-all duration-500 ease-out cursor-pointer 
                   hover:scale-105 hover:-translate-y-1 animate-fadeInUp"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                <div className="h-52 w-full overflow-hidden rounded-xl border-2 border-[#660B05] shadow-lg">
                                    <img
                                        src={cat.img}
                                        alt={cat.name}
                                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-gray-800 font-semibold py-2">{cat.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                 <ShopByBudget/>           
                <CustomerFeedback/>    
            </div>
        </>
    )
}

export default HeroSection
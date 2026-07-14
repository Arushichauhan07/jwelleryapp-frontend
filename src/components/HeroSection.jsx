import React from 'react'
import HeroSectionCarousel from './HeroSectionCarousel'
import CustomerFeedback from './CustomerFeedback'
import ShopByBudget from './ShopByBudget'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const navigate = useNavigate()

    const categories = [
        { name: "Necklace", img: "https://i.pinimg.com/1200x/df/03/bc/df03bcddd6a90e87671bee370c39c123.jpg" },
        { name: "Rings", img: "https://i.pinimg.com/1200x/21/c1/17/21c117edb0c5eaf9e0247e6c3a0e3630.jpg" },
        { name: "Earrings", img: "https://i.pinimg.com/736x/89/a9/88/89a98813e40e5f80042bef2254730760.jpg" },
        { name: "Bracelets", img: "https://i.pinimg.com/736x/63/69/51/6369516319953956d3936777cd04292f.jpg" },
        { name: "Anklets", img: "https://i.pinimg.com/1200x/e0/21/e0/e021e0c0de3b396ed5c3f4feae4ac823.jpg" },
        { name: "Pendants", img: "https://i.pinimg.com/1200x/ce/f2/c9/cef2c9a6e8130954f2c199eae2a1390f.jpg" },
        { name: "Sets", img: "https://i.pinimg.com/736x/ca/37/90/ca37901b3c4bf3473d2e60562489efda.jpg" },
        { name: "Bangles", img: "https://i.pinimg.com/webp/1200x/32/e1/a4/32e1a4e236d15db45263e20f03450aa1.webp" },
    ]
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <HeroSectionCarousel />
                <div className="max-w-7xl mx-auto py-12 text-center">
                    {/* Heading */}
                    <h2 className="text-4xl font-bold mb-2 text-gray-800 animate-fadeIn mt-3">Find your perfect match</h2>
                    <p className="text-gray-600 mb-8 animate-fadeIn animate-delay-100">Shop by category</p>

                    {/* Category Grid */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {categories.map((cat, i) => (
                            <div
                                key={i}
                                onClick={()=>navigate("/products", {
                                    state: {
                                        category:cat.name
                                    }
                                })}
                                className="group relative overflow-hidden rounded-2xl mb-6 cursor-pointer break-inside-avoid"
                            >
                                <img
                                    src={cat.img}
                                    alt={cat.name}
                                    className="w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-500">
                                    {cat.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
                <ShopByBudget />
                <CustomerFeedback />
            </div>
        </>
    )
}

export default HeroSection
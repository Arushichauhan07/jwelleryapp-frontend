import React, { useState, useEffect } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { GrFormPrevious } from "react-icons/gr";

const HeroSectionCarousel = () => {
  const images = [
    "https://i.pinimg.com/736x/e1/c6/82/e1c68203682a68b89bbe1901336d9af6.jpg",
    "https://i.pinimg.com/736x/9d/c7/b9/9dc7b984b6f6209c702b4673dd5feec0.jpg",
    "https://i.pinimg.com/736x/48/20/47/4820474a86e4cbfa6b612733bdc62ba6.jpg",
    "https://i.pinimg.com/736x/53/d1/97/53d1978ee507d6f4f0e8ab5a56ff0c18.jpg",
    "https://i.pinimg.com/736x/2f/e0/13/2fe0134c697cb6e1ce84dc36127e83ee.jpg",
    "https://i.pinimg.com/736x/6e/cc/a1/6ecca166ad22152a91cf7e154fcc0131.jpg",
    "https://i.pinimg.com/736x/09/c3/89/09c3897b1d02c7892a3dbe1fc0a170a1.jpg",
    "https://i.pinimg.com/736x/d3/c4/cd/d3c4cdec8056d1c718575a7409d2d03f.jpg",
    "https://i.pinimg.com/736x/4b/1d/de/4b1dde2ae74d7915026dcf1baa2f8ec5.jpg",
    "https://i.pinimg.com/1200x/45/8e/70/458e7033b5f577202599b8289bebca2e.jpg",
    "https://i.pinimg.com/1200x/b7/90/8a/b7908a553880c6d29770649b0c10526e.jpg",
    "https://i.pinimg.com/736x/6a/40/cb/6a40cb332ef081a807c9870c94717746.jpg",
    "https://i.pinimg.com/736x/9e/72/74/9e7274f0eb17ae0eefba34f1d11cb519.jpg",
    "https://i.pinimg.com/736x/70/a8/8f/70a88fb827b16173a7e7b03f6d3453d2.jpg",
    "https://i.pinimg.com/1200x/ed/6d/94/ed6d94190c99bcfe1cf68509ab964a6e.jpg",
    "https://i.pinimg.com/736x/91/f5/f3/91f5f3e2b3902a9c84556ae69a5ad037.jpg"

  ];

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(images.length / itemsPerSlide);

  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  // Split images into chunks of 4
  const slides = [];
  for (let i = 0; i < images.length; i += itemsPerSlide) {
    slides.push(images.slice(i, i + itemsPerSlide));
  }

  return (
    <div className="relative w-[90vw] overflow-hidden rounded-lg">
      {/* Slides wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((group, idx) => (
          <div key={idx} className="flex w-full shrink-0">
            {group.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Slide ${i}`}
                className="w-1/4 h-[60vh] object-cover"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Prev / Next */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides)
        }
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <GrFormPrevious />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % totalSlides)}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <IoChevronForwardSharp />
      </button>
    </div>
  );
};

export default HeroSectionCarousel;

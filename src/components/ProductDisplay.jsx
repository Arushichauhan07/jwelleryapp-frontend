import React, { useState, useEffect } from "react";

const ProductDisplay = () => {
  const images = [
    "https://i.pinimg.com/736x/82/a6/c4/82a6c4c6bfd8a356d9365250e43bfb7a.jpg",
    "https://i.pinimg.com/1200x/f8/9b/a7/f89ba70366934233c10f9995cff65d2e.jpg",
    "https://i.pinimg.com/736x/38/c3/7f/38c37f1665eb8a1b935a700e5c3da5aa.jpg",
    "https://i.pinimg.com/736x/02/62/b8/0262b8afe1f44ffa14d22612e7e92e60.jpg",
    "https://i.pinimg.com/736x/a5/ce/5e/a5ce5ef558c9615424c09c91639d364b.jpg",
    "https://i.pinimg.com/1200x/62/96/79/629679f60ac1302ea366d29bbde9d3b6.jpg",
    "https://i.pinimg.com/736x/cd/71/6b/cd716bae5ed5b9f39beff5e034a2ac54.jpg",
    "https://i.pinimg.com/1200x/9d/1b/d3/9d1bd3f89d5f2e1a9bb14ce0df97eff9.jpg",
    "https://i.pinimg.com/1200x/df/03/bc/df03bcddd6a90e87671bee370c39c123.jpg",
    "https://i.pinimg.com/1200x/05/2f/29/052f298f7c79cf601b7067ec48b998a1.jpg",
    "https://i.pinimg.com/1200x/36/ac/95/36ac95df882bd9e431e5fe58976f3813.jpg",
    "https://i.pinimg.com/1200x/c0/3b/b0/c03bb0606a39acf4a67d6b7de5136b74.jpg"
  ];


  const [indexes, setIndexes] = useState(
    Array(8).fill(0).map((_, i) => i % images.length)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) => prev.map((i) => (i + 1) % images.length));
    }, 3000); // change every 3s

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-wrap gap-6 justify-center items-center p-6 rounded-2xl ">
      {indexes.map((idx, i) => (
        <div
          key={i}
          className="h-32 w-32 rounded-full overflow-hidden border-4 border-white shadow-md hover:scale-110 hover:shadow-xl transition-transform duration-300"
        >
          <img
            src={images[idx]}
            alt={`profile-${i}`}
            className="h-full w-full object-cover transition-all duration-500"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;

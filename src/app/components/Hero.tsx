"use client";
import { useState, useEffect } from "react";

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://framerusercontent.com/images/1SraISyrTQAPOct4NEsfX1gLAA.jpg",
    "https://framerusercontent.com/images/mdxbifzD82Csis37S8OoTpOc.jpg",
    "https://framerusercontent.com/images/VXubTNLN2gJvbD3q1GCLzkIYTk.jpg",
    "https://framerusercontent.com/images/q6jg7aMZgZhzRSBBeIZQXSxk.jpg",
    "https://framerusercontent.com/images/VQiB0yzenjl3TNvhGs2NKvwjo.jpg",
    "https://framerusercontent.com/images/6heRi5Q5v6PJVUmOCxjeBFO0U.jpg",
    "https://framerusercontent.com/images/gEuhcKlVYALJ73vyIgXClfvYI0.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-14" id="home">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Product Image */}
          <div className="relative">
            {/* Background Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="md:w-96 md:h-96 w-72 h-72  bg-yellow-100 rounded-full opacity-60"></div>
            </div>

            {/* Product Image Carousel */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="md:w-[450px] w-44 h-60 md:h-[500px] rounded-2xl shadow-2xl overflow-hidden relative">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                    alt={`Hero image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Side Navigation */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-20">
              <div className="flex  gap-8 text-xs font-medium transform -rotate-90">
                <span>YOUR</span>
                <span>LIFESTYLE</span>
                <span>PARTNER</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-light text-gray-900 leading-tight">
                Produksi <span className="text-yellow-600">Totebag?</span>
                <br className="hidden sm:block" /> Serahkan pada Ahlinya
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed max-w-md">
                Kami punya pengalaman bantu ratusan pelanggan custom produk
                dengan hasil memuaskan.
              </p>

              <button className="bg-yellow-600 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;

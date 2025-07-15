"use client";
import { useState } from "react";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      category: "totebag",
      title: "Custom Canvas Tote",
      description: "Premium canvas totebag dengan custom logo perusahaan",
      image:
        "https://framerusercontent.com/images/V0o1uLAjm5xJRyQICiFjNSYiBI.jpg",
    },
    {
      id: 2,
      category: "merchandise",
      title: "Corporate Merchandise",
      description: "Paket merchandise lengkap untuk event perusahaan",
      image:
        "https://framerusercontent.com/images/WoBpne8KgCdfwnXKnUJYTWqorU.jpg",
    },
    {
      id: 3,
      category: "totebag",
      title: "Eco-Friendly Bag",
      description: "Totebag ramah lingkungan dengan bahan organic cotton",
      image:
        "https://framerusercontent.com/images/c86wKkWBVD8DHtUkSQX1fYA7cpk.jpg",
    },
    {
      id: 4,
      category: "custom",
      title: "Wedding Favor Bags",
      description: "Custom totebag untuk souvenir pernikahan",
      image:
        "https://framerusercontent.com/images/8ZJq4n2c9t3SVaOp5hHTynGc0W0.jpg",
    },
    {
      id: 5,
      category: "merchandise",
      title: "University Merchandise",
      description: "Merchandise resmi universitas dengan kualitas premium",
      image:
        "https://framerusercontent.com/images/y8GqGivnf8An1TaZxFbFiB0Y9Bw.jpg",
    },
    {
      id: 6,
      category: "totebag",
      title: "Luxury Leather Tote",
      description: "Totebag kulit premium dengan finishing mewah",
      image:
        "https://framerusercontent.com/images/nMLc0scNPZ98IXVujZWRbOOJ14.jpg",
    },
  ];

  const filters = [
    { id: "all", label: "Semua" },
    { id: "totebag", label: "Totebag" },
    { id: "merchandise", label: "Merchandise" },
    { id: "custom", label: "Custom" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  // Split items into two rows for infinite scroll
  const firstRow = filteredItems.slice(0, Math.ceil(filteredItems.length / 2));
  const secondRow = filteredItems.slice(Math.ceil(filteredItems.length / 2));

  // Duplicate items for seamless infinite scroll
  const duplicatedFirstRow = [...firstRow, ...firstRow];
  const duplicatedSecondRow = [...secondRow, ...secondRow];

  return (
    <div className=" py-16 md:py-24 overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-6">
            <i className="fas fa-bullseye text-yellow-600 text-sm"></i>
            <span className="text-sm uppercase tracking-wider text-gray-600 font-medium sans">
              Portofolio
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light serif text-gray-900 mb-6">
            Temukan <span className="text-yellow-600">insiprasi</span> dari
            pekerjaan kita
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Infinite Scroll Portfolio Grid */}
        <div>
          {/* First Row - Scroll Right */}
          <div className="relative overflow-hidden p-4">
            {/* Left Fade Gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white  to-transparent z-10 pointer-events-none"></div>

            {/* Right Fade Gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white  to-transparent z-10 pointer-events-none"></div>

            <div className="flex gap-6 animate-scroll-right">
              {duplicatedFirstRow.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex-shrink-0 w-80"
                >
                  {/* Image */}
                  <div className="h-64 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 capitalize">
                      {item.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default Portfolio;

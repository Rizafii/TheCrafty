"use client";
import { useState } from "react";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      image:
        "https://framerusercontent.com/images/V0o1uLAjm5xJRyQICiFjNSYiBI.jpg",
    },
    {
      id: 2,
      image:
        "https://framerusercontent.com/images/WoBpne8KgCdfwnXKnUJYTWqorU.jpg",
    },
    {
      id: 3,
      image:
        "https://framerusercontent.com/images/c86wKkWBVD8DHtUkSQX1fYA7cpk.jpg",
    },
    {
      id: 4,
      image:
        "https://framerusercontent.com/images/8ZJq4n2c9t3SVaOp5hHTynGc0W0.jpg",
    },
    {
      id: 5,
      image:
        "https://framerusercontent.com/images/y8GqGivnf8An1TaZxFbFiB0Y9Bw.jpg",
    },
    {
      id: 6,
      image:
        "https://framerusercontent.com/images/nMLc0scNPZ98IXVujZWRbOOJ14.jpg",
    },
  ];

  // Split items into two rows for infinite scroll
  const firstRow = portfolioItems.slice(
    0,
    Math.ceil(portfolioItems.length / 2)
  );
  const secondRow = portfolioItems.slice(Math.ceil(portfolioItems.length / 2));

  // Duplicate items for seamless infinite scroll
  const duplicatedFirstRow = [...firstRow, ...firstRow];
  const duplicatedSecondRow = [...secondRow, ...secondRow];

  return (
    <div className=" py-16 md:py-24 overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-6">
            <i className="fas fa-bullseye text-primary text-sm"></i>
            <span className="text-sm uppercase tracking-wider text-gray-600 font-medium sans">
              Portofolio
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light serif text-gray-900 mb-6">
            Temukan <span className="text-primary">insiprasi</span> dari
            pekerjaan kita
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed sans">
            Lihat bagaimana ide-ide sederhana bisa berubah jadi karya yang
            bermakna.
          </p>
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
                  <div className="h-82 relative overflow-hidden">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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

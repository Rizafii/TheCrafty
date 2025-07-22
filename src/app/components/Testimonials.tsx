"use client";
import { useState } from "react";

function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Reza",
      role: "Customer",
      rating: 5,
      review:
        "Pernah custom di sini waktunya mepet poll tp adminnya baik bangettt diusahain dan bisa jadi sebelum deadlinenyaa!! Sukses selalu the crafty custom! 🥰",
      project: "Custom Pouch",
    },
    {
      id: 2,
      name: "Putri",
      role: "Customer",
      rating: 5,
      review:
        "Bisa custom totebag sesuai budgetkuuuu!! Mana diarahin bnyk pilihan dan model sama admin 🔥 terima kasih the crafty custom!",
      project: "Custom Totebag",
    },
    {
      id: 3,
      name: "Zoey",
      role: "Customer",
      rating: 5,
      review:
        "Kualitas totebagnya bagus banget, jahitan rapi, sablonnya keren 🤩 next aku order lagi dengan model lain ☺",
      project: "Custom Totebag",
    },
    {
      id: 4,
      name: "Kirana",
      role: "Customer",
      rating: 5,
      review:
        "Produksi sangar cepat, harga terjangkau, admin ramah. Mana dikasih tambahan totebag di luar jumlah pesanan! Nicee bgt! 😍",
      project: "Custom Totebag",
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star text-sm ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      ></i>
    ));
  };

  return (
    <div className="py-16 md:py-24  relative overflow-hidden" id="testimoni">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/60 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-100 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-gray-200 mb-6">
            <i className="fas fa-quote-left text-primary text-sm"></i>
            <span className="text-sm uppercase tracking-wider text-gray-600 font-medium sans">
              Testimoni
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light serif text-gray-900 mb-6 leading-tight">
            Apa Kata <span className="text-primary">Pelanggan</span> Kami?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed sans text-lg">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut testimoni
            dari mereka yang telah mempercayai layanan kami.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Main Testimonial */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-quote-left text-white text-lg"></i>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {renderStars(testimonials[activeTestimonial].rating)}
                </div>
                <span className="text-gray-600 text-sm font-medium">
                  {testimonials[activeTestimonial].rating}.0
                </span>
              </div>

              {/* Review */}
              <blockquote className="text-gray-700 leading-relaxed mb-8 text-lg italic">
                "{testimonials[activeTestimonial].review}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 sans">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial
                        ? "bg-primary/90 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  ></button>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <i className="fas fa-chevron-left text-gray-600 text-sm"></i>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                >
                  <i className="fas fa-chevron-right text-sm"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Stats & Other Testimonials */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
                <div className="text-3xl font-light serif text-gray-900 mb-2">
                  100+
                </div>
                <div className="text-gray-600 text-sm sans">
                  Happy Customers
                </div>
                <div className="flex justify-center mt-3">
                  <div className="flex gap-1">{renderStars(5)}</div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
                <div className="text-3xl font-light serif text-gray-900 mb-2">
                  4.9
                </div>
                <div className="text-gray-600 text-sm sans">Average Rating</div>
                <div className="flex justify-center mt-3">
                  <div className="flex gap-1">{renderStars(5)}</div>
                </div>
              </div>
            </div>

            {/* Mini Testimonials */}
            <div className="space-y-4">
              {testimonials
                .filter((_, index) => index !== activeTestimonial)
                .slice(0, 2)
                .map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="bg-white/70 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      setActiveTestimonial(testimonials.indexOf(testimonial))
                    }
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h5 className="font-semibold text-gray-900 text-sm sans">
                            {testimonial.name}
                          </h5>
                          <div className="flex gap-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                          {testimonial.review.substring(0, 80)}...
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

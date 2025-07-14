"use client";
import { useState } from "react";

function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Event Organizer",
      company: "Creative Events Co.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review:
        "Kualitas totebag yang kami pesan sangat memuaskan! Tim thecrafty.custom sangat profesional dan responsif. Hasil akhirnya melebihi ekspektasi kami.",
      project: "Custom Event Bags",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "Tech Startup Inc.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review:
        "Pengalaman bekerja sama dengan thecrafty.custom luar biasa. Proses dari konsultasi hingga pengiriman sangat smooth dan hasilnya berkualitas tinggi.",
      project: "Corporate Merchandise",
    },
    {
      id: 3,
      name: "Diana Putri",
      role: "Wedding Planner",
      company: "Elegant Weddings",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review:
        "Totebag untuk souvenir pernikahan klien kami mendapat pujian luar biasa. Desainnya elegan dan kualitas bahan sangat premium. Highly recommended!",
      project: "Wedding Favor Bags",
    },
    {
      id: 4,
      name: "Ahmad Rizky",
      role: "Brand Manager",
      company: "Local Fashion Brand",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review:
        "Sudah 3 kali order di thecrafty.custom dan selalu puas dengan hasilnya. Kualitas konsisten, harga kompetitif, dan pelayanan yang excellent.",
      project: "Brand Merchandise",
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
      <div className="absolute top-20 right-20 w-40 h-40 bg-yellow-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-100 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-gray-200 mb-6">
            <i className="fas fa-quote-left text-yellow-600 text-sm"></i>
            <span className="text-sm uppercase tracking-wider text-gray-600 font-medium sans">
              Testimoni
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light serif text-gray-900 mb-6 leading-tight">
            Apa Kata <span className="text-yellow-600">Pelanggan</span> Kami?
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
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
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
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-yellow-200"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 sans">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonials[activeTestimonial].role}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>

              {/* Project Tag */}
              <div className="absolute top-6 right-6">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                  {testimonials[activeTestimonial].project}
                </span>
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
                        ? "bg-yellow-500 w-8"
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
                  250+
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
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
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

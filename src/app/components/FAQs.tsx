"use client";
import { useState } from "react";

function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question:
        "Bisakah saya menggunakan foto pribadi untuk desain totebag custom?",
      answer:
        "Ya, Anda bisa menggunakan foto pribadi untuk desain totebag custom, asalkan foto tersebut memiliki kualitas resolusi tinggi agar hasil cetakan terlihat jelas dan tajam. Pastikan juga untuk memiliki hak cipta atau izin penggunaan foto tersebut.",
    },
    {
      id: 2,
      question: "Bagaimana cara memesan totebag custom?",
      answer:
        "Anda bisa memesan totebag custom dengan mengunjungi website atau toko yang menyediakan layanan custom, memilih desain atau mengunggah gambar yang ingin dipakai, menentukan jumlah dan ukuran, lalu melakukan pembayaran.",
    },
    {
      id: 3,
      question: "Berapa lama waktu pembuatan dan pengiriman totebag custom?",
      answer:
        "Waktu pembuatan dapat bervariasi, namun rata-rata memerlukan waktu antara 5 hingga 10 hari kerja tergantung jumlah pesanan dan tingkat kerumitan desain. Pengiriman akan memakan waktu tambahan, tergantung lokasi pengiriman.",
    },
    {
      id: 4,
      question: "Apakah bisa mengganti desain setelah melakukan pemesanan?",
      answer:
        "Biasanya, perubahan desain hanya dapat dilakukan sebelum proses produksi dimulai. Jika sudah dalam tahap produksi, perubahan mungkin sulit dilakukan. Oleh karena itu, pastikan desain sudah final sebelum memesan.",
    },
    {
      id: 5,
      question: "Bisakah saya membuat desain sendiri untuk totebag custom?",
      answer:
        "Ya, sebagian besar penyedia layanan custom totebag memungkinkan pelanggan untuk mengunggah desain sendiri. Anda dapat mengirimkan file desain dalam format yang diterima (misalnya .jpg, .png, .ai), dan tim akan mencetaknya sesuai dengan permintaan.",
    },
    {
      id: 6,
      question:
        "Apakah ada batasan dalam desain yang dapat dicetak di totebag custom?",
      answer:
        "Secara umum, tidak ada batasan yang signifikan dalam desain. Namun, desain yang terlalu rumit atau menggunakan banyak warna bisa mempengaruhi biaya produksi. Pastikan desain Anda sesuai dengan format yang dapat diproses oleh penyedia jasa.",
    },
    {
      id: 7,
      question: "Apakah ada diskon untuk pemesanan dalam jumlah besar?",
      answer:
        "Banyak penyedia layanan custom menawarkan diskon atau harga lebih murah untuk pemesanan dalam jumlah besar, seperti untuk acara perusahaan atau promosi. Pastikan untuk menanyakan hal ini saat melakukan pemesanan.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 md:py-24 relative overflow-hidden" id="faq">
      {/* Background Decorative Elements - Simplified */}
      <div className="absolute top-32 right-16 w-64 h-64 bg-yellow-100 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-16 w-48 h-48 bg-purple-100 rounded-full opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-gray-200 mb-6">
            <i className="fas fa-question-circle text-yellow-600 text-sm"></i>
            <span className="text-sm uppercase tracking-wider text-gray-600 font-medium sans">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light serif text-gray-900 mb-6 leading-tight">
            Menjawab<span className="text-yellow-600"> Pertanyaan </span>
            Kamu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed sans text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        {/* FAQ Accordion - Optimized */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white/70 rounded-2xl border border-white/50 shadow-lg overflow-hidden"
            >
              {/* Question Header */}
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 sans pr-4 leading-relaxed">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-white shadow-md">
                    <i
                      className={`fas fa-chevron-down text-sm transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    ></i>
                  </div>
                </div>
              </button>

              {/* Answer Content - Simplified Animation */}
              {openIndex === index && (
                <div className="px-8 pb-6 animate-fadeIn">
                  <div className="h-px bg-gradient-to-r from-gray-200 via-yellow-200 to-gray-200 mb-6"></div>
                  <p className="text-gray-600 leading-relaxed sans">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

export default FAQs;

function Hero() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-32" id="home">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Product Image */}
          <div className="relative">
            {/* Background Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="md:w-96 md:h-96 w-72 h-72  bg-yellow-100 rounded-full opacity-60"></div>
            </div>

            {/* Product Image Placeholder */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="md:w-64 animate-pulse w-44 h-60 md:h-80 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-lg font-bold mb-2">Kiehl's</div>
                  <div className="text-sm">DAILY REVIVING</div>
                  <div className="text-sm">CONCENTRATE</div>
                  <div className="text-xs mt-4">1.7 fl oz • 50 ml</div>
                </div>
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
                Produksi Totebag? Serahkan pada Ahlinya
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed max-w-md">
                Kami punya pengalaman bantu ratusan pelanggan custom produk
                dengan hasil memuaskan.
              </p>

              <button className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
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

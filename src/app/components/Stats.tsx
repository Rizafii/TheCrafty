function Stats() {
  return (
    <div className="px-6 md:px-12 py-16 md:py-20">
      <div className="grid md:grid-cols-3 gap-8 md:gap-8 max-w-7xl mx-auto">
        {/* Stat 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 group">
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
              <i className="fas fa-award text-primary text-xl"></i>
            </div>
            <div className="text-4xl md:text-5xl font-medium serif text-gray-900">
              3
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 sans mb-3">
            Tahun Berpengalaman
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed sans">
            kami telah membantu ratusan pelanggan mewujudkan produk custom yang
            unik dan berkualitas.
          </p>
        </div>

        {/* Stat 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 group">
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
              <i className="fas fa-briefcase text-blue-600 text-xl"></i>
            </div>
            <div className="text-4xl md:text-5xl font-medium serif text-gray-900">
              100+
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 sans mb-3">
            Layanan Dikerjakan
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed sans">
            Lebih dari 100 pesanan custom telah kami selesaikan
          </p>
        </div>

        {/* Stat 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 group">
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
              <i className="fas fa-heart text-green-600 text-xl"></i>
            </div>
            <div className="text-4xl md:text-5xl font-medium serif text-gray-900">
              98%
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 sans mb-3">
            Customer Puas
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed sans">
            Kami selalu mengutamakan kepuasan pelanggan, mulai dari konsultasi
            hingga produk sampai di tangan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;

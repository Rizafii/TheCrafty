function About() {
  return (
    <div className="py-16 md:py-24" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          {/* Left Side - Content */}
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-6">
              <div className="text-sm uppercase tracking-wider text-gray-500 font-medium sans">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                  <i className="fas fa-question text-primary text-sm"></i>
                  <span className="text-sm uppercase tracking-wider text-gray-600 font-medium sans">
                    TENTANG KAMI
                  </span>
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-light serif text-gray-900 leading-tight">
                Crafting Quality,
                <span className="text-primary"> Delivering Excellence</span>
              </h2>
              <p className="text-gray-600 leading-relaxed sans text-lg">
                Hai! Kami adalah Thecrafty.Custom, brand lokal yang hadir untuk
                kamu yang suka tampil beda lewat produk custom berkualitas.
                umumnya yang kami produksi adalah totebag, goodiebag, tas
                seminar, pouch dan lainnya yang terbuat dari bahan seperti
                kanvas. blacu, spunbond dan masih banyak bahan lagi, yang
                tentunya kami produksi sesuai dengan model dan desain dari
                permintaan customer kami dengan kualiatas bahan terbaik.
              </p>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="relative order-1 md:order-2">
            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="/about.jpg"
                alt="About us workspace"
                className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/30 rounded-full opacity-60 -z-10"></div>
            <div className="absolute bottom-20 -right-8 w-20 h-20 bg-blue-200 rounded-full opacity-60 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

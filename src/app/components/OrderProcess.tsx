function OrderProcess() {
  const steps = [
    {
      id: 1,
      title: "Hubungi Admin",
      description:
        "Mulai dengan menghubungi admin Thecrafty di nomor 0821-3354-7733. Tim kami siap membantu setiap hari kerja!",
      icon: "fa-phone",
      color: "blue",
    },
    {
      id: 2,
      title: "Konsultasi Desain & Ukuran",
      description:
        "Diskusikan ukuran, bahan, dan desain totebag yang kamu inginkan. Bebas eksplorasi ide dan request sesuai kebutuhanmu.",
      icon: "fa-palette",
      color: "purple",
    },
    {
      id: 3,
      title: "Sesuaikan dengan Budget",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      icon: "fa-calculator",
      color: "green",
    },
    {
      id: 4,
      title: "Lakukan Pembayaran",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      icon: "fa-credit-card",
      color: "yellow",
    },
    {
      id: 5,
      title: "Proses Produksi Dimulai!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      icon: "fa-cogs",
      color: "orange",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100",
        bgHover: "group-hover:bg-blue-200",
        icon: "text-blue-600",
        gradient: "from-blue-50 to-blue-100",
      },
      purple: {
        bg: "bg-purple-100",
        bgHover: "group-hover:bg-purple-200",
        icon: "text-purple-600",
        gradient: "from-purple-50 to-purple-100",
      },
      green: {
        bg: "bg-green-100",
        bgHover: "group-hover:bg-green-200",
        icon: "text-green-600",
        gradient: "from-green-50 to-green-100",
      },
      yellow: {
        bg: "bg-yellow-100",
        bgHover: "group-hover:bg-yellow-200",
        icon: "text-yellow-600",
        gradient: "from-yellow-50 to-yellow-100",
      },
      orange: {
        bg: "bg-orange-100",
        bgHover: "group-hover:bg-orange-200",
        icon: "text-orange-600",
        gradient: "from-orange-50 to-orange-100",
      },
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="py-16 md:py-24  relative overflow-hidden" id="order">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/30 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-6">
            <i className="fas fa-route text-primary text-sm"></i>
            <span className="text-sm uppercase tracking-wider text-gray-600 font-medium sans">
              Cara Memesan
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light serif text-gray-900 mb-6 leading-tight">
            Bagaimana Cara Melakukan
            <span className="text-primary"> Pesanan?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed sans text-lg">
            Proses pemesanan yang mudah dan transparan untuk mendapatkan totebag
            custom impianmu
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const colors = getColorClasses(step.color);

            return (
              <div key={step.id} className="group relative">
                {/* Connection Line - Desktop only */}
                {index < 2 && (
                  <div className="hidden lg:block absolute top-16 left-full w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent -translate-y-1/2 z-0"></div>
                )}

                {/* Step Card */}
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-gray-900 to-gray-700 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${colors.bg} ${colors.bgHover} rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-md`}
                  >
                    <i
                      className={`fas ${step.icon} ${colors.icon} text-xl`}
                    ></i>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 sans leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed sans text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Effect Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                  ></div>
                </div>
              </div>
            );
          })}

          {/* CTA Card as 6th Step */}
          <div className="group relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 relative z-10 text-white">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-yellow-500 to-primary text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                6
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-md group-hover:bg-white/30">
                <i className="fas fa-rocket text-white text-xl"></i>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white sans leading-tight">
                  Siap Memulai Pesananmu?
                </h3>
                <p className="text-white/80 leading-relaxed sans text-sm">
                  Hubungi tim kami sekarang dan wujudkan totebag custom
                  impianmu!
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 pt-4">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 text-sm">
                    <i className="fab fa-whatsapp text-green-600 text-lg"></i>
                    WhatsApp: 0821-3354-7733
                  </button>
                </div>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderProcess;

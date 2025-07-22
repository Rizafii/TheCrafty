function OurClients() {
  const clients = [
    {
      id: 1,
      name: "Bapenda Surakarta",
      logo: "https://i.imgur.com/HRYBlyH.png",
    },
    {
      id: 2,
      name: "Rosalia",
      logo: "https://i.imgur.com/C5iZtlO.png",
    },
    {
      id: 3,
      name: "UNS (Universitas Sebelas Maret)",
      logo: "https://i.imgur.com/BE2bTM0.png",
    },
    {
      id: 4,
      name: "Peradi",
      logo: "https://i.imgur.com/jIDXHww.png",
    },
    {
      id: 5,
      name: "Persis",
      logo: "https://i.imgur.com/Bslrs0m.png",
    },
    {
      id: 6,
      name: "Mangkunegaran",
      logo: "https://i.imgur.com/YrEpiaj.png",
    },
    {
      id: 7,
      name: "Pemkot Solo",
      logo: "https://i.imgur.com/3TrXJvJ.png",
    },
    {
      id: 8,
      name: "TATV",
      logo: "https://i.imgur.com/1MPMLK6.png",
    },
    {
      id: 9,
      name: "UNDIP",
      logo: "https://i.imgur.com/YdKc17a.png",
    },
  ];

  return (
    <div className=" py-16 md:py-24" id="client">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-6">
            <i className="fas fa-star text-primary text-sm"></i>
            <span className="text-sm uppercase tracking-wider text-gray-600 font-medium sans">
              Say Hi
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light serif text-gray-900 mb-6">
            Klien Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed sans">
            Kami bangga bisa menjadi bagian dari perjalanan mereka lewat produk
            custom yang personal dan berkualitas.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {clients.map((client) => (
              <div
                key={client.id}
                className="group transition-all duration-300 hover:scale-110"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-6 md:h-8 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurClients;

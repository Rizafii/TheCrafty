function OurClients() {
  const clients = [
    {
      id: 1,
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png",
    },
    {
      id: 2,
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    },
    {
      id: 3,
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png",
    },
    {
      id: 4,
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png",
    },
    {
      id: 5,
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png",
    },
    {
      id: 6,
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/512px-Spotify_icon.svg.png",
    },
    {
      id: 7,
      name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/524px-Adobe_Systems_logo_and_wordmark.svg.png",
    },
    {
      id: 8,
      name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/512px-Tesla_T_symbol.svg.png",
    },
    {
      id: 9,
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png",
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
            Dipercaya oleh berbagai brand ternama untuk memproduksi totebag dan
            merchandise berkualitas tinggi.
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

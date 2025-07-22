function Footer() {
  return (
    <footer
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden"
      id="contact"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-light serif">
                thecrafty.custom
              </h3>
              <p className="text-gray-300 leading-relaxed sans max-w-md">
                Brand lokal yang menghadirkan produk custom berkualitas tinggi.
                Dari totebag hingga merchandise, kami wujudkan ide kreatif Anda
                dengan sentuhan profesional.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/thecrafty.custom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
              >
                <i className="fab fa-instagram text-lg group-hover:text-pink-400 transition-colors duration-300"></i>
              </a>
              <a
                href="https://wa.me/6282133547733"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
              >
                <i className="fab fa-whatsapp text-lg group-hover:text-green-400 transition-colors duration-300"></i>
              </a>
              <a
                href="https://www.tiktok.com/@thecrafty.custom?_t=ZS-8y93n4f80AM&_r=1"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
              >
                <i className="fab fa-tiktok text-lg group-hover:text-black transition-colors duration-300"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold sans text-white mb-6">
              Hubungi Kami
            </h4>

            {/* Address */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                  <i className="fas fa-map-marker-alt text-yellow-400 text-sm"></i>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-1">
                    Alamat
                  </p>
                  <a
                    href="https://maps.app.goo.gl/Ekq43cTp1HgqETGk9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white sans hover:text-yellow-400 transition-colors duration-300"
                  >
                    Pasar Kliwon, Surakarta
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/30 transition-colors duration-300">
                  <i className="fab fa-instagram text-pink-400 text-sm"></i>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-1">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/thecrafty.custom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white sans hover:text-pink-400 transition-colors duration-300"
                  >
                    @thecrafty.custom
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors duration-300">
                  <i className="fab fa-whatsapp text-green-400 text-sm"></i>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-1">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/6282133547733"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white sans hover:text-green-400 transition-colors duration-300"
                  >
                    +62 821-3354-7733
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold sans text-white mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              <a
                href="#about"
                className="block text-gray-300 hover:text-white transition-colors duration-300 sans text-sm"
              >
                Tentang Kami
              </a>
              <a
                href="#portfolio"
                className="block text-gray-300 hover:text-white transition-colors duration-300 sans text-sm"
              >
                Portfolio
              </a>
              <a
                href="#order"
                className="block text-gray-300 hover:text-white transition-colors duration-300 sans text-sm"
              >
                Cara Pesan
              </a>
              <a
                href="#faq"
                className="block text-gray-300 hover:text-white transition-colors duration-300 sans text-sm"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/20 to-primary rounded-3xl p-8 md:p-12 text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-light serif text-white mb-4">
            Siap Berkolaborasi?
          </h3>
          <p className="text-white/80 mb-8 sans max-w-md mx-auto">
            Hubungi kami sekarang dan wujudkan ide kreatif Anda menjadi
            kenyataan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6282133547733"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg"
            >
              <i className="fab fa-whatsapp text-lg"></i>
              Chat WhatsApp
            </a>
            <a
              href="https://instagram.com/thecrafty.custom"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-2xl font-medium border border-black/20 hover:bg-white/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <i className="fab fa-instagram text-lg"></i>
              Follow Instagram
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm sans">
              © {new Date().getFullYear()} thecrafty.custom. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 sans"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 sans"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

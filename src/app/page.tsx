import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import OurClients from "./components/OurClients";
import Portfolio from "./components/Portfolio";
import OrderProcess from "./components/OrderProcess";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-white/20 to-yellow-50/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <OurClients />
      <Portfolio />
      <OrderProcess />
      <Testimonials />
      <FAQs />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

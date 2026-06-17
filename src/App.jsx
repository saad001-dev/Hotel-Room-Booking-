import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Removed useNavigate
import { MapPin, Star, ChevronRight } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Room from "./components/Room";
import About from "./components/About"; // ✅ Create this

const App = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const destinations = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500",
      name: "Luxury Suite Ocean View",
      address: "Main Road 123 Street, 23 Colony",
      price: 399,
      originalPrice: 599,
      isBestSeller: true,
      rating: 4.8,
      reviews: 234,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500",
      name: "Premium King Suite",
      address: "Main Road 123 Street, 23 Colony",
      price: 299,
      originalPrice: 499,
      isBestSeller: false,
      rating: 4.6,
      reviews: 189,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500",
      name: "Family Deluxe Room",
      address: "Main Road 12 Street, 23 Colony",
      price: 249,
      originalPrice: 399,
      isBestSeller: false,
      rating: 4.5,
      reviews: 156,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500",
      name: "Cozy Standard Room",
      address: "Main Road 123 Street, 23 Colony",
      price: 199,
      originalPrice: 299,
      isBestSeller: false,
      rating: 4.3,
      reviews: 98,
    },
  ];

  // ✅ Home Page Component
  const HomePage = () => {
    return (
      <>
        <Hero />
         {/* About Component */}
            <About />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="relative bg-black text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
            <div className="relative justify-center items-center flex  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
              <div className="text-center md:text-left md:max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Featured Destination
                </h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Discover our handpicked selection of exceptional properties
                  around the world, offering unparalleled luxury and
                  unforgettable experiences.
                </p>
              </div>
            </div>
           
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                  onMouseEnter={() => setHoveredCard(destination.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <a href={`/room/${destination.id}`} className="block">
                    <div
                      className="relative h-56 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${destination.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-semibold">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {destination.rating} ({destination.reviews})
                      </div>
                      {destination.isBestSeller && (
                        <div className="absolute top-4 right-4 z-10">
                          <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                            <Star className="w-3 h-3 fill-current" />
                            Best Seller
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
                        <div className="text-xs text-gray-500 line-through">
                          ${destination.originalPrice}
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                          ${destination.price}
                          <span className="text-xs font-normal text-gray-500">
                            /night
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {destination.name}
                      </h3>
                      <div className="flex items-start gap-1.5 text-gray-500 mb-4">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{destination.address}</span>
                      </div>
                      <button
                        className={`w-full py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                          hoveredCard === destination.id
                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                            : "bg-gray-100 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600"
                        }`}
                      >
                        View Details
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </a>
                </div>
              ))}
            </div>
           
          </div>
          <div className="border-t border-gray-200 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <p className="text-center text-sm text-gray-400">
                © 2025 Luxury Destinations. Unforgettable experiences await.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };

  // ✅ Routes defined with proper paths
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room" element={<Room />} />
        <Route path="/room/:id" element={<Room />} /> // ✅ Add this line
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </>
  );
};

export default App;

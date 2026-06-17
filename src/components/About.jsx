// src/components/About.jsx
import React from "react";

const About = () => {
  // Luxury stats data
  const stats = [
    { value: "15+", label: "Luxury Properties" },
    { value: "28k+", label: "Happy Guests" },
    { value: "12+", label: "5-Star Awards" },
    { value: "4.9", label: "Guest Rating" },
  ];

  // Amenities data
  const amenities = [
    { name: "Private Butler", icon: "🕶" },
    { name: "Infinity Pool", icon: "🏊" },
    { name: "Spa & Wellness", icon: "💆" },
    { name: "Michelin Dining", icon: "🍽️" },
    { name: "Concierge", icon: "🎫" },
    { name: "Valet Parking", icon: "🚗" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-stone-50 py-24 md:py-32">
      {/* Luxury Background Accents */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-stone-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header with Gold Accent */}
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-1.5 text-sm font-medium tracking-wide text-amber-700 shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Since 2012
          </div>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-stone-800 md:text-5xl lg:text-6xl">
            Where{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Luxury
            </span>{" "}
            Meets Comfort
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
            Experience unparalleled elegance and world-class hospitality at the
            world's most prestigious destinations. Every detail, meticulously
            crafted for the discerning traveler.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Left Column - Image with Gold Frame */}
          <div className="group relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 opacity-30 blur transition duration-500 group-hover:opacity-50" />
            <div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              style={{ height: "500px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Luxury hotel suite with ocean view"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            {/* Gold Accent Corner */}
            <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b-2 border-r-2 border-amber-400/60" />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="font-serif text-3xl font-semibold text-stone-800">
                Redefining the Art of Hospitality
              </h3>
              <p className="mt-4 text-stone-600 leading-relaxed">
                From the moment you step into our properties, you're enveloped
                in an atmosphere of refined elegance. Our dedicated team
                anticipates your every need, ensuring a stay that transcends
                ordinary travel.
              </p>
            </div>

            {/* Luxury Amenities Grid */}
            <div className="grid grid-cols-2 gap-4">
              {amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl border border-amber-100 bg-white/60 p-3 backdrop-blur-sm transition-all hover:border-amber-300 hover:shadow-md"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium text-stone-700">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Testimonial Mini */}
            <div className="mt-4 rounded-2xl bg-stone-800/5 p-6 italic">
              <div className="flex gap-1 text-amber-500">{"★".repeat(5)}</div>
              <p className="mt-2 text-stone-700">
                "The epitome of luxury. Every detail was perfect — from the
                champagne welcome to the breathtaking views. An unforgettable
                experience."
              </p>
              <p className="mt-3 text-sm font-semibold text-stone-800">
                — Victoria Hamilton, Travel + Leisure Editor
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 gap-8 border-y border-amber-100 py-12 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-amber-700 md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wide text-stone-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Signature CTA */}
        <div className="mt-16 text-center">
          <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-stone-800 to-stone-900 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-amber-200/30 hover:shadow-xl">
            <span className="relative z-10">Begin Your Journey</span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
          <p className="mt-4 text-sm text-stone-500">
            Complimentary champagne & early check-in for direct bookings
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

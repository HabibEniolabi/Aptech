import React from "react";
import { Car, MapPin, Clock, Shield } from "lucide-react";

const RidePage = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Fast Pickups",
      description: "Average pickup time of 5 minutes",
    },
    {
      icon: Shield,
      title: "Safety Features",
      description: "24/7 support and ride tracking",
    },
    {
      icon: MapPin,
      title: "Reliable Service",
      description: "Available in 70+ countries",
    },
  ];

  return (
    <main className="w-full bg-black">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-black py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-black tracking-tighter">
                  Uber Ride
                </h1>
                <p className="text-2xl text-white/70">
                  The most affordable, reliable way to get around.
                </p>
              </div>

              <p className="text-lg text-white/60 max-w-xl leading-relaxed">
                With Uber, you can request a ride in seconds, and our driver will handle the rest. Choose from a range of vehicle options to match your needs and budget.
              </p>

              <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Request a Ride
              </button>
            </div>

            {/* Image Placeholder */}
            <div className="relative h-96 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
              <Car size={120} className="text-blue-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-5xl font-black text-center mb-16">Why Choose Uber?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="inline-block p-3 bg-blue-500/20 rounded-lg mb-4">
                    <IconComponent size={28} className="text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-white/60">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ride Types */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-blue-900/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-5xl font-black text-center mb-16">Choose Your Ride</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {["UberX", "UberXL", "Uber Comfort", "Uber Premium"].map(
              (type) => (
                <div
                  key={type}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-blue-500/10 transition-all duration-300"
                >
                  <div className="w-full h-32 bg-white/5 rounded-lg mb-4 flex items-center justify-center">
                    <Car size={48} className="text-white/30" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{type}</h3>
                  <p className="text-white/60 text-sm mb-4">
                    Perfect for your needs
                  </p>
                  <button className="w-full px-4 py-2 border border-white/20 text-white rounded-lg hover:border-white/50 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default RidePage;
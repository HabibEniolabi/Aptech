import React from "react";
import { Utensils, Zap, MapPin } from "lucide-react";

const EatsPage = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Quick Delivery",
      description: "30 minutes or less, guaranteed",
    },
    {
      icon: Utensils,
      title: "Your Favorites",
      description: "From restaurants you love",
    },
    {
      icon: MapPin,
      title: "Reliable Service",
      description: "Track your order in real-time",
    },
  ];

  const menuItems = [
    "Burgers",
    "Pizza",
    "Asian",
    "Desserts",
    "Mexican",
    "Italian",
    "Sushi",
    "Vegetarian",
  ];

  return (
    <main className="w-full bg-black">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-black via-green-900/20 to-black py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-black tracking-tighter">
                  Uber Eats
                </h1>
                <p className="text-2xl text-white/70">
                  Your favorite food, delivered fast.
                </p>
              </div>

              <p className="text-lg text-white/60 max-w-xl leading-relaxed">
                Browse your favorite local restaurants and food delivery. Order
                online and get food delivered right to your door.
              </p>

              <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Order Now
              </button>
            </div>

            {/* Image Placeholder */}
            <div className="relative h-96 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl border border-green-500/30 flex items-center justify-center">
              <Utensils size={120} className="text-green-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-5xl font-black text-center mb-16">
            Why Uber Eats?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="inline-block p-3 bg-green-500/20 rounded-lg mb-4">
                    <IconComponent size={28} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-white/60">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Restaurant Categories */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-green-900/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-5xl font-black text-center mb-16">
            Browse Restaurants
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {menuItems.map((category) => (
              <div
                key={category}
                className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-green-500/10 transition-all duration-300 cursor-pointer"
              >
                <div className="w-full h-24 bg-white/5 rounded-lg mb-4 flex items-center justify-center">
                  <Utensils size={40} className="text-white/30" />
                </div>
                <h3 className="text-xl font-bold">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center space-y-6">
          <h2 className="text-5xl font-black">Hungry?</h2>
          <p className="text-xl text-white/60">
            Order from your favorite restaurants and get food delivered in
            minutes.
          </p>
          <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Download Uber Eats App
          </button>
        </div>
      </section>
    </main>
  );
};

export default EatsPage;

import React from "react";
import {
  Car,
  Bike,
  Utensils,
  Briefcase,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
  const features = [
    {
      icon: Car,
      title: "Uber",
      description: "Ride with us. Premium rides at the tap of a button.",
      link: "/ride",
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
    },
    {
      icon: Bike,
      title: "Uber Drive",
      description: "Be your own boss and earn on your own terms.",
      link: "/drive",
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
    },
    {
      icon: Utensils,
      title: "Uber Eats",
      description: "Your favorite food, delivered to your door.",
      link: "/eats",
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
    },
    {
      icon: Briefcase,
      title: "Uber Business",
      description: "Manage mobility for your business.",
      link: "/business",
      color: "from-orange-500/20 to-orange-600/20",
      borderColor: "border-orange-500/30",
    },
  ];
  const stats = [
    { value: "70+", label: "Countries" },
    { value: "6M+", label: "Active Users" },
    { value: "1M+", label: "Drivers" },
    { value: "24/7", label: "Customer Support" },
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-black tracking-tight">
            Explore Uber <span className="text-white/50">Services</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            From rides to food delivery, we have everything you need.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Link key={index} to={feature.link} className="group relative">
                <div
                  className={`h-full bg-gradient-to-br ${feature.color} backdrop-blur-sm border ${feature.borderColor} rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden`}
                >
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent"></div>

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Icon */}
                    <div className="inline-block p-4 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors duration-300">
                      <IconComponent size={32} className="text-white" />
                    </div>

                    {/* Text */}
                    <div className="space-y-3">
                      <h3 className="text-3xl font-bold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300 pt-4">
                      <span>Learn More</span>
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <p className="text-4xl lg:text-5xl font-black text-white">
                  {stat.value}
                </p>
                <p className="text-white/60 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center space-y-6">
          <h3 className="text-4xl lg:text-5xl font-black">Ready to move?</h3>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Download the Uber app and start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Download App
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          .group {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;

import React from "react";
import { TrendingUp, DollarSign, Users } from "lucide-react";

const DrivePage = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn More",
      description: "Competitive rates with flexible earnings",
    },
    {
      icon: TrendingUp,
      title: "Be Your Boss",
      description: "Work when you want, where you want",
    },
    {
      icon: Users,
      title: "Join a Community",
      description: "Connect with millions of drivers",
    },
  ];

  const journeySteps = [
    { step: "1", title: "Sign Up", desc: "Create your Uber driver account" },
    {
      step: "2",
      title: "Get Verified",
      desc: "Complete background checks",
    },
    {
      step: "3",
      title: "Start Earning",
      desc: "Get requests and start earning",
    },
  ];

  return (
    <main className="w-full bg-black">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-black tracking-tighter">
                  Drive with Uber
                </h1>
                <p className="text-2xl text-white/70">
                  Earn money on your own schedule.
                </p>
              </div>

              <p className="text-lg text-white/60 max-w-xl leading-relaxed">
                Be flexible with your time and use your own car to earn
                supplementary income. With Uber, you're in complete control of
                your schedule.
              </p>

              <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Become a Driver
              </button>
            </div>

            {/* Image Placeholder */}
            <div className="relative h-96 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30 flex items-center justify-center">
              <TrendingUp size={120} className="text-purple-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-5xl font-black text-center mb-16">
            Driver Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="inline-block p-3 bg-purple-500/20 rounded-lg mb-4">
                    <IconComponent size={28} className="text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-white/60">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-5xl font-black text-center mb-16">
            Getting Started
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journeySteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-block w-16 h-16 bg-purple-500/20 border-2 border-purple-500 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl font-black text-purple-400">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all duration-300">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DrivePage;

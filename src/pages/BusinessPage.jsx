import React from "react";
import { Briefcase, BarChart, Users } from "lucide-react";

const BusinessPage = () => {
  const benefits = [
    {
      icon: BarChart,
      title: "Save on Costs",
      description: "Volume discounts and corporate rates",
    },
    {
      icon: Users,
      title: "Manage Teams",
      description: "Centralized expense tracking",
    },
    {
      icon: Briefcase,
      title: "Professional Service",
      description: "Dedicated account management",
    },
  ];

  const features = [
    {
      title: "Ride Management",
      desc: "Manage all your company rides in one place",
    },
    {
      title: "Expense Reports",
      desc: "Automated expense tracking and reporting",
    },
    {
      title: "Budget Controls",
      desc: "Set spending limits and manage budgets",
    },
    {
      title: "Analytics",
      desc: "Get insights into your mobility spending",
    },
  ];

  return (
    <main className="w-full bg-black">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-black via-orange-900/20 to-black py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-black tracking-tighter">
                  Uber for Business
                </h1>
                <p className="text-2xl text-white/70">
                  Manage mobility for your company.
                </p>
              </div>

              <p className="text-lg text-white/60 max-w-xl leading-relaxed">
                Simplify your company's transportation with Uber's business
                solutions. Get volume discounts, expense tracking, and dedicated
                support.
              </p>

              <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Image Placeholder */}
            <div className="relative h-96 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl border border-orange-500/30 flex items-center justify-center">
              <Briefcase size={120} className="text-orange-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-5xl font-black text-center mb-16">
            Business Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="inline-block p-3 bg-orange-500/20 rounded-lg mb-4">
                    <IconComponent size={28} className="text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-white/60">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-orange-900/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-5xl font-black text-center mb-16">Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-orange-500/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center space-y-6">
          <h2 className="text-5xl font-black">Ready to streamline mobility?</h2>
          <p className="text-xl text-white/60">
            Contact our business team to learn more about corporate solutions.
          </p>
          <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Contact Sales
          </button>
        </div>
      </section>
    </main>
  );
};

export default BusinessPage;

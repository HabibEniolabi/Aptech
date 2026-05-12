import React from "react";
import { Heart, Globe, Users, Zap, TrendingUp, Award } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Making a difference in communities worldwide",
    },
    {
      icon: Users,
      title: "Driver Community",
      description: "Supporting millions of drivers and delivery partners",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously improving our technology and services",
    },
  ];

  const milestones = [
    { year: "2009", event: "Uber founded in San Francisco" },
    { year: "2011", event: "Expanded to New York City" },
    { year: "2014", event: "Launched Uber Eats" },
    { year: "2016", event: "Reached 60+ countries" },
    { year: "2020", event: "1 Million drivers and couriers" },
    { year: "2024", event: "Leading mobility platform globally" },
  ];

  const stats = [
    { number: "70+", label: "Countries Operating" },
    { number: "1M+", label: "Active Drivers" },
    { number: "100M+", label: "Monthly Active Users" },
    { number: "6M+", label: "Restaurant Partners" },
  ];

  const members = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <main className="w-full bg-black">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 lg:py-32 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="space-y-8 text-center max-w-3xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-black tracking-tighter">
                About Uber
              </h1>
              <p className="text-2xl text-white/70">
                Reimagining the way the world moves, eats, and works.
              </p>
            </div>

            <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              Founded in 2009, Uber has grown into a global technology platform
              that connects people with reliable transportation, fresh food, and
              professional services. Our mission is to ignite opportunity by
              setting the world in motion.
            </p>

            <div className="pt-8">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Explore Our Mission
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-black">Our Mission</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-white to-white/50"></div>
              </div>

              <p className="text-lg text-white/70 leading-relaxed">
                Ignite opportunity by setting the world in motion. We're
                building technology that empowers people—from rideshare and food
                delivery to freight logistics. By connecting supply and demand,
                we create economic opportunities for drivers, couriers,
                restaurants, and customers worldwide.
              </p>

              <div className="space-y-4 pt-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/70">
                    Empowering millions to earn on their own terms
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/70">
                    Connecting people with reliable services
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/70">
                    Advancing sustainable mobility solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-black">Our Vision</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-white to-white/50"></div>
              </div>

              <p className="text-lg text-white/70 leading-relaxed">
                To be the most reliable, affordable, and convenient platform in
                the world. We envision a future where everyone has access to
                safe, affordable, and convenient transportation and food
                services, regardless of where they live.
              </p>

              <div className="space-y-4 pt-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/70">
                    Technology-driven solutions for everyday needs
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/70">
                    Global presence with local expertise
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/70">
                    Commitment to sustainability and social impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl lg:text-6xl font-black">Our Core Values</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="inline-block p-4 bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors duration-300">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl lg:text-6xl font-black">Our Journey</h2>
            <p className="text-xl text-white/60">
              From startup to global platform
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-8 items-center group"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-4xl font-black text-white/30 group-hover:text-white/60 transition-colors duration-300">
                    {milestone.year}
                  </span>
                </div>
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-4 h-4 bg-white rounded-full mb-2 group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="w-1 h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
                </div>
                <div className="flex-grow bg-white/5 border border-white/10 rounded-lg p-6 group-hover:bg-white/10 transition-all duration-300">
                  <p className="text-lg text-white font-semibold">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-12 lg:p-16">
            <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">
              By The Numbers
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-3">
                  <p className="text-5xl lg:text-6xl font-black text-white">
                    {stat.number}
                  </p>
                  <p className="text-white/70 text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl lg:text-6xl font-black">Our Team</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Diverse talent from around the world working towards one mission
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {members.map((member) => (
              <div key={member} className="space-y-4 text-center">
                <div className="w-full aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 flex items-center justify-center hover:border-white/30 transition-all duration-300">
                  <Users size={48} className="text-white/30" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-white">Team Member</p>
                  <p className="text-sm text-white/60">Role Title</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center space-y-8">
          <h2 className="text-5xl lg:text-6xl font-black">Join Our Journey</h2>
          <p className="text-xl text-white/60">
            We're always looking for talented individuals to help us move the
            world forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              View Careers
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
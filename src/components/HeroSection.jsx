// import { ChevronDown, Clock3, MapPin, Navigation } from "lucide-react";
// import React, { useState } from "react";
// import uber from "../assets/images/uber.png";

// const HeroSection = () => {
//   const [pickupLocation, setPickupLocation] = useState("");
//   const [dropOffLocation, setDropOffLocation] = useState(""); 

//   function handlePick() {
//     alert("You're about to be picked Up from your location")
//   }
//   function handleDrop() {
//     alert("Destination set to be drop off")
//   }
//   return (
//     <section className="flex items-center justify-between">
//       <div className="flex w-1/2 max-w-[560px] flex-col gap-6">
//         <div className="flex items-center gap-2 text-sm">
//           <div className="flex items-center gap-1">
//             <MapPin size={18} fill="#000000" className="text-black" />
//             <span className="font-bold text-black">Lagos, NG</span>
//           </div>
//           <button className="underline transition hover:bg-black/5">
//             Change city
//           </button>
//         </div>

//         <h1 className="text-5xl font-bold leading-tight text-black">
//           Go anywhere with Uber
//         </h1>

//         <div className="flex flex-col gap-4">
//           <button className="flex w-fit items-center justify-between gap-6 rounded-full bg-black/10 px-4 py-3">
//             <span className="flex items-center gap-2">
//               <Clock3 size={16} className="text-black" />
//               <span className="font-bold text-black">Pickup now</span>
//             </span>
//             <ChevronDown size={16} className="text-black" />
//           </button>

//           <div className="relative flex max-w-[520px] flex-col gap-4">
//             <div className="absolute left-[32px] top-[40px] h-[96px] w-[2px] bg-black" />

//             <div className="relative flex h-[84px] items-center rounded-[18px] bg-black/5 px-5">
//               <div className="mr-5 flex w-[30px] items-center justify-center">
//                 <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black">
//                   <div className="h-1.5 w-1.5 rounded-full bg-white" />
//                 </div>
//               </div>

//               <input
//                 type="text"
//                 value={pickupLocation}
//                 onChange={setPickupLocation}
//                 onClick={handlePick}
//                 placeholder="Pickup location"
//                 className="w-full bg-transparent pr-12 text-[20px] text-black placeholder:text-black/60 focus:outline-none"
//               />

//               <button className="ml-4">
//                 <Navigation size={18} fill="#000000" className="text-black" />
//               </button>
//             </div>

//             <div className="relative flex h-[84px] items-center rounded-[18px] bg-black/5 px-5">
//               <div className="mr-5 flex w-[30px] items-center justify-center">
//                 <div className="flex h-5 w-5 items-center justify-center bg-black">
//                   <div className="h-1.5 w-1.5 bg-white" />
//                 </div>
//               </div>

//               <input
//                 type="text"
//                 value={dropOffLocation}
//                 onChange={setDropOffLocation}
//                 onClick={handleDrop}
//                 placeholder="Dropoff location"
//                 className="w-full bg-transparent text-[20px] text-black placeholder:text-black/60 focus:outline-none"
//               />
//             </div>
//           </div>

//           <div className="mt-2 flex items-center gap-4">
//             <button className="rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-black/90">
//               See prices
//             </button>
//             <button className="border-b border-black/30 pb-1 text-[18px] font-medium text-black transition hover:border-black">
//               Log in to see your recent activity
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="relative flex w-1/2 justify-center">
//         <img
//           src={uber}
//           alt="Uber travel"
//           className="w-[520px] rounded-[12px] object-cover"
//         />

//         <div className="absolute bottom-6 left-1/2 flex w-[420px] -translate-x-1/2 items-center justify-between rounded-[22px] bg-[#B97868] px-6 py-5">
//           <div className="text-[18px] font-semibold text-white">
//             Ready to travel?
//           </div>

//           <button className="cursor-pointer rounded-full bg-white px-6 py-4 text-[16px] font-semibold text-black hover:bg-black/5">
//             Schedule ahead
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (pickupLocation && dropoffLocation) {
      console.log("Searching for ride:", { pickupLocation, dropoffLocation });
      // Route to ride booking page
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90">
        <div className="absolute inset-0">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:60px_60px] animate-pulse"></div>

          {/* Gradient Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-tight">
                Go{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-white to-white/50 blur opacity-75 group-hover:opacity-100 duration-1000 animate-pulse"></span>
                  <span className="relative text-white">Anywhere</span>
                </span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed max-w-md">
                Request a ride, get moving. In minutes, you'll be heading in the direction of your dreams.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Request a Ride
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 space-y-3 text-sm text-white/60">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Drive in 70+ countries and regions
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                24/7 customer support in your language
              </p>
            </div>
          </div>

          {/* Right Content - Booking Card */}
          <div className="animate-fadeInDown">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-6">Request a ride now</h3>

              <form onSubmit={handleSearch} className="space-y-4">
                {/* Pickup Location */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-white/70 mb-2">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin
                      size={18}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50"
                    />
                    <input
                      type="text"
                      placeholder="Enter pickup location"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Dropoff Location */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-white/70 mb-2">
                    Dropoff Location
                  </label>
                  <div className="relative">
                    <MapPin
                      size={18}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50"
                    />
                    <input
                      type="text"
                      placeholder="Enter dropoff location"
                      value={dropoffLocation}
                      onChange={(e) => setDropoffLocation(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 mt-6"
                >
                  Find a Ride
                </button>
              </form>

              {/* Ride Options */}
              <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
                <p className="text-xs uppercase tracking-widest text-white/50 font-semibold">
                  Ride Options
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["UberX", "UberXL", "Uber Comfort", "Uber Premium"].map(
                    (option) => (
                      <button
                        key={option}
                        className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium transition-all duration-200 hover:border-white/30"
                      >
                        {option}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out forwards 0.2s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
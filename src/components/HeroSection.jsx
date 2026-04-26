// import { ChevronDown, Clock3, MapPin, Navigation } from "lucide-react";
// import React from "react";
// import uber from "../assets/images/uber.png";

// const HeroSection = () => {
//   return (
//     <section className="flex items-center justify-between">
//       <div className="flex w-1/2 flex-col gap-5">
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

//         <div className="flex flex-col gap-4 max-w-[520px]">
//           <button className="flex w-fit items-center justify-between gap-6 rounded-full bg-black/10 px-4 py-3">
//             <span className="flex items-center gap-2">
//               <Clock3 size={16} className="text-black" />
//               <span className="font-bold text-black">Pickup now</span>
//             </span>
//             <ChevronDown size={16} className="text-black" />
//           </button>

//           <div className="relative flex flex-col gap-4">
//             <div className="absolute left-[24px] top-[28px] h-[94px] w-[2px] bg-black" />

//             <div className="relative flex items-center rounded-[12px] bg-black/5 px-3 py-4">
//               <div className="mr-5 flex w-[30px] items-center justify-center">
//                 <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black">
//                   <div className="h-1.5 w-1.5 rounded-full bg-white" />
//                 </div>
//               </div>

//               <input
//                 type="text"
//                 placeholder="Pickup location"
//                 className="w-full bg-transparent pr-12 text-2xl text-black placeholder:text-black/60 focus:outline-none"
//               />

//               <button className="ml-4">
//                 <Navigation size={18} fill="#000000" className="text-black" />
//               </button>
//             </div>

//             <div className="relative flex items-center rounded-[12px] bg-black/5 px-3 py-4">
//               <div className="mr-5 flex w-[30px] items-center justify-center">
//                 <div className="flex h-5 w-5 items-center justify-center bg-black">
//                   <div className="h-1.5 w-1.5 bg-white" />
//                 </div>
//               </div>

//               <input
//                 type="text"
//                 placeholder="Dropoff location"
//                 className="w-full bg-transparent text-2xl text-black placeholder:text-black/60 focus:outline-none"
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
//       <div className="relative w-1/2 flex justify-center">
//         <img
//           src={uber}
//           alt="Uber travel"
//           className="w-[520px] rounded-[12px] object-cover"
//         />

//         <div className="absolute bottom-6 left-1/2 flex w-[420px] -translate-x-1/2 items-center justify-between rounded-[22px] bg-[#B97868] px-6 py-5">
//           <div className="text-white text-[18px] font-semibold">
//             Ready to travel?
//           </div>

//           <button className="rounded-full hover:bg-dark-5 bg-white px-6 py-4 text-[16px] font-semibold text-black cursor-pointer">
//             Schedule ahead
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import { ChevronDown, Clock3, MapPin, Navigation } from "lucide-react";
import React from "react";
import uber from "../assets/images/uber.png";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex w-1/2 max-w-[560px] flex-col gap-6">
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1">
            <MapPin size={18} fill="#000000" className="text-black" />
            <span className="font-bold text-black">Lagos, NG</span>
          </div>
          <button className="underline transition hover:bg-black/5">
            Change city
          </button>
        </div>

        <h1 className="text-5xl font-bold leading-tight text-black">
          Go anywhere with Uber
        </h1>

        <div className="flex flex-col gap-4">
          <button className="flex w-fit items-center justify-between gap-6 rounded-full bg-black/10 px-4 py-3">
            <span className="flex items-center gap-2">
              <Clock3 size={16} className="text-black" />
              <span className="font-bold text-black">Pickup now</span>
            </span>
            <ChevronDown size={16} className="text-black" />
          </button>

          <div className="relative flex max-w-[520px] flex-col gap-4">
            <div className="absolute left-[32px] top-[40px] h-[96px] w-[2px] bg-black" />

            <div className="relative flex h-[84px] items-center rounded-[18px] bg-black/5 px-5">
              <div className="mr-5 flex w-[30px] items-center justify-center">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>
              </div>

              <input
                type="text"
                placeholder="Pickup location"
                className="w-full bg-transparent pr-12 text-[20px] text-black placeholder:text-black/60 focus:outline-none"
              />

              <button className="ml-4">
                <Navigation size={18} fill="#000000" className="text-black" />
              </button>
            </div>

            <div className="relative flex h-[84px] items-center rounded-[18px] bg-black/5 px-5">
              <div className="mr-5 flex w-[30px] items-center justify-center">
                <div className="flex h-5 w-5 items-center justify-center bg-black">
                  <div className="h-1.5 w-1.5 bg-white" />
                </div>
              </div>

              <input
                type="text"
                placeholder="Dropoff location"
                className="w-full bg-transparent text-[20px] text-black placeholder:text-black/60 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-2 flex items-center gap-4">
            <button className="rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-black/90">
              See prices
            </button>
            <button className="border-b border-black/30 pb-1 text-[18px] font-medium text-black transition hover:border-black">
              Log in to see your recent activity
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex w-1/2 justify-center">
        <img
          src={uber}
          alt="Uber travel"
          className="w-[520px] rounded-[12px] object-cover"
        />

        <div className="absolute bottom-6 left-1/2 flex w-[420px] -translate-x-1/2 items-center justify-between rounded-[22px] bg-[#B97868] px-6 py-5">
          <div className="text-[18px] font-semibold text-white">
            Ready to travel?
          </div>

          <button className="cursor-pointer rounded-full bg-white px-6 py-4 text-[16px] font-semibold text-black hover:bg-black/5">
            Schedule ahead
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
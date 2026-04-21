import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[url('/images/gray.jpeg')] bg-cover bg-center bg-no-repeat px-[10%] py-[60px]">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(239,237,237,0.5)] to-[rgba(140,135,135,0.5)]" />

      <header className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-[10%] py-5">
        <h2 className="font-lorimer-black text-[22px] font-bold tracking-[2px] text-[#444]">
          Starboy Sounds
        </h2>
      </header>

      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-between gap-[60px] lg:flex-row">
        <div className="flex max-w-[600px] flex-col gap-10 text-center lg:text-left">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-[50px]">
            <div className="album">
              <img
                src="/images/Wizkid_MIL_Deluxe.webp"
                alt="Album"
                className="w-[220px] animate-float rounded-xl border-2 border-white object-cover shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition duration-300 ease-in-out hover:scale-[1.08] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
              />
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <h1 className="font-['Trebuchet_MS'] text-[42px] font-bold text-[#444] md:text-[55px]">
                Wizkid
              </h1>

              <h3 className="font-['Segoe_UI'] text-[22px] font-light text-[#777] md:text-[28px]">
                Ayo Balogun
              </h3>

              <button className="mt-5 rounded-lg bg-[#5b5b5b] px-[35px] py-[14px] font-['Segoe_UI'] text-base text-white shadow-[0_8px_15px_rgba(0,0,0,0.15)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(99,102,241,0.5)]">
                Play Song
              </button>
            </div>
          </div>

          <p className="font-['Courier_New'] text-base leading-[1.7] opacity-85 md:text-[18px]">
            Wizkid (Ayodeji Ibrahim Balogun) is a Nigerian Afrobeats superstar
            born on July 16, 1990, in Lagos. He rose to fame in 2010 with his
            hit song Holla at Your Boy from the album Superstar. Known for his
            smooth vocals and global collaborations, Wizkid helped bring
            Afrobeats to global audiences and won a Grammy Award for his
            collaboration on Brown Skin Girl.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/Picture frame.jpeg"
            alt="Wizkid"
            className="w-[260px] rounded-[10px] object-cover md:w-[350px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
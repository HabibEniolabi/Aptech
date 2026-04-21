import React from "react";
import HeroSection from "../components/HeroSection";
import AlbumCard from "../components/AlbumCard";
import { releases } from "../data/releases";

const WizkidFanPage = () => {
  return (
    <main className="w-full">
      <HeroSection />

      <section className="flex flex-col gap-12 bg-[#1c1c1c] px-[10%] py-20">
        <h1 className="text-center font-['Trebuchet_MS'] text-3xl font-bold uppercase text-[#f1ebdf] md:text-4xl">
          Latest Releases
        </h1>

        {releases.map((release, index) => (
          <AlbumCard key={index} {...release} />
        ))}
      </section>
    </main>
  );
};

export default WizkidFanPage;
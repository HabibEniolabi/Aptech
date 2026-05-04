import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const UberPage = () => {
  return (
    <main className="w-full">
      <Navbar />
      <div className="px-10 py-12">
        <HeroSection />
      </div>
    </main>
  );
};

export default UberPage;
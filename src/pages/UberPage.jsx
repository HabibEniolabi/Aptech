import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Crud from "../components/Crud";

const UberPage = () => {
  return (
    <main className="w-full">
      <Navbar />
      <div className="px-10 py-12">
        <HeroSection />
        <Crud />
      </div>
    </main>
  );
};

export default UberPage;
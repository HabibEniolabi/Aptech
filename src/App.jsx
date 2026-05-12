import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UberPage from "./pages/UberPage";
import RidePage from "./pages/RidePage";
import DrivePage from "./pages/DrivePage";
import EatsPage from "./pages/EatsPage";
import BusinessPage from "./pages/BusinessPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<UberPage />} />
          <Route path="/ride" element={<RidePage />} />
          <Route path="/drive" element={<DrivePage />} />
          <Route path="/eats" element={<EatsPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

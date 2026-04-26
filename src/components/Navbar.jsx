import { Globe } from "lucide-react";
import React from "react";

const navLink = ["Ride", "Drive", "Uber Eats", "Business", "About"];

const Navbar = () => {
  return (
    <header className="w-full bg-black text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-bold tracking-tight">
            Uber
          </a>
          <div className="flex gap-6 items-center md:flex">
            {navLink.map((item, index) => (
              <a
                href="#"
                className="text-sm font-medium text-white/90 transition hover:text-white cursor-pointer"
                key={index}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <button className="flex gap-2 items-center font-medium rounded-full px-3 py-2">
          <Globe size={16} />
            <a
              href="#"
              className="text-sm font-medium text-white/90 cursor-pointer"
            >
              EN
            </a>
          </button>
          <a
            href="#"
            className="text-sm font-medium text-white/90 cursor-pointer"
          >
            Help
          </a>
          <a
            href="#"
            className="text-sm font-medium text-white/90 cursor-pointer"
          >
            Log in
          </a>
          <button className="text-black text-sm bg-white px-3 py-2 rounded-full font-bold cursor-pointer">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

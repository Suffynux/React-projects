import React, { useState } from "react";
import "./App.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [model, showModel] = useState(false)

  return (
    <>
    <button className="enquireBtn rounded-lg bg-red-500" onClick={()=>showModel(!model)}>Enquire Now</button>
    <div className={`modelDelay ${model ? "modelView" : ""}`}></div>
    <div className={`model ${model ? "showModelDiv" : ""}`}>
      <h3 className="text-center">Enquire Now <span className="hover" onClick={()=>showModel(!model)}>&times;</span></h3>
    </div>
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MySite</h1>

        {/* Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Simple Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2">
          <li><a href="#" className="block hover:underline">Home</a></li>
          <li><a href="#" className="block hover:underline">About</a></li>
          <li><a href="#" className="block hover:underline">Contact</a></li>
        </ul>
      )}
    </nav>
    </>
  );
}

export default Navbar;

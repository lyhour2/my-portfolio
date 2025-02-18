import React  from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/HeroSection";


export default function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto p-5">
        <Navbar/>
        <Herosection/>

      </div>
    </div>
  )
}
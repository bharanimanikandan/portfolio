import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed w-full flex items-center justify-between bg-bg">
      <div className="ml-7 mt-8">
        <img src={logo} alt="" style={{ width: "150px", height: "40px" }} />
      </div>
      <div className="flex items-center mt-5 mr-16 gap-20 font-semibold text-lg">
      <a href="#home" className="text-slate-300 hover:scale-110 font-montserrat font-normal group">
          Home
          <div class="bg-amber-600 h-[2px] w-0  group-hover:w-full transition-all  duration-500"></div>
        </a>
        <a href="#about" className="text-slate-300 hover:scale-110 font-montserrat font-normal group">
          About
          <div class="bg-amber-600 h-[2px] w-0  group-hover:w-full transition-all  duration-500"></div>
        </a>
        <a href="#skills" className="text-slate-300 hover:scale-110 font-montserrat font-normal group " >
          Skills
          <div class="bg-amber-600 h-[2px] w-0  group-hover:w-full transition-all  duration-500"></div>
          </a>
        <a href="#projects" className="text-slate-300 hover:scale-110 font-montserrat font-normal group">
          Projects
          <div class="bg-amber-600 h-[2px] w-0  group-hover:w-full transition-all  duration-500"></div>
          </a>
        <a href="#contact" className="text-slate-300 hover:scale-110 font-montserrat font-normal group" >
          Contact
          <div class="bg-amber-600 h-[2px] w-0  group-hover:w-full transition-all  duration-500"></div>
          </a>
      </div>
    </nav>
  );
}

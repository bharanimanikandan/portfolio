import React from "react";
import profileImage from "../assets/hero.png";
import resume from '../assets/resume.pdf'

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col bg-bg">
      <div className="text-center">
        <img src={profileImage} alt="Profile" className="w-60 h-60 rounded-full mx-auto mb-4 mt-28 shadow-lg
                     ring-2 ring-violet-800 dark:ring-violet-800
                     transition duration-500 ease-in-out transform hover:scale-105"/>

        <h1 className="text-7xl mt-5 font-montserrat font-bold text-transparent bg-clip-text
                       bg-gradient-to-r from-linear1 to-linear
                       animate-pulse" > I'm Bharanimanikandan</h1>

        <h4 className="text-4xl font-montserrat font-bold text-transparent bg-clip-text
                       bg-gradient-to-r from-linear1 to-linear">Full Stack Developer</h4>
          
        <p className="w-8/12 text-xl font-montserrat px-28 mx-52 mt-8 mb-4 ml-64 text-white">
          💡As a dedicated Full Stack Developer, I'm enthusiastic about applying
          my knowledge and skills to real-world challenges. Let's connect and
          explore the endless possibilities of coding together! 🌐
        </p>

        <div className="flex justify-center gap-8">
          <a href="#contact"
            className="overflow-y-auto scroll-smooth mt-6 p-2 bg-gradient-to-r from-linear1 to-linear font-semibold text-white border rounded-full px-5 py-3 hover:scale-105 transition-transform duration-300">
            Connect With Me...📧</a>
          <a href={resume} download className="mt-6 p-2 text-white border rounded-full px-5 py-3 hover:scale-105 transition-transform duration-300">
            Resume📄
          </a>
        </div>
      </div>
    </section>
  );
}

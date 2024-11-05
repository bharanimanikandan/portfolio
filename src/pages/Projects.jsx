import React from 'react';
import CardGame from '../assets/ben 10.png'
import ExpenseTracker from '../assets/trackify.png'
import TravelLanding from '../assets/travel.png'
import MovieSearchApp from '../assets/movie.png'
import Cart from '../assets/cart.png'
import AppleLanding from '../assets/apple.png'


export default function Projects() {
  return (
    <section id="projects" className="p-8 bg-slate-200"><hr />
      <h2 className="text-5xl text-slate-800 font-extrabold font-montserrat text-center mt-20">Projects💻</h2>
      <div className='grid grid-cols-3 w-8/12 ml-60 gap-5 mt-5 mb-10 '>
      {/* Card Game */}
        <div className="mt-4 grid gap-4 border rounded-md bg-slate-900 hover:scale-105 hover:animate-pulse">
            <div className="p-4 rounded-lg">
              <img src={CardGame} alt="" className='rounded-md'/>
              <h3 className="text-2xl font-montserrat font-bold text-transparent text-center mt-2 bg-clip-text
                       bg-gradient-to-r from-linear1 to-linear">Memory Game</h3>
              <div className="flex justify-between mt-2">
                <a href="https://github.com/bharanimanikandan/memory_game_ben10" className="text-white text-lg  font-montserrat group">GitHub<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
                <a href="https://memorygameben10.netlify.app" className="text-white text-lg mr-2 font-montserrat group">Live<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
              </div>
            </div>
        </div>
      {/* Trakify */}
        <div className="mt-4 grid gap-4 border rounded-md bg-slate-900 hover:scale-105 hover:animate-pulse">
            <div className="p-4 rounded-lg">
              <img src={ExpenseTracker} alt="" className='rounded-md'/>
              <h3 className="text-2xl font-outfit font-bold text-transparent text-center mt-2 bg-clip-text
                       bg-gradient-to-r from-linear1 to-linear">Expense Tracker</h3>
              <div className="flex justify-between mt-2">
                <a href="https://github.com/bharanimanikandan/Trackify" className="text-white text-lg ml-1 group">GitHub<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
                <a href="https://trackify-crud.netlify.app" className="text-white text-lg mr-2 group">Live<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
              </div>
            </div>
        </div>
      {/* Travel Landing Page */}
        <div className="mt-4 grid gap-4 border rounded-md bg-slate-900 hover:scale-105 hover:animate-pulse">
            <div className="p-4 rounded-lg">
              <img src={TravelLanding} alt="" className='rounded-md'/>
              <h3 className="text-2xl font-outfit font-bold text-transparent text-center mt-2 bg-clip-text
                       bg-gradient-to-r from-linear1 to-linear">Trabook-Landing Page</h3>
              <div className="flex justify-between mt-2">
                <a href="https://github.com/bharanimanikandan/Travel_Landing_Page" className="text-white text-lg ml-1 group">GitHub<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
                <a href="https://landingtravelguvi.netlify.app" className="text-white text-lg mr-2 group">Live<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
              </div>
            </div>
        </div>
      {/* MovieSearchApp */}
        <div className="mt-4 grid gap-4 border rounded-md bg-slate-900 hover:scale-105 hover:animate-pulse">
            <div className="p-4 rounded-lg">
              <img src={MovieSearchApp} alt="" className='rounded-md'/>
              <h3 className="text-2xl font-outfit font-bold text-transparent text-center mt-2 bg-clip-text
                       bg-gradient-to-r from-linear1 to-linear">Movie Search App</h3>
              <div className="flex justify-between mt-2">
                <a href="https://github.com/bharanimanikandan/netflixo-moviesearchingapp" className="text-white text-lg ml-1 group">GitHub<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
                <a href="https://resplendent-hotteok-c9d5a2.netlify.app" className="text-white text-lg mr-2 group">Live<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
              </div>
            </div>
        </div>
      {/* Cart App */}
        <div className="mt-4 grid gap-4 border rounded-md bg-slate-900 hover:scale-105 hover:animate-pulse">
            <div className="p-4 rounded-lg">
              <img src={Cart} alt="" className='rounded-md'/>
              <h3 className="text-2xl font-outfit font-bold text-transparent text-center mt-2 bg-clip-text
                       bg-gradient-to-r from-linear1 to-linear">Ecommerce Cart</h3>
              <div className="flex justify-between mt-2">
                <a href="https://github.com/bharanimanikandan/E-ComCart" className="text-white text-lg ml-1 group">GitHub<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
                <a href="https://e-comcart.netlify.app" className="text-white text-lg mr-2 group">Live<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
              </div>
            </div>
        </div>
      {/* AppleLanding */}
        <div className="mt-4 grid gap-4 border rounded-md bg-slate-900 hover:scale-105 hover:animate-pulse">
            <div className="p-4 rounded-lg">
              <img src={AppleLanding} alt="" className='rounded-md'/>
              <h3 className="text-2xl font-outfit font-bold text-transparent text-center mt-2 bg-clip-text
                       bg-gradient-to-r from-linear1 to-linear">Fruit Shop-Landing Page</h3>
              <div className="flex justify-between mt-2">
                <a href="https://github.com/bharanimanikandan/HtmltoReactLandingPage" className="text-white text-lg ml-1 group">GitHub<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
                <a href="https://csstoreact.netlify.app" className="text-white text-lg mr-2 group">Live<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
              </div>
            </div>
        </div>
      </div><hr />
    </section>
  );
}

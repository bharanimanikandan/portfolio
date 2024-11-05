import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="p-8 bg-bg text-center">
      <div className="flex justify-center mt-44">
        <li className="list-circle font-montserrat font-light group mt-1 text-orange-600"></li>
        <h3 className="text-white font-montserrat text-2xl font-thin">Get In Touch</h3>
      </div>

      <div className="mt-20">
        <a href="mailto:kskaranbharani2001@gmail.com" className="group font-montserrat font-extrabold text-white  text-8xl ">Need a developer ?
          <div class="bg-white h-[2px] w-0 ml-60 group-hover:w-8/12 transition-all mt-3 duration-500"></div>
        </a>
      </div>

      <div className="mt-40 flex gap-4 ml-24">
        <div>
          <h5 className="text-white font-montserrat mr-12 mb-2 text-xl">Call Me</h5>
          <a href="tel:+919025710028" className="group font-montserrat text-gray-400">+91 9025710028
            <div class="bg-white h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div>
          </a>
        </div>
        <div>
          <h5 className="text-white font-montserrat mr-8 text-xl mb-2 ">Social</h5>
          <div className="flex gap-4 ml-12">
            <a href="https://www.linkedin.com/in/bharanimanikandan-k-8a7460275/" className="text-gray-400 font-montserrat group">LinkedIn<div class="bg-white h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
            <a href="https://github.com/bharanimanikandan" className="text-gray-400 font-montserrat group">Github<div class="bg-white h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
          </div>
        </div>
        <div className="mr-20">
          <h5 className="text-white font-montserrat text-xl mb-2 ">Let's grab a cofee.</h5>
          <a href="mailto:kskaranbharani2001@gmail.com" className="text-gray-400 font-montserrat ml-20 group">kskaranbharani2001@gmail.com<div class="bg-white h-[2px] w-0 ml-20 group-hover:w-9/12 transition-all mt-0 duration-500"></div></a>
        </div>
      </div><hr className="w-11/12 ml-12 mt-12 " />

      <div>
        <p className="text-gray-400 font-montserrat mt-6">© Copyright 2024, Bharanimanikandan K</p>
      </div>
    </section>
  );
}

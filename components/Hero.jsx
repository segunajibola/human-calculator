import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center w-full h-[80vh]"
        style={{ backgroundImage: "url(/bg.jpeg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
              Tella Omojolade
            </h1>
            <p className="text-lg m-4 md:text-xl lg:text-2xl">
              Human Calculator | Public Speaker | Expert in Thinkering with
              Numbers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const Home = () => {
  return (
    <div className="relative h-screen">
      <div
        className="bg-cover bg-center w-full h-[80vh]"
        style={{ backgroundImage: "url(/bg.jpg)"}}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
              Tella Omojolade
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl">Human Calculator</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8">
        <section className="text-center">
          {/* Add more content as needed */}
        </section>
      </div>
    </div>
  );
};

export default Home;

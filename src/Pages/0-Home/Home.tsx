import React from "react";
import heroImg from "../../assets/heroimg.webp"; // 👉 use your building image

const Home: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0f1b34]/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">

        {/* Small Title */}
        <p className="text-[#d4a017] uppercase tracking-widest text-sm mb-4">
          Redefining Real Estate
        </p>

        {/* Heading */}
        <h1 className="text-white font-serif font-bold leading-tight
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Discover your next <br />
          <span className="text-[#d4a017]">extraordinary space.</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 mt-6 max-w-xl text-sm sm:text-base">
          UrbanNest provides enterprise-grade insights, premium property
          listings, and expert advisory for the modern global citizen.
        </p>

        {/* Search Box */}
        <div className="mt-8 w-full max-w-2xl flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-lg">

          <input
            type="text"
            placeholder="Search cities, neighborhoods, or properties..."
            className="flex-1 px-4 py-3 text-sm outline-none"
          />

          <button className="bg-[#d4a017] text-black px-6 py-3 font-semibold hover:bg-[#b89014] transition">
            Explore Properties
          </button>
        </div>

      </div>
    </section>
  );
};

export default Home;
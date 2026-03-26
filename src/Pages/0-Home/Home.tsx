import React from "react";
import heroImg from "../../assets/heroimg.webp"; // 👉 use your building image
import { Home as HomeIcon, Building2, TrendingUp } from "lucide-react";

const Home: React.FC = () => {
  return (
    <>
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


{/* // ////////////////////////////////////////////////////////// */}

      <section className="py-20 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <p className="text-yellow-600 font-semibold tracking-widest">
            EXPERTISE
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0b1c39] mt-3">
            Comprehensive Real Estate Solutions
          </h2>

          <p className="text-gray-500 mt-4 mb-14">
            Delivering strategic advice and flawless execution across all property sectors.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:border-yellow-500 text-left">

              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 mb-6 transition-all duration-300 group-hover:bg-yellow-50">
                <HomeIcon className="w-6 h-6 text-gray-700 group-hover:text-yellow-500 transition-all duration-300" />
              </div>

              <h3 className="text-xl font-semibold text-[#0b1c39] mb-3 group-hover:text-yellow-500 transition">
                Residential Sales
              </h3>

              <p className="text-gray-500 text-sm mb-5">
                Navigate the housing market with confidence. We match discerning buyers...
              </p>

              <span className="text-sm font-medium text-[#0b1c39] group-hover:text-yellow-500">
                Learn more →
              </span>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:border-yellow-500 text-left">

              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 mb-6 transition-all duration-300 group-hover:bg-yellow-50">
                <Building2 className="w-6 h-6 text-gray-700 group-hover:text-yellow-500" />
              </div>

              <h3 className="text-xl font-semibold text-[#0b1c39] mb-3 group-hover:text-yellow-500 transition">
                Commercial Leasing
              </h3>

              <p className="text-gray-500 text-sm mb-5">
                Optimize your business footprint with strategic office, retail, and industrial leasing...
              </p>

              <span className="text-sm font-medium text-[#0b1c39] group-hover:text-yellow-500">
                Learn more →
              </span>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:border-yellow-500 text-left">

              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 mb-6 transition-all duration-300 group-hover:bg-yellow-50">
                <TrendingUp className="w-6 h-6 text-gray-700 group-hover:text-yellow-500" />
              </div>

              <h3 className="text-xl font-semibold text-[#0b1c39] mb-3 group-hover:text-yellow-500 transition">
                Investment Advisory
              </h3>

              <p className="text-gray-500 text-sm mb-5">
                Maximize returns through data-driven acquisition, disposition, and portfolio strategies.
              </p>

              <span className="text-sm font-medium text-[#0b1c39] group-hover:text-yellow-500">
                Learn more →
              </span>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
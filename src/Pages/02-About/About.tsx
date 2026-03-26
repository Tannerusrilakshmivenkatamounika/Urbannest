import aboutImg from "../../assets/abtimg.jpg"; // use your image
import React from "react";

const About: React.FC = () => {
  return (
    <>
    <section className="py-20 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-yellow-600 font-semibold tracking-widest mb-4">
            OUR STORY
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0b1c39] leading-tight mb-6">
            Shaping the Future of <br />
            Global Real Estate
          </h2>

          <p className="text-gray-500 mb-6 leading-relaxed">
            Founded on the principles of integrity, innovation, and unparalleled
            client service, UrbanNest has grown from a boutique advisory firm to
            a global leader in real estate services.
          </p>

          <p className="text-gray-500 mb-6 leading-relaxed">
            We believe that real estate is about more than just square footage
            and transactions; it's about creating spaces where businesses thrive,
            communities flourish, and people build their lives.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Our team of seasoned professionals brings decades of collective
            experience, offering data-driven insights and strategic guidance to
            navigate the complexities of the modern market.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          {/* Background shadow card */}
          <div className="absolute top-6 left-6 w-full h-full bg-[#e9dfcf] rounded-2xl"></div>

          {/* Main Image */}
          <img
            src={aboutImg}
            alt="About UrbanNest"
            className="relative rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>

      </div>
    </section>
    </>
  );
}

export default About;
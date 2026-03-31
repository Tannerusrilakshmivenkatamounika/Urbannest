import React from "react";

const Services = () => {
      const services = [
    {
      title: "Residential Real Estate",
      desc: "Comprehensive advisory for buyers and sellers of luxury homes, estates, and urban condominiums.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "Commercial Leasing",
      desc: "Strategic space solutions for businesses, from agile startups to multinational corporations.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    },
    {
      title: "Investment Advisory",
      desc: "Data-driven acquisition, disposition, and portfolio optimization for private and institutional investors.",
      img: "https://images.unsplash.com/photo-1460472178825-e5240623afd5",
    },
  ];

  return (
  <>
    {/* HERO SECTION */}
    <section className="relative w-full h-[60vh] flex items-center justify-center text-center">

      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
          alt="Real Estate"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[#0b1c39]/90"></div>

      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-white text-4xl md:text-6xl font-serif font-semibold mb-6">
          Expertise That Delivers
        </h1>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          UrbanNest offers a comprehensive suite of commercial and residential 
          real estate services, backed by deep market knowledge and a 
          commitment to excellence.
        </p>
      </div>
    </section>

    {/* SERVICES CARDS */}
    <section className="py-20 bg-[#f8f9fb] px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden group transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold text-[#0b1c39] mb-3">
                {service.title}
              </h3>

              <p className="text-gray-500 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  </>
);
};

export default Services;
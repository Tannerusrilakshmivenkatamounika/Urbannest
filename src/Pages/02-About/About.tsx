import aboutImg from "../../assets/abtimg.jpg";
import React, { useState } from "react";
import img1 from "../../assets/sbout/image.png";
import img from "../../assets/sbout/abt.jpg"
const team = [
  {
    name: "A Raja Reddy",
    role: "Managing Director",
    img: img1,
    desc: "A visionary leader with deep expertise in real estate strategy, driving UrbanNest's growth with innovation, integrity, and long-term value creation.",
  },
  {
    name: "P. Vamsi Kiran Reddy",
    role: "Founder",
    // img: "https://i.pravatar.cc/400?img=11",
    desc: "Passionate about transforming real estate experiences, he brings a modern approach to business development and client engagement.",
  },
  {
    name: "A Hemanth Reddy",
    role: "Founder",
    // img: "https://i.pravatar.cc/400?img=15",
    desc: "The driving force behind UrbanNest, focused on building a trusted real estate brand rooted in transparency, excellence, and customer-first values.",
  },
  {
    name: "Venkata Vasu",
    role: "CEO",
    // img: "https://i.pravatar.cc/400?img=18",
    desc: "Leading operations and execution, he ensures seamless delivery of projects and strategic growth across all business verticals.",
  },
  {
    name: "Ashok Reddy",
    role: "Director",
    // img: "https://i.pravatar.cc/400?img=21",
    desc: "Bringing strong leadership and market insights, he plays a key role in expanding UrbanNest's presence and partnerships.",
  },
];

const testimonials = [
  {
    name: "Sophia Williams",
    role: "Home Buyer",
    img: "https://i.pravatar.cc/150?img=47",
    text: "UrbanNest transformed our property search into a seamless experience. Their team's professionalism and market knowledge are truly unmatched.",
  },
  {
    name: "Emma Johnson",
    role: "Property Investor",
    img: "https://i.pravatar.cc/150?img=49",
    text: "Working with UrbanNest was the best decision we made. They understood our vision and delivered a space that perfectly aligns with our business goals.",
  },
  {
    name: "Olivia Martinez",
    role: "Business Owner",
    img: "https://i.pravatar.cc/150?img=44",
    text: "We are thrilled with the results! UrbanNest's personalized service helped us streamline our search and enhance our investment portfolio.",
  },
  {
    name: "James Parker",
    role: "Real Estate Client",
    img: "https://i.pravatar.cc/150?img=33",
    text: "From the first consultation to closing the deal, every step was handled with care and expertise. I couldn't recommend them more highly.",
  },
  {
    name: "Liam Chen",
    role: "Commercial Tenant",
    img: "https://i.pravatar.cc/150?img=25",
    text: "Their data-driven approach and deep market insights helped us make the right investment at the right time. Exceptional service throughout.",
  },
];

const About: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  const visibleTestimonials = [
    testimonials[(activeTestimonial - 1 + testimonials.length) % testimonials.length],
    testimonials[activeTestimonial],
    testimonials[(activeTestimonial + 1) % testimonials.length],
  ];

  return (
    <>
      {/* ── 1. HERO BANNER ── */}
      <section
        className="relative w-full h-[55vh] md:h-[85vh] bg-cover  bg-center"
        style={{
          backgroundImage:`url(${img})`
        }}
      >
        <div className="absolute inset-0 " />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <p className="text-yellow-400 text-sm tracking-widest font-semibold uppercase mb-3">
            Who We Are
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-serif font-semibold leading-tight max-w-2xl">
            About <span className="text-yellow-400">UrbanNest</span>
          </h1>
          <p className="text-gray-300 mt-4 text-base max-w-xl leading-relaxed">
            A global leader in real estate services  built on integrity,
            innovation, and unparalleled client commitment.
          </p>
          
        </div>
      </section>

      {/* ── 2. OUR STORY ── */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-600 font-semibold tracking-widest text-sm mb-4 uppercase">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0b1c39] leading-tight mb-6">
              Shaping the Future of <br />
              <span className="text-red-500">Global Real Estate</span>
            </h2>
            <p className="text-gray-500 mb-5 leading-relaxed">
              Founded on the principles of integrity, innovation, and unparalleled
              client service, UrbanNest has grown from a boutique advisory firm to
              a global leader in real estate services.
            </p>
            <p className="text-gray-500 mb-5 leading-relaxed">
              We believe that real estate is about more than just square footage
              and transactions — it's about creating spaces where businesses thrive,
              communities flourish, and people build their lives.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our team of seasoned professionals brings decades of collective
              experience, offering data-driven insights and strategic guidance to
              navigate the complexities of the modern market.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200">
              {[
                { num: "12+", label: "Years Experience" },
                { num: "840+", label: "Properties Sold" },
                { num: "98%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-[#0b1c39]">{stat.num}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-6 left-6 w-full h-full bg-[#e9dfcf] rounded-2xl" />
            <img
              src={aboutImg}
              alt="About UrbanNest"
              className="relative rounded-2xl shadow-lg w-full h-[440px] object-cover"
            />
            {/* <div className="absolute bottom-8 -left-6 bg-white rounded-xl shadow-lg px-5 py-4 flex items-center gap-3 z-10">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-lg">
                ✓
              </div>
              <div>
                <p className="text-[#0b1c39] font-semibold text-sm">Trusted Agency</p>
                <p className="text-gray-400 text-xs">Since 2012</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* ── 3. LEADERSHIP TEAM ── */}
      <section className="py-24 bg-[#efe7df]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-yellow-600 uppercase font-semibold mb-3">
              Leadership
            </p>
            <h2 className="text-4xl font-serif font-semibold text-[#0b1c39]">
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Our team of experienced professionals is dedicated to delivering
              excellence, innovation, and trust in every real estate journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {team.slice(0, 3).map((member, i) => (
              <div
                key={i}
                className="group bg-[#f8f9fb] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c39]/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#0b1c39] mb-1">{member.name}</h3>
                  <p className="text-sm text-red-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            {team.slice(3).map((member, i) => (
              <div
                key={i}
                className="group bg-[#f8f9fb] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c39]/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#0b1c39] mb-1">{member.name}</h3>
                  <p className="text-sm text-red-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TESTIMONIALS ── */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          
          <div className="text-center mb-14">
            <p className="text-red-500 text-sm font-semibold tracking-widest uppercase mb-3">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0b1c39]">
              What Our Clients Say About Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map((t, i) => (
              <div
                key={i}
                onClick={() =>
                  setActiveTestimonial(
                    (activeTestimonial + (i - 1) + testimonials.length) % testimonials.length
                  )
                }
                className={`relative rounded-3xl p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300
                  ${i === 1
                    ? "bg-[#efe7df] shadow-lg scale-[1.03]"
                    : "bg-[#f5f0eb] hover:bg-[#efe7df] hover:scale-[1.01]"
                  }`}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                  {t.text}
                </p>

                <div className={`w-16 h-16 rounded-full overflow-hidden border-4 mb-3
                  ${i === 1 ? "border-red-400" : "border-[#e9dfcf]"}`}>
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>

                <h4 className="font-bold text-[#0b1c39] text-base">{t.name}</h4>
                <p className={`text-xs mt-1 ${i === 1 ? "text-red-500" : "text-gray-400"}`}>
                  {t.role}
                </p>

                <div className={`absolute bottom-0 right-0 w-10 h-10 rounded-tl-3xl rounded-br-3xl
                  ${i === 1 ? "bg-red-400/20" : "bg-[#e9dfcf]"}`} />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-[3px] rounded-full transition-all duration-300
                  ${i === activeTestimonial ? "w-8 bg-red-500" : "w-4 bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;
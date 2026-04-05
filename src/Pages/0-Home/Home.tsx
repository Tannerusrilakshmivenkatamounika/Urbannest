import React from "react";
import heroImg from "../../assets/homeimg.avif"; // 👉 use your building image
import { Home as HomeIcon, Building2, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import { Search, User, DollarSign } from "lucide-react";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
const expertiseSlides = [
  {
    tag: "EXPERTISE",
    title: "Residential",
    highlight: "Sales",
    desc: "Navigate the housing market with confidence. We match discerning buyers with exceptional properties, ensuring every transaction reflects your vision and investment goals.",
    icon: <HomeIcon className="w-6 h-6" />,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    tag: "EXPERTISE",
    title: "Commercial",
    highlight: "Leasing",
    desc: "Optimize your business footprint with strategic office, retail, and industrial leasing solutions tailored to your operational needs and growth strategy.",
    icon: <Building2 className="w-6 h-6" />,
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    tag: "EXPERTISE",
    title: "Investment",
    highlight: "Advisory",
    desc: "Maximize returns through data-driven acquisition, disposition, and portfolio strategies backed by deep market intelligence and decades of expertise.",
    icon: <TrendingUp className="w-6 h-6" />,
    img: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80",
  },
];
const heroSlides = [
  {
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
    title: "Global Real Estate Perspective",
    subtitle: "February 2026",
  },
  {
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80",
    title: "Find Your Perfect Space",
    subtitle: "Residential & Commercial",
  },
  {
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
    title: "Smarter Investment Decisions",
    subtitle: "Data-Driven Insights",
  },
];
const projects = [
  {
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    title: "Industrial Welding Project",
    category: "Industry, Engineering",
  },
  {
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    title: "Power Plant Infrastructure",
    category: "Energy, Corporate",
  },
  {
    img: "https://images.unsplash.com/photo-1581092919535-7146ff1a5908", // ✅ FIXED IMAGE
    title: "Asian Industrial Project",
    category: "Industry, Corporate",
  },
  {
    img: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0",
    title: "Fire Safety Operations",
    category: "Safety, Emergency",
  },
  {
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    title: "Construction Workforce",
    category: "Construction, Labor",
  },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

const steps = [
  {
    id: 1,
    title: "Explore Properties",
    desc: "Browse a wide selection of properties to find the perfect home.",
    icon: <Search size={28} />,
  },
  {
    id: 2,
    title: "Connect with Experts",
    desc: "Get professional guidance from real estate experts to make informed.",
    icon: <User size={28} />,
  },
  {
    id: 3,
    title: "Seal the Deal",
    desc: "Navigate negotiations and finalize transactions smoothly",
    icon: <DollarSign size={28} />,
  },
];
const Home: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);
 
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setZoomed(false);

      setTimeout(() => {
        setCurrent((c) => (c + 1) % heroSlides.length);
        setZoomed(true);
        setPrev(null);
      }, 800); // crossfade duration
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

 const [index, setIndex] = useState(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.6 }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <>
     <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[90vh] overflow-hidden">

      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-800 ease-in-out
            ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}
            ${i === prev ? "opacity-0 z-10" : ""}
          `}
          style={{ transitionDuration: "800ms" }}
        >
          {/* Image with zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform ease-in-out"
            style={{
              backgroundImage: `url(${slide.img})`,
              transform: i === current && zoomed ? "scale(1.08)" : "scale(1)",
              transitionDuration: i === current ? "6000ms" : "800ms",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />
        </div>
      ))}

      {/* Content — always on top */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <div key={current} className="animate-fadeSlideUp">
          <p className="text-gray-300 text-sm tracking-widest uppercase mb-3">
            {heroSlides[current].subtitle}
          </p>

          <h1 className="text-white font-poppins leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl mb-8 max-w-2xl">
            {heroSlides[current].title}
          </h1>

          <button
            onClick={() => navigate("/properties")}
            className="bg-white text-[#0b1c39] px-6 py-3 rounded-md font-medium w-fit shadow hover:bg-gray-100 transition flex items-center gap-2"
          >
            Explore now →
          </button>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setPrev(current);
              setZoomed(false);
              setTimeout(() => {
                setCurrent(i);
                setZoomed(true);
                setPrev(null);
              }, 800);
            }}
            className={`h-[3px] rounded-full transition-all duration-500
              ${i === current ? "w-8 bg-white" : "w-4 bg-white/40"}`}
          />
        ))}
      </div>

    </section>


      <section className="bg-[#efe7df] py-24 space-y-24">

        {/* ✅ 1. LEFT CONTENT → RIGHT IMAGE */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-widest text-gray-500 mb-4 uppercase">
              THE FUTURE OF SPACES
            </p>

            <h2 className="text-4xl text-[#0b1c39] mb-6">
              Brighter places to{" "}
              <span className="text-red-500">live and work</span>
            </h2>

            <p className="text-gray-600 mb-8">
              We design environments that empower people and businesses.
            </p>
            <button className="bg-[#e5e0db] px-6 py-3 rounded-md text-[#0b1c39] hover:bg-[#dcd6cf] transition">
              Learn more →
            </button>
          </motion.div>

          <motion.img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            className="rounded-xl shadow-md h-[400px] w-full object-cover"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* ✅ 2. LEFT IMAGE → RIGHT CONTENT */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            className="rounded-xl shadow-md h-[400px] w-full object-cover"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
          />

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-widest text-gray-500 mb-4 uppercase">
              INVESTMENT STRATEGY
            </p>

            <h2 className="text-4xl text-[#0b1c39] mb-6">
              Smarter decisions for{" "}
              <span className="text-red-500">better returns</span>
            </h2>

            <p className="text-gray-600 mb-8">
              Our data-driven insights help maximize long-term value.
            </p>
            <button className="bg-[#e5e0db] px-6 py-3 rounded-md text-[#0b1c39] hover:bg-[#dcd6cf] transition">
              Learn more →
            </button>
          </motion.div>
        </div>

        {/* ✅ 3. LEFT CONTENT → RIGHT IMAGE (FROM RIGHT SIDE) */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            variants={fadeRight}   // 👈 comes from RIGHT
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-widest text-gray-500 mb-4 uppercase">
              GLOBAL EXPERTISE
            </p>

            <h2 className="text-4xl text-[#0b1c39] mb-6">
              Connecting people with{" "}
              <span className="text-red-500">exceptional spaces</span>
            </h2>

            <p className="text-gray-600 mb-8">
              We deliver innovative real estate solutions globally.
            </p>
            <button className="bg-[#e5e0db] px-6 py-3 rounded-md text-[#0b1c39] hover:bg-[#dcd6cf] transition">
              Learn more →
            </button>
          </motion.div>

          <motion.img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
            className="rounded-xl shadow-md h-[400px] w-full object-cover"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
          />
        </div>

      </section>
      {/* /////////////////////////////////// */}
    <section className="bg-[#f8f9fb] py-24">
    {/* SECTION HEADER */}
<div className="text-center mb-16">

  {/* Small Label */}
  <p className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4 font-medium">
    Expertise
  </p>

  {/* Main Heading */}
  <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0b1c39] leading-snug">
    Comprehensive Real Estate{" "}
    <span className="text-red-500">Solutions</span>
  </h2>

  {/* Optional Subtext */}
  <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
    Delivering strategic insights and innovative solutions to shape the future of modern real estate.
  </p>

</div>
      <div className="max-w-6xl mx-auto px-6 flex gap-16 items-start">

        {/* LEFT — scrollable cards */}
        <div className="flex-1 space-y-10">
          {expertiseSlides.map((slide, i) => (
            <div
              key={i}
             ref={scrollRef} 
              className={`p-8 rounded-2xl border transition-all duration-500 cursor-pointer
                ${activeIndex === i
                  ? "bg-white border-yellow-400 shadow-lg -translate-x-1"
                  : "bg-transparent border-gray-200 opacity-50"
                }`}
              onClick={() => setActiveIndex(i)}
            >
              <p className="text-yellow-600 text-xs font-semibold tracking-widest mb-3">
                {slide.tag}
              </p>

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300
                  ${activeIndex === i ? "bg-[#0b1c39] text-white" : "bg-gray-100 text-gray-500"}`}>
                  {slide.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#0b1c39]">
                  {slide.title} <span className="text-red-500">{slide.highlight}</span>
                </h3>
              </div>

              <p className={`text-gray-500 text-sm leading-relaxed transition-all duration-500
                ${activeIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                {slide.desc}
              </p>

              {activeIndex === i && (
                <button className="mt-5 text-sm font-medium text-[#0b1c39] hover:text-yellow-600 transition">
                  Learn more →
                </button>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT — sticky image */}
        <div className="hidden md:block w-[480px] sticky top-28 self-start">
          <div className="relative overflow-hidden rounded-2xl h-[480px]">
            {expertiseSlides.map((slide, i) => (
              <img
                key={i}
                src={slide.img}
                alt={slide.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
                  ${activeIndex === i ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
              />
            ))}
          </div>

          {/* Dot indicators on image */}
          <div className="flex gap-2 mt-4 justify-center">
            {expertiseSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-[3px] rounded-full transition-all duration-400
                  ${i === activeIndex ? "w-8 bg-[#0b1c39]" : "w-4 bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
      {/* //////////////////////////////////////////////////// */}





    <section className="py-24 bg-[#f5f5f5]">
  <div className="max-w-8xl mx-auto px-6 grid grid-cols-3 gap-12 text-center relative">

    {/* Dashed connector line between boxes */}
    <div className="absolute top-[44px] left-[calc(16.66%+10px)] right-[calc(16.66%+10px)] border-t-2 border-dashed border-gray-300 z-0" />

    {steps.map((item) => (
      <div key={item.id} className="flex flex-col items-center">

        {/* Icon box with number badge */}
        <div className="relative z-10">
          <div className="absolute -top-3 -right-3 bg-black text-white w-7 h-7 flex items-center justify-center rounded-full text-xs font-semibold z-10">
            {item.id}.
          </div>
          <div
            onClick={() => setActive(item.id)}
            className={`w-[90px] h-[90px] flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 cursor-pointer transition-colors duration-200
              ${active === item.id ? "bg-gray-200" : "bg-white"}`}
          >
            {item.icon}
          </div>
        </div>

        <h3 className="text-lg font-bold mt-8 mb-2 text-[#0b1c39]">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm max-w-[200px] leading-relaxed">
          {item.desc}
        </p>

      </div>
    ))}

  </div>
</section>
      {/* ////////////////////////////////////////////// */}
       <section className="py-20 bg-[#f8f9fb]">

      {/* HEADER */}
      <div className="text-center mb-12">
        <p className="text-sm tracking-widest text-orange-500 mb-2 uppercase">
          Projects
        </p>

        <h2 className="font-poppins text-4xl text-[#0b1c39] font-semibold">
          See Latest Projects
        </h2>

        <p className="text-gray-500 mt-2 text-lg">
          For our client
        </p>

        <div className="w-16 h-[3px] bg-orange-500 mx-auto mt-4 rounded"></div>
      </div>

      {/* SLIDER */}
      <div className="relative max-w-7xl mx-auto overflow-hidden">

        {/* Images Wrapper */}
        <div className="px-6 overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${index * 280}px)`,
            }}
          >
            {projects.map((item, i) => (
              <div
                key={i}
                className="relative min-w-[260px] h-[350px] rounded-xl overflow-hidden group cursor-pointer"
              >

                {/* Image */}
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0b1c39]/80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">

                  <h3 className="text-white text-lg font-semibold mb-1">
                    {item.title}
                  </h3>

                  <p className="text-orange-400 text-sm">
                    {item.category}
                  </p>

                </div>

              </div>
            ))}
          </div>
        </div>

       

      </div>
    </section>
    </>
  );
};

export default Home;
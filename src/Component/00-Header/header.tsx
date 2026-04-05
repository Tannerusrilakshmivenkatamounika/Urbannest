import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import logoImg from "../../assets/logo.png";

const navLinks = [
  { to: "/properties", label: "Properties" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 🔥 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logoImg} alt="UrbanNest" className="h-10" />
          <span className="text-[#0b1c39] text-xl font-semibold">
            UrbanNest
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleNavClick(link.to)}
              className={`text-sm font-medium transition ${
                location.pathname === link.to
                  ? "text-[#0b1c39]"
                  : "text-gray-600 hover:text-[#0b1c39]"
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* Search */}
          <button className="p-2 rounded-md hover:bg-gray-100 transition">
            <Search size={18} className="text-[#0b1c39]" />
          </button>

          {/* CTA */}
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#0b1c39] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#09152b] transition"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-[#0b1c39]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <div className="flex flex-col gap-4">

            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => handleNavClick(link.to)}
                className="text-left text-gray-600"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick("/contact")}
              className="bg-[#0b1c39] text-white py-2 rounded-md font-semibold mt-2"
            >
              Contact Us
            </button>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
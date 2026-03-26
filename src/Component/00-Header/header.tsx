import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "../../assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-[#0f1b34] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <img src={logoImg} alt="UrbanNest" className="h-10 w-auto" />
          <h1 className="text-white text-xl font-semibold tracking-wide">
            UrbanNest Realty Pvt Ltd
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleNavClick(link.to)}
              className={`text-sm font-medium transition ${
                location.pathname === link.to
                  ? "text-[#d4a017]"
                  : "text-white hover:text-[#d4a017]"
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* CTA Button */}
          <button
            onClick={() => navigate("/contact")}
            className="ml-4 bg-[#d4a017] text-black px-5 py-2 rounded-sm font-semibold hover:bg-[#b89014] transition"
          >
            GET IN TOUCH
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f1b34] px-6 pb-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`text-left text-sm ${
                  location.pathname === link.to
                    ? "text-[#d4a017]"
                    : "text-white"
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick("/contact")}
              className="bg-[#d4a017] text-black py-2 rounded-sm font-semibold mt-2"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
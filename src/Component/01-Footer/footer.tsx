import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logoImg from "../../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f1b34] text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="UrbanNest" className="h-10" />
              <h2 className="text-xl font-semibold">UrbanNest Realty Pvt Ltd</h2>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Shaping the future of real estate through market-leading insights,
              innovative technology, and unparalleled client service.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a2747] hover:bg-[#d4a017] transition cursor-pointer">
                <FaFacebookF  className="w-5 h-5 text-white" />
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a2747] hover:bg-[#d4a017] transition cursor-pointer">
                <FaTwitter  className="w-5 h-5 text-white" />
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a2747] hover:bg-[#d4a017] transition cursor-pointer">
                <FaLinkedinIn  className="w-5 h-5 text-white" />
              </div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a2747] hover:bg-[#d4a017] transition cursor-pointer">
                <FaInstagram  className="w-5 h-5 text-white" />
              </div>

            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><Link to="/about" className="hover:text-[#d4a017]">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#d4a017]">Our Services</Link></li>
              <li><Link to="/properties" className="hover:text-[#d4a017]">Properties</Link></li>
              <li><Link to="/careers" className="hover:text-[#d4a017]">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><Link to="#" className="hover:text-[#d4a017]">Commercial Leasing</Link></li>
              <li><Link to="#" className="hover:text-[#d4a017]">Property Management</Link></li>
              <li><Link to="#" className="hover:text-[#d4a017]">Investment Advisory</Link></li>
              <li><Link to="#" className="hover:text-[#d4a017]">Market Research</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Insights</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to receive the latest market trends and real estate news.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 bg-[#1a2747] text-sm outline-none"
              />
              <button className="bg-[#d4a017] px-4 flex items-center justify-center">
                →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
          <p>© {new Date().getFullYear()} UrbanNest Real Estate. All rights reserved.</p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
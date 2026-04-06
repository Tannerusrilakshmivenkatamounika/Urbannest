import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logoImg from "../../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f4f5f7] text-[#0b1c39] py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LEFT SECTION */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="UrbanNest" className="h-10" />
              <h2 className="text-lg font-semibold tracking-wide">
                UrbanNest
              </h2>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              There’s the conventional way of doing things. And then, there’s
              the UrbanNest way — a more innovative, intelligent, and human way
              to shape real estate experiences.
            </p>

            {/* Button */}
            <button className="bg-[#e5e7eb] px-5 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-gray-300 transition">
              Subscribe now →
            </button>

            {/* Social Icons */}
            <div className="flex gap-5 mt-6 text-gray-700">
              <FaFacebookF className="cursor-pointer hover:text-black" />
              <FaLinkedinIn className="cursor-pointer hover:text-black" />
              <FaInstagram className="cursor-pointer hover:text-black" />
            </div>
          </div>

          {/* COLUMN 1 */}
          <div>
            <h3 className="font-semibold mb-4">How can we help?</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>• Sustainability solutions</li>
              <li>• Hybrid workspace solutions</li>
              <li>• Green building and leasing</li>
              <li>• Portfolio management</li>
              <li>• Find and lease space</li>
              <li>• Contact us</li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="font-semibold mb-4">Careers</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>• Working at UrbanNest</li>
              <li>• View opportunities</li>
              <li>• Meet our people</li>
              <li>• Join the talent network</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="font-semibold mb-4">Corporate Information</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>• About UrbanNest</li>
              <li>• Newsroom</li>
              <li>• Sustainability</li>
              <li>• Investor relations</li>
              <li>• Locations</li>
              <li>• Ethics & compliance</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-14 pt-6 border-t border-gray-300 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} UrbanNest Realty Pvt Ltd. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-black">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-black">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
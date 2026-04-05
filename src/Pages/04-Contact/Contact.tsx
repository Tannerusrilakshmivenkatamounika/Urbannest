import { Mail } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
const Contact: React.FC = () => {
  return (
    <>
      <section className="py-20 bg-[#f8f9fb] text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-serif font-semibold text-[#0b1c39] mb-4">
          Get in Touch
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Whether you have a question about Services, pricing, or anything else,
          our team is ready to help you.
        </p>



        <div className="relative w-40 h-40 mx-auto mb-16">

          {/* Rotating dotted circle */}
          <div className="w-full h-full rounded-full border-2 border-dashed border-gray-300 animate-rotate"></div>

          {/* Mail (Top-left angle) */}
          <div className="absolute top-[-5%] left-[15%]">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border-2 border-blue-500">
              <Mail className="text-blue-500 w-5 h-5" />
            </div>
          </div>

          {/* Facebook (Right middle) */}
          <div className="absolute top-1/2 right-[-5%] -translate-y-1/2">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border-2 border-blue-600">
              <FaFacebookF className="text-blue-600 w-5 h-5" />
            </div>
          </div>

          {/* Instagram (Bottom-left angle) */}
          <div className="absolute bottom-[10%] left-[5%]">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border-2 border-pink-500">
              <FaInstagram className="text-pink-500 w-5 h-5" />
            </div>
          </div>

        </div>

        {/* Contact Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          {/* Address */}
          <div className="bg-blue-100 border-l-4 border-blue-500 p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-[#0b1c39] mb-3">Address</h3>
            <p className="text-gray-600">
              {/* midjfidokdowkdwpsqpsoqpskwos */}
            </p>
          </div>

          {/* Call */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-[#0b1c39] mb-3">Call</h3>
            <p className="text-gray-600">
              +91 8712184933 <br />
            </p>
          </div>

          {/* Email */}
          <div className="bg-green-100 border-l-4 border-green-500 p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-[#0b1c39] mb-3">Email</h3>
            <p className="text-gray-600">
              urbannest@gmail.com <br />

            </p>
          </div>
        </div>
      </section>
      <section className="py-20  px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT SIDE → FORM */}
    <div className="bg-[#f8f9fb] p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-semibold text-[#0b1c39] mb-6">
        Send us a Message
      </h2>

      <form className="space-y-5">

        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />

        {/* Property Type */}
        <select className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500">
          <option>Select Property Type</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Commercial</option>
          <option>Plot</option>
        </select>

        {/* Message */}
        <textarea
          rows={4}
          placeholder="Your Message"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        ></textarea>

        {/* Button */}
        <button className="w-full bg-[#0b1c39] text-white py-3 rounded-lg hover:bg-blue-900 transition">
          Submit Request
        </button>

      </form>
    </div>

    {/* RIGHT SIDE → MAP */}
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">

      <iframe
        src="https://www.google.com/maps?q=Hyderabad&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</section>
    </>
  );
}
export default Contact;
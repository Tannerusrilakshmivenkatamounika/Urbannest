import { useState } from "react";
import { BedDouble, Bath, Square } from "lucide-react";
import heroImg from "../../assets/heroimg.webp";
import img1 from "../../assets/p1.jpg";
import img2 from "../../assets/p2.webp";
import img3 from "../../assets/p4.avif";

const properties = [
  {
    id: 1,
    title: "Tribeca Loft Collection",
    location: "201 Tribeca Street, New York",
    price: "$12,500/mo",
    type: "rent",
    beds: 2,
    baths: 2,
    area: 1800,
    img: img1,
  },
  {
    id: 2,
    title: "Marina District Condo",
    location: "2214 Marina Blvd, San Francisco",
    price: "$5,800/mo",
    type: "rent",
    beds: 2,
    baths: 1,
    area: 1100,
    img: img2,
  },
  {
    id: 3,
    title: "River North Penthouse",
    location: "550 W Kinzie Street, Chicago",
    price: "$9,500/mo",
    type: "rent",
    beds: 3,
    baths: 2,
    area: 2400,
    img: img3,
  },
];
const Properties: React.FC = () => {
  
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? properties
      : properties.filter((p) => p.type === filter);

  return (
    <>
    <section
  className="relative py-34 text-white"
  style={{
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-[#0b1c39]/80"></div>

  <div className="relative max-w-7xl mx-auto px-16">
    <h1 className="text-5xl font-serif mb-4">Property Portfolio</h1>
    <p className="text-gray-300 max-w-xl">
      Explore our extensive collection...
    </p>
  </div>
</section>
    <section className="py-16 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-6">

        {/* FILTER BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">

          <div className="flex gap-3 flex-wrap">
            {["all", "sale", "rent", "commercial"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-5 py-2 rounded-full border transition ${
                  filter === item
                    ? "bg-[#0b1c39] text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                {item === "all"
                  ? "All"
                  : item === "sale"
                  ? "For Sale"
                  : item === "rent"
                  ? "For Rent"
                  : "Commercial"}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Filter by city..."
            className="px-5 py-2 rounded-full border w-full md:w-72 outline-none"
          />
        </div>

        {/* RESULTS */}
        <p className="text-gray-500 mb-6">
          Showing <span className="font-semibold">{filtered.length}</span> results
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

                {/* RENT TAG */}
                <span className="absolute top-4 left-4 bg-[#0b1c39] text-white text-xs px-3 py-1 rounded-full">
                  RENT
                </span>

                {/* PRICE */}
                <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow text-[#0b1c39] font-semibold">
                  {item.price}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#0b1c39] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mb-4">
                  📍 {item.location}
                </p>

                <div className="flex justify-between text-sm text-gray-600 border-t pt-4">
                  <span className="flex items-center gap-1">
                    <BedDouble size={16} /> {item.beds} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={16} /> {item.baths} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <Square size={16} /> {item.area} SqFt
                  </span>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>

    </>
  );
};

export default Properties;
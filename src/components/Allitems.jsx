import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// List all your images here
const images = [
  "/assets/dress1.jpg",
  "/assets/dress2.jpg",
  "/assets/dress3.jpg",
  "/assets/dress4.jpg",
  "/assets/kurti1.jpg",
  "/assets/kurti2.jpg",
  "/assets/kurti3.jpg",
  "/assets/kurti4.jpg",
  "/assets/tshirt2.jpg",
  "/assets/shirt1.jpg",
];

// Example product data (you can add more details if needed)
const products = [
  { name: "Floral Summer Dress", size: "M", img: "/assets/dress1.jpg" },
  { name: "Party Dress", size: "L", img: "/assets/dress2.jpg" },
  { name: "Casual Dress", size: "S", img: "/assets/dress3.jpg" },
  { name: "Evening Dress", size: "M", img: "/assets/dress4.jpg" },
  { name: "Elegant Kurti", size: "L", img: "/assets/kurti1.jpg" },
  { name: "Printed Kurti", size: "M", img: "/assets/kurti2.jpg" },
  { name: "Classic Kurti", size: "S", img: "/assets/kurti3.jpg" },
  { name: "Designer Kurti", size: "M", img: "/assets/kurti4.jpg" },
  { name: "Casual T-Shirt", size: "S", img: "/assets/tshirt2.jpg" },
  { name: "Formal Shirt", size: "L", img: "/assets/shirt1.jpg" },
  { name: "Elegant Kurti", size: "L", img: "/assets/kurti1.jpg" },
  { name: "Printed Kurti", size: "M", img: "/assets/kurti2.jpg" },
  { name: "Classic Kurti", size: "S", img: "/assets/kurti3.jpg" },
  { name: "Designer Kurti", size: "M", img: "/assets/kurti4.jpg" },
  { name: "Casual T-Shirt", size: "S", img: "/assets/tshirt2.jpg" },
  { name: "Formal Shirt", size: "L", img: "/assets/shirt1.jpg" },
];

export default function AllItems() {
     const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () =>
    setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="max-w-10xl mx-auto px-6 py-10 bg-gradient-to-br from-white-50 to-purple-100 ">
      <h1 className="text-4xl font-bold text-center text-violet-700 mb-10">
        All Items
      </h1>
      {/* Large Image Carousel */}
      <div className="flex flex-col items-center mb-12">
        <div className="relative w-full max-w-2xl h-100 flex items-center justify-center">
          <img
            src={images[current]}
            alt={`item-${current}`}
            className="w-full h-full  rounded-2xl shadow-lg"
          />
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-violet-700 rounded-full p-3 shadow hover:bg-violet-100 transition"
            aria-label="Previous"
          >
            &lt;
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-violet-700 rounded-full p-3 shadow hover:bg-violet-100 transition"
            aria-label="Next"
          >
            &gt;
          </button>
        </div>
        <div className="flex gap-2 mt-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              className={`w-4 h-4 rounded-full ${
                current === idx ? "bg-violet-700" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Product Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl p-6 w-72 flex flex-col items-center"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-40 h-40 object-cover rounded-xl mb-4"
            />
            <div className="text-lg font-semibold text-gray-700 mb-2">
              {product.name}
            </div>
            <div className="text-gray-500 mb-2">Size: {product.size}</div>
            <button
              className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition-colors duration-200"
              onClick={() =>
                navigate(`/product/${idx} `, { state: { product } })
              }
            >
              Available for Swap
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

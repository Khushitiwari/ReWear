
import React from "react";

const categories = [
  { name: "Dresses", icon: "👗" },
  { name: "Kurtis", icon: "🧥" },
  { name: "T-Shirts", icon: "👕" },
  { name: "Shirts", icon: "👔" },
  { name: "Jeans", icon: "👖" },
  { name: "Accessories", icon: "👜" },
];

const Category = () => (
  <div className="py-10">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Browse by Category</h2>
    <div className="grid grid-cols-3 grid-rows-2 gap-8 justify-items-center">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 w-64 h-64 hover:scale-105 transition-transform cursor-pointer group"
        >
          <span className="text-8xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:text-violet-600 group-hover:drop-shadow-lg">
            {cat.icon}
          </span>
          <span className="text-2xl font-semibold text-gray-700 group-hover:text-violet-600 transition-colors duration-300">
            {cat.name}
          </span>
        </div>
      ))}
    </div>
    </div>
);

export default Category;
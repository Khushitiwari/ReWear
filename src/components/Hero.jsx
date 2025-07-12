import { useNavigate } from "react-router-dom";
import React from "react";
import Scroll from "./Scroll";
import Category from "./category";
export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-white-50 to-purple-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Give Clothes a Second Life
            <span className="text-violet-600"> Join ReWear </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            ReWear is a community platform that lets you exchange unused clothes
            through direct swaps or a point-based system. Reduce textile waste,
            embrace sustainable fashion, and give your wardrobe a fresh purpose.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => navigate("/signup")}
              className="bg-violet-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-xl font-medium transition-colors duration-200 bounce-hover "
            >
              Get Started
            </button>
            <button onClick={() => navigate("/all-items")} className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 w-full sm:w-auto glow-hover">
              Browse Items
            </button>
          </div>

          {/* Scroll  */}
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
            <Scroll />
          </div>

          {/* Category Section */}
          <Category />

          {/* Product Listings Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-13 justify-items-center">
              {/* Example products, replace with dynamic data as needed */}
              <div className="bg-white rounded-2xl shadow-xl p-6 w-72 flex flex-col items-center">
                <img
                  src="/assets/dress1.jpg"
                  alt="Dress"
                  className="w-40 h-40 object-cover rounded-xl mb-4"
                />
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  Floral Summer Dress
                </div>
                <div className="text-gray-500 mb-2">Size: M</div>
                <button className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition-colors duration-200">
                  View Item
                </button>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 w-72 flex flex-col items-center">
                <img
                  src="/assets/kurti1.jpg"
                  alt="Kurti"
                  className="w-40 h-40 object-cover rounded-xl mb-4"
                />
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  Elegant Kurti
                </div>
                <div className="text-gray-500 mb-2">Size: L</div>
                <button className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition-colors duration-200">
                  View Item
                </button>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 w-72 flex flex-col items-center">
                <img
                  src="/assets/tshirt2.jpg"
                  alt="T-Shirt"
                  className="w-40 h-40 object-cover rounded-xl mb-4"
                />
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  Casual T-Shirt
                </div>
                <div className="text-gray-500 mb-2">Size: S</div>
                <button className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition-colors duration-200">
                  View Item
                </button>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 w-72 flex flex-col items-center">
                <img
                  src="/assets/kurti1.jpg"
                  alt="Kurti"
                  className="w-40 h-40 object-cover rounded-xl mb-4"
                />
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  Kurti
                </div>
                <div className="text-gray-500 mb-2">Size: S</div>
                <button className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition-colors duration-200">
                  View Item
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button onClick={() => navigate("/all-items")} className="bg-gradient-to-r from-violet-600 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 hover:from-violet-700 hover:to-blue-600 transition-all duration-300 flex items-center gap-2">
                <span>More Items</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}

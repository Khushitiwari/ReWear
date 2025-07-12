
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ProductDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  if (!product) {
    return (
      <div className="p-10 text-center text-red-500">
        Product not found. Go back to <button onClick={() => navigate('/')} className="underline text-violet-700">Home</button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 px-6 py-10 bg-gradient-to-br from-white to-purple-100 rounded-2xl shadow-lg">
      <button
        onClick={() => navigate('/')}
        className="mb-6 text-violet-700 underline"
      >
        ← Back to Listings
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image Section */}
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-96 object-cover rounded-xl shadow-md"
        />

        {/* Description Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-violet-700">{product.name}</h2>
          <p className="text-gray-700 text-lg">Size: {product.size}</p>
          <p className="text-gray-600">
            This is a beautiful piece available for swap. Connect with users who are interested in sustainable fashion and reduce textile waste while refreshing your wardrobe.
          </p>
          <button className="mt-6 bg-violet-600 text-white px-6 py-2 rounded hover:bg-violet-700 transition">
            Request Swap
          </button>
        </div>
      </div>
    </div>
  );
}

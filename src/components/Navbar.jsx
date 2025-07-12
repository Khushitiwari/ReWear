import React from "react";
import { useNavigate } from "react-router-dom";

("use client");

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#" },
    { name: "All Items", href: "/all-items" },
  ];

  return (
    <nav className="bg-gradient-to-r from-violet-400 via-indigo-300 to-violet-300 backdrop-blur-lg bg-opacity-80 shadow-2xl rounded-b-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-22">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold text-gray-800">ReWear</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-3xl">
            {navLinks.map((link) =>
              link.name === "Home" ? (
                <button
                  key={link.name}
                  onClick={() => navigate(link.href)}
                  className="text-gray-900 hover:text-violet-900 px-3 py-2 rounded-md text-2xl font-medium transition-colors duration-200 bg-transparent"
                  style={{ border: "none", background: "none" }}
                >
                  {link.name}
                </button>
              ) : link.name === "All Items" ? (
                <button
                  key={link.name}
                  onClick={() => navigate(link.href)}
                  className="text-gray-900 hover:text-violet-900 px-3 py-2 rounded-md text-2xl font-medium transition-colors duration-200 bg-transparent"
                  style={{ border: "none", background: "none" }}
                >
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-900 hover:text-violet-900 px-3 py-2 rounded-md text-2xl font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              )
            )}

            <button
              className="bg-violet-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-xl font-large transition-colors duration-200"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              {navLinks.map((link) =>
                link.name === "All Items" ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      navigate(link.href);
                      setIsOpen(false);
                    }}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              )}

              <button className="w-full text-left bg-violet-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-2 glow-hover ml-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

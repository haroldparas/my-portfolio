import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleMenuItemClick = (id) => {
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-20 py-4 bg-transparent backdrop-blur-md transition duration-300">
        <div className="flex justify-between items-center">
          <div className="text-white font-semibold text-lg cursor-pointer">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-gray-300 transition"
            >
              Harold Paras
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className="relative px-1 font-bold transition duration-300 text-gray-300 hover:text-[#8245ec]"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#8245ec] scale-x-0 origin-left transition-transform duration-300"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden z-50">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar with Futuristic Design on Right Side */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#050414] bg-opacity-90 backdrop-blur-md flex flex-col items-center justify-center space-y-8 z-50 transition-all duration-300 ease-in-out w-1/2 right-0 transform translate-x-full">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleMenuItemClick(item.id)}
              className="text-3xl sm:text-4xl font-semibold text-gray-300 hover:text-[#8245ec] transition duration-300 transform hover:scale-110"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Adding animation for opening/closing */}
      <style jsx>{`
        .animate-slideIn {
          animation: slideIn 0.5s ease-in-out;
        }
        @keyframes slideIn {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;

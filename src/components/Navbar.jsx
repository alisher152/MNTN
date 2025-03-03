import React, { useEffect, useState, useCallback } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState("Equipment"); // Track the selected menu item

  // Оптимизация через useCallback
  const showNavbar = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(showNavbar, 500);

    return () => clearTimeout(timer);
  }, [showNavbar]);

  const handleClick = (menu) => {
    setSelected(menu); // Set the selected menu item
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full h-20 p-3 top-0 left-0 z-50 rounded-lg transition-all duration-500 ease-in-out transform bg-[#0b1d26] shadow-lg ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-20px]"
        }`}
        aria-label="Основная навигация"
      >
        <div className="flex justify-between items-center">
          {/* Логотип */}
          <img
            src="/icon/Logo.svg"
            alt="MNTN Logo"
            className="w-[80px] h-[20px] ml-[60px] inline-flex justify-center mt-[-25px] "
          />

          {/* Меню */}
          <div className="flex space-x-6 w-full justify-center mt-10">
            <div
              className={`w-[60px] h-16 text-center font-gilroy mt-[-18px] cursor-pointer transition-all duration-300 whitespace-nowrap ${
                selected === "Equipment"
                  ? "text-yellow-500" // Highlight color for selected item
                  : "text-white hover:text-gray-600"
              }`}
              onClick={() => handleClick("Equipment")}
            >
              Equipment
            </div>
            <div
              className={`w-[60px] h-16 font-gilroy text-center mt-[-18px] cursor-pointer transition-all duration-300 whitespace-nowrap ml-10 ${
                selected === "About Us"
                  ? "text-yellow-500"
                  : "text-white hover:text-gray-600"
              }`}
              onClick={() => handleClick("About Us")}
            >
              About Us
            </div>
            <div
              className={`w-[60px] h-16 text-center font-gilroy mt-[-18px] cursor-pointer transition-all duration-300 whitespace-nowrap ml-10 ${
                selected === "Blog"
                  ? "text-yellow-500"
                  : "text-white hover:text-gray-600"
              }`}
              onClick={() => handleClick("Blog")}
            >
              Blog
            </div>
          </div>

          {/* Кнопка "Account" */}
          <div
            className="relative flex items-center mr-[145px]"
            role="button"
            aria-label="Account"
          >
            <img
              src="/icon/cart.svg"
              alt="Account Logo"
              className="w-8 h-8 mt-[-15px] "
            />
            <div className="font-gilroy text-white w-[60px] h-[34px] ml-2 hover:text-gray-600">
              Account
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

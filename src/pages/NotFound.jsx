import React, { useState, useEffect } from "react";

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-400 flex items-center justify-center px-4 overflow-hidden relative">
      
      {/* Main content */}
      <div
        className={`text-center relative z-10 max-w-2xl mx-auto transform transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        {/* 404 Text */}
        <div className="relative mb-8">
          <h1
            className="text-9xl md:text-[12rem] font-bold text-white  leading-none"
            style={{
              transform: `perspective(500px) rotateX(${
                mousePosition.y * 0.1
              }deg) rotateY(${mousePosition.x * 0.1}deg)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            404
          </h1>

          <div
            className="absolute inset-0 blur-2xl opacity-30"
            style={{ zIndex: -1 }}
          />
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-lg mx-auto">
          Looks like this page doesn’t exist anymore or the URL might be
          incorrect. Let’s get you back to a safe place.
        </p>

        {/* Button */}
        <button
          onClick={handleGoHome}
          className="group relative cursor-pointer text-white inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Back to Home
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
        </button>
      </div>
    </div>
  );
};

export default NotFound;

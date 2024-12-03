import React from "react";

const HeroSection = () => {
    return (
        <div
          className="max-w-6xl mx-auto bg-gray-800 text-white p-10 rounded-3xl shadow-lg relative"
          style={{ backgroundColor: "#272829" }}
        >
          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-center justify-between">

            {/* Text Section */}
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Your AI-Powered <br />
                <span className="text-purple-400">Design Assistant</span>
              </h2>
              <p className="text-lg mb-6">
                Unlock your creative potential. Seamlessly generate, customize, and perfect your design with cutting-edge AI technology.
              </p>
              <div className="flex space-x-4">
                <button className="bg-purple-600 text-white py-3 px-6 rounded hover:bg-purple-500">
                  Get Started
                </button>
                <button className="bg-gray-800 text-white py-3 px-6 rounded hover:bg-gray-600"
                style={{ backgroundColor: "#272829" }}>
                  More Templates
                </button>
              </div>
            </div>

            {/* Hero Image Wrapper */}
            <div className="absolute bottom-0 right-0 w-48 md:w-64 lg:w-80 h-auto">
              <img
                src="/images/bg.png" 
                alt="Hero Image"
                className="w-full h-full object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
    );
};

export default HeroSection;
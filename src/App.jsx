import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen font-mazzard">
      <Header />
      <main className="bg-black text-white py-16">
        <div
          className="max-w-6xl mx-auto bg-gray-800 text-white p-10 rounded-3xl shadow-lg"
          style={{ backgroundColor: "#272829" }}
        >
          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            {/* Text Section */}
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
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
                <button className="bg-gray-700 text-white py-3 px-6 rounded hover:bg-gray-600">
                  More Templates
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="absolute right-0 bottom-0 w-1/3 h-72 md:h-96">
              <img
                src="bg.png" // Add your image URL here
                alt="Hero Image"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

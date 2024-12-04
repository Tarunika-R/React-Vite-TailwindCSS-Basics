import React from "react";

const ContentSection = () => {
  return (
    <div className="flex flex-col items-start w-full px-10  md:px-48 md:py-20">       
      <div className="flex-1 text-left space-y-2">
        <h2 className="text-5xl md:text-7xl font-semibold leading-tight">
          Unleash Your <span className="text-purple-400">Creativity</span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Discover how our AI-Powered Design Assistant transforms your ideas into 
          stunning designs effortlessly. Follow these simple steps to bring your 
          vision into reality.
        </p>
      </div>

      <div className="grid grid-cols-2 md:flex justify-between items-center mt-7 gap-3">
        {/* Feature 1 */}
        <div className="text-white p-6 pl-3 pt-3 rounded-2xl shadow-lg"
        style={{ backgroundColor: "#272829" }}>
          <img src="/icons/f1.png" alt="Logo 1" className="w-16 h-16 object-contain mb-4" />
          <h3 className="text-lg  md:text-3xl font-semibold mb-2 pl-2">Upload Brief</h3>
          <p className="text-sm pl-2">Share your project details and let our AI grasp your vision.</p>
        </div>

        {/* Feature 2 */}
        <div className="text-white p-7 md:p-6 md:pt-3 pl-3 rounded-2xl shadow-lg"
        style={{ backgroundColor: "#272829" }}>
          <img src="/icons/f2.png" alt="Logo 2" className="w-16 h-16 object-contain mb-4 " />
          <h3 className="text-lg md:text-3xl font-semibold mb-2 pl-2">Generate Designs</h3>
          <p className="text-sm pl-2">Watch as our aI crafts unique design ideas tailored to you.</p>
        </div>

        {/* Feature 3 */}
        <div className="text-white col-span-2 p-6 pl-3 pt-3 rounded-2xl shadow-lg"
        style={{ backgroundColor: "#272829" }}>
          <img src="/icons/f3.png" alt="Logo 3" className="w-16 h-16 object-contain mb-4" />
          <h3 className="text-lg  md:text-3xl font-semibold mb-2 pl-2">Refine Creation</h3>
          <p className="text-sm pl-2">Perfect your chosen concept with easy-to-use AI tools.</p>
        </div>
        </div>
      </div>
  );
};

export default ContentSection;

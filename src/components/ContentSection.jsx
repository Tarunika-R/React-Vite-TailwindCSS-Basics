import React from "react";

const ContentSection = () => {
  return (
    <div className="flex flex-col items-start w-full px-48 py-36">       
      <div className="flex-1 text-left space-y-2">
        <h2 className="text-7xl font-semibold leading-tight">
          Unleash Your <span className="text-purple-400">Creativity</span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Discover how our AI-Powered Design Assistant transforms your ideas into 
          stunning <br/>designs effortlessly. Follow these simple steps to bring your 
          vision into reality.
        </p>
      </div>

      <div className="flex justify-between items-center mt-16 gap-12">
        {/* Feature 1 */}
        <div className="flex flex-col bg-gray-800 text-white p-6 rounded-lg shadow-lg"
        style={{ backgroundColor: "#272829" }}>
          <img src="/icons/f1.png" alt="Logo 1" className="w-24 h-24 object-contain mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Feature 1</h3>
          <p className="text-center text-lg">Short description of the first featured item goes here.</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col bg-gray-800 text-white p-6 rounded-lg shadow-lg"
        style={{ backgroundColor: "#272829" }}>
          <img src="/icons/f2.png" alt="Logo 2" className="w-24 h-24 object-contain mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Feature 2</h3>
          <p className="text-center text-lg">Short description of the second featured item goes here.</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col bg-gray-800 text-white p-6 rounded-lg shadow-lg"
        style={{ backgroundColor: "#272829" }}>
          <img src="/icons/f3.png" alt="Logo 3" className="w-24 h-24 object-contain mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Feature 3</h3>
          <p className="text-center text-lg">Short description of the third featured item goes here.</p>
        </div>
        </div>
      </div>
  );
};

export default ContentSection;

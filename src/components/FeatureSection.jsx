import React from "react";

const FeatureSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-48">
            <div className="flex-1 text-left space-y-5">
                <h2 className="text-4xl font-normal text-white">
                    High-Resolution Outputs
                </h2>
                <p className="text-lg text-gray-300">
                    Download your final designs in high-resolution formats suitable for print and digital use. Ensure your work looks professional and polished in any medium.
                </p>
                <button className="bg-purple-600 py-3 px-12 rounded-lg hover:bg-purple-500">
                    Get Started
                </button>
            </div>

            <div className="flex-1 flex justify-end mt-12 md:mt-0">
                <img
                src="/images/feature1.png"
                alt="Feature Image 1"
                className="w-full max-w-lg md:max-w-sm h-auto object-contain rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default FeatureSection; 
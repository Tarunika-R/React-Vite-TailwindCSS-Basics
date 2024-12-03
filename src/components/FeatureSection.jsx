import React from "react";

const FeatureSection = () => {
    const features = [
        {
            title: "High-Resolution Outputs",
            description:
              "Download your final designs in high-resolution formats suitable for print and digital use. Ensure your work looks professional and polished in any medium.",
            image: "/images/feature1.png",
            reverse: false,
        },
        {
            title: "Real-Time Collaboration",
            description:
              "Seamlessly collaborate with your team in real-time. Share ideas, give feedback, and make edits together, no matter where you are.",
            image: "/images/feature2.png",
            reverse: true,
        },
        {
            title: "Advances Scheduling Tools",
            description:
              "Plan and schedule your design projects with ease. Use our scheduling tools to set deadlines, track milestones, and endure timely delivery of your design work.",
            image: "/images/feature3.png",
            reverse: false,
        },
    ];

    return (
        <div className="space-y-24 px-48 py-24">
        {features.map((feature, index) => (
            <div key={index} 
                className={`flex flex-col md:flex-row items-center justify-between w-full ${ 
                    feature.reverse ? "md:flex-row-reverse" : "" 
                }`}>

                {/*Text Section*/}
                <div 
                    className={`flex-1 text-left space-y-5 ${
                        feature.reverse ? "md:pl-12" : "md:pr-12"
                }`}>
                    <h2 className="text-4xl font-normal text-white">{feature.title}</h2>
                    <p className="text-lg text-gray-300">{feature.description}</p>
                    <button className="bg-purple-600 py-3 px-12 rounded-lg hover:bg-purple-500">
                        Get Started
                    </button>
                </div>

                {/*Image Section*/}
                <div
                    className={`flex-1 flex ${
                        feature.reverse ? "md:justify-start" : "md:justify-end"
                    } mt-12 md:mt-0`}>

                    <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full max-w-lg md:max-w-sm h-auto object-contain rounded-lg shadow-lg"
                    />
                </div>
            </div>
        
            ))}
        </div>
    );
};

export default FeatureSection; 
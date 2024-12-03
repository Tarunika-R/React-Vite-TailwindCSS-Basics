import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CompanyLogo from "./components/CompanyLogo"
import ContentSection from "./components/ContentSection";
import FeatureSection from "./components/FeatureSection";

const App = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen font-sans">
      <Header />
        <main className="bg-black text-white py-16">
          {/* Hero Section */}
          <HeroSection />
        {/* CompanyLogo Section*/}
        <CompanyLogo />

        {/* Content Section */}
        <ContentSection />

        {/* Feature Section */}
        <FeatureSection />
      </main>
    </div>
  );
};

export default App;

import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CompanyLogo from "./components/CompanyLogo"
import ContentSection from "./components/ContentSection";

const App = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen font-sans">
      <Header />
      <main className="bg-black text-white py-16">
        {/* Hero Section */}
        <HeroSection />
      </main>
      {/* CompanyLogo Section*/}
      <CompanyLogo />
      <ContentSection />
    </div>
  );
};

export default App;

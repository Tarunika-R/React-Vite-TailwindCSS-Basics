import React from "react";

const CompanyGrid = () => {
  const companies = [
    { name: "Company A", logo: "logo1.png" },
    { name: "Company B", logo: "logo2.png" },
    { name: "Company C", logo: "logo3.png" },
    { name: "Company D", logo: "logo4.png" },
  ];

  return (
    <div className="bg-black py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-white mb-8">Trusted By</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-20 h-20 object-contain"
              />
              <p className="text-white text-sm font-semibold">{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyGrid;

import React from "react";

const CompanyGrid = () => {
  const companies = [
    { name: "logoipsum", logo: "/icons/l1.png" },
    { name: "logoipsum", logo: "/icons/l2.png" },
    { name: "logoipsum", logo: "/icons/l3.png" },
    { name: "logoipsum", logo: "/icons/l4.png" },
  ];

  return (
    <div className="bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 pl-10">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg shadow-md"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-12 h-12 object-contain"
              />
              <p className="text-white text-2xl font-semibold">{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyGrid;

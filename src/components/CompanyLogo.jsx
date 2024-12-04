import React from "react";

const CompanyGrid = () => {
  const companies = [
    { name: "logoipsum", logo: "/icons/l1.png" },
    { name: "logoipsum", logo: "/icons/l2.png" },
    { name: "logoipsum", logo: "/icons/l3.png" },
    { name: "logoipsum", logo: "/icons/l4.png" },
  ];

  return (
    <div className="bg-black py-10 md:py-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center px-4 md:px-0 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg hover:shadow-lg transition duration-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-16 h-16 object-contain mb-4"
              />
              <p className="text-white text-xl font-medium">{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyGrid;

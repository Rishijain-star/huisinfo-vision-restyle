import React from 'react';

// Enhanced Grid Interface Component
const GridInterface: React.FC = () => {
  const gridItems = [
    {
      number: "01",
      title: "Centralized Messaging System",
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/Screenshot-2025-04-23-105153.jpg"
    },
    {
      number: "02",
      title: "Centralized Document System",
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/Screenshot_2025-04-24_115601-removebg-preview.png"
    },
    {
      number: "03",
      title: "Sales & Procurement Analysis",
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/CentralizedMessagingSystem_AllModules.jpg"
    },
    {
      number: "04",
      title: "Automated Emails & Letters Workflows",
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/CentralizedMessagingSystem_AllModules.jpg"
    },
    {
      number: "05",
      title: "Process WKB With Ease",
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/Screenshot_2025-04-24_115601-removebg-preview.png"
    },
    {
      number: "06",
      title: "Real-Time Tracking And Digital Signature",
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/Screenshot_2025-04-24_115601-removebg-preview.png"
    }
  ];

  return (
    <div className="bg-gray py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-5xl font-bold text-blue-500 mb-6 leading-tight">
                Why Choose Us
              </h2>
            </div>
            <div className="lg:w-2/3 space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                <strong className="text-gray-800">Tools For Excellence:</strong> Improve Construction Quality With Inspection, Pre-Inspection, Handover,
                And Defect Management.
              </p>
              <p>
                <strong className="text-gray-800">Compliance With WKB:</strong> Easily Meet Wet Kwaliteitsborging (WKB) Standards With Digital Task
                Delegation And Reporting Via The Huisinfo Opname App.
              </p>
              <p>
                <strong className="text-gray-800">Efficient Workflow:</strong> Generate Digital Work Orders And Resolve Defects Faster With Real-Time
                Communication Between Inspectors And Contractors.
              </p>
            </div>
          </div>
        </div>

        {/* Grid Section - 2x3 Layout with Image after Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Number Badge */}
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-white font-bold text-xl">{item.number}</span>
              </div>

              {/* Title and Image Side by Side */}
              <div className="flex flex-col w-full">
                <div className="flex flex-direction items-center justify-between gap-4">
                  <h3 className="font-semibold text-gray-900 text-lg leading-tight flex-1">
                    {item.title}
                  </h3>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-14 object-cover rounded-md shadow"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridInterface;
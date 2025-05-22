import React from 'react';

const UserTypesSection = () => {
  const userTypes = [
    {
      id: 1,
      title: "Buyer Consultant",
      description: "With Huisinfo, Managing And Communicating Additional Housing Wishes Is Easy And Stress-Free For Buyers.",
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/Buyer_sGuide_HuisinfoUsers-1-1.jpg",
      buttonText: "Read More"
    },
    {
      id: 2,
      title: "Aftercare Employee",
      description: "With Huisinfo, Aftercare Employees Can Create Digital Work Orders Under Repair Requests. Aftercare Employees",
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/AftercareEmployee_withscreen-1.png",
      buttonText: "Read More"
    },
    {
      id: 3,
      title: "Subcontractor",
      description: "In Huisinfo, Subcontractors Can Either Receive Digital Work Orders Via Email Or View Them",
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/Subcontractors__HuisinfoUsers.png",
      buttonText: "Read More"
    },
    {
      id: 4,
      title: "Buyer / Renter",
      description: "With Huisinfo, Buyers Or Renters Can Easily Receive Timely Updates! They Can Communicate Directly",
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/Buyers_renters__HuisinfoUsers.png",
      buttonText: "Read More"
    },
    {
      id: 5,
      title: "Site Manager",
      description: "With Huisinfo, Keeping Your Projects Running Smoothly Is Simple! Site Managers Can Conduct Inspections.",
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/Site-manager-1.png",
      buttonText: "Read More"
    },
    {
      id: 6,
      title: "Project Manager",
      description: "With Huisinfo, View Project And Object Details, Create Repair Requests, And Access Centralized Documents",
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/ProjectManager__HuisinfoUsers-1.png",
      buttonText: "Read More"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Huisinfo Users
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how different professionals use Huisinfo to streamline their workflows and enhance communication
          </p>
        </div>

        {/* User Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userTypes.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={user.image}
                  alt={user.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {user.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {user.description}
                </p>
                
                {/* Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  {user.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Workflow?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of professionals who trust Huisinfo to streamline their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;
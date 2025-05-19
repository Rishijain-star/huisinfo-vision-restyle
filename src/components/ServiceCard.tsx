import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'blue' | 'lightBlue';
}

const ServiceCard = ({ title, description, icon, color }: ServiceCardProps) => {
  const bgColor = color === 'blue' ? 'bg-brand-blue' : 'bg-brand-lightBlue';
  
  return (
    <div className="bg-white rounded-2xl shadow-lg transition-transform hover:-translate-y-2 overflow-hidden">
      <div className={`${bgColor} p-6 text-white`}>
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-blue">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="flex items-center text-brand-blue font-medium hover:underline">
          More Information
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
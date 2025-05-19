
import React from 'react';
import { Check } from 'lucide-react';

interface InfoSectionProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  reversed?: boolean;
  action?: React.ReactNode;
  bgClass?: string;
}

const InfoSection = ({ 
  title, 
  subtitle, 
  description, 
  features, 
  image, 
  reversed = false,
  action,
  bgClass = "bg-white"
}: InfoSectionProps) => {
  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="container mx-auto">
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src={image} 
                alt={title} 
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
              {/* Decoration elements */}
              <div className="absolute w-24 h-24 bg-brand-lightBlue/20 -bottom-4 -right-4 rounded-full"></div>
              <div className="absolute w-16 h-16 bg-brand-blue/20 -top-4 -left-4 rounded-full"></div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <div>
              <span className="text-brand-lightBlue font-semibold uppercase tracking-wider text-sm">
                {subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mt-2">
                {title}
              </h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              {description}
            </p>
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <Check size={14} className="text-brand-blue" />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            
            {action && (
              <div className="pt-4">
                {action}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

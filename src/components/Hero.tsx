
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-brand-lightBlue/10 to-brand-blue/10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-lightBlue/20 to-brand-blue/10"></div>
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-lightBlue/30 rounded-full filter blur-3xl"></div>
        <div className="absolute left-20 top-20 w-72 h-72 bg-brand-blue/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-8 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue">
              Uw betrouwbare partner voor alle huisinformatie
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Wij bieden uitgebreide informatie over woningen in Nederland, zodat u geïnformeerd beslissingen kunt nemen over uw vastgoed.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="custom-button">
                Diensten Bekijken
                <ArrowRight size={16} />
              </button>
              <button className="custom-button-outline">
                Meer Informatie
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="clip-house bg-white shadow-2xl rounded-3xl overflow-hidden animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Modern house" 
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-brand-blue">Woning Informatie</h3>
                    <span className="text-sm text-white bg-brand-blue px-3 py-1 rounded-full">Premium</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Adres:</span>
                      <span className="font-medium">Hoofdstraat 123</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Woonoppervlak:</span>
                      <span className="font-medium">120 m²</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Bouwjaar:</span>
                      <span className="font-medium">2010</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-brand-lightBlue rounded-full -z-10"></div>
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-brand-blue rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

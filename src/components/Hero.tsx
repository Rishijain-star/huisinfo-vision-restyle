import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [animationText, setAnimationText] = useState("");
  const handoverText = "Digital Site Inspection & Handover";
  
  useEffect(() => {
    let currentIndex = 0;
    const animationDuration = 10000; // 10 seconds total cycle
    const typingDuration = 5000; // 5 seconds for typing animation
    const pauseDuration = 3000; // 3 seconds pause with complete text
    const clearDuration = 2000; // 2 seconds to clear
    
    const animationInterval = setInterval(() => {
      // Calculate current cycle time (0-10000ms)
      const cycleTime = (Date.now() % animationDuration);
      
      if (cycleTime < typingDuration) {
        // During typing phase (0-5000ms)
        const progress = cycleTime / typingDuration;
        const charIndex = Math.floor(progress * handoverText.length);
        setAnimationText(handoverText.substring(0, charIndex));
      } else if (cycleTime < typingDuration + pauseDuration) {
        // During pause phase (5000-8000ms)
        setAnimationText(handoverText);
      } else {
        // During clearing phase (8000-10000ms)
        const progress = (cycleTime - typingDuration - pauseDuration) / clearDuration;
        const charIndex = Math.floor((1 - progress) * handoverText.length);
        setAnimationText(handoverText.substring(0, charIndex));
      }
    }, 50); // Update frequently for smooth animation
    
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50"></div>
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl"></div>
        <div className="absolute left-20 top-20 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-8 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600">
              {animationText}
              <span className="opacity-0">.</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Huisinfo is all about teamwork. We provide easy-to-use software that helps you and your team stay connected, organized, and in control of your projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all">
                Get started
                <ArrowRight size={16} />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all">
                More information
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-4 animate-float hover:animate-pulse shadow-xl">
                {/* Blue circles positioned behind content */}
                <div className="absolute -left-6 -top-6 w-24 h-24 bg-blue-900 rounded-full z-0"></div>
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-400 rounded-full z-0"></div>
                <div className="absolute -right-4 -bottom-4 w-48 h-48 border-t-8 border-r-8 border-blue-400 rounded-full z-0"></div>
                
                {/* Main card content with higher z-index */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg mt-4 ml-4 relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Modern house"
                    className="w-full h-64 object-cover"
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-lg text-blue-900">Neeraj Villa</h3>
                      <span className="text-sm text-white bg-blue-900 px-4 py-1 rounded-full">Premium</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Address:</span>
                        <span className="font-medium">Indore [MP]</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Area</span>
                        <span className="font-medium">120 m²</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Bouwjaar:</span>
                        <span className="font-medium">2010</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
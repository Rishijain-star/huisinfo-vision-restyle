import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [animationText, setAnimationText] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handoverText = "Digital Site Inspection & Handover";
  
  const images = [
    {
      main: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/HEro-section-image1-1-fotor-202505023258-1-1-1.png",
      overlay: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/20250501_1718_Woningadviesgesprek-in-kantoor_simple_compose_01jt66ryh9fe9t0zq7mq01ttjz.jpg"
    },
    {
      main: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/20250501_1718_Woningadviesgesprek-in-kantoor_simple_compose_01jt66ryh9fe9t0zq7mq01ttjz.jpg",
      overlay: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/HEro-section-image1-1-fotor-202505023258-1-1-1.png"
    }
  ];
  
  // Text animation effect
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

  // Image carousel effect - changes every 10 seconds
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10 seconds
    
    return () => clearInterval(carouselInterval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-10 bottom-10 w-32 h-32 bg-white rounded-full filter blur-2xl opacity-10"></div>
        <div className="absolute left-10 top-10 w-40 h-40 bg-white rounded-full filter blur-2xl opacity-10"></div>
      </div>
      
      <div className="container mx-auto py-16 md:py-24 px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              {animationText}
              <span className="opacity-0">.</span>
            </h1>
            <p className="text-lg text-blue-50 max-w-lg leading-relaxed font-normal">
              Huisinfo is all about teamwork. We provide easy-to-use software that helps you and your team stay connected, organized, and in control of your projects.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-white hover:bg-blue-50 text-blue-600 px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all shadow-md hover:shadow-lg">
                Get started
                <ArrowRight size={16} />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-all">
                More information
              </button>
            </div>
          </div>
          
          {/* Right Images with Carousel */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Main hero image with smooth transition */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <div 
                  className="flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {images.map((imageSet, index) => (
                    <img
                      key={index}
                      src={imageSet.main}
                      alt={`Digital inspection interface ${index + 1}`}
                      className="w-full h-auto flex-shrink-0"
                    />
                  ))}
                </div>
                
                {/* Secondary image overlay with smooth transition */}
                <div className="absolute -bottom-6 -left-6 w-48 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                  <div 
                    className="flex h-full transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                  >
                    {images.map((imageSet, index) => (
                      <img
                        key={index}
                        src={imageSet.overlay}
                        alt={`Professional consultation ${index + 1}`}
                        className="w-full h-full object-cover flex-shrink-0"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Subtle decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full opacity-20"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-cyan-300 rounded-full opacity-30"></div>
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
import React, { useState, useEffect, useRef } from 'react';
import { Clock, Lightbulb, BarChart3 } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  title: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, suffix, title, delay = 0 }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCurrentValue(value);
          clearInterval(counter);
        } else {
          setCurrentValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center p-4 md:p-6 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-3 p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 shadow-lg">
        <div className="text-white w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      <div className="mb-2">
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          {currentValue.toLocaleString()}
        </span>
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/90">
          {suffix}
        </span>
      </div>
      
      <p className="text-white/80 text-xs md:text-sm lg:text-base font-medium max-w-xs leading-tight">
        {title}
      </p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <Clock className="w-full h-full" />,
      value: 75,
      suffix: '+',
      title: 'Companies using Huisinfo',
      delay: 0,
    },
    {
      icon: <Lightbulb className="w-full h-full" />,
      value: 850,
      suffix: '+',
      title: 'Projects completed using Huisinfo',
      delay: 200,
    },
    {
      icon: <BarChart3 className="w-full h-full" />,
      value: 28000,
      suffix: '+',
      title: 'Objects completed using Huisinfo',
      delay: 400,
    },
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 flex items-center justify-center overflow-hidden mt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-cyan-400/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-40 h-40 md:w-64 md:h-64 bg-blue-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-36 h-36 md:w-56 md:h-56 bg-blue-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              title={stat.title}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';

// TypeScript interfaces
interface NewsItem {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

interface NewsUpdatesProps {
  newsData?: NewsItem[];
}

const NewsUpdates: React.FC<NewsUpdatesProps> = ({ newsData = [] }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  // Default data if none provided
  const defaultNewsData: NewsItem[] = [
    {
      id: 1,
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/Gemini_Generated_Image_f45a40f45a40f45a.png",
      title: "The Future Of Sustainable Construction Practices",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut",
      date: "March 15, 2024",
      category: "Construction"
    },
    {
      id: 2,
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/Gemini_Generated_Image_f45a3zf45a3zf45a.png",
      title: "Smart Building Technologies Revolution",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut",
      date: "March 12, 2024",
      category: "Technology"
    },
    {
      id: 3,
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/Gemini_Generated_Image_4quy5v4quy5v4quy-1.png",
      title: "Green Architecture and Urban Planning",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut",
      date: "March 10, 2024",
      category: "Architecture"
    },
    {
      id: 4,
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/Gemini_Generated_Image_f45a40f45a40f45a.png",
      title: "Modern Construction Safety Standards",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut",
      date: "March 8, 2024",
      category: "Safety"
    },
    {
      id: 5,
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/Gemini_Generated_Image_4quy5v4quy5v4quy-1.png",
      title: "Innovative Building Materials",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut",
      date: "March 5, 2024",
      category: "Materials"
    },
    {
      id: 6,
      image: "https://meezodev.com/huisinfo/wp-content/uploads/2025/04/Gemini_Generated_Image_f45a40f45a40f45a.png",
      title: "Digital Transformation in Construction",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut",
      date: "March 3, 2024",
      category: "Digital"
    }
  ];

  const data: NewsItem[] = newsData.length > 0 ? newsData : defaultNewsData;
  const itemsPerSlide: number = 3;
  const totalSlides: number = Math.ceil(data.length / itemsPerSlide);

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentItems = (): NewsItem[] => {
    const startIndex = currentSlide * itemsPerSlide;
    return data.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div className="w-full bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            News & Updates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-blue-300 mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Grid */}
          <div className="mx-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCurrentItems().map((item: NewsItem) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Date */}
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar size={16} className="mr-2" />
                      {item.date}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Read More Button */}
                    <button className="inline-flex items-center text-blue-600 font-semibold hover:text-cyan-600 transition-colors duration-300 group-hover:gap-2">
                      Read More
                      <ArrowRight size={16} className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>

                  {/* Bottom Border Animation */}
                  <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            View All News
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsUpdates;
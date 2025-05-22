
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Mock data for testimonials
const testimonials = [
  {
    id: '1',
    name: 'Michael Johnson',
    company: 'Johnson Logistics',
    stars: 5,
    quote: 'Interstate365 provided excellent service and top-quality equipment that has been perfect for our logistics operation. Their team was knowledgeable and helped us find exactly what we needed.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '2',
    name: 'Sarah Williams',
    company: 'Williams Trucking Co.',
    stars: 5,
    quote: 'We\'ve purchased multiple trailers from Interstate365 and have been consistently impressed with their quality and reliability. Their financing options made the process smooth and manageable.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '3',
    name: 'Robert Thompson',
    company: 'Thompson Transport',
    stars: 4,
    quote: 'The customer service at Interstate365 is unmatched. They\'ve been our go-to equipment provider for years, and we\'ve never been disappointed with their products or after-sales support.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">What Our Customers Say</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Trusted by businesses across the nation for quality equipment and exceptional service.
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-interstate-light rounded-xl p-6 md:p-10 shadow-md">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                        />
                      </div>
                      <div className="flex-grow text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start mb-3">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-interstate-gold fill-interstate-gold" />
                          ))}
                          {[...Array(5 - testimonial.stars)].map((_, i) => (
                            <Star key={i + testimonial.stars} className="w-5 h-5 text-gray-300" />
                          ))}
                        </div>
                        <blockquote>
                          <p className="text-lg italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                        </blockquote>
                        <div>
                          <p className="font-heading font-semibold text-interstate-navy">{testimonial.name}</p>
                          <p className="text-interstate-silver">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-interstate-navy' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white text-interstate-navy rounded-full p-2 shadow-md hover:bg-interstate-light transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white text-interstate-navy rounded-full p-2 shadow-md hover:bg-interstate-light transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

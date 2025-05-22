import React from 'react';
import { ArrowRight, Home, Search, FileCheck, Gauge } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import InfoSection from '../components/InfoSection';
import GridInterface from '../components/GridInterface';
import Footer from '../components/Footer';
import NewsUpdates from '@/components/NewsUpdates';
import UserTypesSection from '@/components/UserTypesSection';
import StatsSection from '@/components/StatsSection';
import VideoHero from '../components/VideoHero';

const Index = () => {
  const handleBookDemo = () => {
    // Add your booking logic here
    console.log('Booking demo...');
    // You can redirect to booking page, open modal, etc.
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-lightBlue font-semibold uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mt-2 mb-4">
              Everything you need for your home
            </h2>
            <p className="text-gray-600">
              At HouseInfo, we offer a comprehensive package of services to help you with all aspects of your home, 
              from inspection to sale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="Home Valuation" 
              description="Get an accurate estimate of your home's value based on current market data."
              icon={<Home size={24} />}
              color="blue"
            />
            <ServiceCard 
              title="Home Inspection" 
              description="Have your (future) home thoroughly inspected by our experienced professionals."
              icon={<Search size={24} />}
              color="lightBlue"
            />
            <ServiceCard 
              title="Building Technical Inspection" 
              description="A thorough analysis of the technical condition of the building and possible defects."
              icon={<FileCheck size={24} />}
              color="blue"
            />
            <ServiceCard 
              title="Energy Advice" 
              description="Gain insight into your home's energy performance and advice on improvements."
              icon={<Gauge size={24} />}
              color="lightBlue"
            />
          </div>
          
          <div className="mt-12 text-center">
            <button className="custom-button">
              View All Services
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <InfoSection 
        title="Your reliable partner in home information"
        subtitle="About us"
        description="HouseInfo was founded in 2015 with the aim of providing consumers with reliable and complete information about homes. Our experts have years of experience in the real estate sector and building technology, allowing us to provide you with professional and reliable advice."
        features={[
          "More than 10,000 satisfied customers",
          "Nationwide coverage throughout the Netherlands",
          "Certified inspectors",
          "Transparent methods and prices"
        ]}
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        action={
          <button className="custom-button">
            More About Us
            <ArrowRight size={16} />
          </button>
        }
      />
      
      {/* Working Method */}
      <InfoSection 
        title="How we work"
        subtitle="Our approach"
        description="Our approach is designed to support you as best as possible in obtaining information about your current or future home. We ensure a smooth and transparent process from start to finish."
        features={[
          "Non-binding intake and quotation",
          "Thorough inspection or analysis",
          "Comprehensive report with findings",
          "Personal follow-up discussion"
        ]}
        image="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        reversed={true}
        bgClass="bg-brand-gray"
        action={
          <div className="flex flex-wrap gap-4">
            <button className="custom-button">
              View Approach
              <ArrowRight size={16} />
            </button>
            <button className="custom-button-outline">
              Contact Us
            </button>
          </div>
        }
      />
      
      {/* GridInterface Component */}
      <GridInterface />
      {/* Video Hero Section */}
     
      <NewsUpdates/>

      <UserTypesSection/>
       <VideoHero
        videoSrc="https://videos.pexels.com/video-files/5183314/5183314-sd_640_360_30fps.mp4" // Replace with your actual video URL
        title="See Huisinfo In Action"
        subtitle="Experience our platform's powerful features through an interactive demonstration"
        buttonText="Book A Demo"
        onBookDemo={handleBookDemo}
        
      />
     
      
      
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-lightBlue font-semibold uppercase tracking-wider">What customers say</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mt-2 mb-4">
              Experiences of our customers
            </h2>
            <p className="text-gray-600">
              Discover what our customers have to say about our services and how we have helped them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white border border-gray-100 p-8  shadow-lg">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFD700" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">
                  "HouseInfo has greatly helped me in making a choice for our new home. The inspection was thorough and the report very clear. Thanks to their advice, we were able to negotiate a substantial discount on the purchase price."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-blue/10  flex items-center justify-center text-brand-blue font-semibold text-lg">
                    {item === 1 ? "JV" : item === 2 ? "MB" : "KD"}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">
                      {item === 1 ? "Jan Visser" : item === 2 ? "Monique Bakker" : "Kees de Vries"}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {item === 1 ? "Amsterdam" : item === 2 ? "Rotterdam" : "Utrecht"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       <StatsSection/>
      
      {/* Call to Action */}
      <section className="py-20 bg-brand-blue relative overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-96 h-96 bg-brand-lightBlue/20  filter blur-3xl"></div>
          <div className="absolute left-20 bottom-20 w-72 h-72 bg-white/10  filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to learn more about your home?
            </h2>
            <p className="text-brand-lightBlue/80 mb-8 text-lg">
              Contact us today for a no-obligation quote or to receive more information about our services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-brand-blue font-medium px-8 py-3  hover:bg-brand-lightBlue transition-colors flex items-center gap-2">
                Request Quote
                <ArrowRight size={16} />
              </button>
              <button className="border-2 border-white text-white font-medium px-8 py-3  hover:bg-white/10 transition-colors flex items-center gap-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      
      
      <Footer />
    </div>
  );
};

export default Index;
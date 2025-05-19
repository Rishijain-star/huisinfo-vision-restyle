
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Heart, Package, Phone, Shield, Truck } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center">Why Choose Interstate365</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              We are dedicated to providing the highest quality transportation equipment with exceptional service and support.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-interstate-light rounded-lg p-6 text-center transition-transform hover:translate-y-[-5px]">
                <div className="bg-interstate-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-interstate-navy" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Quality Equipment</h3>
                <p className="text-gray-600">
                  Carefully selected trucks and trailers that meet our high standards for quality and reliability.
                </p>
              </div>
              
              <div className="bg-interstate-light rounded-lg p-6 text-center transition-transform hover:translate-y-[-5px]">
                <div className="bg-interstate-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-interstate-navy" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Expert Guidance</h3>
                <p className="text-gray-600">
                  Our experienced team provides knowledgeable advice to help you make the best equipment decisions.
                </p>
              </div>
              
              <div className="bg-interstate-light rounded-lg p-6 text-center transition-transform hover:translate-y-[-5px]">
                <div className="bg-interstate-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-interstate-navy" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Warranty Protection</h3>
                <p className="text-gray-600">
                  Comprehensive warranty options to protect your investment and provide peace of mind.
                </p>
              </div>
              
              <div className="bg-interstate-light rounded-lg p-6 text-center transition-transform hover:translate-y-[-5px]">
                <div className="bg-interstate-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-interstate-navy" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">Customer Service</h3>
                <p className="text-gray-600">
                  Dedicated support throughout the purchase process and beyond, whenever you need assistance.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <FeaturedProducts />
        
        {/* Call to Action */}
        <section className="py-16 bg-interstate-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486528003936-70cb14469ebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')" }}
          ></div>
          <div className="container-custom relative z-20">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
                Ready to Find Your Perfect Equipment?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Our inventory is constantly updated with the latest trucks, trailers, and accessories. Contact us today to discuss your needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/inventory" className="btn-secondary">
                  Browse Inventory
                </Link>
                <Link to="/contact" className="btn-outline border-white text-white hover:bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <Testimonials />
        
        {/* About Us */}
        <section className="py-16 bg-interstate-light">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Interstate365: Your Trusted Partner</h2>
                <p className="text-gray-700 mb-4">
                  At Interstate365, we understand the critical role that reliable equipment plays in the transportation industry. Since our founding, we've been committed to providing high-quality trucks, trailers, and equipment that keep America's supply chains moving.
                </p>
                <p className="text-gray-700 mb-6">
                  Our team brings decades of experience in the commercial transportation sector, giving us the expertise to help you find exactly what your business needs to succeed. We pride ourselves on building lasting relationships with our customers through honest communication, exceptional service, and ongoing support.
                </p>
                <Link 
                  to="/about" 
                  className="flex items-center text-interstate-navy font-medium hover:text-interstate-gold transition-colors group"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1580674285051-24639b3ef56c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Interstate365 Team" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-start">
                    <Package className="w-10 h-10 text-interstate-gold mr-3 flex-shrink-0" />
                    <p className="text-sm">
                      <span className="font-bold text-interstate-navy">20+ Years</span> of excellence in the transportation equipment industry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

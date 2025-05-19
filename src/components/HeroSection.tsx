
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-interstate-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')" }}
      ></div>
      
      {/* Content */}
      <div className="container-custom relative z-20 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Your Journey to Quality Transportation Equipment
          </h1>
          <p className="text-lg md:text-xl text-interstate-silver mb-8">
            From premium trucks to high-quality trailers, we provide the equipment you need to keep your business moving forward.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/inventory" className="btn-primary bg-interstate-gold">
              Explore Inventory
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white/10">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="relative z-20 bg-white shadow-lg mx-4 -mt-8 md:-mt-12 lg:-mt-16 rounded-lg mb-8 animate-fade-in">
        <div className="container-custom py-6 px-4 md:px-8">
          <h3 className="font-heading font-semibold text-interstate-navy text-lg mb-4">Find Your Perfect Equipment</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                id="category"
                className="w-full rounded-md border border-gray-300 py-2.5 px-3 focus:border-interstate-navy focus:outline-none focus:ring-1 focus:ring-interstate-navy"
              >
                <option value="">All Categories</option>
                <option value="trucks">Trucks</option>
                <option value="trailers">Trailers</option>
                <option value="parts">Parts & Accessories</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">Make</label>
              <select
                id="make"
                className="w-full rounded-md border border-gray-300 py-2.5 px-3 focus:border-interstate-navy focus:outline-none focus:ring-1 focus:ring-interstate-navy"
              >
                <option value="">All Makes</option>
                <option value="peterbilt">Peterbilt</option>
                <option value="kenworth">Kenworth</option>
                <option value="freightliner">Freightliner</option>
                <option value="reitnouer">Reitnouer</option>
                <option value="utility">Utility</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Year</label>
              <select
                id="year"
                className="w-full rounded-md border border-gray-300 py-2.5 px-3 focus:border-interstate-navy focus:outline-none focus:ring-1 focus:ring-interstate-navy"
              >
                <option value="">Any Year</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <button className="w-full btn-primary bg-interstate-navy">Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

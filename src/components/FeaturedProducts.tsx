
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Mock data for featured products
const featuredProducts = [
  {
    id: '1',
    title: '2026 Reitnouer MaxMiser 53x102',
    category: 'Trailers',
    price: '$89,500',
    image: 'https://images.unsplash.com/photo-1626663011517-8b986529707c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    year: '2026',
    location: 'Indianapolis, IN'
  },
  {
    id: '2',
    title: '2023 Peterbilt 579 Ultraloft',
    category: 'Trucks',
    price: '$175,900',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    year: '2023',
    location: 'Chicago, IL'
  },
  {
    id: '3',
    title: '2024 Freightliner Cascadia',
    category: 'Trucks',
    price: '$162,750',
    image: 'https://images.unsplash.com/photo-1589396575653-c37d13856d5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    year: '2024',
    location: 'Louisville, KY'
  },
  {
    id: '4',
    title: '2025 Utility 3000R Reefer',
    category: 'Trailers',
    price: '$78,900',
    image: 'https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    year: '2025',
    location: 'Cincinnati, OH'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-interstate-light">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="section-title">Featured Equipment</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore our selection of premium trucks and trailers carefully chosen for quality and reliability.
            </p>
          </div>
          <Link 
            to="/inventory" 
            className="flex items-center mt-4 md:mt-0 text-interstate-navy font-medium hover:text-interstate-gold transition-colors group"
          >
            View All Inventory
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-interstate-navy text-white text-xs font-medium py-1 px-2 rounded">
                    {product.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-interstate-gold text-white text-xs font-medium py-1 px-2 rounded">
                    {product.year}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-lg text-interstate-navy group-hover:text-interstate-gold transition-colors">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-interstate-navy">{product.price}</span>
                    <span className="text-sm text-gray-500">{product.location}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;


import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Heart, Phone, Share } from 'lucide-react';

// Mock data for the product details
const productData = {
  id: '2026-reitnouer-maxmiser-53x102',
  title: '2026 Reitnouer MaxMiser 53x102',
  price: '$89,500',
  condition: 'New',
  stockNumber: 'RT2026-53102',
  year: '2026',
  make: 'Reitnouer',
  model: 'MaxMiser',
  type: 'Flatbed',
  length: '53 ft',
  width: '102 inches',
  location: 'Indianapolis, IN',
  description: `
    <p>The 2026 Reitnouer MaxMiser combines lightweight design with superior durability, making it the perfect choice for flatbed operations looking to maximize payload capacity. Built with high-quality aluminum and premium components, this trailer is designed for years of reliable service under demanding conditions.</p>
    <p>This brand new 2026 model features Reitnouer's signature bolted design which reduces weight while maintaining structural integrity. The 53' x 102" platform provides ample space for a variety of cargo types, while the lightweight construction allows for increased payload capacity compared to traditional steel trailers.</p>
  `,
  features: [
    'All-aluminum construction',
    'Bolted main beam design',
    'Coil package with 4 aluminum cross members on 6" centers',
    'LED lights throughout',
    'Heavy-duty landing gear',
    'Anti-lock braking system (ABS)',
    'Hendrickson air ride suspension',
    'Aluminum floor with stake pockets',
    'Low-maintenance wheel ends',
    'Sliding winch track'
  ],
  specs: {
    length: '53 ft',
    width: '102 inches',
    height: '58 inches (deck height)',
    weight: '8,960 lbs (empty weight)',
    axles: '2',
    suspension: 'Hendrickson Air Ride',
    brakes: 'Air with ABS',
    tires: '11R22.5 Goodyear',
    coupler: '2" Kingpin',
    floorType: 'Aluminum'
  },
  images: [
    'https://images.unsplash.com/photo-1626663011517-8b986529707c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1585155784229-aff921ccfa10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1596609548086-85bbf8ddb6b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  ],
  relatedProducts: [
    {
      id: '1',
      title: '2025 Utility 3000R Reefer',
      price: '$78,900',
      image: 'https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      year: '2025',
    },
    {
      id: '2',
      title: '2024 Wilson Pace Setter',
      price: '$92,750',
      image: 'https://images.unsplash.com/photo-1596609548086-85bbf8ddb6b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      year: '2024',
    },
    {
      id: '3',
      title: '2025 Great Dane Freedom',
      price: '$85,500',
      image: 'https://images.unsplash.com/photo-1589396575653-c37d13856d5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      year: '2025',
    }
  ]
};

const ProductDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productData.images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + productData.images.length) % productData.images.length);
  };
  
  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-interstate-light">
        <div className="container-custom py-4">
          <nav className="flex text-sm">
            <a href="/" className="text-interstate-silver hover:text-interstate-navy transition-colors">Home</a>
            <span className="mx-2 text-interstate-silver">/</span>
            <a href="/inventory" className="text-interstate-silver hover:text-interstate-navy transition-colors">Inventory</a>
            <span className="mx-2 text-interstate-silver">/</span>
            <a href="/category/trailers" className="text-interstate-silver hover:text-interstate-navy transition-colors">Trailers</a>
            <span className="mx-2 text-interstate-silver">/</span>
            <span className="text-interstate-navy">{productData.title}</span>
          </nav>
        </div>
      </div>
    
      <div className="container-custom py-8">
        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-interstate-light">
              <img
                src={productData.images[currentImageIndex]}
                alt={`${productData.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 text-interstate-navy rounded-full p-2 shadow-md hover:bg-white transition-colors"
                aria-label="Previous image"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 text-interstate-navy rounded-full p-2 shadow-md hover:bg-white transition-colors"
                aria-label="Next image"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {productData.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-3 h-3 rounded-full ${
                      idx === currentImageIndex ? 'bg-interstate-navy' : 'bg-white'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {productData.images.map((image, idx) => (
                <button
                  key={idx}
                  className={`h-24 rounded-md overflow-hidden ${
                    idx === currentImageIndex ? 'ring-2 ring-interstate-navy' : 'opacity-70 hover:opacity-100 transition-opacity'
                  }`}
                  onClick={() => setCurrentImageIndex(idx)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="font-heading font-bold text-3xl md:text-4xl text-interstate-navy mb-3">
                {productData.title}
              </h1>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-interstate-navy">{productData.price}</span>
                <span className="ml-3 px-3 py-1 bg-interstate-gold/20 text-interstate-gold font-medium text-sm rounded-full">
                  {productData.condition}
                </span>
              </div>
            </div>
            
            <div className="bg-interstate-light rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-interstate-silver">Year</p>
                  <p className="font-medium">{productData.year}</p>
                </div>
                <div>
                  <p className="text-sm text-interstate-silver">Make</p>
                  <p className="font-medium">{productData.make}</p>
                </div>
                <div>
                  <p className="text-sm text-interstate-silver">Model</p>
                  <p className="font-medium">{productData.model}</p>
                </div>
                <div>
                  <p className="text-sm text-interstate-silver">Type</p>
                  <p className="font-medium">{productData.type}</p>
                </div>
                <div>
                  <p className="text-sm text-interstate-silver">Length</p>
                  <p className="font-medium">{productData.length}</p>
                </div>
                <div>
                  <p className="text-sm text-interstate-silver">Width</p>
                  <p className="font-medium">{productData.width}</p>
                </div>
                <div>
                  <p className="text-sm text-interstate-silver">Stock #</p>
                  <p className="font-medium">{productData.stockNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-interstate-silver">Location</p>
                  <p className="font-medium">{productData.location}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <button className="btn-primary w-full">Request Price</button>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="btn-outline flex justify-center items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Dealer
                </button>
                <div className="flex space-x-2">
                  <button className="btn-outline flex-1 flex justify-center items-center">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="btn-outline flex-1 flex justify-center items-center">
                    <Share className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-heading font-semibold text-lg mb-4">Financing Options</h3>
              <p className="text-gray-600 mb-4">
                Flexible financing available for qualified buyers. Get pre-approved today.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-interstate-light px-4 py-2 rounded-md">
                  <p className="text-sm text-interstate-silver">Starting at</p>
                  <p className="font-bold text-interstate-navy">$1,250/mo*</p>
                </div>
                <button className="btn-secondary">Apply Now</button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                *Estimated payment with approved credit. Terms and conditions apply.
              </p>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mb-12">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 px-6 font-medium whitespace-nowrap ${
                  activeTab === 'description'
                    ? 'text-interstate-navy border-b-2 border-interstate-navy'
                    : 'text-gray-500 hover:text-interstate-navy'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`py-4 px-6 font-medium whitespace-nowrap ${
                  activeTab === 'features'
                    ? 'text-interstate-navy border-b-2 border-interstate-navy'
                    : 'text-gray-500 hover:text-interstate-navy'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`py-4 px-6 font-medium whitespace-nowrap ${
                  activeTab === 'specifications'
                    ? 'text-interstate-navy border-b-2 border-interstate-navy'
                    : 'text-gray-500 hover:text-interstate-navy'
                }`}
              >
                Specifications
              </button>
            </div>
          </div>
          
          <div className="py-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: productData.description }} />
            )}
            
            {activeTab === 'features' && (
              <div>
                <h3 className="font-heading font-semibold text-xl mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {productData.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-interstate-gold mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div>
                <h3 className="font-heading font-semibold text-xl mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {Object.entries(productData.specs).map(([key, value], idx) => (
                    <div key={idx} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        <div>
          <h2 className="font-heading font-bold text-2xl text-interstate-navy mb-6">Related Trailers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productData.relatedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-interstate-gold text-white text-xs font-medium py-1 px-2 rounded">
                    {product.year}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-lg text-interstate-navy">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-interstate-navy">{product.price}</span>
                    <button className="text-sm text-interstate-navy hover:text-interstate-gold transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

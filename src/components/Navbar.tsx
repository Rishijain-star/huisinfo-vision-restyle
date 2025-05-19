
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/19ff3961-8332-469d-b988-1120ea834cec.png" 
                alt="Huisinfo Logo" 
                className="h-10" 
              />
              <span className="ml-2 text-xl font-heading font-bold text-brand-blue">HuisInfo</span>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">Diensten</a>
            <a href="#" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">Over Ons</a>
            <a href="#" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">Werkwijze</a>
            <a href="#" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">Contact</a>
          </div>
          
          <div className="hidden md:block">
            <button className="custom-button">
              Offerte Aanvragen
            </button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-brand-blue">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t mt-4">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-brand-blue font-medium transition-colors py-2">Home</a>
              <a href="#" className="text-gray-700 hover:text-brand-blue font-medium transition-colors py-2">Diensten</a>
              <a href="#" className="text-gray-700 hover:text-brand-blue font-medium transition-colors py-2">Over Ons</a>
              <a href="#" className="text-gray-700 hover:text-brand-blue font-medium transition-colors py-2">Werkwijze</a>
              <a href="#" className="text-gray-700 hover:text-brand-blue font-medium transition-colors py-2">Contact</a>
              <button className="custom-button mt-2 w-full justify-center">
                Offerte Aanvragen
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

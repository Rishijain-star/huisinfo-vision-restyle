
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-heading font-bold text-interstate-navy">
              INTERSTATE<span className="text-interstate-gold">365</span>
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-interstate-navy hover:text-interstate-gold transition-colors">
              Home
            </Link>
            <Link to="/inventory" className="font-medium text-interstate-navy hover:text-interstate-gold transition-colors">
              Inventory
            </Link>
            <Link to="/financing" className="font-medium text-interstate-navy hover:text-interstate-gold transition-colors">
              Financing
            </Link>
            <Link to="/about" className="font-medium text-interstate-navy hover:text-interstate-gold transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium text-interstate-navy hover:text-interstate-gold transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-interstate-navy hover:text-interstate-gold transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="text-interstate-navy hover:text-interstate-gold transition-colors" aria-label="Account">
              <User size={20} />
            </button>
            <button className="text-interstate-navy hover:text-interstate-gold transition-colors" aria-label="Cart">
              <ShoppingCart size={20} />
            </button>
            <button 
              className="md:hidden text-interstate-navy hover:text-interstate-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="font-medium text-interstate-navy hover:text-interstate-gold transition-colors">
              Home
            </Link>
            <Link to="/inventory" className="font-medium text-interstate-navy hover:text-interstate-gold transition-colors">
              Inventory
            </Link>
            <Link to="/financing" className="font-medium text-interstate-navy hover:text-interstate-gold transition-colors">
              Financing
            </Link>
            <Link to="/about" className="font-medium text-interstate-navy hover:text-interstate-gold transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium text-interstate-navy hover:text-interstate-gold transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

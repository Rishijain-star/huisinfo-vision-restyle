import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);
  const timeoutRef = useRef(null);
  
  // Clear timeout when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const menuItems = [
    {
      title: "Home",
      link: "#",
      hasDropdown: false
    },
    {
      title: "Modules",
      link: "#",
      hasDropdown: true,
      dropdownItems: [
        { title: "Build Quality", link: "#" },
        { title: "Buyer Guidance", link: "#" },
        { title: "Aftercare & Services", link: "#" }
      ]
    },
    {
      title: "For Whom",
      link: "#",
      hasDropdown: true,
      dropdownItems: [
        { title: "Buyer Consultant", link: "#" },
        { title: "Aftercare Employee", link: "#" },
        { title: "Subcontractors", link: "#" },
        { title: "Buyer/Renters", link: "#" },
        { title: "Site Managers", link: "#" },
        { title: "Project Manager", link: "#" }
      ]
    },
    {
      title: "Why choose us",
      link: "#",
      hasDropdown: true,
      dropdownItems: [
        { title: "Benefits", link: "#" },
        { title: "Success Stories", link: "#" },
        { title: "Our Team", link: "#" }
      ]
    },
    {
      title: "Resources",
      link: "#",
      hasDropdown: true,
      dropdownItems: [
        { title: "FAQ's", link: "#" },
        { title: "Informative Videos", link: "#" },
        { title: "News & Blogs", link: "#" }
      ]
    },
    {
      title: "Contact us",
      link: "#",
      hasDropdown: true,
      dropdownItems: [
        { title: "Book A Demo", link: "#" },
        { title: "Career", link: "#" },
        { title: "Support", link: "#" }
      ]
    }
  ];

  const handleMouseEnter = (index) => {
    // Clear any existing timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    // Set a timeout before closing the dropdown
    timeoutRef.current = setTimeout(() => {
      if (clickedItem === null) {
        setHoveredItem(null);
      }
    }, 300); // 300ms delay before closing
  };
  
  const handleDropdownClick = (index) => {
    if (clickedItem === index) {
      setClickedItem(null);
    } else {
      setClickedItem(index);
      setHoveredItem(index);
    }
  };
  
  const handleDropdownItemClick = (e, dropdownLink) => {
    // Prevent the default behavior to stop immediate navigation
    // This gives a small delay so the user can see the click feedback
    e.preventDefault();
    
    // Navigate after a small delay
    setTimeout(() => {
      window.location.href = dropdownLink;
    }, 150);
  };
  
  // Determine if a dropdown should be visible
  const isDropdownVisible = (index) => {
    return hoveredItem === index || clickedItem === index;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/19ff3961-8332-469d-b988-1120ea834cec.png" 
                alt="Huisinfo Logo" 
                className="h-10" 
              />
              <span className="ml-2 text-xl font-bold text-blue-600">HuisInfo</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div 
                  className="flex items-center cursor-pointer"
                  onClick={() => item.hasDropdown && handleDropdownClick(index)}
                >
                  <a className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    {item.title}
                  </a>
                  {item.hasDropdown && (
                    isDropdownVisible(index) ? 
                    <ChevronUp className="h-4 w-4 ml-1 text-gray-700" /> : 
                    <ChevronDown className="h-4 w-4 ml-1 text-gray-700" />
                  )}
                </div>
                
                {item.hasDropdown && isDropdownVisible(index) && (
                  <div 
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20 overflow-hidden"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-1 border-l-2 border-blue-400 animate-slideDown">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.link}
                          onClick={(e) => handleDropdownItemClick(e, dropdownItem.link)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {dropdownItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
              Offerte Aanvragen
            </button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-blue-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t mt-4 animate-slideDown">
            <div className="flex flex-col">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0">
                  <div 
                    className="flex items-center justify-between py-3 px-1"
                    onClick={() => item.hasDropdown && handleDropdownClick(index)}
                  >
                    <a href={item.hasDropdown ? "#" : item.link} className="text-gray-700 font-medium">
                      {item.title}
                    </a>
                    {item.hasDropdown && (
                      clickedItem === index ? 
                      <ChevronUp className="h-4 w-4 text-gray-700" /> : 
                      <ChevronDown className="h-4 w-4 text-gray-700" />
                    )}
                  </div>
                  
                  {item.hasDropdown && clickedItem === index && (
                    <div className="pl-4 pb-2 border-l-2 border-blue-400 ml-2 animate-slideDown">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.link}
                          onClick={(e) => handleDropdownItemClick(e, dropdownItem.link)}
                          className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                        >
                          {dropdownItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mt-4 transition-colors">
                Offerte Aanvragen
              </button>
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.2s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
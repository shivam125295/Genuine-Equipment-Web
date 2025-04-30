import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { Menu, X, Home, Phone, Package, Info, FileText } from 'lucide-react';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
 { name: 'Home', icon: <Home className="w-5 h-5" /> },
    { name: 'Products', icon: <Package className="w-5 h-5" /> },
    { name: 'About', icon: <Info className="w-5 h-5" /> },
    { name: 'Contact', icon: <Phone className="w-5 h-5" /> },
    { name: 'Policy', icon: <FileText className="w-5 h-5" /> }
  ];
  return (
    <>

<div >


      <div className="flex justify-between items-center h-16 border-solid bg-green-200 ">
<div style={{margin:"20px"}}>email@goyalenterprises.com  <span style={{color:"darkcyan"}}>123456789</span></div>

  <div style={{color:"black"}}>Faridabad, Haryana</div>

</div>

<nav className="bg-white shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16  gap-[10px]">
          <div className="flex items-center   gap-[10px]">
       <NavLink to="/"  >   <div>

            <span className="text-xl font-bold text-blue-900">Goyal</span>
            <span className="text-xl font-bold text-red-900">Enterprises</span>
            </div></NavLink>
          </div>

          {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
              key={item.name}
              href={`${item.name.toLowerCase()}`}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {menuItems.map((item) => (
              <a
              key={item.name}
              href={`${item.name.toLowerCase()}`}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>

            </div>

    </>
  );
};

export default Header;
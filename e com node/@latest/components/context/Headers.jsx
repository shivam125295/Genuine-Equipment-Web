import React from "react";
import { Phone, MapPin, Clock, ShoppingCart } from "lucide-react";
import Navbar from "../../Pages/user/Navbar";
import { Navigate, NavLink } from "react-router-dom";
import Navbars from "../../Pages/user/Navbar";

function Headers() {
  return (
    <>
      {/* Header */}
      <header className="w-full  top-0 z-10 bg-white shadow-md">
        {/* Top Info Bar */}
        <div className="bg-gray-800 text-white py-2 px-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            {/* Left Info */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
              <div className="flex items-center">
                <Phone size={18} className="mr-2 m-2 text-yellow" />
                9999999999
              </div>
        
             
            </div>

            {/* Right Buttons */}
            <div className="flex flex-wrap justify-center md:justify-end gap-3 mt-2 md:mt-0">
           <NavLink to={`/login`}>
            <button className="bg-amber-600 text-white px-4 py-2 hover:rounded-full rounded-md">
                LOGIN
              </button>
           </NavLink>  
            
            <NavLink to={`/register`}>
                <button className="bg-amber-600 text-white px-4 py-2 rounded-md">
                  SIGNUP
                </button>
            </NavLink>
             
              <button className="relative text-white w-18 text-lg uppercase font-semibold px-8 py-2 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform">
                Cart (0)
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navbar ko neeche fix karne ke liye */}
      <div className="pt-[60px] md:pt-[80px] pb-[50px]">
        {/* Is div ka pt (padding-top) header ke neeche space banane ke liye hai */}
        <Navbars />
      </div>


    
    </>
  );
}

export default Headers;

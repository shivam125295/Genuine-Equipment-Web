import React from 'react';
import { Truck, Forklift, Scissors, Plane as Crane, Construction, Package, Warehouse, Drum, ShoppingCart, Gift as Lift, Route } from 'lucide-react';
import  { useNavigate, Navigate, NavLink,Link } from 'react-router-dom';

const products = 
[
{ icon: <Truck className="w-12 h-12" />, name: 'PALLET TRUCK', route:"/hydraulic" },
  { icon: <Forklift className="w-12 h-12" />, name: 'AIR COMPRESSOR',route:"/aircompressor" },
  { icon: <Scissors className="w-12 h-12" />, name: 'BATTERY-CHARGER' ,route:"/batterycharger"},
  { icon: <Crane className="w-12 h-12" />, name: 'HEAVY LIFT',route:"/heavylift" },
  { icon: <Construction className="w-12 h-12" />, name: 'PLUG CLEANER',route:"/plugcleaner" },
  { icon: <Lift className="w-12 h-12" />, name: 'POWER PACK',route:"/powerpack" },
  { icon: <Package className="w-12 h-12" />, name: 'PU PIPE',route:"/pupipe" },
  { icon: <Warehouse className="w-12 h-12" />, name: 'SERVICES',route:"/service" },
  { icon: <Drum className="w-12 h-12" />, name: 'TOOLKITS',route:"/toolkit" },
  { icon: <ShoppingCart className="w-12 h-12" />, name: 'TROLLEY',route:"/toolstrolly" }
  ,
  { icon: <ShoppingCart className="w-12 h-12" />, name: 'WALL HANGER',route:"/wallhanger" }
  ,
  { icon: <ShoppingCart className="w-12 h-12 mb-8"  />, name: 'WORK BENCH',route:"/workbench" }
];


function ProductMenu() {
  const navigate= useNavigate()
  return (
    <div className="min-h-screen bg-red-100 py-12 px-4 sm:px-6 lg:px-8 bg-[url(https://plus.unsplash.com/premium_photo-1739272760204-bd070aaea685?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhY2tyb3VuZCUyMGxpZ2h0fGVufDB8fDB8fHww)]">
        <button onClick={()=>navigate (-1)} className="relative flex items-center justify-center w-48 h-14  text-black text-xl font-semibold rounded-2xl group overflow-hidden">
    <div className="absolute left-1 top-1 bg-green-400 w-1/4 h-12 rounded-xl flex items-center justify-center group-hover:w-[92%] duration-500 z-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px" width="25px">
        <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000" />
        <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#000000" />
      </svg>
    </div>
    <span className="relative z-20 "></span>
  </button>
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Industrial Equipment
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => navigate(product.route)}
             > <div className="aspect-square bg-red-600 flex items-center justify-center p-6 group-hover:bg-red-700 transition-colors duration-300">
              <div className="text-white transform transition-transform duration-300 group-hover:scale-110">
                  {product.icon}
 
                </div>
              </div>
              <div className="p-2 text-center">
                <h6 className="text-sm font-semibold text-gray-900">
                  {product.name}
                </h6>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600 rounded-lg transition-colors duration-300" />
          
            </div>

          ))}
        </div>
      </div>
      <br />
    </div>
  );
}

export default ProductMenu;
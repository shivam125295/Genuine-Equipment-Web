import React from "react"
// import { Player } from '@lottiefiles/react-lottie-player';
import { Phone, MapPin, Mail } from 'lucide-react';
import logo from '../assets/ge logo.png'
import explore from '../assets/explore.json'
import Lottie from "lottie-react";
import { NavLink ,Link} from "react-router-dom";

function Footer() {
const search =()=>{
  alert("helo")
}
  
    return (
      <>
      
      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-gray-300 py-10 relative  ">


        
        <div > <img src={logo} alt="" className="w-38 h-auto animate-glow" srcset=""style={{mixBlendMode:"color" } } />
        <div className="container mx-auto px-4  ">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Company Info */}
            <div>
              <h4 className="text-yellow-500 text-xl font-semibold mb-4  "><span className="text-yellow-600"> Company Detail</span></h4>
              {/* <p className="text-yellow-500 text-xl font-semibold mb-4 h- ">Company Detail</p> */}

              <p className="text-sm leading-relaxed">
                Incorporated in 1987, our company has established its position
                in the Material Handling industry with a wide range of
                products including Scissor Lifts, Aerial Work Platforms,
                and Hydraulic Equipment.
              </p>
              <button className="text-yellow-500 text-sm mt-2 hover:text-yellow-400">
                READ MORE...
              </button>
            </div>

            {/* Project Gallery */}
            <div className="border-yellow-800 border-2 p-4 rounded-md  ">
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">Project Gallery</h3>
              <div className="grid grid-cols-3 gap-2 bg-red-300    border-red-800 border-1 p-2 rounded-md">
                {/* {[...Array(6)].map((_, i) => ( */}
                  <div  className="aspect-square bg-gray-700 rounded-sm overflow-hidden">
                    <img
                      src={`https://5.imimg.com/data5/SELLER/Default/2022/2/CM/SO/AA/1966827/6x8-d-500x500.JPG `}

                 
                      className="w-full h-full object-cover hover:opacity-75 transition-opacity "
                      />
                  </div>

                  <div  className="aspect-square bg-gray-700 rounded-sm overflow-hidden">
                    <img
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_B9NAJ4XhnEWj-RyYASfwUQ1WiStzONlUtGjGHBlsoaHn9exC3lPijGI&s`}

                      className="w-full h-21 object-cover hover:opacity-75 transition-opacity "
                      />
                  </div>



                  <div  className="aspect-square bg-gray-700 rounded-sm overflow-hidden">
                    <img
                      src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04Nm5JpyCFQjLR-2psY2rCfst_XCL6iFtBA&s`}

                 
                      className="w-full h-full object-cover hover:opacity-75 transition-opacity "
                      />
                  </div>
                

                  <div  className="aspect-square bg-gray-700 rounded-sm overflow-hidden">
                    <img
                     
src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhLmgyYZMVy_hj1kNWSkISVLu04kI8hq_ww&s`}
                      // alt={`Gallery image ${i + 1}`}
                      className="w-full h-full object-cover hover:opacity-75 transition-opacity "
                      />
                  </div>

                  <div  className="aspect-square bg-gray-700 rounded-sm overflow-hidden">
                    <img
                     
src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo7DvyId1yc_NVfeWNUWFrk3j6YJrmw4IYUA&s`}
                      // alt={`Gallery image ${i + 1}`}
                      className="w-full h-full object-cover hover:opacity-75 transition-opacity "
                      />
                  </div>
                

                <div>
                  

                  <div  className="aspect-square bg-gray-100 rounded-sm overflow-hidden">
                    
                     
 <Lottie onClick={search}  animationData={explore} loop={true} />
                 
                      {/* className="w-full h-full object-cover hover:opacity-75 transition-opacity "/ */}
                      
                  </div>
                </div>
                
                
              </div>


             
              
            </div>

            {/* Contact Info */}
            <div>
            <NavLink to={`/contact`} > <h3 className="text-xl font-semibold mb-4 text-yellow-500 ">Contact Us</h3></NavLink>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-yellow-500 w-5 h-5 mt-1" />
                  <p className="text-sm">
                D-53,Dabua colony Nit Faridabad Haryana,121005
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium text-yellow-500">PHONE</h4>
                  <div className="flex items-center gap-3">
                    <Phone className="text-yellow-500 w-4 h-4" />
                    <a href="tel:+917966630080" className="text-sm hover:text-yellow-500">
                      +91 7966630080
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-yellow-500 w-4 h-4" />
                    <a href="tel:+919820329329" className="text-sm hover:text-yellow-500">
                      +91 9820329329
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-yellow-500 w-4 h-4" />
                    <a href="sb5757369@gmail.com" className="text-sm hover:text-yellow-500">
                      ABC@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div> 
            <br />
          </div>
           <div className="w-full bg-gray-400 h-1 /2" ></div><br />   
          <div className="flex gap-1">

          <div className="w-40  ">
      <img className="  border-red-800 border-1 p-1 rounded-md h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQof99riIOtOvzjIn5jjPeo1c64mLl-5GcGzg&s" alt="" />
    </div>
<br />
    <div className="w-full flex ">
    <img className="  border-yellow-600 border-1 p-1 rounded-md h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjm83wKJebPIbG_IMke_Es2tjR-NA8sABt0w&s" alt="" />



    </div>
    <div className=" text-sm text-gray-500 mt-8  ">
          <p className="row " > © {new Date().getFullYear()}</p>
          <p className="row ">Goyal Enterprises Pvt.ltd.All Rights reserved stamp</p>
        </div>
        </div>
          </div>

        {/* Decorative bottom border with equipment silhouettes */}

<br />
<br />
            </div>
      </footer>
        {/* Copyright */}

        <div>

        </div>
  
  </>
  )
  
  
}
export default Footer
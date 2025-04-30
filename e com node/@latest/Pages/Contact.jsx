import React, { useEffect } from 'react'
import LAYOUT from '../components/LAYOUT.JSX'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { FaUser, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Google from './user/Google'
import contact from '../assets/contact.json'
import Lottie from 'lottie-react';
import { Code, BookOpen } from 'lucide-react';

const Contact = (props) => {

 const show=()=>{
  alert("hello world")
 }
  return (
    <LAYOUT>
      <br />
      
<div className="min-h-screen ">







      {/* Header */}
      <header className="bg-green-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
      
              


        {/* Left Content */}
        <div className="w-full md:w-1/2 p-6 md:p-14 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Welcome to <span className="text-purple-600">Genuine Equipment</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Buy <span  className="text-purple-600"></span>
            <span class="text" ></span>
          </h2>
          
          <div onDoubleClick={show} className="mt-4 inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full w-fit">
            <BookOpen className="h-5 w-5 mr-2" />
            <span>CATALOG</span>
          </div>
          
          <p className="mt-6 text-gray-600 text-lg">
           we are here to help you with any questions or concerns you may have. Please don't hesitate to contact 
          </p>
          
          <div className="mt-6 flex space-x-8 gap-4  whitespace-nowrap">
            <button className="bg-gray-900 text-white px-6 py-4 w-15 rounded hover:bg-gray-800 font-medium">
              catalog
            </button> 
            <button className="bg-gray-200 text-gray-800 px-6 py-3 w-25 rounded hover:bg-gray-300 font-medium">
              Explore BlOG
            </button>
          </div>
        </div>
        <div/>
        
        <div>
<Lottie style={{height:"400px",width:"80%", position:"end", alignItems:"end" }} animationData={contact} loop={true} />
 
          </div>
        </div>
</div>
      </header>
      <br />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="bg-red-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 p-4">Contact Details</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaUser className="text-gray-400 text-xl mt-1" />
                <div>
                  <p className="text-gray-500 p-1">Contact Person:</p>
                  <p className="font-medium">Jagdish Goyal(Proprietor)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-gray-400 text-xl mt-1" />
                <div>
                  <p className="text-gray-500">Address:</p>
                  <p className="font-medium">Goyal Enterprises</p>
                  <p className="text-gray-600">
                  D-126 ,Dabua colony<br />
                    DABUA PALI ROAD NEAR H.P PETROL PUMP<br />
                    N.I.T  FARIDABAD(HR)<br />
                    FARIDABAD, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhone className="text-gray-400 text-xl mt-1" />
                <div>
                  <p className="text-gray-500">Call Us:</p>
                  <p className="font-medium">9899603596</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10  rounded-lg shadow-md ml-2 ">
            <h2 className="text-2xl p-2 font-semibold mb-8">Contact Us</h2>
            
            <form className="space-y-6  ">
              <div> 
                <textarea
                  className="  w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="6"
                  placeholder="To Get Best QUOTES Describe Your Requirements in Detail Like:
- What Are You Looking For
- Features / Specifications
- Application / Usage
- Minimum Order Quantity, etc"
                ></textarea>
              </div>

              <div className="flex gap-2 p-2">
                <select className="w-20 p-3 border border-gray-300 rounded-md">
                  <option>+91</option>
                </select>
                <input
                  type="tel"
                  placeholder="Enter your number:"
                  className="flex-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <input
                type="text"
                placeholder="Enter your name:"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <button
                type="submit"
                className="w-full bg-red-700 text-white py-3  rounded-md hover:bg-red-800 transition-colors"
              >
                Contact Now
              </button>
            </form>
          </div>
        </div>
      </main>


    </div>
    <br />
    <div className="rounded-full ">
      
<Google/>
    </div>
    <br />
 
    </LAYOUT>
  )
}

export default Contact
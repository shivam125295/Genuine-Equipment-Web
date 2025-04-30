import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const slides = [
  {
    title: "Design, Engineering and Installation of",
    subtitle: "Material Handling Equipment",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
    buttonText: "MORE"
  },
  {
    title: "Advanced Solutions for",
    subtitle: "Industrial Automation",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    buttonText: "EXPLORE"
  },
  {
    title: "Innovative Technology for",
    subtitle: "Manufacturing Excellence",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0jIejuKl4F_OD8YlMHeZmC7segdc1Xp_tdg&s",
    buttonText: "LEARN MORE"
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      

      {/* Hero Section with Slider */}
      <div className="relative h-[calc(100vh-4rem)] overflow-hidden">
        
        {slides.map((slide, index) => (

          
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-transparent" />
            </div>
            
            <div className="absolute inset-0 px-20  items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl ">
                  <h2 className="text-4xl font-bold text-white mb-2">
                    {slide.title}
                  </h2>
                  <h3 className="text-5xl font-bold text-white mb-8">
                    {slide.subtitle}
                  </h3>
                  <button className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-red-50 transition-colors">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Inquiry Button */}
        <button className="absolute bottom-8 right-8 bg-blue-900 text-white px-6 py-3 rounded-xl flex items-center space-x-2 hover:bg-blue-800 transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span>Inquire Now</span>
        </button>
      </div>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Ballpit from './Ballpoint';

const testimonials = [
  {
    id: 1,
    name: "Ankit S. Shah",
    position: "Sr. Engineer (Production)",
    company: "ITT CORPORATION INDIA PVT. LIMITED",
    text: "Material handling is an integral part of any industrial activity. With growing business, a greater emphasis is laid on productivity, profitability as well as resource conservation and ecological preservation. Material handling plays a very crucial role in sustaining efficiency in financial and human resources.",
    logoUrl: "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    position: "Operations Director",
    company: "Toyota Motors",
    text: "Future industries is one of the premier design, manufacturing and fully customer oriented entities for Material handling equipment and provides total customise product to customer.",
    logoUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 3,
    name: "SALMON KHAN ",
    position: "Supply Chain Manager",
    company: "Volvo Group",
    text: "The material handling solutions provided have significantly improved our operational efficiency. The customized approach to our specific needs has been invaluable to our manufacturing process.",
    logoUrl: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 4,
    name: "ABC SHARMA",
    position: "Chief Operations Officer",
    company: "Zydus Healthcare",
    text: "The attention to detail and commitment to quality has made our partnership with this company extremely valuable. Their solutions have helped us maintain our competitive edge in the market.",
    logoUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80"
  },

];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 2000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full isolation-isolate    text-black]">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl font-bold mb-12 text-center "><span className='text-red-400'>CLIENTS & TESTIMONIALS </span></h2>
        <h2  > <img src="https://neilpatel.com/wp-content/uploads/2021/03/Testimonial-Examples_Featured-Image.png" alt="" srcset="" height={"80px"} width={"160px"} style={{mixBlendMode:"color-burn" , alignItems:"center",}}  /></h2>
<br />
        <div className="flex flex-col md:flex-row">
          {/* Testimonial Text Section */}
          <div className="w-full md:w-1/2 p-6">
            <div className="h-full flex flex-col justify-center">
              <p className="text-lg mb-8">{testimonials[currentIndex].text}</p>
              <div className="mt-auto">
                <p className="font-bold text-xl">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                <p className="text-gray-600">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>

          {/* Client Logos Section */}
          <div className="w-full md:w-1/2 p-6">
            <div className="grid grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-gray-500 p-4 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    index === currentIndex ? 'ring-4 ring-blue-500 scale-105' : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => handleDotClick(index)}
                >
                  <img
                    src={testimonial.logoUrl}
                    alt={`${testimonial.company} logo`}
                    className="max-h-30 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-red-500' : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>



          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>




        </div>
        

      </div>
      <div style={{position: 'relative', minHeight: '100px', maxHeight: '100px', width: '100%'}}>
  <Ballpit
    count={200}
    gravity={0.7}
    friction={0.8}
    wallBounce={0.95}
    followCursor={true}
  />
</div>
    </div>
  );
};

export default TestimonialSlider;

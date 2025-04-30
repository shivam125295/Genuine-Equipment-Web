import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 h-screen flex items-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Animated Circles */}
          <div className="relative h-[400px] flex items-center justify-center">
            <div className={`absolute w-64 h-64 bg-purple-200 rounded-full transition-all duration-1000 delay-100 
              ${isVisible ? 'opacity-20 scale-100' : 'opacity-0 scale-50'} 
              animate-pulse`} 
            />
            <div className={`absolute w-48 h-48 bg-indigo-300 rounded-full transition-all duration-1000 delay-300
              ${isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-50'}
              animate-bounce`}
              style={{ animationDuration: '3s' }}
            />
            <div className={`absolute w-32 h-32 bg-pink-300 rounded-full transition-all duration-1000 delay-500
              ${isVisible ? 'opacity-40 scale-100' : 'opacity-0 scale-50'}
              animate-ping`}
              style={{ animationDuration: '2s' }}
            />
          </div>

          {/* Right side - Content */}
         
        </div>
      </div>
    </div>
  );
}

export default App;
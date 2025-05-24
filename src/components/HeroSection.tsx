import React from 'react';
import { Download } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white relative">
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4 animate-fadeIn">
            Bhuvanesh M
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
            Computer Science Engineering Student | Developer
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              View My Projects
            </a>
            <a 
              href="#" 
              className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f3f4f6" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,208C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
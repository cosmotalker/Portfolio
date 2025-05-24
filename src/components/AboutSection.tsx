import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            About Me
          </h2>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Bhuvanesh M, an 18-year-old first-year Computer Science Engineering student at 
              Kings Engineering College. I am passionate about software development and have a 
              strong foundation in Python, MySQL, and C, which I gained through academic studies 
              and personal projects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              I completed my schooling under the CBSE board, where I scored 94% in my Computer 
              Science exam. Throughout my academic journey, I've explored several exciting 
              projects that blend my technical skills with my passion for building real-world 
              applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm transform transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Education</h3>
              <p className="text-gray-600">Computer Science Engineering at Kings Engineering College</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm transform transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Experience</h3>
              <p className="text-gray-600">Technical Blogger and Open Source Developer</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm transform transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Interests</h3>
              <p className="text-gray-600">Software Development, Space Science, Technical Writing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
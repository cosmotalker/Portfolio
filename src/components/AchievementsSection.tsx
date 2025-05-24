import React from 'react';
import { Award, Shield } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md p-8 transform transition-transform hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="h-10 w-10 text-blue-600 mr-4" />
                <h3 className="text-xl font-semibold text-blue-800">CosmoTalker Library</h3>
              </div>
              <p className="text-gray-700">
                Developed a Python library called <strong>CosmoTalker</strong> with over 
                <span className="text-blue-600 font-bold"> 7.43k+ worldwide downloads</span>, 
                providing astronomical data and interactive space exploration tools.
              </p>
              <div className="mt-4 flex justify-end">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                  7.43k+ Downloads
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md p-8 transform transition-transform hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="h-10 w-10 text-blue-600 mr-4" />
                <h3 className="text-xl font-semibold text-blue-800">Security Excellence</h3>
              </div>
              <p className="text-gray-700">
                Passed <span className="text-blue-600 font-bold">99% socket security tests</span>, 
                confirming the robustness of my software development practices and attention to 
                security details in networking applications.
              </p>
              <div className="mt-4 flex justify-end">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                  99% Security Rate
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-blue-50 rounded-xl shadow-md p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Academic Excellence</h3>
            <p className="text-gray-700">
              Scored <span className="text-blue-600 font-bold">94%</span> in Computer Science 
              under the CBSE board, demonstrating strong academic foundations in computing concepts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
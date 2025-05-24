import React from 'react';
import { Github } from 'lucide-react';
import { ProjectProps } from '../types';

const projects: ProjectProps[] = [
  {
    title: "CosmoTalker",
    description: "A platform that allows users to explore the wonders of the universe! From learning about celestial bodies like stars and planets 🌠🌍 to diving into scientific topics 🔬, CosmoTalker provides a fun and interactive way to discover space and science. Includes eco-conscious features by promoting global reforestation through Ecosia.",
    image: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Sheetsmart",
    description: "Uses CSV files to dynamically generate HTML pages displaying product information from a database. Personalized product pages allow users to interact with essential data efficiently.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6">
            Projects
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Check out some of my recent projects that showcase my skills and interests.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg"
              >
                {project.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-end">
                    <a 
                      href="#" 
                      className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="https://github.com/bhuvanesh-m-dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-md"
            >
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
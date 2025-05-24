import React, { useState } from 'react';
import { X, Linkedin, Github, Twitter, Youtube, Code } from 'lucide-react';
import { SocialLinkProps } from '../types';

const socialLinks: SocialLinkProps[] = [
  { name: 'LeetCode', url: 'https://leetcode.com/', icon: 'Code' },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/', icon: 'Code' },
  { name: 'Dev.to', url: 'https://dev.to/', icon: 'Code' },
  { name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'Linkedin' },
  { name: 'GitHub', url: 'https://github.com/bhuvanesh-m-dev', icon: 'Github' },
  { name: 'Twitter', url: 'https://twitter.com/', icon: 'Twitter' },
  { name: 'YouTube', url: 'https://youtube.com/', icon: 'Youtube' }
];

const MoreSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const getIconComponent = (iconName: string, size: number = 20) => {
    switch(iconName) {
      case 'Linkedin':
        return <Linkedin size={size} />;
      case 'Github':
        return <Github size={size} />;
      case 'Twitter':
        return <Twitter size={size} />;
      case 'Youtube':
        return <Youtube size={size} />;
      case 'Code':
      default:
        return <Code size={size} />;
    }
  };

  return (
    <section id="more" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Connect With Me
          </h2>
          <p className="text-gray-600 mb-12">
            Find me on various platforms and social media.
          </p>
          
          <button 
            onClick={togglePopup}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            Social Links
          </button>
          
          {/* Social popup */}
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
              <div className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 transform transition-all animate-scaleIn">
                <div className="flex justify-between items-center p-6 border-b">
                  <h3 className="text-xl font-semibold text-blue-800">Connect With Me</h3>
                  <button 
                    onClick={togglePopup}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <div className="mr-3 text-blue-600">
                          {getIconComponent(link.icon)}
                        </div>
                        <span className="text-gray-700">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-b-xl text-center text-gray-500 text-sm">
                  Click any link to visit the platform
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MoreSection;
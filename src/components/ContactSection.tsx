import React from 'react';
import { Mail, FileText } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <a 
                    href="mailto:bhuvaneshm.developer@gmail.com" 
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    bhuvaneshm.developer@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-blue-600 mr-3" />
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfdZVMdYrRjue9n7jfGaS7UjwwdS7pDzC3eVGG9u9wMX3e7jA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Fill Out Contact Form
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-700 mb-2">Connect With Me</h4>
                <p className="text-gray-600 mb-4">
                  Feel free to reach out for collaboration opportunities, questions about my projects, 
                  or just to say hello!
                </p>
                <p className="text-gray-600">
                  I'm currently open to new opportunities and interesting projects.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-6">Quick Message</h3>
              
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="button" 
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfdZVMdYrRjue9n7jfGaS7UjwwdS7pDzC3eVGG9u9wMX3e7jA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              <FileText className="mr-2" size={20} />
              Go to Official Contact Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
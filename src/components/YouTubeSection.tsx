import React from 'react';
import { YouTubeVideoProps } from '../types';

const videos: YouTubeVideoProps[] = [
  { id: 'A2dIgANmOQo', title: 'Tutorial 1' },
  { id: 'EsO7fG6qoSI', title: 'Tutorial 2' },
  { id: '9zuCVXCsgiA', title: 'Tutorial 3' },
  { id: 'xSjOKYu3qaU', title: 'Tutorial 4' }
];

const YouTubeSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6">
            Tutorials & Demos
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Watch my tutorial videos to learn more about my projects and coding techniques.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
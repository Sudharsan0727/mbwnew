import React from 'react';
import { technologies } from '../mockData';

const Technologies = () => {
  // Icon placeholder colors for different tech
  const getIconColor = (name) => {
    const colors = {
      'React': 'from-cyan-400 to-cyan-600',
      'Node.js': 'from-green-400 to-green-600',
      'WordPress': 'from-blue-500 to-blue-700',
      'Laravel': 'from-red-400 to-red-600',
      'Flutter': 'from-sky-400 to-sky-600',
      'Shopify': 'from-green-500 to-green-700',
      'AWS': 'from-orange-400 to-orange-600',
      'Azure': 'from-blue-400 to-blue-600',
      'Google Ads': 'from-blue-500 to-blue-700',
      'Meta Business': 'from-blue-600 to-indigo-600'
    };
    return colors[name] || 'from-gray-400 to-gray-600';
  };

  return (
    <section id="technologies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We build with the best technologies
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* Hover Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getIconColor(tech.name)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative flex flex-col items-center text-center space-y-3">
                {/* Tech Icon Circle */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getIconColor(tech.name)} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <span className="text-white font-bold text-xl">
                    {tech.name.charAt(0)}
                  </span>
                </div>
                
                {/* Tech Name */}
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{tech.description}</p>
                </div>
              </div>

              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                Certified Experts in {tech.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            <strong className="text-blue-600">19+ years</strong> of experience with cutting-edge technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
import React from 'react';
import * as Icons from 'lucide-react';
import { services } from '../mockData';
import { Button } from './ui/button';

const Services = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to grow your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const IconComponent = Icons[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 cursor-pointer transform hover:-translate-y-1"
                onClick={() => scrollToSection('contact')}
              >
                <div className="flex flex-col space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors shadow-md">
                    {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="text-blue-600 font-medium text-sm group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
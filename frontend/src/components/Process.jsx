import React from 'react';
import * as Icons from 'lucide-react';
import { processSteps } from '../mockData';
import { Button } from './ui/button';

const Process = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that delivers exceptional results
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600" style={{ width: 'calc(100% - 12rem)', left: '6rem' }}></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = Icons[step.icon];
              return (
                <div key={step.id} className="relative">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Step Number & Icon */}
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg transform hover:scale-110 transition-all relative z-10">
                        {IconComponent && <IconComponent className="w-12 h-12 text-white" />}
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center font-bold text-blue-600 text-lg shadow-md z-20">
                        {index + 1}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
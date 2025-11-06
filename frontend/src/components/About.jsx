import React from 'react';
import { Users, Briefcase, Globe, Award } from 'lucide-react';
import { stats } from '../mockData';
import { Button } from './ui/button';

const iconMap = {
  Users,
  Briefcase,
  Globe,
  Award
};

const About = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                About MBW Techimpex
              </h2>
              <p className="text-xl text-blue-600 font-semibold">
                Empowering Digital Growth Since 2004
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              MBW Techimpex Private Limited is a Chennai-based website development and digital marketing company serving <strong>4800+ clients in 18 countries</strong>. With <strong>19 years of proven experience</strong>, we create impactful digital solutions that drive measurable results.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              From startups to enterprises, we partner with businesses to build powerful online presences through cutting-edge web development, strategic digital marketing, and comprehensive IT solutions.
            </p>

            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Know More About MBW
            </Button>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon];
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                      <p className="text-gray-600 font-medium">{stat.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
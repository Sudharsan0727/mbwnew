import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { services } from '../mockData';
import * as Icons from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setIsServicesOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img
              src="https://customer-assets.emergentagent.com/job_fad851ea-a437-4828-91f9-49571711ae7a/artifacts/s6injtxh_mbw.png"
              alt="MBW Techimpex"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About Us
            </Link>
            
            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1">
                Our Services
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-lg shadow-xl border border-gray-100 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => {
                      const IconComponent = Icons[service.icon];
                      return (
                        <button
                          key={service.id}
                          onClick={() => scrollToSection('services')}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                        >
                          {IconComponent && (
                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-5 h-5 text-blue-600" />
                            </div>
                          )}
                          <div>
                            <h3 className="font-medium text-gray-900 text-sm mb-1">{service.title}</h3>
                            <p className="text-xs text-gray-600 line-clamp-2">{service.description}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="w-full mt-4 text-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View All Services →
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Portfolio
            </button>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Blog
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium text-left px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium text-left px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                About Us
              </Link>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 font-medium text-left px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 hover:text-blue-600 font-medium text-left px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Portfolio
              </button>
              <Link
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium text-left px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Blog
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 font-medium text-left px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg font-medium transition-all"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
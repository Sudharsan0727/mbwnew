import React from 'react';
import { 
  Target, 
  Eye, 
  Users, 
  Briefcase, 
  Globe, 
  Award,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  CheckCircle
} from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Aboutuspage = () => {
  // Stats data
  const stats = [
    { label: "Clients", value: "4800+", icon: Users },
    { label: "Projects", value: "4500+", icon: Briefcase },
    { label: "Countries", value: "18", icon: Globe },
    { label: "Years Experience", value: "20+", icon: Award }
  ];

  // Timeline milestones
  const milestones = [
    {
      year: "2004",
      title: "Company Founded",
      description: "MBW Techimpex was established with a vision to empower businesses through innovative digital solutions."
    },
    {
      year: "2008",
      title: "Expanded to International Clients",
      description: "Successfully expanded our services globally, serving clients across multiple countries."
    },
    {
      year: "2014",
      title: "Reached 1000+ Projects",
      description: "Achieved a major milestone of delivering 1000+ successful projects for diverse industries."
    },
    {
      year: "2020",
      title: "Introduced Global Tech Partnerships",
      description: "Formed strategic partnerships with leading technology providers to enhance our service offerings."
    },
    {
      year: "2025",
      title: "Serving 18+ Countries Worldwide",
      description: "Proudly serving clients across 18 countries with cutting-edge digital solutions."
    }
  ];

  // Scroll to contact section
  const scrollToContact = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">About Us</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Building Digital Excellence
            <span className="block text-blue-600 mt-2">Since 2004</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Empowering businesses worldwide with innovative web solutions, digital marketing excellence, and cutting-edge technology partnerships.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg font-medium transition-all">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-400/10 rounded-2xl transform rotate-3"></div>
              <img
                src="/img/About us/Aboutus.png"
                alt="MBW Team Collaboration"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">20+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-semibold text-sm">Who We Are</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Digital Partner
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                MBW Techimpex Private Limited is a leading web development and digital marketing company based in Chennai, India. Since 2004, we've been helping businesses transform their digital presence and achieve remarkable growth.
              </p>
              
              <p className="text-lg text-gray-600 mb-10">
                With over 20 years of industry experience, we've successfully delivered 4500+ projects for 4800+ clients across 18 countries. Our expertise spans web development, digital marketing, SEO, mobile app development, and comprehensive digital solutions.
              </p>

            </div>
          </div>
        </div>
      </section>


      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Drives Our Success
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core principles define how we deliver excellence and innovation to every client.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-5">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Deep understanding of diverse industries and business needs to deliver 
                customized digital solutions that make real impact.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-5">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation-Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Leveraging cutting-edge technologies and creative thinking to keep our clients 
                ahead of the digital curve.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-5">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Client-Centric Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated support, long-term partnerships, and tailored solutions 
                built around your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guiding principles that drive our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                To empower businesses of all sizes with innovative digital solutions that drive measurable growth and sustainable success. We are committed to delivering excellence through cutting-edge technology, strategic thinking, and unwavering dedication to our clients' goals.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Deliver exceptional value and results</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Foster long-term partnerships</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Stay ahead of technology trends</span>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                To be the most trusted global partner for digital transformation, recognized for innovation, reliability, and exceptional service. We envision a future where every business, regardless of size, has access to world-class digital solutions that unlock their full potential.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Global leadership in digital solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Continuous innovation and excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Empowering businesses worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600">
              Delivering excellence and building lasting relationships worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-semibold text-sm">Our Journey</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Milestones That Define Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to global presence - our journey of growth and innovation
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-300 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="w-full lg:w-5/12">
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                        index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                      }`}
                    >
                      <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-lg mb-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex items-center justify-center w-2/12">
                    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>

                  {/* Spacer */}
                  <div className="w-full lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join 4800+ satisfied clients worldwide who trust us with their digital success. Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg font-medium transition-all">
                Explore Services
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-blue-500">
            <p className="text-blue-100 text-sm">
              💼 Trusted by businesses in 18 countries | 🏆 20+ years of excellence | ⭐ 4800+ happy clients
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Aboutuspage;

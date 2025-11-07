import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { portfolioProjects, featuredCaseStudies } from '../../mockData/portfolioData';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-white via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <motion.div 
            className="flex items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-5 h-5 text-[#0d214f]" />
            <span className="text-[#0d214f] font-medium text-sm tracking-wider uppercase">
              Our Work
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Portfolio
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Showcasing some of our finest digital creations.
            <span className="block mt-2 text-[#0d214f] font-medium">
              Every project tells a story of innovation.
            </span>
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d214f]/95 via-[#0d214f]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm mb-3 leading-relaxed">{project.description}</p>
                      {/* <div className="flex items-center gap-2 text-sm font-medium">
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </div> */}
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies - Premium Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Featured Case Studies
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Deep dive into our most successful projects
            </motion.p>
          </div>

          <div className="space-y-24">
            {featuredCaseStudies.map((project, index) => (
              <motion.div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                {/* Image Section */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-full shadow-lg">
                      <span className="text-[#0d214f] font-semibold text-sm">{project.category}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gray-50 text-gray-700 text-sm rounded-lg border border-gray-100 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Results Grid */}
                  {project.results && (
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-3xl font-bold text-[#0d214f] mb-1">{result.metric}</div>
                          <div className="text-sm text-gray-600">{result.description}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <Button className="bg-[#0d214f] hover:bg-[#1e40af] text-white px-8 py-6 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl group">
                    View Case Study
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Premium Gradient */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d214f] via-[#1e40af] to-[#0d214f]"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Build Something
              <span className="block">Extraordinary Together</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Let's discuss your project and create something remarkable.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-[#0d214f] hover:bg-blue-50 px-10 py-7 text-lg font-bold rounded-xl transition-all shadow-2xl hover:shadow-white/20 hover:scale-105 group">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;

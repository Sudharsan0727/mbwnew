import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Tag,
  BookOpen,
  TrendingUp,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import Header from '../Header';
import Footer from '../Footer';

const Blogpage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  // Blog data
  const blogs = [
    {
      id: 1,
      title: "The Future of Digital Transformation in 2025",
      author: "MBW Insights Team",
      date: "Jan 15, 2025",
      category: "Technology",
      image: "/img/Blog/Digital_blog.png",
      excerpt: "Exploring how AI, automation, and cloud technologies are reshaping the business landscape and driving innovation across industries.",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Top 10 SEO Strategies That Actually Work",
      author: "Priya Sharma",
      date: "Jan 12, 2025",
      category: "Business",
      image: "/img/Blog/Digital_blog.png",
      excerpt: "Proven SEO tactics to boost your website's visibility and drive organic traffic in an increasingly competitive digital marketplace.",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Why Every Business Needs a Responsive Website",
      author: "Rajesh Kumar",
      date: "Jan 10, 2025",
      category: "Design",
      image: "/img/Blog/Digital_blog.png",
      excerpt: "The critical importance of mobile-first design in today's world where over 60% of web traffic comes from mobile devices.",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Machine Learning in Modern Web Applications",
      author: "David Chen",
      date: "Jan 8, 2025",
      category: "Technology",
      image: "/img/Blog/Digital_blog.png",
      excerpt: "How machine learning is being integrated into web applications to create smarter, more personalized user experiences.",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Building a Strong Brand Identity Online",
      author: "Sarah Johnson",
      date: "Jan 5, 2025",
      category: "Business",
      image: "/img/Blog/Digital_blog.png",
      excerpt: "Essential strategies for creating a cohesive and memorable brand presence across all digital touchpoints and platforms.",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "The Rise of Progressive Web Apps (PWAs)",
      author: "MBW Development Team",
      date: "Jan 3, 2025",
      category: "Innovation",
      image: "/img/Blog/Digital_blog.png",
      excerpt: "Why PWAs are becoming the preferred choice for businesses looking to deliver app-like experiences on the web.",
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "UI/UX Design Trends for 2025",
      author: "Amit Patel",
      date: "Dec 30, 2024",
      category: "Design",
      image: "/img/Blog/Digital_blog.png",
      excerpt: "From micro-interactions to immersive 3D elements, discover the design trends that will dominate the digital landscape this year.",
      readTime: "7 min read"
    },
    {
      id: 8,
      title: "How Google Ads Can Drive 10X ROI",
      author: "Marketing Team",
      date: "Dec 28, 2024",
      category: "Business",
      image: "/img/Blog/Digital_blog.png",
      excerpt: "Advanced strategies and best practices for maximizing your return on investment with targeted Google Ads campaigns.",
      readTime: "6 min read"
    },
    {
      id: 9,
      title: "Cloud Computing: AWS vs Azure vs Google Cloud",
      author: "Tech Insights",
      date: "Dec 25, 2024",
      category: "Technology",
      image: "/img/Blog/Digital_blog.png",
      excerpt: "A comprehensive comparison of the three major cloud platforms to help you choose the right infrastructure for your business.",
      readTime: "9 min read"
    },
    {
      id: 10,
      title: "Cybersecurity Best Practices for Websites",
      author: "Security Team",
      date: "Dec 22, 2024",
      category: "Technology",
      image: "/img/Blog/Digital_blog.png",
      excerpt: "Essential security measures every website owner should implement to protect against threats and vulnerabilities.",
      readTime: "8 min read"
    },
    {
      id: 11,
      title: "The Power of Social Media Marketing",
      author: "Sneha Reddy",
      date: "Dec 20, 2024",
      category: "Business",
      image: "/img/Blog/Digital_blog.png",
      excerpt: "Leveraging social media platforms to build engaged communities, drive traffic, and boost conversions for your business.",
      readTime: "5 min read"
    },
    {
      id: 12,
      title: "Blockchain Technology Beyond Cryptocurrency",
      author: "Innovation Lab",
      date: "Dec 18, 2024",
      category: "Innovation",
      image: "/img/Blog/Digital_blog.png",
      excerpt: "Exploring real-world applications of blockchain in supply chain, healthcare, finance, and other industries.",
      readTime: "7 min read"
    }
  ];

  // Categories
  const categories = ['All', 'Technology', 'Business', 'Innovation', 'Design'];

  // Filter blogs by category
  const filteredBlogs = activeCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  // Handle pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Blog</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Insights & Updates from
            <span className="block text-blue-600 mt-2">MBW Techimpex</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the latest trends, expert insights, and innovative ideas in web development, 
            digital marketing, and technology.
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Results count */}
          <div className="text-center mt-4 text-gray-600 text-sm">
            Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  {/* Blog Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                      {blog.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        {blog.readTime}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1 group">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try selecting a different category.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white shadow-md'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentPage(index + 1);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-10 h-10 rounded-lg font-medium transition-all ${
                      currentPage === index + 1
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white shadow-md'
                }`}
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Get expert tips, industry trends, and actionable strategies delivered to your inbox. 
            Join our community of forward-thinking businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link to="/#contact">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/#services">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg font-medium transition-all">
                Explore Services
              </Button>
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-blue-500">
            <p className="text-blue-100 text-sm">
              📚 New articles every week | 💡 Expert insights | 🚀 Practical strategies
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogpage;

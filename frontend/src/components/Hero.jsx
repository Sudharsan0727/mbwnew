import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center ">
      {/* ✅ Fullscreen Vimeo Background */}
      <div className="absolute inset-0 z-0 ">
        <iframe
          src="https://player.vimeo.com/video/1134204471?autoplay=1&loop=1&muted=1&controls=0&background=1"
          title="Hero Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            border: "none",
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        ></iframe>

        {/* ✅ Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/90"></div> */}
      </div>

      {/* ✅ Hero Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Building Websites That <br className="hidden sm:block" />
            <span className="text-blue-300">Build Businesses</span>
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl text-blue-100 font-medium space-y-2">
            <p>19+ Years. 4800+ Clients. 18 Countries.</p>
          </div>

          <p className="text-lg sm:text-xl text-blue-50 max-w-3xl mx-auto">
            Your trusted website design & digital marketing partner in Chennai.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Get a Free Website Audit
            </Button>
            <Button
              onClick={() => scrollToSection("portfolio")}
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* ✅ Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

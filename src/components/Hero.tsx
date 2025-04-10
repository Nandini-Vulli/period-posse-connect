
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-gradient pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block bg-gradient-to-r from-redalert-600 to-lavender-600 text-transparent bg-clip-text">
              Never Get Caught Off Guard
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            RedAlert connects you with nearby helpers when you unexpectedly need period products.
            Quick, discreet, and supportive - because we've all been there.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-redalert-500 to-lavender-500 hover:from-redalert-600 hover:to-lavender-600 text-lg h-12 px-8">
                Join Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-redalert-300 text-redalert-700 hover:bg-redalert-50 text-lg h-12 px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-redalert-500/20 blur-3xl rounded-full w-96 h-96"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-redalert-500 to-lavender-500 h-2"></div>
              <div className="p-6 sm:p-10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-6">
                    <div className="h-4 bg-redalert-100 rounded animate-pulse"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-redalert-100 rounded animate-pulse"></div>
                      <div className="h-4 bg-redalert-100 rounded animate-pulse"></div>
                      <div className="h-4 bg-redalert-100 rounded w-5/6 animate-pulse"></div>
                    </div>
                    <div className="flex space-x-4">
                      <div className="h-10 w-24 bg-lavender-100 rounded animate-pulse"></div>
                      <div className="h-10 w-24 bg-teal-100 rounded animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="h-48 w-48 bg-gradient-to-br from-redalert-200 to-lavender-200 rounded-full flex items-center justify-center animate-pulse-slow">
                      <div className="h-32 w-32 bg-white/50 backdrop-blur-sm rounded-full animate-float"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

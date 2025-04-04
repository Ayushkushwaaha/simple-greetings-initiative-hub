
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="block">हिंदी साहित्य की</span>
                <span className="block text-primary">अनमोल धरोहर</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                भारतीय साहित्य के महान रचनाकारों की अमर कृतियों का विशाल संग्रह, अब एक ही स्थान पर उपलब्ध।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="rounded-full">
                  पुस्तकालय देखें
                </Button>
                <Button variant="outline" size="lg" className="rounded-full">
                  और जानें
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="bg-white p-3 rounded-lg shadow-lg transform rotate-3 mb-8 ml-12">
                  <img 
                    src="https://images.unsplash.com/photo-1589998059171-988d887df646" 
                    alt="Hindi Literature" 
                    className="rounded-md h-48 w-full object-cover"
                  />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-lg transform -rotate-6 absolute top-24 -left-4">
                  <img 
                    src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8" 
                    alt="Ancient Manuscripts" 
                    className="rounded-md h-48 w-full object-cover"
                  />
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

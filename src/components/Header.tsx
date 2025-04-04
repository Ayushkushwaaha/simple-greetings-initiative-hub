
import React, { useState } from 'react';
import { Menu, X, Search, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Book className="h-8 w-8 text-primary mr-2" />
            <span className="font-bold text-xl text-gray-900">हिंदी साहित्य पुस्तकालय</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">होम</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">पुस्तकें</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">लेखक</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">श्रेणियाँ</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">संपर्क</a>
            </nav>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="खोजें..." 
                className="pl-9 w-40 focus:w-64 transition-all duration-300"
              />
            </div>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">होम</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">पुस्तकें</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">लेखक</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">श्रेणियाँ</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">संपर्क</a>
          </div>
          <div className="px-3 py-3">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="खोजें..." 
                className="pl-9 w-full"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

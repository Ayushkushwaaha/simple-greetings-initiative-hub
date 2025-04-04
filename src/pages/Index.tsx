
import React from 'react';
import Header from '@/components/Header';
import PoetsCarousel from '@/components/PoetsCarousel';
import Hero from '@/components/Hero';
import FeaturedBooks from '@/components/FeaturedBooks';
import Categories from '@/components/Categories';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-70 -z-10 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl opacity-70 -z-10 animate-pulse-slow"></div>
          <PoetsCarousel />
        </div>
        
        <div className="animate-fade-in">
          <Hero />
        </div>
        
        <FeaturedBooks />
        
        <div className="relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
          <Categories />
        </div>
        
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

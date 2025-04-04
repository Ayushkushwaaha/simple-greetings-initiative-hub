
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedBooks from '@/components/FeaturedBooks';
import Categories from '@/components/Categories';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedBooks />
        <Categories />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

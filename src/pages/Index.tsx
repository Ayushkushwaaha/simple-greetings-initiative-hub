
import React from 'react';
import Header from '@/components/Header';
import WeatherWidget from '@/components/WeatherWidget';
import TaskManager from '@/components/TaskManager';
import QuoteWidget from '@/components/QuoteWidget';
import NotesWidget from '@/components/NotesWidget';

const Index = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* First Row */}
          <div className="md:col-span-4">
            <WeatherWidget />
          </div>
          <div className="md:col-span-8">
            <QuoteWidget />
          </div>
          
          {/* Second Row */}
          <div className="md:col-span-6">
            <TaskManager />
          </div>
          <div className="md:col-span-6">
            <NotesWidget />
          </div>
        </div>
        
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          Personal Dashboard © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
};

export default Index;

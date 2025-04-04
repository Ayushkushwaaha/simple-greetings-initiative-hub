
import React from 'react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true 
    });
  };

  return (
    <header className="mb-6 text-center">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
        Personal Dashboard
      </h1>
      <div className="text-xl font-light mb-1">{formatDate(dateTime)}</div>
      <div className="text-2xl font-medium">{formatTime(dateTime)}</div>
    </header>
  );
};

export default Header;

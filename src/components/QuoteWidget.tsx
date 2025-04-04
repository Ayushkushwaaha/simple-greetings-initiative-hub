
import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type QuoteData = {
  text: string;
  author: string;
};

const quotes: QuoteData[] = [
  {
    text: "The best way to predict the future is to create it.",
    author: "Abraham Lincoln"
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  }
];

const QuoteWidget = () => {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, we might fetch from a quotes API
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Simulate API call delay
    setTimeout(() => {
      setQuote(quotes[randomIndex]);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <Card className="card-hover-effect h-full glassmorphism">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Daily Inspiration</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex flex-col items-center animate-pulse space-y-2">
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-3/4"></div>
          </div>
        ) : quote ? (
          <div className="flex flex-col items-center text-center">
            <Quote className="h-6 w-6 text-primary mb-2" />
            <p className="text-lg mb-2 italic">"{quote.text}"</p>
            <p className="text-sm text-muted-foreground">— {quote.author}</p>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default QuoteWidget;

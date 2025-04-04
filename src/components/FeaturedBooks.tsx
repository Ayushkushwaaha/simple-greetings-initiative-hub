
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

const featuredBooks = [
  {
    id: 1,
    title: 'गोदान',
    author: 'मुंशी प्रेमचंद',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
    description: 'ग्रामीण भारत की समस्याओं और संघर्षों पर आधारित प्रेमचंद की महान कृति।'
  },
  {
    id: 2,
    title: 'कामायनी',
    author: 'जयशंकर प्रसाद',
    cover: 'https://images.unsplash.com/photo-1515541324332-7dd0c37426e0',
    description: 'छायावादी युग का प्रतिनिधि महाकाव्य, जिसमें मानव जीवन की यात्रा दर्शाई गई है।'
  },
  {
    id: 3,
    title: 'मैला आँचल',
    author: 'फणीश्वरनाथ रेणु',
    cover: 'https://images.unsplash.com/photo-1573592371950-348a8f1d9f38',
    description: 'आंचलिक उपन्यास की श्रेष्ठ कृति जो ग्रामीण भारत का यथार्थ चित्रण करती है।'
  },
  {
    id: 4,
    title: 'मधुशाला',
    author: 'हरिवंश राय बच्चन',
    cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19',
    description: 'रुबाइयों का संग्रह जो जीवन के विभिन्न पहलुओं का काव्यात्मक चित्रण करता है।'
  }
];

const FeaturedBooks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">विशेष पुस्तकें</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            हिंदी साहित्य की कुछ प्रमुख कृतियां जो किसी भी पाठक के लिए अवश्य पठनीय हैं
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <Card key={book.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg card-hover-effect">
              <div className="aspect-[2/3] relative">
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-1">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{book.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  <BookOpen className="mr-2 h-4 w-4" />
                  पढ़ें
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="rounded-full">
            और पुस्तकें देखें
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;

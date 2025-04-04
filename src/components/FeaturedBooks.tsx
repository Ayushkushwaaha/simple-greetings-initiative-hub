
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Eye, Share2 } from 'lucide-react';

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
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute -top-28 -right-28 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              विशेष पुस्तकें
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            हिंदी साहित्य की कुछ प्रमुख कृतियां जो किसी भी पाठक के लिए अवश्य पठनीय हैं
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <Card key={book.id} className="group overflow-hidden transition-all duration-300 hover:shadow-xl card-hover-effect border border-gray-100 hover:border-primary/20">
              <div className="aspect-[2/3] relative overflow-hidden">
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-2 mb-3">
                      <Button variant="secondary" size="sm" className="rounded-full bg-white/90 hover:bg-white text-primary">
                        <Eye className="h-4 w-4 mr-1" />
                        <span className="text-xs">पूर्वावलोकन</span>
                      </Button>
                      <Button variant="secondary" size="icon" className="rounded-full bg-white/90 hover:bg-white text-primary h-8 w-8 p-0">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{book.author}</p>
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{book.description}</p>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <BookOpen className="mr-2 h-4 w-4" />
                  पढ़ें
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full border-2 border-primary/20 hover:border-primary/80 hover:bg-primary/5 px-8">
            और पुस्तकें देखें
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;

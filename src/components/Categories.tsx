
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  { id: 1, name: 'उपन्यास', count: 248, icon: '📚' },
  { id: 2, name: 'कविता', count: 186, icon: '📝' },
  { id: 3, name: 'कहानी संग्रह', count: 142, icon: '📖' },
  { id: 4, name: 'आत्मकथा', count: 94, icon: '📔' },
  { id: 5, name: 'नाटक', count: 76, icon: '🎭' },
  { id: 6, name: 'जीवनी', count: 65, icon: '👤' },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">श्रेणियाँ</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            विभिन्न प्रकार की साहित्यिक रचनाएँ पढ़ने के लिए श्रेणी चुनें
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-medium mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} पुस्तकें</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

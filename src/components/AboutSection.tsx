
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da" 
              alt="Library Interior" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">हमारे बारे में</h2>
            <p className="text-lg text-gray-600 mb-4">
              हिंदी साहित्य पुस्तकालय का उद्देश्य हिंदी भाषा के समृद्ध साहित्य को संरक्षित करना और उसे जन-जन तक पहुंचाना है।
            </p>
            <p className="text-lg text-gray-600 mb-4">
              हमारा पुस्तकालय 1975 में स्थापित किया गया था और आज यह हिंदी साहित्य के विशाल संग्रह के साथ देश के प्रमुख साहित्यिक केंद्रों में से एक है।
            </p>
            <p className="text-lg text-gray-600 mb-6">
              हम हिंदी साहित्य के क्लासिक और आधुनिक दोनों ही प्रकार के ग्रंथों का संग्रह रखते हैं, और नियमित रूप से साहित्यिक गतिविधियों का आयोजन करते हैं।
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>और जानें</Button>
              <Button variant="outline">संपर्क करें</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

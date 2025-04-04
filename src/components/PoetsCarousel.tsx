
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const poets = [
  {
    id: 1,
    name: "मुंशी प्रेमचंद",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Premchand_%28writer%29.jpg",
    famous_for: "उपन्यास सम्राट",
    years: "1880-1936",
  },
  {
    id: 2,
    name: "सूर्यकांत त्रिपाठी 'निराला'",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Suryakant_Tripathi_%27Nirala%27.jpg",
    famous_for: "छायावादी कवि",
    years: "1896-1961",
  },
  {
    id: 3,
    name: "महादेवी वर्मा",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Mahadevi_Varma.jpg",
    famous_for: "छायावादी कवयित्री",
    years: "1907-1987",
  },
  {
    id: 4,
    name: "हरिवंश राय बच्चन",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Harivansh_Rai_Bachchan.jpg",
    famous_for: "मधुशाला",
    years: "1907-2003",
  },
  {
    id: 5,
    name: "रामधारी सिंह 'दिनकर'",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Ramdhari_Singh_%27Dinkar%27.jpg",
    famous_for: "वीर रस के कवि",
    years: "1908-1974",
  },
  {
    id: 6,
    name: "जयशंकर प्रसाद",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Jaishankar_Prasad_1935.jpg",
    famous_for: "छायावादी कवि",
    years: "1889-1937",
  },
  {
    id: 7,
    name: "सुमित्रानंदन पंत",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Sumitranandan_Pant.jpg",
    famous_for: "छायावादी कवि",
    years: "1900-1977",
  },
  {
    id: 8,
    name: "मैथिलीशरण गुप्त",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Maithili_Sharan_Gupt.jpg",
    famous_for: "राष्ट्रीय कवि",
    years: "1886-1964",
  },
  {
    id: 9,
    name: "भारतेंदु हरिश्चंद्र",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Bharatendu_Harishchandra_1850-1885.jpg",
    famous_for: "आधुनिक हिंदी साहित्य के जनक",
    years: "1850-1885",
  },
  {
    id: 10,
    name: "गोपालदास नीरज",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Gopal_Das_Neeraj.jpg",
    famous_for: "गीतकार",
    years: "1925-2018",
  },
];

const PoetsCarousel = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">हिंदी साहित्य के प्रमुख हस्ताक्षर</h2>
          <p className="text-gray-600">हिंदी साहित्य को समृद्ध करने वाले प्रतिष्ठित रचनाकार</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-1">
            {poets.map((poet) => (
              <CarouselItem key={poet.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden book-card">
                    <CardContent className="p-0 flex flex-col items-center">
                      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                        <img
                          src={poet.image}
                          alt={poet.name}
                          className="h-full w-full object-cover transition-all hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="p-4 text-center bg-white w-full">
                        <h3 className="font-bold text-lg mb-1">{poet.name}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{poet.famous_for}</p>
                        <p className="text-xs text-gray-500">{poet.years}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-end gap-2 mt-4">
            <CarouselPrevious className="relative inset-0 translate-y-0 left-0" />
            <CarouselNext className="relative inset-0 translate-y-0 right-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default PoetsCarousel;

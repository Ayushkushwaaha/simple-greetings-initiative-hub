
import React, { useEffect, useState } from 'react';
import { Cloud, CloudRain, CloudSnow, Sun, Wind } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type WeatherData = {
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'windy';
  location: string;
};

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, we would fetch from a weather API
    // This is a mock implementation
    const mockWeatherData: WeatherData = {
      temperature: 72,
      condition: 'sunny',
      location: 'San Francisco, CA'
    };
    
    // Simulate API call delay
    setTimeout(() => {
      setWeather(mockWeatherData);
      setLoading(false);
    }, 1000);
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="h-10 w-10 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="h-10 w-10 text-gray-400" />;
      case 'rainy':
        return <CloudRain className="h-10 w-10 text-blue-400" />;
      case 'snowy':
        return <CloudSnow className="h-10 w-10 text-blue-200" />;
      case 'windy':
        return <Wind className="h-10 w-10 text-gray-500" />;
      default:
        return <Sun className="h-10 w-10 text-yellow-500" />;
    }
  };

  return (
    <Card className="card-hover-effect h-full glassmorphism">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Weather</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex flex-col items-center justify-center h-24 animate-pulse">
            <div className="h-5 w-16 bg-muted rounded mb-2"></div>
            <div className="h-5 w-24 bg-muted rounded"></div>
          </div>
        ) : weather ? (
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
              {getWeatherIcon(weather.condition)}
              <span className="text-3xl font-bold ml-2">{weather.temperature}°</span>
            </div>
            <div className="text-center text-muted-foreground">
              {weather.location}
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;

import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';
import {WeatherData, ClothingSuggestion, WeatherContextType} from '../types';
import {getWeatherData} from '../api/weatherApi';
import {clothingSuggestions} from '../data/clothingSuggestions';

// Initialize the context with default values
export const WeatherContext = createContext<WeatherContextType>({
  weatherData: null,
  setWeatherData: () => {},
  clothingSuggestion: null,
  setClothingSuggestion: () => {},
  fetchWeatherData: () => Promise.resolve(),
});

type WeatherProviderProps = {
  children: ReactNode;
};

export const WeatherProvider = ({children}: WeatherProviderProps) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [clothingSuggestion, setClothingSuggestion] =
    useState<ClothingSuggestion | null>(null);

  const fetchWeatherData = useCallback(async (location: string) => {
    try {
      const fetchedWeatherData = await getWeatherData(location);

      if (fetchedWeatherData) {
        setWeatherData(fetchedWeatherData);
      }
    } catch (error) {
      console.error('Error fetching weather data: ', error);
    }
  }, []);

  useEffect(() => {
    if (weatherData) {
      const temp = parseInt(weatherData.temperature);
      const condition = weatherData.condition.toLowerCase();
      let suggestion: ClothingSuggestion | null = null;

      // find the first matching condition
      for (let i = 0; i < clothingSuggestions.length; i++) {
        if (clothingSuggestions[i].condition(temp)) {
          suggestion = clothingSuggestions[i].suggestion;
          break;
        }
      }

      // Additional suggestions based on weather conditions
      if (condition.includes('rain') && suggestion) {
        suggestion.accessories.push('Umbrella');
      } else if (condition.includes('snow') && suggestion) {
        suggestion.accessories.push('Snow Boots');
      } else if (condition.includes('sunny') && suggestion) {
        suggestion.accessories.push('Hat');
      }

      setClothingSuggestion(suggestion);
    }
  }, [weatherData]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        clothingSuggestion,
        setClothingSuggestion,
        fetchWeatherData,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};

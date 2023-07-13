export type WeatherData = {
  location: string;
  condition: string;
  temperature: string;
  icon: IconName;
};

export type ClothingSuggestion = {
  top: string;
  bottom: string;
  accessories: string[];
};

export type WeatherContextType = {
  weatherData: WeatherData | null;
  setWeatherData: (value: WeatherData | null) => void;
  clothingSuggestion: ClothingSuggestion | null;
  setClothingSuggestion: (value: ClothingSuggestion | null) => void;
  fetchWeatherData: (location: string) => Promise<void>;
};

export type IconName =
  | 'Rainy'
  | 'Cloudy'
  | 'Sunny'
  | 'Snowy'
  | 'Thunderstorm'
  | 'Foggy'
  | 'Default';

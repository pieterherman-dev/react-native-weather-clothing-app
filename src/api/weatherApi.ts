import axios from 'axios';
import {WeatherData} from '../types';

const BASE_URL = 'https://wttr.in';

export const getWeatherData = async (
  location: string,
): Promise<WeatherData> => {
  try {
    const response = await axios.get(`${BASE_URL}/${location}?format=%C+%t`, {
      headers: {'User-Agent': 'axios'},
    });

    const data = response.data;

    const lastSpaceIndex = data.lastIndexOf(' ');
    const condition = data.substring(0, lastSpaceIndex);
    const temperature = data.substring(lastSpaceIndex + 1);
    const formattedTemperature = temperature.replace('+', ''); // Removing the '+' sign

     
    let iconName = 'Default';
    if (condition.toLowerCase().includes('thunder') || condition.toLowerCase().includes('storm')) {
      iconName = 'Thunderstorm';
    } else if (condition.toLowerCase().includes('rain') || condition.toLowerCase().includes('drizzle') || condition.toLowerCase().includes('shower')) {
      iconName = 'Rainy';
    } else if (condition.toLowerCase().includes('snow') || condition.toLowerCase().includes('sleet') || condition.toLowerCase().includes('blizzard')) {
      iconName = 'Snowy';
    } else if (condition.toLowerCase().includes('fog') || condition.toLowerCase().includes('mist')) {
      iconName = 'Foggy';
    } else if (condition.toLowerCase().includes('cloudy') || condition.toLowerCase().includes('overcast')) {
      iconName = 'Cloudy';
    } else if (condition.toLowerCase().includes('sunny') || condition.toLowerCase().includes('clear')) {
      iconName = 'Sunny';
    }
    
    
    const weatherData: WeatherData = {
      temperature: formattedTemperature,
      condition: condition,
      location: location,
      icon: iconName, // This is just a string now.
    };

    console.log( 'weatherData: ', weatherData);

    return weatherData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

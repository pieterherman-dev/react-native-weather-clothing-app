import { expect, describe } from '@jest/globals';
import { WeatherData, ClothingSuggestion, IconName } from '../../src/types/index';

describe('WeatherData', () => {
  it('should have the correct properties', () => {
    const weatherData: WeatherData = {
      location: 'New York',
      condition: 'Sunny',
      temperature: '75°F',
      icon: 'Sunny',
    };

    expect(weatherData).toHaveProperty('location');
    expect(weatherData).toHaveProperty('condition');
    expect(weatherData).toHaveProperty('temperature');
    expect(weatherData).toHaveProperty('icon');
  });
});

describe('ClothingSuggestion', () => {
  it('should have the correct properties', () => {
    const clothingSuggestion: ClothingSuggestion = {
      top: 'T-Shirt',
      bottom: 'Shorts',
      accessories: ['Sunglasses', 'Hat'],
    };

    expect(clothingSuggestion).toHaveProperty('top');
    expect(clothingSuggestion).toHaveProperty('bottom');
    expect(clothingSuggestion).toHaveProperty('accessories');
  });
});

describe('IconName', () => {
  it('should have the correct values', () => {
    const iconNames: IconName[] = [
      'Rainy',
      'Cloudy',
      'Sunny',
      'Snowy',
      'Thunderstorm',
      'Foggy',
      'Default',
    ];

    expect(iconNames).toContain('Rainy');
    expect(iconNames).toContain('Cloudy');
    expect(iconNames).toContain('Sunny');
    expect(iconNames).toContain('Snowy');
    expect(iconNames).toContain('Thunderstorm');
    expect(iconNames).toContain('Foggy');
    expect(iconNames).toContain('Default');
  });
});
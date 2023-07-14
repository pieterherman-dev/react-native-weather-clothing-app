import {ImageSourcePropType} from 'react-native';
import {IconName} from '../types';

export const weatherIcons: Record<IconName, ImageSourcePropType> = {
  Rainy: require('../assets/animations/rainy.json'),
  Cloudy: require('../assets/animations/partlycloudy.json'),
  Sunny: require('../assets/animations/sunny.json'),
  Snowy: require('../assets/animations/snow.json'),
  Thunderstorm: require('../assets/animations/rainthunder.json'),
  Foggy: require('../assets/animations/fog.json'),
  Default: require('../assets/animations/cloudy.json'),
};

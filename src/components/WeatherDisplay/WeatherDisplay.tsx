import React from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import {Card} from 'react-native-paper';
import TimeAndDate from '../TimeAndDate/TimeAndDate';
import {IconName, WeatherData} from '../../types';
import styles from './WeatherDisplay.style';

type WeatherDisplayProps = {
  weatherData: WeatherData;
};

const weatherIcons: Record<IconName, ImageSourcePropType> = {
  Rainy: require('../../assets/icons/weather/rainy.png'),
  Cloudy: require('../../assets/icons/weather/partlycloudy.png'),
  Sunny: require('../../assets/icons/weather/sunny.png'),
  Snowy: require('../../assets/icons/weather/snowy.png'),
  Thunderstorm: require('../../assets/icons/weather/rainthunder.png'),
  Foggy: require('../../assets/icons/weather/partlycloudy.png'),
  Default: require('../../assets/icons/weather/partlycloudy.png'),
};

const WeatherDisplay = ({
  weatherData: {location, condition, temperature, icon},
}: WeatherDisplayProps) => {
  if (!location || !condition || !temperature || !icon) {
    return null; // or return a loading indicator or some fallback UI
  }

  return (
    <Card style={styles.container}>
      <Text style={styles.location}>{location}</Text>
      <TimeAndDate />
      <View style={styles.iconContainer}>
        <Image source={weatherIcons[icon]} />
      </View>
      <Card.Content>
        <Text style={styles.temperature}>{temperature}</Text>
        <Text style={styles.condition}>{condition}</Text>
      </Card.Content>
    </Card>
  );
};

export default WeatherDisplay;

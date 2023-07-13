import React from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import {Card} from 'react-native-paper';

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

  const TimeAndDate = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dayName = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ][day];
    const monthName = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'Augustus',
      'September',
      'October',
      'November',
      'December',
    ][month];
    const time = `${hours}:${minutes}`;
    const dateAndTime = `${dayName} ${monthName} ${year} ${time}`;
    return dateAndTime;
  };

  

  return (
    <Card style={styles.container}>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.date}>{TimeAndDate()}</Text>
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

 

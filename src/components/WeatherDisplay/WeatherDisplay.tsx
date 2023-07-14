import React from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import {Card} from 'react-native-paper';
import TimeAndDate from '../TimeAndDate/TimeAndDate';
import {WeatherData} from '../../types';
import LottieView from 'lottie-react-native';
import {weatherIcons} from '../../constants/icons';
import {iconSizes} from '../../constants/iconSizes';
import styles from './WeatherDisplay.style';
type WeatherDisplayProps = {
  weatherData: WeatherData;
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
        <LottieView
          source={weatherIcons[icon]}
          autoPlay
          loop
          style={{
            width: iconSizes[icon].width,
            height: iconSizes[icon].height,
          }}
        />
      </View>
      <Card.Content>
        <Text style={styles.temperature}>{temperature}</Text>
        <Text style={styles.condition}>{condition}</Text>
      </Card.Content>
    </Card>
  );
};

export default WeatherDisplay;

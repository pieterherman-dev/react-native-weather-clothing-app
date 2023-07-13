import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {WeatherDisplay, ClothingSuggestion} from '../../components';
import {WeatherContext} from '../../contexts/WeatherContext';
import {WeatherContextType} from '../../types';

const HomeScreen = () => {
  const {weatherData, fetchWeatherData, clothingSuggestion} =
    useContext<WeatherContextType>(WeatherContext);

  useEffect(() => {
    fetchWeatherData('Antwerpen');
  }, [fetchWeatherData]);

  return (
    <View style={styles.container}>
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
      {clothingSuggestion && (
        <ClothingSuggestion suggestion={clothingSuggestion} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#76B4F7',
  },
});

export default HomeScreen;

import React, {useContext, useEffect, useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {WeatherDisplay, ClothingSuggestion} from '../../components';
import {WeatherContext} from '../../contexts/WeatherContext';
import {WeatherContextType} from '../../types';

import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { weatherData, fetchWeatherData, clothingSuggestion } =
    useContext<WeatherContextType>(WeatherContext);

  useEffect(() => {
    fetchWeatherData('Paris');
  }, [fetchWeatherData]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('Search')}
          title="Search"
          color="#fff"
        />
      ),
    });
  }, [navigation]);

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

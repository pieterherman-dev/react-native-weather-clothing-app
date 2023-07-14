import React, {useContext, useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import {Button, TextInput, HelperText, Headline} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {WeatherContext} from '../../contexts/WeatherContext';
import {WeatherContextType} from '../../types';

const SearchScreen = () => {
  const navigation = useNavigation();
  const {location, setLocation, fetchWeatherData} =
    useContext<WeatherContextType>(WeatherContext);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSetLocation = async () => {
    setError('');
    if (!input.trim()) {
      setError('City name cannot be empty.');
      return;
    }

    const isValid = /^[a-zA-Z\s]*$/.test(input);
    if (!isValid) {
      setError('Invalid city name. Only letters and spaces are allowed.');
      return;
    }

    try {
      await fetchWeatherData(input);
      setLocation(input);
      navigation.goBack(); 
    } catch (err) {
      setError('Location not found');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Headline style={styles.header}>Search for a city: </Headline>
      <View style={styles.inputContainer}>
        <TextInput
          label="Search for a city for example: Antwerpen"
          value={input}
          onChangeText={setInput}
          mode="outlined"
          style={styles.input}
        />
        <HelperText type="error" visible={!!error}>
          {error}
        </HelperText>
      </View>
      <Button
        mode="contained"
        onPress={handleSetLocation}
        style={styles.button}>
        Set Location
      </Button>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    marginBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 5,
    backgroundColor: '#2196F3',
  },
});

export default SearchScreen;

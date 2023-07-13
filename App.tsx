// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {WeatherProvider} from './src/contexts/WeatherContext';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  return (
    <WeatherProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </WeatherProvider>
  );
};

export default App;

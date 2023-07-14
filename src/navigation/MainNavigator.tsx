import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, SearchScreen} from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerShadowVisible: false,
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{title: 'Search'}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;

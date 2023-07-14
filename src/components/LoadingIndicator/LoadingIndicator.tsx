// file: components/LoadingIndicator/LoadingIndicator.tsx
import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import styles from './LoadingIndicator.style';

const LoadingIndicator = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

 

export default LoadingIndicator;

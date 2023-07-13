import React from 'react';
import {View, Text, Image} from 'react-native';
import {ClothingSuggestion as ClothingSuggestionType} from '../../types'; // import the type
import {Card} from 'react-native-paper';

import styles from './ClothingSuggestion.style';

type ClothingSuggestionProps = {
  suggestion: ClothingSuggestionType;
};

const ClothingSuggestion = ({suggestion}: ClothingSuggestionProps) => {
  return (
    <Card style={styles.container}>
      <Text style={styles.text}>
        Suggested clothing: {suggestion.top}, {suggestion.bottom}
      </Text>
    </Card>
  );
};

export default ClothingSuggestion;

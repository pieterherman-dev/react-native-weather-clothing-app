import React from 'react';
import {TextInput} from 'react-native';
import styles from './SearchBar.style';
type SearchBarProps = {
  value: string;
  onChange: (text: string) => void;
};

const SearchBar = ({value, onChange}: SearchBarProps) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChange}
      value={value}
      placeholder="Search location"
    />
  );
};

export default SearchBar;

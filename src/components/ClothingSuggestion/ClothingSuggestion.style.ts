import {StyleSheet} from 'react-native';

const COLORS = {
  textPrimary: '#FFFEF9',
  textBold: '#FFFEF9',
  background: '#73A3F5',
};

export default StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
    backgroundColor: COLORS.background,
  },
  text: {
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  iconContainer: {
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

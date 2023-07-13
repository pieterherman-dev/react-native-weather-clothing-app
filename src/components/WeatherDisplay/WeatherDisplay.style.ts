import {StyleSheet} from 'react-native';

// Define color constants
const COLORS = {
  textPrimary: '#FFFEF9',
  textBold: '#FFFEF9',
  background: '#92BAF9',
};

export default StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.background,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  location: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.textBold,
  },
  iconContainer: {
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  conditionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  condition: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.textPrimary,
    padding: 10,
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: COLORS.textBold,
    textAlign: 'center',
  },
  date: {
    padding: 10,
    fontSize: 16,
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
});

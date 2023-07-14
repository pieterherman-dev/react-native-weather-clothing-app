import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { getFormattedDate, getFormattedTime } from '../../utils/timeUtils';
import styles from './TimeAndDate.style';

const TimeAndDate: React.FC = () => {
  const [dateAndTime, setDateAndTime] = useState<string>('');

  useEffect(() => {
    const updateTimeAndDate = () => {
      const date = new Date();
      setDateAndTime(`${getFormattedDate(date)} ${getFormattedTime(date)}`);
    };

    const interval = setInterval(updateTimeAndDate, 1000); // Update every second

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return <Text style={styles.date}>{dateAndTime}</Text>;
};

export default TimeAndDate;

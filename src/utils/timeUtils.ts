const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Augustus',
  'September',
  'October',
  'November',
  'December',
];

export const getFormattedTime = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours < 10 ? '0' + hours : hours}:${
    minutes < 10 ? '0' + minutes : minutes
  }`;
};

export const getFormattedDate = (date: Date): string => {
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${dayNames[day]} ${day} ${monthNames[month]} ${year}`;
};

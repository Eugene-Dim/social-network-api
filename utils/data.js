const addDateSuffix = (date) => {
  if (date >= 11 && date <= 13) {
    return `${date}th`;
  }

  const lastDigit = date % 10;

  switch (lastDigit) {
    case 1:
      return `${date}st`;
    case 2:
      return `${date}nd`;
    case 3:
      return `${date}rd`;
    default:
      return `${date}th`;
  }
};

const MONTHS_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const MONTHS_LONG = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

module.exports = (
  timestamp,
  { monthLength = 'short', dateSuffix = true } = {}
) => {
  const date = new Date(timestamp);

  const monthIndex = date.getMonth();
  const monthName = monthLength === 'short' ? MONTHS_SHORT[monthIndex] : MONTHS_LONG[monthIndex];

  const day = dateSuffix ? addDateSuffix(date.getDate()) : date.getDate();

  const year = date.getFullYear();

  let hour = date.getHours();
  const period = hour >= 12 ? 'pm' : 'am';
  hour = hour % 12 || 12;

  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${monthName} ${day}, ${year} at ${hour}:${minutes} ${period}`;
};

const addDateSuffix = (date) => {
  const suffixes = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    11: 'th',
    12: 'th',
    13: 'th',
  };
  const lastTwoDigits = date % 100;
  const suffix = suffixes[date] || suffixes[lastTwoDigits] || suffixes[0];
  return `${date}${suffix}`;
};

const MONTHS = [
  { shortName: 'Jan', longName: 'January' },
  { shortName: 'Feb', longName: 'February' },
  { shortName: 'Mar', longName: 'March' },
  { shortName: 'Apr', longName: 'April' },
  { shortName: 'May', longName: 'May' },
  { shortName: 'Jun', longName: 'June' },
  { shortName: 'Jul', longName: 'July' },
  { shortName: 'Aug', longName: 'August' },
  { shortName: 'Sep', longName: 'September' },
  { shortName: 'Oct', longName: 'October' },
  { shortName: 'Nov', longName: 'November' },
  { shortName: 'Dec', longName: 'December' },
];

module.exports = (
  timestamp,
  { monthLength = 'short', dateSuffix = true } = {}
) => {
  const date = new Date(timestamp);

  const monthIndex = date.getMonth();
  const { shortName: shortMonthName, longName: longMonthName } = MONTHS[monthIndex];
  const monthName = monthLength === 'short' ? shortMonthName : longMonthName;

  const day = dateSuffix ? addDateSuffix(date.getDate()) : date.getDate();

  const year = date.getFullYear();

  let hour = date.getHours();
  const period = hour >= 12 ? 'pm' : 'am';
  hour = hour % 12 || 12;

  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${monthName} ${day}, ${year} at ${hour}:${minutes} ${period}`;
};

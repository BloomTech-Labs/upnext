var addMinutes = require('date-fns/add_minutes');

const splitAndParseInt = (str, splitBy) => {
  return str.split(splitBy).map(item => {
    return parseInt(item);
  });
};

module.exports = {
  makeDateWithTimeStr: (startDate, startTime) => {
    let splitDate = splitAndParseInt(startDate, '/');
    let splitTime = splitAndParseInt(startTime, ':');

    return new Date(
      splitDate[2],
      splitDate[0] - 1,
      splitDate[1],
      splitTime[0],
      splitTime[1]
    );
  },

  addMinutesToDate: (date, minsToAdd) => {
    return addMinutes(date, minsToAdd);
  }
};

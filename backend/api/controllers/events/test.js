let startDate = '12/11/2013';
let startTime = '3:15';
var addMinutes = require('date-fns/add_minutes');

console.log(startTime.split(':'));

const splitAndParseInt = (str, splitBy) => {
  return str.split(splitBy).map(item => {
    return parseInt(item);
  });
};

const makeDateWithTime = (startDate, startTime) => {
  let splitDate = splitAndParseInt(startDate, '/');
  let splitTime = splitAndParseInt(startTime, ':');

  return new Date(
    splitDate[2],
    splitDate[0] - 1,
    splitDate[1],
    splitTime[0],
    splitTime[1]
  );
};

console.log(addMinutes(makeDateWithTime(startDate, startTime), 30));

console.log(makeDateWithTime(startDate, startTime) - 0);

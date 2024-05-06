const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const startOfDay = new Date(currentYear, currentMonth, currentDay, 0, 0, 0, 0);
const millisecondsSinceEpoch = startOfDay.getTime();

console.log(millisecondsSinceEpoch);
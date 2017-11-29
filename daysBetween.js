// Calculate and return the number of days between two dates as a string.
// Dates may be in any combination of ISO, short or long formats.
function daysBetween(start, end) {
  const startDate = Date.parse(start) / 86400000; // 86400000 === number of ms/day
  const endDate = Date.parse(end) / 86400000;

  return (endDate - startDate).toString();
}

// Model solution...
// function daysBetween (start, end) {
//   return ((Date.parse(end) - Date.parse(start))/(1000 * 60 * 60 * 24)).toString();
// }

const end = new Date(2016, 5, 17);
const beg = new Date(2000, 4, 21);
console.log(daysBetween(beg, end));
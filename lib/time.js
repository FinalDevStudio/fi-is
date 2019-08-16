/**
 * Time checks.
 *
 * @module is/time
 * @see module:is
 */

var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
var months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
];

/**
 * Checks if the given date is for today.
 *
 * @param {Date} date The date to check.
 * @returns {Boolean} Whether the date is for today.
 * @example
 * is.today(new Date()); // true
 * is.today(dateObjectForToday); // true
 * is.today(dateObjectNotForToday); // false
 */
module.exports.today = function _today (date) {
  return this.date(date) && date.toDateString() === new Date().toDateString();
};

/**
 * Checks if the given date is for yesterday.
 *
 * @param {Date} date The date to check.
 * @returns {Boolean} Whether the date is for yesterday.
 * @example
 * is.yesterday(dateObjectForYesterday); // true
 * is.yesterday(dateObjectNotForYesterday); // false
 * is.yesterday(new Date()); // false
 */
module.exports.yesterday = function _yesterday (date) {
  var now = new Date();

  return this.date(date) && date.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString();
};

/**
 * Checks if the given date is for tomorrow.
 *
 * @param {Date} date The date to check.
 * @returns {Boolean} Whether the date is for tomorrow.
 * @example
 * is.tomorrow(dateObjectForTomorrow); // true
 * is.tomorrow(dateObjectNotForTomorrow); // false
 * is.tomorrow(new Date()); // false
 */
module.exports.tomorrow = function _tomorrow (date) {
  var now = new Date();

  return this.date(date) && date.toDateString() === new Date(now.setDate(now.getDate() + 1)).toDateString();
};

/**
 * Checks if the given date is for the past.
 *
 * @param {Date} date The date to check.
 * @returns {Boolean} Whether the date is for the past.
 * @example
 * is.past(dateObjectForTomorrow); // true
 * is.past(dateObjectNotForTomorrow); // false
 * is.past(new Date()); // false
 */
module.exports.past = function _past (date) {
  return this.date(date) && date.getTime() < new Date().getTime();
};

/**
 * Checks if the given date is for the future.
 *
 * @param {Date} date The date to check.
 * @returns {Boolean} Whether the date is for the future.
 * @example
 * is.future(dateObjectForTheFuture); // true
 * is.future(dateObjectNotForTheFuture); // false
 * is.future(new Date()); // false
 */
module.exports.future = function _future (date) {
  return this.not.past(date);
};

/**
 * Checks if the given date is for the given day of the week. This method
 * doesn't support the `all` or `any` interfaces.
 *
 * @param {Date} date The date to check.
 * @param {String} day The day of the week to check for.
 * @returns {Boolean} Whether the date is for that day of the week.
 * @example
 * is.day(dateObjectForAnyMonday, 'monday'); // true
 * is.day(dateObjectForAnySaturday, 'monday'); // false
 */
module.exports.day = function _day (date, day) {
  return this.date(date) && day.toLowerCase() === days[date.getDay()];
};

module.exports.day.api = ['not'];

/**
 * Checks if the given date is for the given month of the year. This method
 * doesn't support the `all` or `any` interfaces.
 *
 * @param {Date} date The date to check.
 * @param {String} month The month of the year to check for.
 * @returns {Boolean} Whether the date is for that month of the year.
 * @example
 * is.month(dateObjectForNovember, 'november'); // true
 * is.month(dateObjectForJanuary, 'november'); // false
 */
module.exports.month = function _month (date, month) {
  return this.date(date) && month.toLowerCase() === months[date.getMonth()];
};

module.exports.month.api = ['not'];

/**
 * Checks if the given date is for the given year. This method doesn't support
 * the `all` or `any` interfaces.
 *
 * @param {Date} date The date to check.
 * @param {Number} year The year to check for.
 * @returns {Boolean} Whether the date is for that year.
 * @example
 * is.year(dateObjectFor2016, 2016); // true
 * is.year(dateObjectFor2012, 2016); // false
 */
module.exports.year = function _year (date, year) {
  return this.date(date) && this.number(year) && year === date.getFullYear();
};

module.exports.year.api = ['not'];

/**
 * Checks if the given year is a leap year.
 *
 * @param {Number} year The year to check.
 * @returns {Boolean} Whether the date is a leap year.
 * @example
 * is.leapYear(2016); // true
 * is.leapYear(2015); // false
 */
module.exports.leapYear = function _leapYear (year) {
  return this.number(year) && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
};

/**
 * Checks if the given date is for a weekend day.
 *
 * @param {Date} date The date to check.
 * @returns {Boolean} Whether the date is for a weekend day.
 * @example
 * is.weekend(dateObjectForSaturday); // true
 * is.weekend(dateObjectForSunday); // true
 * is.weekend(dateObjectForMonday); // false
 * is.weekend(dateObjectForFriday); // false
 */
module.exports.weekend = function _weekend (date) {
  return this.date(date) && (date.getDay() === 6 || date.getDay() === 0);
};

/**
 * Checks if the given date is for a weekday.
 *
 * @param {Date} date The date to check.
 * @returns {Boolean} Whether the date is for a weekday.
 * @example
 * is.weekday(dateObjectForMonday); // true
 * is.weekday(dateObjectForFriday); // true
 * is.weekday(dateObjectForSaturday); // false
 * is.weekday(dateObjectForSunday); // false
 */
module.exports.weekday = function _weekday (date) {
  return this.not.weekend(date);
};

/**
 * Checks if the given date is within the start and end range. This method
 * doesn't support the `all` or `any` interfaces.
 *
 * @param {Date} date The date to check.
 * @param {Date} start The starting date.
 * @param {Date} end The ending date.
 * @returns {Boolean} Whether the date is within the range.
 * @example
 * is.inDateRange(new Date(), past, future); // true
 * is.inDateRange(new Date(), new Date(), new Date()); // false
 */
module.exports.inDateRange = function _inDateRange (date, start, end) {
  if (this.not.date(date) || this.not.date(start) || this.not.date(end)) {
    return false;
  }

  return date.getTime() > start.getTime() && date.getTime() < end.getTime();
};

module.exports.inDateRange.api = ['not'];

/**
 * Checks if the given date is within last week's range.
 *
 * @param {Date} date The date to check.
 * @returns {Boolean} Whether the date is within last week.
 * @example
 * is.inLastWeek(dateObjectForLastWeek); // true
 * is.inLastWeek(new Date()); // false
 */
module.exports.inLastWeek = function _inLastWeek (date) {
  return this.inDateRange(date, new Date(new Date().setDate(new Date().getDate() - 7)), new Date());
};

/**
 * Checks if the given date is within last month's range.
 *
 * @param {Date} date The date to check.
 * @returns {Boolean} Whether the date is within last month.
 * @example
 * is.inLastMonth(dateObjectForLastMonth); // true
 * is.inLastMonth(new Date()); // false
 */
module.exports.inLastMonth = function _inLastMonth (date) {
  return this.inDateRange(date, new Date(new Date().setMonth(new Date().getMonth() - 1)), new Date());
};

/**
 * Checks if the given date is within last year's range.
 *
 * @param {Date} date The date to check.
 * @returns {Boolean} Whether the date is within last year.
 * @example
 * is.inLastYear(dateObjectForLastYear); // true
 * is.inLastYear(new Date()); // false
 */
module.exports.inLastYear = function _inLastYear (date) {
  return this.inDateRange(date, new Date(new Date().setFullYear(new Date().getFullYear() - 1)), new Date());
};

/**
 * Checks if the given date is within next week's range.
 *
 * @param {Date} date The date to check.
 * @returns {Boolean} Whether the date is within next week.
 * @example
 * is.inNextWeek(dateObjectForNextWeek); // true
 * is.inNextWeek(new Date()); // false
 */
module.exports.inNextWeek = function _inNextWeek (date) {
  return this.inDateRange(date, new Date(), new Date(new Date().setDate(new Date().getDate() + 7)));
};

/**
 * Checks if the given date is within next month's range.
 *
 * @param {Date} date The date to check.
 * @returns {Boolean} Whether the date is within next month.
 * @example
 * is.inNextMonth(dateObjectForNextMonth); // true
 * is.inNextMonth(new Date()); // false
 */
module.exports.inNextMonth = function _inNextMonth (date) {
  return this.inDateRange(date, new Date(), new Date(new Date().setMonth(new Date().getMonth() + 1)));
};

/**
 * Checks if the given date is within next year's range.
 *
 * @param {Date} date The date to check.
 * @returns {Boolean} Whether the date is within next year.
 * @example
 * is.inNextYear(dateObjectForNextYear); // true
 * is.inNextYear(new Date()); // false
 */
module.exports.inNextYear = function _inNextYear (date) {
  return this.inDateRange(date, new Date(), new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
};

/**
 * Checks if the given date is within the given quarter. This method doesn't
 * support the `all` or `any` interfaces.
 *
 * @param {Date} date The date to check.
 * @param {Number} quarter The quarter to check for.
 * @returns {Boolean} Whether the date is within the quarter.
 * @example
 * is.quarterOfYear(dateObjectForSecondQuarter, 2); // true
 * is.quarterOfYear(dateObjectForSecondQuarter, 1); // true
 */
module.exports.quarterOfYear = function _quarterOfYear (date, quarter) {
  return this.date(date) && this.number(quarter) && quarter === Math.floor((date.getMonth() + 3) / 3);
};

module.exports.quarterOfYear.api = ['not'];

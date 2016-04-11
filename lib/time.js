/**
 * @fileoverview Time checks.
 */

module.exports = function (is) {

  var days = [
    'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'
  ];

  var months = [
    'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august',
    'september', 'october', 'november', 'december'
  ];

  /**
   * Checks if the given date is for today.
   *
   * @param {Date} date The date to check.
   * @return {Boolean} Whether the date is for today.
   */
  is.today = function (date) {
    return is.date(date) && date.toDateString() === new Date().toDateString();
  };

  /**
   * Checks if the given date is for yesterday.
   *
   * @param {Date} date The date to check.
   * @return {Boolean} Whether the date is for yesterday.
   */
  is.yesterday = function (obj) {
    var now = new Date();

    return is.date(obj) && obj.toDateString() ===
      new Date(now.setDate(now.getDate() - 1)).toDateString();
  };

  /**
   * Checks if the given date is for tomorrow.
   *
   * @param {Date} date The date to check.
   * @return {Boolean} Whether the date is for tomorrow.
   */
  is.tomorrow = function (obj) {
    var now = new Date();

    return is.date(obj) && obj.toDateString() ===
      new Date(now.setDate(now.getDate() + 1)).toDateString();
  };

  /**
   * Checks if the given date is for the past.
   *
   * @param {Date} date The date to check.
   * @return {Boolean} Whether the date is for the past.
   */
  is.past = function (obj) {
    return is.date(obj) && obj.getTime() < new Date().getTime();
  };

  /**
   * Checks if the given date is for the future.
   *
   * @param {Date} date The date to check.
   * @return {Boolean} Whether the date is for the future.
   */
  is.future = function (date) {
    return is.not.past(date);
  };

  /**
   * Checks if the given date is for the given day of the week.
   *
   * @param {Date} date The date to check.
   * @param {String} day The day of the week to check for.
   * @return {Boolean} Whether the date is for that day of the week.
   */
  is.day = function (date, day) {
    return is.date(date) && day.toLowerCase() === days[date.getDay()];
  };

  /* Method 'day' does not support 'all' and 'any' interfaces */
  is.day.api = ['not'];

  /**
   * Checks if the given date is for the given month of the year.
   *
   * @param {Date} date The date to check.
   * @param {String} month The month of the year to check for.
   * @return {Boolean} Whether the date is for that month of the year.
   */
  is.month = function (date, month) {
    return is.date(date) && month.toLowerCase() === months[date.getMonth()];
  };

  /* Method 'month' does not support 'all' and 'any' interfaces */
  is.month.api = ['not'];

  /**
   * Checks if the given date is for the given year.
   *
   * @param {Date} date The date to check.
   * @param {Number} year The year to check for.
   * @return {Boolean} Whether the date is for that year.
   */
  is.year = function (date, year) {
    return is.date(date) && is.number(year) && year === date.getFullYear();
  };

  /* Method 'year' does not support 'all' and 'any' interfaces */
  is.year.api = ['not'];

  /**
   * Checks if the given year is a leap year.
   *
   * @param {Number} year The year to check.
   * @return {Boolean} Whether the date is a leap year.
   */
  is.leapYear = function (year) {
    return is.number(year) && (
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    );
  };

  /**
   * Checks if the given date is for a weekend day.
   *
   * @param {Date} date The date to check.
   * @return {Boolean} Whether the date is for a weekend day.
   */
  is.weekend = function (date) {
    return is.date(date) && (date.getDay() === 6 || date.getDay() === 0);
  };

  /**
   * Checks if the given date is for a weekday.
   *
   * @param {Date} date The date to check.
   * @return {Boolean} Whether the date is for a weekday.
   */
  is.weekday = function (date) {
    return is.not.weekend(date);
  };

  /**
   * Checks if the given date is within the start and end range.
   *
   * @param {Date} date The date to check.
   * @param {Date} start The starting date.
   * @param {Date} end The ending date.
   * @return {Boolean} Whether the date is within the range.
   */
  is.inDateRange = function (date, start, end) {
    if (is.not.date(date) || is.not.date(start) || is.not.date(end)) {
      return false;
    }

    return date.getTime() > start.getTime() && date.getTime() < end.getTime();
  };

  /* Method 'inDateRange' does not support 'all' and 'any' interfaces */
  is.inDateRange.api = ['not'];

  /**
   * Checks if the given date is within last week's range.
   *
   * @param {Date} date The date to check.
   * @return {Boolean} Whether the date is within last week.
   */
  is.inLastWeek = function (date) {
    return is.inDateRange(date, new Date(new Date().setDate(new Date().getDate() - 7)), new Date());
  };

  /**
   * Checks if the given date is within last month's range.
   *
   * @param {Date} date The date to check.
   * @return {Boolean} Whether the date is within last month.
   */
  is.inLastMonth = function (obj) {
    return is.inDateRange(obj, new Date(new Date().setMonth(new Date().getMonth() - 1)), new Date());
  };

  /**
   * Checks if the given date is within last year's range.
   *
   * @param {Date} date The date to check.
   * @return {Boolean} Whether the date is within last year.
   */
  is.inLastYear = function (obj) {
    return is.inDateRange(obj, new Date(new Date().setFullYear(new Date().getFullYear() - 1)), new Date());
  };

  /**
   * Checks if the given date is within next week's range.
   *
   * @param {Date} date The date to check.
   * @return {Boolean} Whether the date is within next week.
   */
  is.inNextWeek = function (obj) {
    return is.inDateRange(obj, new Date(), new Date(new Date().setDate(new Date().getDate() + 7)));
  };

  /**
   * Checks if the given date is within next month's range.
   *
   * @param {Date} date The date to check.
   * @return {Boolean} Whether the date is within next month.
   */
  is.inNextMonth = function (obj) {
    return is.inDateRange(obj, new Date(), new Date(new Date().setMonth(new Date().getMonth() + 1)));
  };

  /**
   * Checks if the given date is within next year's range.
   *
   * @param {Date} date The date to check.
   * @return {Boolean} Whether the date is within next year.
   */
  is.inNextYear = function (obj) {
    return is.inDateRange(obj, new Date(), new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
  };

  /**
   * Checks if the given date is within the given quarter.
   *
   * @param {Date} date The date to check.
   * @param {Number} quarter The quarter to check for.
   * @return {Boolean} Whether the date is within the quarter.
   */
  is.quarterOfYear = function (date, quarter) {
    return is.date(date) && is.number(quarter) &&
      quarter === Math.floor((date.getMonth() + 3) / 3);
  };

  /* Method 'quarterOfYear' does not support 'all' and 'any' interfaces */
  is.quarterOfYear.api = ['not'];

  /**
   * Checks if the given date is in daylight saving time.
   *
   * TODO: Figure out a way to make it work in every timezone as now it works
   * only for some in the US.
   *
   * @param {Date} date The date to check.
   * @return {Boolean} Whether the date is in daylight saving time.
   */
  is.dayLightSavingTime = function (date) {
    var january = new Date(date.getFullYear(), 0, 1);
    var july = new Date(date.getFullYear(), 6, 1);
    var stdTimezoneOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());

    return date.getTimezoneOffset() < stdTimezoneOffset;
  };

};

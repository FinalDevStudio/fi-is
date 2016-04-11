/**
 * @fileoverview String checks.
 */

module.exports = function (is) {

  /**
   * Checks if the given string includes or contains the given value.
   *
   * @param {String} str The string to search into.
   * @param {Mixed} val The value to search for.
   * @return {Boolean} Whether the string contains the given value.
   */
  is.include = function (str, val) {
    return str.indexOf(val) > -1;
  };

  /* Method 'include' does not support 'all' and 'any' interfaces */
  is.include.api = ['not'];

  /**
   * Checks if the given string is all in uppercase.
   *
   * @param {String} str The string to check.
   * @return {Boolean} Whether the string is all in uppercase.
   */
  is.upperCase = function (str) {
    return is.string(str) && str === str.toUpperCase();
  };

  /**
   * Checks if the given string is all in lowercase.
   *
   * @param {String} str The string to check.
   * @return {Boolean} Whether the string is all in lowercase.
   */
  is.lowerCase = function (str) {
    return is.string(str) && str === str.toLowerCase();
  };

  /**
   * Checks if the given string starts with the given value.
   *
   * @param {String} str The string to check into.
   * @param {String} val The value to check for.
   * @return {Boolean} Whether the string starts with the given value.
   */
  is.startWith = function (str, val) {
    return is.string(str) && str.indexOf(val) === 0;
  };

  /* Method 'startWith' does not support 'all' and 'any' interfaces */
  is.startWith.api = ['not'];

  /**
   * Checks if the given string ends with the given value.
   *
   * @param {String} str The string to check into.
   * @param {String} val The value to check for.
   * @return {Boolean} Whether the string ends with the given value.
   */
  is.endWith = function (str, val) {
    return is.string(str) && str.indexOf(val) > -1 &&
      str.indexOf(val) === str.length - val.length;
  };

  /* Method 'endWith' does not support 'all' and 'any' interfaces */
  is.endWith.api = ['not'];

  /**
   * Checks if the given string is sentence capitalized.
   *
   * @param {String} str The string to check.
   * @return {Boolean} Whether the string is sentence capitalized.
   */
  is.capitalized = function (str) {
    if (is.not.string(str)) {
      return false;
    }

    var words = str.split(' ');
    var capitalized = [];

    for (var i = 0; i < words.length; i++) {
      capitalized.push(words[i][0] === words[i][0].toUpperCase());
    }

    return is.all.truthy.apply(null, capitalized);
  };

  /**
   * Checks if the given string is a palindrome.
   *
   * @param {String} str The string to check.
   * @return {Boolean} Whether the string is a palindrome.
   */
  is.palindrome = function (str) {
    return is.string(str) && str === str.split('').reverse().join('');
  };

};

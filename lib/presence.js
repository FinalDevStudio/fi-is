/**
 * @fileoverview Presence checks.
 */

module.exports = function (is) {

  /**
   * Checks if the given object is empty.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is empty.
   */
  is.empty = function (val) {
    if (is.string(val)) {
      return val === '';
    }

    if (is.object(val)) {
      var len = Object.getOwnPropertyNames(val).length;

      return len === 0 || (len === 1 && is.array(val)) ||
        (len === 2 && is.arguments(val));
    }

    return !!val;
  };

  /**
   * Checks if the given object is not null or undefined.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is not null or undefined.
   */
  is.existy = function (val) {
    return val !== null && val !== undefined;
  };

  /**
   * Checks if the given value is truthy.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is truthy.
   */
  is.truthy = function (val) {
    return is.existy(val) && val !== false && is.not.nan(val) &&
      val !== '' && val !== 0;
  };

  /**
   * Checks if the given value is falsy.
   *
   * @param {Mixed} val The object to check.
   * @return {Boolean} Whether the value is falsy.
   */
  is.falsy = function (val) {
    return is.not.truthy(val);
  };

  /**
   * Checks if the given value is a space character. Checks for
   * horizantal tab (9), line feed (10), vertical tab (11), form feed (12),
   * carriage return (13) and space (32).
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is a space character.
   */
  is.space = function (val) {
    if (is.char(val)) {
      var code = val.charCodeAt(0);
      return (code > 8 && code < 14) || code === 32;
    }

    return false;
  };

};

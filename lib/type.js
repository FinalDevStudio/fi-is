/* Type checks -------------------------------------------------------------- */

module.exports = function (is) {

  /**
   * Checks if the given value is of arguments type with a fallback check for
   * IE.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is of arguments type.
   */
  is.arguments = function (val) {
    return is.not.null(val) &&
      (Object.prototype.toString.call(val) === '[object Arguments]' ||
        (typeof val === 'object' && 'callee' in val));
  };

  /**
   * Checks if the given value is an array using native 'isArray' if available.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is an array.
   */
  is.array = Array.isArray || function (val) {
    return Object.prototype.toString.call(val) === '[object Array]';
  };

  /**
   * Checks if the given value is a boolean.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is a boolean.
   */
  is.boolean = function (val) {
    return val === true || val === false ||
      Object.prototype.toString.call(val) === '[object Boolean]';
  };

  /**
   * Checks if the given value is a date object.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is a date object.
   */
  is.date = function (val) {
    return Object.prototype.toString.call(val) === '[object Date]';
  };

  /**
   * Checks if the given value is an error object.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is an error object.
   */
  is.error = function (val) {
    return Object.prototype.toString.call(val) === '[object Error]';
  };

  /**
   * Checks if the given value is a function with a fallback check for IE.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is a function.
   */
  is.function = function (val) {
    return Object.prototype.toString.call(val) === '[object Function]' ||
      typeof value === 'function';
  };

  /**
   * Checks if the given value is NaN.
   *
   * Note: NaN is a number and it's the only value which doesn't equals itself.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is NaN.
   */
  is.nan = function (val) {
    return val !== val;
  };

  /**
   * Checks if the given value is null.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is null.
   */
  is.null = function (val) {
    return val === null;
  };

  /**
   * Checks if the given value is a number.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is a number.
   */
  is.number = function (val) {
    return is.not.nan(val) &&
      Object.prototype.toString.call(val) === '[object Number]';
  };

  /**
   * Checks if the given value is an object.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is an object.
   */
  is.object = function (val) {
    var type = typeof val;
    return type === 'function' || type === 'object' && !!val;
  };

  /**
   * Checks if the given value is a pure JSON object.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is a pure JSON object.
   */
  is.json = function (val) {
    return Object.prototype.toString.call(val) === '[object Object]';
  };

  /**
   * Checks if the given value is a RegExp.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is a RegExp.
   */
  is.regexp = function (val) {
    return Object.prototype.toString.call(val) === '[object RegExp]';
  };

  /**
   * Checks if the given values are of same type preventing NaN and Number same
   * type check.
   *
   * @param {Mixed} val1 The first value to check.
   * @param {Mixed} val2 The other value to check.
   * @return {Boolean} Whether the values are of same type.
   */
  is.sameType = function (val1, val2) {
    if (is.nan(val1) || is.nan(val2)) {
      return is.nan(val1) === is.nan(val2);
    }

    return Object.prototype.toString.call(val1) ===
      Object.prototype.toString.call(val2);
  };

  /* Method 'sameType' does not support 'all' and 'any' interfaces */
  is.sameType.api = ['not'];

  /**
   * Checks if the given value is a string.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is a string.
   */
  is.string = function (value) {
    return Object.prototype.toString.call(value) === '[object String]';
  };

  /**
   * Checks if the given value is a single char.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is a single char.
   */
  is.char = function (val) {
    return is.string(val) && val.length === 1;
  };

  /**
   * Checks if the given value is undefined.
   *
   * @param {Mixed} val The value to check.
   * @return {Boolean} Whether the value is undefined.
   */
  is.undefined = function (val) {
    return val === void 0;
  };

};

/* Arithmetic checks -------------------------------------------------------- */

module.exports = function (is, not) {

  /**
   * Checks if the given values are equal.
   *
   * Important: Checking for object or array equalitiy is a taxing proccess!
   *
   * @param {Mixed} a The first value.
   * @param {Mixed} b The other value.
   * @return {Boolean} Whether the values are equal.
   *
   * TODO: Add object and array support.
   */
  is.equal = function (a, b) {
    /* Check 0 and -0 equity with Infinity and -Infinity */
    if (is.all.number(a, b)) {
      return a === b && 1 / a === 1 / b;
    }

    /* Check regexps and strings equality */
    if (is.all.string(a, b) || is.all.regexp(a, b)) {
      return '' + a === '' + b;
    }

    /* Check booleans equality */
    if (is.all.boolean(a, b)) {
      return a === b;
    }

    /* Check arrays equality */
    if (is.all.array(a, b)) {
      if (a.length !== b.length) {
        return false;
      }

      for (var i = 0, l = a.length; i < l; i++) {
        if (is.not.equal(a[i], b[i])) {
          return false;
        }
      }

      return true;
    }

    /* Check objects equality */
    if (is.all.object(a, b)) {
      if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
      }

      for (var p in a) {
        if (a.hasOwnProperty(p) && b.hasOwnProperty(p)) {
          if (is.not.equal(a[p], b[p])) {
            return false;
          }
        } else {
          return false;
        }
      }

      return true;
    }

    return false;
  };

  /* Method 'equal' does not support 'all' and 'any' interfaces */
  is.equal.api = ['not'];

  /**
   * Checks if the given number is even.
   *
   * @param {Number} num The number to check.
   * @return {Boolean} Whether the number is even.
   */
  is.even = function (num) {
    return is.number(num) && num % 2 === 0;
  };

  /**
   * Checks if the given number is odd.
   *
   * @param {Number} num The number to check.
   * @return {Boolean} Whether the number is odd.
   */
  is.odd = function (num) {
    return is.number(num) && num % 2 === 1;
  };

  /**
   * Checks if the given number is positive.
   *
   * @param {Number} num The number to check.
   * @return {Boolean} Whether the number is positive.
   */
  is.positive = function (num) {
    return is.number(num) && num > 0;
  };

  /**
   * Checks if the given number is negative.
   *
   * @param {Number} num The number to check.
   * @return {Boolean} Whether the number is negative.
   */
  is.negative = function (num) {
    return is.number(num) && num < 0;
  };

  /**
   * Checks if the given number is greater than the given minimum.
   *
   * @param {Number} num The number to check.
   * @return {Boolean} Whether the number is greater than the minimum.
   */
  is.above = function (num, min) {
    return is.all.number(num, min) && num > min;
  };

  /* Method 'above' does not support 'all' and 'any' interfaces */
  is.above.api = ['not'];

  /**
   * Checks if the given number is less than the given maximum.
   *
   * @param {Number} num The number to check.
   * @return {Boolean} Whether the number is less than the maximum.
   */
  is.under = function (num, max) {
    return is.all.number(num, max) && num < max;
  };

  /* Method 'under' does not support 'all' and 'any' interfaces */
  is.under.api = ['not'];

  /**
   * Checks if the given number is within the given minimum and maximum.
   *
   * @param {Number} num The number to check.
   * @return {Boolean} Whether the number is within the minimum and maximum.
   */
  is.within = function (num, min, max) {
    return is.all.number(num, min, max) && num > min && num < max;
  };

  /* Method 'within' does not support 'all' and 'any' interfaces */
  is.within.api = ['not'];

  /**
   * Checks if the given number is a decimal.
   *
   * @param {Number} num The number to check.
   * @return {Boolean} Whether the number is a decimal.
   */
  is.decimal = function (num) {
    return is.number(num) && num % 1 !== 0;
  };

  /**
   * Checks if the given number is an integer.
   *
   * @param {Number} num The number to check.
   * @return {Boolean} Whether the number is an integer.
   */
  is.integer = function (num) {
    return is.number(num) && num % 1 === 0;
  };

  /**
   * Checks if the given number is finite using native method first.
   *
   * @param {Number} num The number to check.
   * @return {Boolean} Whether the number is finite.
   */
  is.finite = isFinite || function (numb) {
    return numb !== Infinity && numb !== -Infinity && is.not.nan(numb);
  };

  /**
   * Checks if the given number is infinite. Alias of 'not.finite'.
   *
   * @param {Number} num The number to check.
   * @return {Boolean} Whether the number is infinite.
   */
  is.infinite = not(is.finite);

};

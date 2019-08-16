/**
 * Arithmetic checks.
 *
 * @module is/arithmetic
 * @see module:is
 */

/**
 * Checks if the given values are equal. This method doesn't support the `all`
 * or `any` interfaces.
 *
 * Important: Checking for object or array equality is a taxing proccess!
 *
 * @param {Mixed} a The first value.
 * @param {Mixed} b The other value.
 * @returns {Boolean} Whether the values are equal.
 * @example
 * is.equal(1, 1); // true
 * is.equal([1, 2, 3], [1, 2, 3]); // true
 * is.equal([1, 2], ''); // false
 * is.equal(1, 2); // false
 */
module.exports.equal = function _equal (a, b) {
  /* Check 0 and -0 equity with Infinity and -Infinity */
  if (this.all.number(a, b)) {
    return a === b && 1 / a === 1 / b;
  }

  /* Check regexps and strings equality */
  if (this.all.string(a, b) || this.all.regexp(a, b)) {
    return String(a) === String(b);
  }

  /* Check booleans equality */
  if (this.all.boolean(a, b)) {
    return a === b;
  }

  /* Check arrays equality */
  if (this.all.array(a, b)) {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0, l = a.length; i < l; i++) {
      if (this.not.equal(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  /* Check objects equality */
  if (this.all.object(a, b)) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    for (const key of Object.keys(a)) {
      const bothHaveProperty = Object.prototype.hasOwnProperty.call(a, key) && Object.prototype.hasOwnProperty.call(b, key);

      if (bothHaveProperty) {
        if (this.not.equal(a[key], b[key])) {
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

module.exports.equal.api = ['not'];

/**
 * Checks if the given number is even.
 *
 * @param {Number} num The number to check.
 * @returns {Boolean} Whether the number is even.
 * @example
 * is.even(2); // true
 * is.even(3); // false
 */
module.exports.even = function _even (num) {
  return this.number(num) && num % 2 === 0;
};

/**
 * Checks if the given number is odd.
 *
 * @param {Number} num The number to check.
 * @returns {Boolean} Whether the number is odd.
 * @example
 * is.odd(3); // true
 * is.odd(2); // false
 */
module.exports.odd = function _odd (num) {
  return this.number(num) && num % 2 === 1;
};

/**
 * Checks if the given number is positive.
 *
 * @param {Number} num The number to check.
 * @returns {Boolean} Whether the number is positive.
 * @example
 * is.positive(2); // true
 * is.positive(-3); // false
 */
module.exports.positive = function _positive (num) {
  return this.number(num) && num > 0;
};

/**
 * Checks if the given number is negative.
 *
 * @param {Number} num The number to check.
 * @returns {Boolean} Whether the number is negative.
 * @example
 * is.negative(-3); // true
 * is.negative(2); // false
 */
module.exports.negative = function _negative (num) {
  return this.number(num) && num < 0;
};

/**
 * Checks if the given number is greater than the given minimum. This method
 * doesn't support the `all` or `any` interfaces.
 *
 * @param {Number} num The number to check.
 * @param {Number} min The minimum value exclusive.
 * @returns {Boolean} Whether the number is greater than the minimum.
 * @example
 * is.above(3, 2); // true
 * is.above(2, 3); // false
 * is.above(3, 3); // false
 */
module.exports.above = function _above (num, min) {
  return this.all.number(num, min) && num > min;
};

module.exports.above.api = ['not'];

/**
 * Checks if the given number is less than the given maximum. This method
 * doesn't support the `all` or `any` interfaces.
 *
 * @param {Number} num The number to check.
 * @param {Number} max The maximum value exclusive.
 * @returns {Boolean} Whether the number is less than the maximum.
 * @example
 * is.under(3, 2); // true
 * is.under(2, 3); // false
 * is.under(3, 3); // false
 */
module.exports.under = function _under (num, max) {
  return this.all.number(num, max) && num < max;
};

module.exports.under.api = ['not'];

/**
 * Checks if the given number is within the given minimum and maximum. This
 * method doesn't support the `all` or `any` interfaces.
 *
 * @param {Number} num The number to check.
 * @param {Number} min The minimum value exclusive.
 * @param {Number} max The maximum value exclusive.
 * @returns {Boolean} Whether the number is within the minimum and maximum.
 * @example
 * is.within(0, -2, 2); // true
 * is.within(1, -2, 2); // true
 * is.within(0, 1, 3); // false
 * is.within(1, 1, 2); // false
 */
module.exports.within = function _within (num, min, max) {
  return this.all.number(num, min, max) && num > min && num < max;
};

module.exports.within.api = ['not'];

/**
 * Checks if the given number is between the given minimum and maximum (inclusive). This
 * method doesn't support the `all` or `any` interfaces.
 *
 * @param {Number} num The number to check.
 * @param {Number} min The minimum value exclusive.
 * @param {Number} max The maximum value exclusive.
 * @returns {Boolean} Whether the number is between the minimum and maximum (inclusive).
 * @example
 * is.between(0, -2, 2); // true
 * is.between(1, -2, 2); // true
 * is.between(1, 1, 2); // true
 * is.between(0, 1, 3); // false
 * is.between(10, 30, 50); // false
 */
module.exports.between = function _between (num, min, max) {
  return this.all.number(num, min, max) && num >= min && num <= max;
};

module.exports.between.api = ['not'];

/**
 * Checks if the given number is a decimal.
 *
 * @param {Number} num The number to check.
 * @returns {Boolean} Whether the number is a decimal.
 * @example
 * is.decimal(13.45); // true
 * is.decimal(13); // false
 */
module.exports.decimal = function _decimal (num) {
  return this.number(num) && num % 1 !== 0;
};

/**
 * Checks if the given number is an integer.
 *
 * @param {Number} num The number to check.
 * @returns {Boolean} Whether the number is an integer.
 * @example
 * is.integer(13); // true
 * is.integer(13.5); // false
 */
module.exports.integer = function _integer (num) {
  return this.number(num) && num % 1 === 0;
};

/**
 * Checks if the given number is finite using native 'isFinite' first.
 *
 * @param {Number} num The number to check.
 * @returns {Boolean} Whether the number is finite.
 * @example
 * is.finite(13); // true
 * is.finite(Infinity); // false
 */
module.exports.finite = function _finite (num) {
  if (typeof isFinite === 'function') {
    return isFinite(num);
  }

  return num !== Infinity && num !== -Infinity && this.not.nan(num);
};

/**
 * Checks if the given number is infinite.
 *
 * @param {Number} num The number to check.
 * @returns {Boolean} Whether the number is infinite.
 * @example
 * is.infinite(Infinity); // true
 * is.infinite(13); // false
 */
module.exports.infinite = function _infinite (num) {
  return this.not.finite(num);
};

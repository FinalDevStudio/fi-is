/**
 * String checks.
 *
 * @module is/string
 * @see module:is
 */

/**
 * Checks if the given string includes or contains the given value. This
 * method doesn't support the `all` or `any` interfaces.
 *
 * @param {String} str The string to search into.
 * @param {Mixed} val The value to search for.
 * @returns {Boolean} Whether the string contains the given value.
 * @example
 * is.include('foobar', 'foo'); // true
 * is.include('foobar', 'oob'); // true
 * is.include('foobar', 'bar'); // true
 * is.include('foobar', 'wer'); // false
 * is.include('foobar', {}); // false
 */
module.exports.include = function _include (str, val) {
  return this.string(str) && str.indexOf(val) > -1;
};

module.exports.include.api = ['not'];

/**
 * Checks if the given string is all in uppercase.
 *
 * @param {String} str The string to check.
 * @returns {Boolean} Whether the string is all in uppercase.
 * @example
 * is.upperCase('FOOBAR'); // true
 * is.upperCase('FooBaR'); // false
 * is.upperCase('foobar'); // false
 */
module.exports.upperCase = function _upperCase (str) {
  return this.string(str) && str === str.toUpperCase();
};

/**
 * Checks if the given string is all in lowercase.
 *
 * @param {String} str The string to check.
 * @returns {Boolean} Whether the string is all in lowercase.
 * @example
 * is.lowerCase('foobar'); // true
 * is.lowerCase('FooBaR'); // false
 * is.lowerCase('FOOBAR'); // false
 */
module.exports.lowerCase = function _lowerCase (str) {
  return this.string(str) && str === str.toLowerCase();
};

/**
 * Checks if the given string starts with the given value. This method doesn't
 * support the `all` or `any` interfaces.
 *
 * @param {String} str The string to check into.
 * @param {String} val The value to check for.
 * @returns {Boolean} Whether the string starts with the given value.
 * @example
 * is.startWith('foobar', 'foo'); // true
 * is.startWith('foobar', 'oob'); // false
 * is.startWith('foobar', 'bar'); // false
 */
module.exports.startWith = function _startWith (str, val) {
  return this.string(str) && str.indexOf(val) === 0;
};

module.exports.startWith.api = ['not'];

/**
 * Checks if the given string ends with the given value. This method doesn't
 * support the `all` or `any` interfaces.
 *
 * @param {String} str The string to check into.
 * @param {String} val The value to check for.
 * @returns {Boolean} Whether the string ends with the given value.
 * @example
 * is.endWith('foobar', 'bar'); // true
 * is.endWith('foobar', 'oob'); // false
 * is.endWith('foobar', 'foo'); // false
 */
module.exports.endWith = function _endWith (str, val) {
  return this.string(str) && str.indexOf(val) > -1 && str.indexOf(val) === str.length - val.length;
};

module.exports.endWith.api = ['not'];

/**
 * Checks if the given string is word-capitalized.
 *
 * @param {String} str The string to check.
 * @returns {Boolean} Whether the string is word-capitalized.
 * @example
 * is.capitalized('Foo'); // true
 * is.capitalized('Foo Bar Baz'); // true
 * is.capitalized('Foo bar baz'); // false
 * is.capitalized('foo'); // false
 */
module.exports.capitalized = function _capitalized (str) {
  if (this.not.string(str)) {
    return false;
  }

  const words = str.split(/\s+/);
  const capitalized = [];

  for (const word of words) {
    const [first] = word;
    capitalized.push(first === first.toUpperCase());
  }

  return this.all.truthy.apply(null, capitalized);
};

/**
 * Checks if the given string is a palindrome.
 *
 * @param {String} str The string to check.
 * @returns {Boolean} Whether the string is a palindrome.
 * @example
 * is.palindrome('foobaraboof'); // true
 * is.palindrome('noon'); // true
 * is.palindrome('foobar'); // false
 * is.palindrome('bar'); // false
 */
module.exports.palindrome = function _palindrome (str) {
  return (
    this.string(str) &&
    str ===
    str
      .split('')
      .reverse()
      .join('')
  );
};

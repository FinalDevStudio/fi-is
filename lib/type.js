/**
 * Type checks.
 * @module is/type
 * @see module:is
 */

/**
 * Checks if the given value is of arguments type with a fallback check for
 * IE.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is of arguments type.
 * @example
 * is.arguments(arguments); // true
 * is.arguments('not arguments'); // false
 */
module.exports.arguments = function _arguments (val) {
  return (
    this.not.null(val) &&
    (Object.prototype.toString.call(val) === '[object Arguments]' || (typeof val === 'object' && 'callee' in val))
  );
};

/**
 * Checks if the given value is an array using native `Array.isArray`.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is an array.
 * @example
 * is.array([]); // true
 * is.array('not array'); // false
 */
module.exports.array = function _array (val) {
  return Array.isArray(val);
};

/**
 * Checks if the given value is a boolean.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a boolean.
 * @example
 * is.boolean(true); // true
 * is.boolean(false); // true
 * is.boolean('not boolean'); // false
 */
module.exports.boolean = function _boolean (val) {
  return val === true || val === false || Object.prototype.toString.call(val) === '[object Boolean]';
};

/**
 * Checks if the given value is a date object.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a date object.
 * @example
 * is.date(new Date()); // true
 * is.date('not date'); // false
 */
module.exports.date = function _date (val) {
  return Object.prototype.toString.call(val) === '[object Date]';
};

/**
 * Checks if the given value is an error object.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is an error object.
 * @example
 * is.error(new Error()); // true
 * is.error('not error'); // false
 */
module.exports.error = function _error (val) {
  return Object.prototype.toString.call(val) === '[object Error]';
};

/**
 * Checks if the given value is a function with a fallback check for IE.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a function.
 * @example
 * is.function(function () {}); // true
 * is.function('not function'); // false
 */
module.exports.function = function _function (val) {
  return (
    Object.prototype.toString.call(val) === '[object Function]' ||
    Object.prototype.toString.call(val) === '[object AsyncFunction]' ||
    typeof val === 'function'
  );
};

/**
 * Checks if the given value is NaN. The difference with the native `isNaN`
 * function is that this will not return true for strings or other types and
 * only for the NaN value, the only value that doesn't equals itself.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is NaN.
 * @example
 * is.function(NaN); // true
 * is.function('not NaN'); // false
 * is.function(null); // false
 */
module.exports.nan = function _nan (val) {
  return val !== val;
};

/**
 * Checks if the given value is null.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is null.
 * @example
 * is.null(null); // true
 * is.null(undefined); // false
 * is.null('not null'); // false
 */
module.exports.null = function _null (val) {
  return val === null;
};

/**
 * Checks if the given value is a number.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a number.
 * @example
 * is.number(0); // true
 * is.number(3.5); // true
 * is.number('not number'); // false
 */
module.exports.number = function _number (val) {
  return this.not.nan(val) && Object.prototype.toString.call(val) === '[object Number]';
};

/**
 * Checks if the given value is an object.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is an object.
 * @example
 * is.object({}); // true
 * is.object(function () {}); // false
 * is.object('not object'); // false
 */
module.exports.object = function _object (val) {
  return Object.prototype.toString.call(val) === '[object Object]';
};

/**
 * Checks if the given value is a JSON string.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a JSON string.
 * @example
 * is.json('{ "some": "value" }'); // true
 * is.json({}); // false
 * is.json('not json'); // false
 */
module.exports.json = function _json (val) {
  if (this.string(val)) {
    try {
      JSON.parse(val);
      return true;
    } catch (e) {
      return false;
    }
  }

  return false;
};

/**
 * Checks if the given value is a RegExp.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a RegExp.
 * @example
 * is.regexp(/regexp/gi); // true
 * is.regexp(new RegExp('regexp' ,'gi')); // true
 * is.regexp({}); // false
 * is.regexp('not regexp'); // false
 */
module.exports.regexp = function _regexp (val) {
  return Object.prototype.toString.call(val) === '[object RegExp]';
};

/**
 * Checks if the given values are of same type preventing NaN and Number same
 * type check. This method doesn't support the `all` or `any` interfaces.
 *
 * @param {Mixed} a The first value to check.
 * @param {Mixed} b The other value to check.
 * @returns {Boolean} Whether the values are of same type.
 * @example
 * is.sameType(true, false); // true
 * is.sameType(1, 3); // true
 * is.sameType({}, []); // false
 * is.sameType('', null); // false
 */
module.exports.sameType = function _sameType (a, b) {
  if (this.nan(a) || this.nan(b)) {
    return this.nan(a) && this.nan(b);
  }

  return Object.prototype.toString.call(a) === Object.prototype.toString.call(b);
};

module.exports.sameType.api = ['not'];

/**
 * Checks if the given value is a string.
 *
 * @param {Mixed} value The value to check.
 * @returns {Boolean} Whether the value is a string.
 * @example
 * is.string('foo'); // true
 * is.string(''); // true
 * is.string({}); // false
 * is.string([]); // false
 */
module.exports.string = function _string (value) {
  return Object.prototype.toString.call(value) === '[object String]';
};

/**
 * Checks if the given value is a single char.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a single char.
 * @example
 * is.char('a'); // true
 * is.char('foo'); // false
 * is.char(1); // false
 * is.char(null); // false
 */
module.exports.char = function _char (val) {
  return this.string(val) && val.length === 1;
};

/**
 * Checks if the given value is undefined.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is undefined.
 * @example
 * is.undefined(undefined); // true
 * is.undefined('not undefined'); // false
 */
module.exports.undefined = function _undefined (val) {
  return val === void 0;
};

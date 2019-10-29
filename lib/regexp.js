/**
 * Regexp checks.
 *
 * @module is/regexp
 * @see module:is
 */

/**
 * REGEXPS definition.
 *
 * Steven Levithan, Jan Goyvaerts: Regular Expressions Cookbook.
 * Scott Gonzalez: Email address validation.
 *
 * @type {Object}
 * @private
 */
const REGEXPS = {
  domain: /\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}\b/,
  url: /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)(:\d+)?((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,
  email: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
  creditCard: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
  alphaNumeric: /^[A-Za-z0-9]+$/,
  /* Match hours, minutes, and seconds, 24-hour clock */
  timeString: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
  /* Match m/d/yy and mm/dd/yyyy, allowing any combination of one or two digits
   * for the day and month, and two or four digits for the year */
  dateString: /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/,
  usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/,
  caPostalCode: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,
  ukPostCode: /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
  /* Match north american number plan format */
  nanpPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
  /* Match extensible provisioning protocol format */
  eppPhone: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
  socialSecurityNumber: /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,
  affirmative: /^(?:1|t(?:rue)?|y(?:es)?|o\.?k\.?(?:ay)?)$/i,
  hexadecimal: /^[0-9a-fA-F]+$/,
  hexColor: /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
  ipv4: /^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$/,
  ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
  ip: /(^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$)/
};

/**
 * Returns all the registered regular expressions.
 *
 * @returns {Object} The regular expressions object.
 */
module.exports.getRegexps = function getRegexps () {
  return REGEXPS;
};

/**
 * Sets a custom regexp value for any existant regexp name.
 *
 * @param {RegExp} reg The regexp to use.
 * @param {String} key The regexp name to replace.
 */
module.exports.setRegexp = function _setRegexp (reg, key) {
  for (const name of Object.keys(REGEXPS)) {
    const hasNameProperty = Object.prototype.hasOwnProperty.call(REGEXPS, name);

    if (hasNameProperty && key === name) {
      REGEXPS[name] = reg;
    }
  }
};

/**
 * Checks for a valid domain name.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a valid domain name.
 * @see https://github.com/johnotander/domain-regex
 * @example
 * is.domain('example.com'); // true
 * is.domain('subdomain.example.com'); // true
 * is.domain('sub.domain.example.website'); // true
 * is.domain('not_a_domain'); // false
 * is.domain(1234); // false
 * is.domain(true); // false
 */
module.exports.domain = function _domain (val) {
  return REGEXPS.domain.test(val);
};

/**
 * Checks for a valid URL.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is an URL.
 * @example
 * is.url('http://example.com'); // true
 * is.url('http://not url dot com'); // false
 * is.url(true); // false
 */
module.exports.url = function _url (val) {
  return REGEXPS.url.test(val);
};

/**
 * Checks for a valid email address.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is an email address.
 * @example
 * is.email('address@example.com'); // true
 * is.email('address@not email'); // false
 * is.email(true); // false
 */
module.exports.email = function _email (val) {
  return REGEXPS.email.test(val);
};

/**
 * Checks for a valid credit card number.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a credit card number.
 * @example
 * is.creditCard(378282246310005); // true
 * is.creditCard(123); // false
 * is.creditCard(true); // false
 */
module.exports.creditCard = function _creditCard (val) {
  return REGEXPS.creditCard.test(val);
};

/**
 * Checks for an alphanumeric string.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is an alphanumeric string.
 * @example
 * is.alphaNumeric('abc123'); // true
 * is.alphaNumeric('*?'); // false
 * is.alphaNumeric(true); // false
 */
module.exports.alphanumeric = module.exports.alphaNumeric = function _alphaNumeric (val) {
  return REGEXPS.alphaNumeric.test(val);
};

/**
 * Checks for a valid time string.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a time string.
 * @example
 * is.timeString('13:45:30'); // true
 * is.timeString('12:12:90'); // false
 * is.timeString(true); // false
 */
module.exports.timeString = function _timeString (val) {
  return REGEXPS.timeString.test(val);
};

/**
 * Checks for a valid date string.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a date string.
 * @example
 * is.dateString('11/11/2011'); // true
 * is.dateString('1/5'); // false
 * is.dateString(true); // false
 */
module.exports.dateString = function _dateString (val) {
  return REGEXPS.dateString.test(val);
};

/**
 * Checks for a valid US ZIP code.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a US ZIP code.
 * @example
 * is.usZipCode('02201-1020'); // true
 * is.usZipCode('1'); // false
 * is.usZipCode(true); // false
 */
module.exports.usZipCode = function _usZipCode (val) {
  return REGEXPS.usZipCode.test(val);
};

/**
 * Checks for a valid Canada postal code.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a Canada postal code.
 * @example
 * is.caPostalCode('L8V3Y1'); // true
 * is.caPostalCode('L8V 3Y1'); // true
 * is.caPostalCode('1'); // false
 * is.caPostalCode(true); // false
 */
module.exports.caPostalCode = function _caPostalCode (val) {
  return REGEXPS.caPostalCode.test(val);
};

/**
 * Checks for a valid UK post code.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a UK post code.
 * @example
 * is.ukPostCode('B184BJ'); // true
 * is.ukPostCode('1'); // false
 * is.ukPostCode(true); // false
 */
module.exports.ukPostCode = function _ukPostCode (val) {
  return REGEXPS.ukPostCode.test(val);
};

/**
 * Checks for a valid north american number plan formatted value.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is in north american number
 * plan format.
 * @example
 * is.nanpPhone('609-555-0175'); // true
 * is.nanpPhone('1'); // false
 * is.nanpPhone(true); // false
 */
module.exports.nanpPhone = function _nanpPhone (val) {
  return REGEXPS.nanpPhone.test(val);
};

/**
 * Checks for a valid extensible provisioning protocol formatted value.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is in extensible provisioning protocol
 * format.
 * @example
 * is.eppPhone('+90.2322456789'); // true
 * is.eppPhone('1'); // false
 * is.eppPhone(true); // false
 */
module.exports.eppPhone = function _eppPhone (val) {
  return REGEXPS.eppPhone.test(val);
};

/**
 * Checks for a valid social security number.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is a social security number.
 * @example
 * is.socialSecurityNumber('017-90-7890'); // true
 * is.socialSecurityNumber('1'); // false
 * is.socialSecurityNumber(true); // false
 */
module.exports.socialSecurityNumber = function _socialSecurityNumber (val) {
  return REGEXPS.socialSecurityNumber.test(val);
};

/**
 * Checks for an affirmative value (case-insensitive).
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value affirmative.
 * @example
 * is.affirmative('yes'); // true
 * is.affirmative('true'); // true
 * is.affirmative('y'); // true
 * is.affirmative('1'); // true
 * is.affirmative('ok'); // true
 * is.affirmative('okay'); // true
 * is.affirmative(1); // true
 * is.affirmative(true); // true
 * is.affirmative('no'); // false
 * is.affirmative('N'); // false
 * is.affirmative(0); // false
 * is.affirmative(false); // false
 * is.affirmative({}); // false
 * is.affirmative(null); // false
 */
module.exports.affirmative = function _affirmative (val) {
  return REGEXPS.affirmative.test(val);
};

/**
 * Checks for a valid hexadecimal value.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is hexadecimal.
 * @example
 * is.hexadecimal('ff'); // true
 * is.hexadecimal('ffFF'); // true
 * is.hexadecimal('fF0'); // true
 * is.hexadecimal(0.287); // false
 * is.hexadecimal(true); // false
 */
module.exports.hexadecimal = function _hexadecimal (val) {
  return REGEXPS.hexadecimal.test(val);
};

/**
 * Checks for a valid hex color value.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is hex color.
 * @example
 * is.hexColor('#333'); // true
 * is.hexColor('#444444'); // true
 * is.hexColor('#abc123'); // true
 * is.hexColor(0.287); // false
 * is.hexColor(true); // false
 */
module.exports.hexColor = function _hexColor (val) {
  return REGEXPS.hexColor.test(val);
};

/**
 * Checks for a valid IPv4 or IPv6 address.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is an IPv4 or IPv6 address.
 * @example
 * is.ip('2001:db8::ff00:42:8329'); // true
 * is.ip('127.0.0.1'); // true
 * is.ip('1.0.287.99'); // false
 * is.ip('2001::::42:8329'); // false
 * is.ip(true); // false
 */
module.exports.ip = function _ip (val) {
  return REGEXPS.ip.test(val);
};

/**
 * Checks for a valid IPv4 address.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is an IPv4 address.
 * @example
 * is.ipv4('127.0.0.1'); // true
 * is.ipv4('2001:db8::ff00:42:8329'); // false
 * is.ipv4('5555.555.5.5'); // false
 * is.ipv4(true); // false
 */
module.exports.ipv4 = function _ipv4 (val) {
  return REGEXPS.ipv4.test(val);
};

/**
 * Checks for a valid IPv6 address.
 *
 * @param {Mixed} val The value to check.
 * @returns {Boolean} Whether the value is an IPv6 address.
 * @example
 * is.ipv6('2001:db8::ff00:42:8329'); // true
 * is.ipv6('127.0.0.1'); // false
 * is.ipv6('2001::::42:8329'); // false
 * is.ipv6(true); // false
 */
module.exports.ipv6 = function _ipv6 (val) {
  return REGEXPS.ipv6.test(val);
};

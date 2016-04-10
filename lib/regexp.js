// Regexp checks
/* -------------------------------------------------------------------------- */

module.exports = function (is, regexps) {
  // create regexp checks methods from 'regexp' object
  for (var regexp in regexps) {
    if (regexps.hasOwnProperty(regexp)) {
      regexpCheck(regexp, regexps);
    }
  }

  function regexpCheck(regexp, regexps) {
    is[regexp] = function (value) {
      return regexps[regexp].test(value);
    };
  }
};

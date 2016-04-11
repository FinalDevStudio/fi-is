/**
 * @fileoverview Regexp checks.
 */

module.exports = function (is, regexps) {

  /**
   * Creates the regexp check methods from the defined properties on the
   * 'regexp' object.
   *
   * @param {String} name The regexp name to generate the check method for.
   */
  function create(name) {
    is[name] = function (value) {
      return regexps[name].test(value);
    };
  }

  /* Create regexp checks methods from the 'regexps' object */
  for (var reg in regexps) {
    if (regexps.hasOwnProperty(reg)) {
      create(reg);
    }
  }
};

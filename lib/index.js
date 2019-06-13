/**
 * Fi Is.
 *
 * @module is
 **/

var root = this || global;
var previousIs = root.is;

/**
 * Define namespace.
 *
 * @type {Class}
 *
 * @constructor
 * @private
 */
var is = {
  /**
   * Interface to check if any of the given values passes the the predicate
   * function's check.
   *
   * @example
   * is.any.number(1, 2, 3, 4, 'a string'); // true
   * is.any.string([1, 2, true, 4]); // false
   * is.any.truthy([null, false]); // false
   */
  all: {},

  /**
   * Interface to check if all the given values passes the predicate function's
   * check.
   *
   * @example
   * is.all.number(1, 2, 3, 4); // true
   * is.all.string(['a string', 1, 2, 3, 4]); // false
   * is.all.number([1, 2, 3, 4, 'not number']); // false
   */
  any: {},

  /**
   * Interface to invert the predicate function's result.
   *
   * @example
   * is.not.string(1234); // true
   * is.not.number(1); // false
   * is.not.string('not number'); // false
   */
  not: {},

  /**
   * Gets all args as an array or first argument if it's an array.
   *
   * @returns {Array} args array.
   */
  getArgsArray: function getArgsArray() {
    var args = Array.prototype.slice.call(arguments);
    var len = args.length;

    if (len === 1 && Array.isArray(args[0])) {
      args = args[0];
      len = args.length;
    }

    return args;
  },

  /**
   * Changes the namespace of the library to prevent name collissions.
   *
   * @returns {Object} The 'is' object instance.
   */
  setNamespace: function setNamespace() {
    root.is = previousIs;
    return this;
  }
};

/* API methods -------------------------------------------------------------- */

var checks = [
  require('./environment'),
  require('./arithmetic'),
  require('./presence'),
  require('./object'),
  require('./regexp'),
  require('./string'),
  require('./array'),
  require('./time'),
  require('./type')
];

// Load all checks
Object.keys(checks).forEach(function(check) {
  var obj = checks[check];

  Object.keys(obj).forEach(function(method) {
    Object.defineProperty(is, method, {
      value: obj[method].bind(is),
      enumerable: true
    });

    if (typeof obj[method] === 'function') {
      var interfaces = obj[method].api || ['not', 'all', 'any'];

      if (interfaces.includes('not')) {
        Object.defineProperty(is.not, method, {
          enumerable: true,
          value: function() {
            return !is[method].apply(is, arguments);
          }
        });
      }

      if (interfaces.includes('all')) {
        Object.defineProperty(is.all, method, {
          enumerable: true,
          value: function() {
            var args = is.getArgsArray.apply(is, arguments);

            for (var i = 0, l = args.length; i < l; i++) {
              if (!is[method].call(is, args[i])) {
                return false;
              }
            }

            return true;
          }
        });
      }

      if (interfaces.includes('any')) {
        Object.defineProperty(is.any, method, {
          enumerable: true,
          value: function() {
            var args = is.getArgsArray.apply(is, arguments);

            for (var i = 0, l = args.length; i < l; i++) {
              if (is[method].call(is, args[i])) {
                return true;
              }
            }

            return false;
          }
        });
      }
    }
  });
});

if (typeof Object.freeze === 'function') {
  Object.freeze(is);
}

module.exports = is;

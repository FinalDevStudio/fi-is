/**
 * Fi Is.
 *
 * @module is
 **/

const root = this || global;
const previousIs = root.is;

/**
 * Define namespace.
 *
 * @type {Class}
 *
 * @constructor
 * @private
 */
const is = {
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
  getArgsArray () {
    let args = Array.prototype.slice.call(arguments);
    let len = args.length;

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
  setNamespace () {
    root.is = previousIs;
    return this;
  }
};

/* API methods -------------------------------------------------------------- */

const checks = [
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
for (const check of checks) {
  for (const method of Object.keys(check)) {
    Object.defineProperty(is, method, {
      value: check[method].bind(is),
      enumerable: true
    });

    if (typeof check[method] === 'function') {
      const apis = check[method].api || ['not', 'all', 'any'];

      if (apis.includes('not')) {
        Object.defineProperty(is.not, method, {
          enumerable: true,
          value () {
            return !is[method].apply(is, arguments);
          }
        });
      }

      if (apis.includes('all')) {
        Object.defineProperty(is.all, method, {
          enumerable: true,
          value () {
            const args = is.getArgsArray.apply(is, arguments);

            for (const arg of args) {
              if (!is[method].call(is, arg)) {
                return false;
              }
            }

            return true;
          }
        });
      }

      if (apis.includes('any')) {
        Object.defineProperty(is.any, method, {
          enumerable: true,
          value () {
            const args = is.getArgsArray.apply(is, arguments);

            for (const arg of args) {
              if (is[method].call(is, arg)) {
                return true;
              }
            }

            return false;
          }
        });
      }
    }
  }
}

if (typeof Object.freeze === 'function') {
  Object.freeze(is);
}

module.exports = is;

/**
 * Array checks.
 *
 * @module is/array
 * @see module:is
 */

/**
 * Checks if the given value is in the given array. This method does not
 * support `all` and `any` interfaces.
 *
 * @param {Mixed} val The value to search for.
 * @param {Array} arr The array to search into.
 * @returns {Boolean} Whether the value is in the array.
 * @example
 * is.inArray(1, [1, 2, 3]); // true
 * is.inArray('wer', [1, 2, 3]); // false
 */
module.exports.inArray = function _inArray (val, arr) {
  if (this.not.array(arr)) {
    return false;
  }

  for (const i of arr) {
    if (arr[i] === val) {
      return true;
    }
  }

  return false;
};

module.exports.inArray.api = ['not'];

/**
 * Checks if the given array is sorted.
 *
 * @param {Array} arr The array to check.
 * @returns {Boolean} Whether the array is sorted.
 * @example
 * is.sorted([1, 2, 3]); // true
 * is.sorted([2, 1, 5, 3]); // false
 */
module.exports.sorted = function _sorted (arr) {
  if (this.not.array(arr)) {
    return false;
  }

  for (let i = 0, l = arr.length; i < l; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
};

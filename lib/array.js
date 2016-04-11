/* Array checks ------------------------------------------------------------- */

module.exports = function (is) {

  /**
   * Checks if the given value is in the given array.
   *
   * @param {Mixed} val The value to search for.
   * @param {Array} arr The array to search into.
   * @return {Boolean} Whether the value is in the array.
   */
  is.inArray = function (val, arr) {
    if (is.not.array(arr)) {
      return false;
    }

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return true;
      }
    }

    return false;
  };

  /* Method 'inArray' does not support 'all' and 'any' interfaces */
  is.inArray.api = ['not'];

  /**
   * Checks if the given array is sorted.
   *
   * @param {Array} arr The array to check.
   * @return {Boolean} Whether the array is sorted.
   */
  is.sorted = function (arr) {
    if (is.not.array(arr)) {
      return false;
    }

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }

    return true;
  };

};

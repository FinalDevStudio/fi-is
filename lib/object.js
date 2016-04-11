/**
 * @fileoverview Object checks.
 */

module.exports = function (is) {

  /**
   * Checks if the given object has the given number of properties.
   *
   * @param {Object} obj The object to check.
   * @param {Number} count The number of properties to expect.
   * @return {Boolean} Whether the object has the number of properties.
   */
  is.propertyCount = function (obj, count) {
    if (!is.object(obj) || !is.number(count)) {
      return false;
    }

    if (Object.keys) {
      return Object.keys(obj).length === count;
    }

    var properties = [];
    var property;

    for (property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        properties.push(property);
      }
    }

    return properties.length === count;
  };

  /* Method 'propertyCount' does not support 'all' and 'any' interfaces */
  is.propertyCount.api = ['not'];

  /**
   * Checks if the given object has the given property.
   *
   * @param {Object} obj The object to check.
   * @param {String} property The propery to search for.
   * @return {Boolean} Whether the object has the property.
   */
  is.propertyDefined = function (obj, property) {
    return is.object(obj) && is.string(property) && property in obj;
  };

  /* Method 'propertyDefined' does not support 'all' and 'any' interfaces */
  is.propertyDefined.api = ['not'];

  /**
   * Checks if the given object is the window object.
   *
   * Note: method 'setInterval' is only available for window object.
   *
   * @param {Object} obj The object to check.
   * @return {Boolean} Whether the object is the window object.
   */
  is.windowObject = function (obj) {
    return typeof obj === 'object' && 'setInterval' in obj;
  };

  /**
   * Checks if the given object is a DOM node.
   *
   * @param {Object} obj The object to check.
   * @return {Boolean} Whether the object is a DOM node.
   */
  is.domNode = function (obj) {
    return is.object(obj) && obj.nodeType > 0;
  };

};

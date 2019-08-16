/**
 * Object checks.
 *
 * @module is/object
 * @see module:is
 */

/**
 * Checks if the given object has the given number of properties. This method
 * doesn't support the `all` or `any` interfaces.
 *
 * @param {Object} obj The object to check.
 * @param {Number} count The number of properties to expect.
 * @returns {Boolean} Whether the object has the number of properties.
 * @example
 * is.propertyCount({wer: 'asd'}, 1); // true
 * is.propertyCount({}, 5); // false
 */
module.exports.propertyCount = function _propertyCount (obj, count) {
  if (!this.object(obj) || !this.number(count)) {
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

module.exports.propertyCount.api = ['not'];

/**
 * Checks if the given object has the given property. This method doesn't
 * support the `all` or `any` interfaces.
 *
 * @param {Object} obj The object to check.
 * @param {String} prop The name of the propery to search for.
 * @returns {Boolean} Whether the object has the property.
 * @example
 * is.propertyDefined({wer: 'asd'}, 'wer'); // true
 * is.propertyDefined({}, 'wer'); // false
 */
module.exports.propertyDefined = function _propertyDefined (obj, prop) {
  return this.object(obj) && this.string(prop) && prop in obj;
};

module.exports.propertyDefined.api = ['not'];

/**
 * Checks if the given object is the window object.
 *
 * @param {Object} obj The object to check.
 * @returns {Boolean} Whether the object is the window object.
 * @example
 * is.windowObject(window); // true
 * is.windowObject({}); // false
 */
module.exports.windowObject = function _windowObject (obj) {
  return typeof obj === 'object' && 'setInterval' in obj;
};

/**
 * Checks if the given object is a DOM node.
 *
 * @param {Object} obj The object to check.
 * @returns {Boolean} Whether the object is a DOM node.
 * @example
 * is.domNode(document.body); // true
 * is.domNode(document); // false
 * is.domNode('not DOM node'); // false
 * is.domNode(0); // false
 */
module.exports.domNode = function _domNode (obj) {
  return typeof obj === 'object' && typeof obj.nodeType === 'number' && obj.nodeType === 1;
};

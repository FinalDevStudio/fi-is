/* global DocumentTouch */

/**
 * Environment checks.
 *
 * @module is/environment
 * @see module:is
 */

const browser = typeof window !== 'undefined';
const userAgent = (browser && 'navigator' in window && 'userAgent' in navigator && navigator.userAgent) || '';
const appVersion = (browser && 'navigator' in window && 'appVersion' in navigator && navigator.appVersion) || '';

/**
 * Checks if the current browser is Chrome or Chromium. This method doesn't
 * support the `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current browser is Chrome or Chromium.
 * @example is.chrome();
 */
module.exports.chrome = function _chrome () {
  return (
    browser &&
    /(Chrome|Chromium)\//.test(userAgent) &&
    this.not.opera() &&
    this.not.vivaldi() &&
    this.not.edge() &&
    this.not.facebook() &&
    this.not.twitter()
  );
};

module.exports.chrome.api = ['not'];

/**
 * Checks if the current browser is Firefox. This method doesn't support the
 * `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current browser is Firefox.
 * @example is.firefox();
 */
module.exports.firefox = function _firefox () {
  return browser && /Firefox\//.test(userAgent);
};

module.exports.firefox.api = ['not'];

/**
 * Checks if the current browser is Edge. This method doesn't support the
 * `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current browser is Edge.
 * @example is.firefox();
 */
module.exports.edge = function _edge () {
  return browser && /Edge\//.test(userAgent);
};

module.exports.edge.api = ['not'];

/**
 * Checks if the current browser is Internet Explorer. This method doesn't
 * support the `all` or `any` interfaces.
 *
 * @param {Number} ver The optional version number to check for.
 * @returns {Boolean} Whether the current browser is Internet Explorer.
 * @example
 * is.ie();
 * is.ie(9);
 * is.ie(10);
 */
module.exports.ie = function _ie (ver) {
  if (!ver) {
    return browser && (/MSIE/.test(userAgent) || 'ActiveXObject' in window);
  }

  if (ver >= 11) {
    return browser && 'ActiveXObject' in window;
  }

  return browser && new RegExp(`MSIE ${ver}`).test(userAgent);
};

module.exports.ie.api = ['not'];

/**
 * Checks if the current browser is Opera. This method doesn't support the
 * `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current browser is Opera.
 * @example is.opera();
 */
module.exports.opera = function _opera () {
  return browser && /(Opera|OPR)\//.test(userAgent);
};

module.exports.opera.api = ['not'];

/**
 * Checks if the current browser is Safari. This method doesn't support the
 * `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current browser is Safari.
 * @example is.safari();
 */
module.exports.safari = function _safari () {
  return (
    browser &&
    /Safari/.test(userAgent) &&
    this.not.chrome() &&
    this.not.vivaldi() &&
    this.not.opera() &&
    this.not.edge() &&
    this.not.facebook() &&
    this.not.twitter()
  );
};

module.exports.safari.api = ['not'];

/**
 * Checks if the current browser is Vivaldi. This method doesn't support the
 * `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current browser is Vivaldi.
 * @example is.vivaldi();
 */
module.exports.vivaldi = function _vivaldi () {
  return browser && /Vivaldi/.test(userAgent);
};

module.exports.vivaldi.api = ['not'];

/**
 * Checks if the current browser is Twitter's internal web view. This method
 * doesn't support the `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current browser is Twitter's internal
 * webview.
 * @example is.twitter();
 */
module.exports.twitter = function _twitter () {
  return browser && /Twitter/.test(userAgent);
};

module.exports.twitter.api = ['not'];

/**
 * Checks if the current browser is Facebook's internal web view. This method
 * doesn't support the `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current browser is Facebook's internal
 * webview.
 * @example is.facebook();
 */
module.exports.facebook = function _facebook () {
  return browser && /FB_IAB/.test(userAgent);
};

module.exports.facebook.api = ['not'];

/**
 * Checks if the current device is runnig iOS. This method doesn't support the
 * `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device is runnig iOS.
 * @example is.ios();
 */
module.exports.ios = function _ios () {
  return browser && (this.iphone() || this.ipad() || this.ipod());
};

module.exports.ios.api = ['not'];

/**
 * Checks if the current device is an iPhone. This method doesn't support the
 * `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device is an iPhone.
 * @example is.iphone();
 */
module.exports.iphone = function _iphone () {
  return browser && /iphone/i.test(userAgent);
};

module.exports.iphone.api = ['not'];

/**
 * Checks if the current device is an iPad. This method doesn't support the
 * `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device is an iPad.
 * @example is.ipad();
 */
module.exports.ipad = function _ipad () {
  return browser && /ipad/i.test(userAgent);
};

module.exports.ipad.api = ['not'];

/**
 * Checks if the current device is an iPod. This method doesn't support the
 * `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device is an iPod.
 * @example is.ipod();
 */
module.exports.ipod = function _ipod () {
  return browser && /ipod/i.test(userAgent);
};

module.exports.ipod.api = ['not'];

/**
 * Checks if the current device is an Android device. This method doesn't
 * support the `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device is an Android device.
 * @example is.android();
 */
module.exports.android = function _android () {
  return browser && /android/i.test(userAgent);
};

module.exports.android.api = ['not'];

/**
 * Checks if the current device is an Android phone.This method doesn't
 * support the `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device is an Android phone.
 * @example is.androidPhone();
 */
module.exports.androidPhone = function _androidPhone () {
  return browser && /android/i.test(userAgent) && /mobile/i.test(userAgent);
};

module.exports.androidPhone.api = ['not'];

/**
 * Checks if the current device is an Android tablet.This method doesn't
 * support the `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device is an Android tablet.
 * @example is.androidTablet();
 */
module.exports.androidTablet = function _androidTablet () {
  return browser && /android/i.test(userAgent) && !/mobile/i.test(userAgent);
};

module.exports.androidTablet.api = ['not'];

/**
 * Checks if the current device is a Blackberry device. This method doesn't
 * support the `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device is a Blackberry device.
 * @example is.blackberry();
 */
module.exports.blackberry = function _blackberry () {
  return browser && (/blackberry/i.test(userAgent) || /BB10/i.test(userAgent));
};

module.exports.blackberry.api = ['not'];

/**
 * Checks if the current device is a desktop device.This method doesn't
 * support the `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device is a desktop device.
 * @example is.desktop();
 */
module.exports.desktop = function _desktop () {
  return browser && this.not.mobile() && this.not.tablet();
};

module.exports.desktop.api = ['not'];

/**
 * Checks if the current device running Linux (excluding Android). This method
 * doesn't support the `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device running Linux.
 * @example is.linux();
 */
module.exports.linux = function _linux () {
  return browser && /linux/i.test(appVersion) && this.not.android();
};

module.exports.linux.api = ['not'];

/**
 * Checks if the current device running OSX.This method doesn't support the
 * `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device running OSX.
 * @example is.osx();
 */
module.exports.osx = function _osx () {
  return browser && /mac/i.test(appVersion);
};

module.exports.osx.api = ['not'];

/**
 * Checks if the current device running OSX (Mac).This method doesn't support
 * the `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device running OSX.
 * @example is.mac();
 */
module.exports.mac = module.exports.osx;

module.exports.mac.api = ['not'];

/**
 * Checks if the current device running Windows.This method doesn't support
 * the `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device running Windows.
 * @example is.windows();
 */
module.exports.windows = function _windows () {
  return browser && /win/i.test(appVersion);
};

module.exports.windows.api = ['not'];

/**
 * Checks if the current device is a Windows phone.This method doesn't support
 * the `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device is a Windows phone.
 * @example is.windowsPhone();
 */
module.exports.windowsPhone = function _windowsPhone () {
  return browser && this.windows() && /phone/i.test(userAgent);
};

module.exports.windowsPhone.api = ['not'];

/**
 * Checks if the current device is a Windows tablet.This method doesn't
 * support the `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device is a Windows tablet.
 * @example is.windowsTablet();
 */
module.exports.windowsTablet = function _windowsTablet () {
  return browser && this.windows() && this.not.windowsPhone() && /touch/i.test(userAgent);
};

module.exports.windowsTablet.api = ['not'];

/**
 * Checks if the current device is a mobile device.This method doesn't support
 * the `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device is a mobile device.
 * @example is.mobile();
 */
module.exports.mobile = function _mobile () {
  return browser && (this.iphone() || this.ipod() || this.androidPhone() || this.blackberry() || this.windowsPhone());
};

module.exports.mobile.api = ['not'];

/**
 * Checks if the current device is a tablet.This method doesn't support the
 * `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device is a tablet.
 * @example is.tablet();
 */
module.exports.tablet = function _tablet () {
  return browser && (this.ipad() || this.androidTablet() || this.windowsTablet());
};

module.exports.tablet.api = ['not'];

/**
 * Checks if the current device is on-line.This method doesn't support the
 * `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device is on-line.
 * @example is.online();
 */
module.exports.online = function _online () {
  return browser && navigator && navigator.onLine;
};

module.exports.online.api = ['not'];

/**
 * Checks if the current device is off-line.This method doesn't support the
 * `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device is off-line.
 * @example is.offline();
 */
module.exports.offline = function _offline () {
  return this.not.online();
};

module.exports.offline.api = ['not'];

/**
 * Checks if the current device is touch capable.This method doesn't support
 * the `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current device is touch capable.
 * @example is.touchDevice();
 */
module.exports.touchDevice = function _touchDevice () {
  return browser && ('ontouchstart' in window || ('DocumentTouch' in window && document instanceof DocumentTouch));
};

module.exports.touchDevice.api = ['not'];

/**
 * Checks if the current environment is Node.js.This method doesn't support
 * the `all` or `any` interfaces.
 *
 * @returns {Boolean} Whether the current environment is Node.js.
 * @example is.nodejs();
 */
module.exports.nodejs = function _nodejs () {
  return !browser && typeof process === 'object';
};

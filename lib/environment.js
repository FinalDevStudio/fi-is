/* Environment checks ------------------------------------------------------- */

module.exports = function (is, not) {

  var browser = typeof window !== 'undefined';
  var userAgent = browser && 'navigator' in window && 'userAgent' in navigator && navigator.userAgent || '';
  var appVersion = browser && 'navigator' in window && 'appVersion' in navigator && navigator.appVersion || '';

  /**
   * Checks if the current browser is Chrome or Chromium.
   *
   * @return {Boolean} Whether the current browser is Chrome or Chromium.
   */
  is.chrome = function () {
    return browser && /(Chrome|Chromium)\//.test(userAgent) && is.not.opera() &&
      is.not.vivaldi() && is.not.edge();
  };

  /* Method 'chrome' does not support 'all' and 'any' interfaces */
  is.chrome.api = ['not'];

  /**
   * Checks if the current browser is Firefox.
   *
   * @return {Boolean} Whether the current browser is Firefox.
   */
  is.firefox = function () {
    return browser && /Firefox\//.test(userAgent);
  };

  /* Method 'firefox' does not support 'all' and 'any' interfaces */
  is.firefox.api = ['not'];

  /**
   * Checks if the current browser is Edge.
   *
   * @return {Boolean} Whether the current browser is Edge.
   */
  is.edge = function () {
    return browser && /Edge\//.test(userAgent);
  };

  /* Method 'edge' does not support 'all' and 'any' interfaces */
  is.edge.api = ['not'];

  /**
   * Checks if the current browser is Internet Explorer.
   *
   * @param {Number} ver The optional version number to check for.
   * @return {Boolean} Whether the current browser is Internet Explorer.
   */
  is.ie = function (ver) {
    if (!ver) {
      return browser && (/MSIE/.test(userAgent) || 'ActiveXObject' in window);
    }

    if (ver >= 11) {
      return browser && 'ActiveXObject' in window;
    }

    return browser && new RegExp('MSIE ' + ver).test(userAgent);
  };

  /* Method 'ie' does not support 'all' and 'any' interfaces */
  is.ie.api = ['not'];

  /**
   * Checks if the current browser is Opera.
   *
   * @return {Boolean} Whether the current browser is Opera.
   */
  is.opera = function () {
    return browser && /(Opera|OPR)\//.test(userAgent);
  };

  /* Method 'opera' does not support 'all' and 'any' interfaces */
  is.opera.api = ['not'];

  /**
   * Checks if the current browser is Safari.
   *
   * @return {Boolean} Whether the current browser is Safari.
   */
  is.safari = function () {
    return browser && /Safari/.test(userAgent) && is.not.chrome() &&
      is.not.vivaldi() && is.not.opera() && is.not.edge();
  };

  /* Method 'safari' does not support 'all' and 'any' interfaces */
  is.safari.api = ['not'];

  /**
   * Checks if the current browser is Vivaldi.
   *
   * @return {Boolean} Whether the current browser is Vivaldi.
   */
  is.vivaldi = function () {
    return browser && /Vivaldi/.test(userAgent);
  };

  /* Method 'safari' does not support 'all' and 'any' interfaces */
  is.vivaldi.api = ['not'];

  /**
   * Checks if the current device is runnig iOS.
   *
   * @return {Boolean} Whether the current device is runnig iOS.
   */
  is.ios = function () {
    return browser && (is.iphone() || is.ipad() || is.ipod());
  };

  /* Method 'ios' does not support 'all' and 'any' interfaces */
  is.ios.api = ['not'];

  /**
   * Checks if the current device is an iPhone.
   *
   * @return {Boolean} Whether the current device is an iPhone.
   */
  is.iphone = function () {
    return browser && /iphone/i.test(userAgent);
  };

  /* Method 'iphone' does not support 'all' and 'any' interfaces */
  is.iphone.api = ['not'];

  /**
   * Checks if the current device is an iPad.
   *
   * @return {Boolean} Whether the current device is an iPad.
   */
  is.ipad = function () {
    return browser && /ipad/i.test(userAgent);
  };

  /* Method 'ipad' does not support 'all' and 'any' interfaces */
  is.ipad.api = ['not'];

  /**
   * Checks if the current device is an iPod.
   *
   * @return {Boolean} Whether the current device is an iPod.
   */
  is.ipod = function () {
    return browser && /ipod/i.test(userAgent);
  };

  /* Method 'ipod' does not support 'all' and 'any' interfaces */
  is.ipod.api = ['not'];

  /**
   * Checks if the current device is an Android device.
   *
   * @return {Boolean} Whether the current device is an Android device.
   */
  is.android = function () {
    return browser && /android/i.test(userAgent);
  };

  /* Method 'android' does not support 'all' and 'any' interfaces */
  is.android.api = ['not'];

  /**
   * Checks if the current device is an Android phone.
   *
   * @return {Boolean} Whether the current device is an Android phone.
   */
  is.androidPhone = function () {
    return browser && /android/i.test(userAgent) && /mobile/i.test(userAgent);
  };

  /* Method 'androidPhone' does not support 'all' and 'any' interfaces */
  is.androidPhone.api = ['not'];

  /**
   * Checks if the current device is an Android tablet.
   *
   * @return {Boolean} Whether the current device is an Android tablet.
   */
  is.androidTablet = function () {
    return browser && /android/i.test(userAgent) && !/mobile/i.test(userAgent);
  };

  /* Method 'androidTablet' does not support 'all' and 'any' interfaces */
  is.androidTablet.api = ['not'];

  /**
   * Checks if the current device is a Blackberry device.
   *
   * @return {Boolean} Whether the current device is a Blackberry device.
   */
  is.blackberry = function () {
    return browser && (/blackberry/i.test(userAgent) || /BB10/i.test(userAgent));
  };

  /* Method 'blackberry' does not support 'all' and 'any' interfaces */
  is.blackberry.api = ['not'];

  /**
   * Checks if the current device is a desktop device.
   *
   * @return {Boolean} Whether the current device is a desktop device.
   */
  is.desktop = function () {
    return browser && is.not.mobile() && is.not.tablet();
  };

  /* Method 'desktop' does not support 'all' and 'any' interfaces */
  is.desktop.api = ['not'];

  /**
   * Checks if the current device running Linux (excluding Android).
   *
   * @return {Boolean} Whether the current device running Linux.
   */
  is.linux = function () {
    return browser && /linux/i.test(appVersion) && is.not.android();
  };

  /* Method 'linux' does not support 'all' and 'any' interfaces */
  is.linux.api = ['not'];

  /**
   * Checks if the current device running OSX.
   *
   * @return {Boolean} Whether the current device running OSX.
   */
  is.osx = function () {
    return browser && /mac/i.test(appVersion);
  };

  /* Method 'osx' does not support 'all' and 'any' interfaces */
  is.osx.api = ['not'];

  /**
   * Checks if the current device running OSX (Mac). Alias of 'osx'.
   */
  is.mac = is.osx;

  /* Method 'mac' does not support 'all' and 'any' interfaces */
  is.mac.api = ['not'];

  /**
   * Checks if the current device running Windows.
   *
   * @return {Boolean} Whether the current device running Windows.
   */
  is.windows = function () {
    return browser && /win/i.test(appVersion);
  };

  /* Method 'windows' does not support 'all' and 'any' interfaces */
  is.windows.api = ['not'];

  /**
   * Checks if the current device is a Windows phone.
   *
   * @return {Boolean} Whether the current device is a Windows phone.
   */
  is.windowsPhone = function () {
    return browser && is.windows() && /phone/i.test(userAgent);
  };

  /* Method 'windowsPhone' does not support 'all' and 'any' interfaces */
  is.windowsPhone.api = ['not'];

  /**
   * Checks if the current device is a Windows tablet.
   *
   * @return {Boolean} Whether the current device is a Windows tablet.
   */
  is.windowsTablet = function () {
    return browser && is.windows() && is.not.windowsPhone() && /touch/i.test(userAgent);
  };

  /* Method 'windowsTablet' does not support 'all' and 'any' interfaces */
  is.windowsTablet.api = ['not'];

  /**
   * Checks if the current device is a mobile device.
   *
   * @return {Boolean} Whether the current device is a mobile device.
   */
  is.mobile = function () {
    return browser && (is.iphone() || is.ipod() || is.androidPhone() || is.blackberry() || is.windowsPhone());
  };

  /* Method 'mobile' does not support 'all' and 'any' interfaces */
  is.mobile.api = ['not'];

  /**
   * Checks if the current device is a tablet.
   *
   * @return {Boolean} Whether the current device is a tablet.
   */
  is.tablet = function () {
    return browser && (is.ipad() || is.androidTablet() || is.windowsTablet());
  };

  /* Method 'tablet' does not support 'all' and 'any' interfaces */
  is.tablet.api = ['not'];

  /**
   * Checks if the current device is on-line.
   *
   * @return {Boolean} Whether the current device is on-line.
   */
  is.online = function () {
    return browser && navigator && navigator.onLine;
  };

  /* Method 'online' does not support 'all' and 'any' interfaces */
  is.online.api = ['not'];

  /**
   * Checks if the current device is off-line.
   *
   * @return {Boolean} Whether the current device is off-line.
   */
  is.offline = not(is.online);

  /* Method 'online' does not support 'all' and 'any' interfaces */
  is.offline.api = ['not'];

  /**
   * Checks if the current device is touch capable.
   *
   * @return {Boolean} Whether the current device is touch capable.
   */
  is.touchDevice = function () {
    return browser && ('ontouchstart' in window || 'DocumentTouch' in window && document instanceof DocumentTouch);
  };

  /* Method 'touchDevice' does not support 'all' and 'any' interfaces */
  is.touchDevice.api = ['not'];

  /**
   * Checks if the current environment is Node.js.
   *
   * @return {Boolean} Whether the current environment is Node.js.
   */
  is.node = function () {
    return !browser && typeof process === 'object';
  };

};

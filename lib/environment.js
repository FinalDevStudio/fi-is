// Environment checks
/* -------------------------------------------------------------------------- */

module.exports = function (is, not) {

  // store navigator properties to use later
  var browser = typeof window !== 'undefined';
  var userAgent = browser && 'navigator' in window && 'userAgent' in navigator && navigator.userAgent || '';
  var appVersion = browser && 'navigator' in window && 'appVersion' in navigator && navigator.appVersion || '';

  // is current browser chrome?
  is.node = function () {
    return !browser;
  };

  is.chrome = function () {
    return browser && /(Chrome|Chromium)\//.test(userAgent) && is.not.opera() &&
      is.not.vivaldi() && is.not.edge();
  };

  // chrome method does not support 'all' and 'any' interfaces
  is.chrome.api = ['not'];

  // is current browser firefox?
  is.firefox = function () {
    return browser && /Firefox\//.test(userAgent);
  };

  // firefox method does not support 'all' and 'any' interfaces
  is.firefox.api = ['not'];

  // is current browser edge?
  is.edge = function () {
    return browser && /Edge\//.test(userAgent);
  };

  // edge method does not support 'all' and 'any' interfaces
  is.edge.api = ['not'];

  // is current browser internet explorer?
  // parameter is optional
  is.ie = function (version) {
    if (!version) {
      return browser && (/MSIE/.test(userAgent) || 'ActiveXObject' in window);
    }

    if (version >= 11) {
      return browser && 'ActiveXObject' in window;
    }

    return browser && new RegExp('MSIE ' + version).test(userAgent);
  };

  // ie method does not support 'all' and 'any' interfaces
  is.ie.api = ['not'];

  // is current browser opera?
  is.opera = function () {
    return browser && /(Opera|OPR)\//.test(userAgent);
  };

  // opera method does not support 'all' and 'any' interfaces
  is.opera.api = ['not'];

  // is current browser safari?
  is.safari = function () {
    return browser && /Safari/.test(userAgent) && is.not.chrome() &&
      is.not.vivaldi() && is.not.opera() && is.not.edge();
  };

  // safari method does not support 'all' and 'any' interfaces
  is.safari.api = ['not'];

  // is current browser vivaldi?
  is.vivaldi = function () {
    return browser && /Vivaldi/.test(userAgent);
  };

  // safari method does not support 'all' and 'any' interfaces
  is.vivaldi.api = ['not'];

  // is current device ios?
  is.ios = function () {
    return browser && (is.iphone() || is.ipad() || is.ipod());
  };

  // ios method does not support 'all' and 'any' interfaces
  is.ios.api = ['not'];

  // is current device iphone?
  is.iphone = function () {
    return browser && /iphone/i.test(userAgent);
  };

  // iphone method does not support 'all' and 'any' interfaces
  is.iphone.api = ['not'];

  // is current device ipad?
  is.ipad = function () {
    return browser && /ipad/i.test(userAgent);
  };

  // ipad method does not support 'all' and 'any' interfaces
  is.ipad.api = ['not'];

  // is current device ipod?
  is.ipod = function () {
    return browser && /ipod/i.test(userAgent);
  };

  // ipod method does not support 'all' and 'any' interfaces
  is.ipod.api = ['not'];

  // is current device android?
  is.android = function () {
    return browser && /android/i.test(userAgent);
  };

  // android method does not support 'all' and 'any' interfaces
  is.android.api = ['not'];

  // is current device android phone?
  is.androidPhone = function () {
    return browser && /android/i.test(userAgent) && /mobile/i.test(userAgent);
  };

  // androidPhone method does not support 'all' and 'any' interfaces
  is.androidPhone.api = ['not'];

  // is current device android tablet?
  is.androidTablet = function () {
    return browser && /android/i.test(userAgent) && !/mobile/i.test(userAgent);
  };

  // androidTablet method does not support 'all' and 'any' interfaces
  is.androidTablet.api = ['not'];

  // is current device blackberry?
  is.blackberry = function () {
    return browser && (/blackberry/i.test(userAgent) || /BB10/i.test(userAgent));
  };

  // blackberry method does not support 'all' and 'any' interfaces
  is.blackberry.api = ['not'];

  // is current device desktop?
  is.desktop = function () {
    return browser && is.not.mobile() && is.not.tablet();
  };

  // desktop method does not support 'all' and 'any' interfaces
  is.desktop.api = ['not'];

  // is current operating system linux?
  is.linux = function () {
    return browser && /linux/i.test(appVersion) && is.not.android();
  };

  // linux method does not support 'all' and 'any' interfaces
  is.linux.api = ['not'];

  // is current operating system mac?
  is.mac = function () {
    return browser && /mac/i.test(appVersion);
  };

  // mac method does not support 'all' and 'any' interfaces
  is.mac.api = ['not'];

  // is current operating system windows?
  is.windows = function () {
    return browser && /win/i.test(appVersion);
  };

  // windows method does not support 'all' and 'any' interfaces
  is.windows.api = ['not'];

  // is current device windows phone?
  is.windowsPhone = function () {
    return browser && is.windows() && /phone/i.test(userAgent);
  };

  // windowsPhone method does not support 'all' and 'any' interfaces
  is.windowsPhone.api = ['not'];

  // is current device windows tablet?
  is.windowsTablet = function () {
    return browser && is.windows() && is.not.windowsPhone() && /touch/i.test(userAgent);
  };

  // windowsTablet method does not support 'all' and 'any' interfaces
  is.windowsTablet.api = ['not'];

  // is current device mobile?
  is.mobile = function () {
    return browser && (is.iphone() || is.ipod() || is.androidPhone() || is.blackberry() || is.windowsPhone());
  };

  // mobile method does not support 'all' and 'any' interfaces
  is.mobile.api = ['not'];

  // is current device tablet?
  is.tablet = function () {
    return browser && (is.ipad() || is.androidTablet() || is.windowsTablet());
  };

  // tablet method does not support 'all' and 'any' interfaces
  is.tablet.api = ['not'];

  // is current state online?
  is.online = function () {
    return browser && navigator && navigator.onLine;
  };

  // online method does not support 'all' and 'any' interfaces
  is.online.api = ['not'];

  // is current state offline?
  is.offline = not(is.online);
  // offline method does not support 'all' and 'any' interfaces
  is.offline.api = ['not'];

  // is current device supports touch?
  is.touchDevice = function () {
    return browser && ('ontouchstart' in window || 'DocumentTouch' in window && document instanceof DocumentTouch);
  };

  // touchDevice method does not support 'all' and 'any' interfaces
  is.touchDevice.api = ['not'];

};

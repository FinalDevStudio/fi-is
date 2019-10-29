!function(f) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = f(); else if ("function" == typeof define && define.amd) define([], f); else {
        var g;
        if ("undefined" != typeof window) g = window; else if ("undefined" != typeof global) g = global; else if ("undefined" != typeof self) g = self; else g = this;
        g.is = f();
    }
}(function() {
    var define, module, exports;
    return r({
        1: [ function(require, module, exports) {
            "use strict";
            module.exports.equal = function _equal(a, b) {
                if (this.all.number(a, b)) return a === b && 1 / a == 1 / b;
                if (this.all.string(a, b) || this.all.regexp(a, b)) return String(a) === String(b);
                if (this.all.boolean(a, b)) return a === b;
                if (this.all.array(a, b)) {
                    if (a.length !== b.length) return false;
                    for (var i = 0, l = a.length; i < l; i++) if (this.not.equal(a[i], b[i])) return false;
                    return true;
                }
                if (this.all.object(a, b)) {
                    if (Object.keys(a).length !== Object.keys(b).length) return false;
                    for (var _i = 0, _Object$keys = Object.keys(a); _i < _Object$keys.length; _i++) {
                        var key = _Object$keys[_i];
                        var bothHaveProperty;
                        if (Object.prototype.hasOwnProperty.call(a, key) && Object.prototype.hasOwnProperty.call(b, key)) {
                            if (this.not.equal(a[key], b[key])) return false;
                        } else return false;
                    }
                    return true;
                }
                return false;
            };
            module.exports.equal.api = [ "not" ];
            module.exports.even = function _even(num) {
                return this.number(num) && num % 2 == 0;
            };
            module.exports.odd = function _odd(num) {
                return this.number(num) && num % 2 == 1;
            };
            module.exports.positive = function _positive(num) {
                return this.number(num) && 0 < num;
            };
            module.exports.negative = function _negative(num) {
                return this.number(num) && num < 0;
            };
            module.exports.above = function _above(num, min) {
                return this.all.number(num, min) && min < num;
            };
            module.exports.above.api = [ "not" ];
            module.exports.under = function _under(num, max) {
                return this.all.number(num, max) && num < max;
            };
            module.exports.under.api = [ "not" ];
            module.exports.within = function _within(num, min, max) {
                return this.all.number(num, min, max) && min < num && num < max;
            };
            module.exports.within.api = [ "not" ];
            module.exports.between = function _between(num, min, max) {
                return this.all.number(num, min, max) && min <= num && num <= max;
            };
            module.exports.between.api = [ "not" ];
            module.exports.decimal = function _decimal(num) {
                return this.number(num) && num % 1 != 0;
            };
            module.exports.integer = function _integer(num) {
                return this.number(num) && num % 1 == 0;
            };
            module.exports.finite = function _finite(num) {
                return isFinite(num);
            };
            module.exports.infinite = function _infinite(num) {
                return this.not.finite(num);
            };
        }, {} ],
        2: [ function(require, module, exports) {
            "use strict";
            module.exports.inArray = function _inArray(val, arr) {
                if (this.not.array(arr)) return false;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = void 0;
                try {
                    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var i;
                        if (arr[_step.value] === val) return true;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && null != _iterator.return) _iterator.return();
                    } finally {
                        if (_didIteratorError) throw _iteratorError;
                    }
                }
                return false;
            };
            module.exports.inArray.api = [ "not" ];
            module.exports.sorted = function _sorted(arr) {
                if (this.not.array(arr)) return false;
                for (var i = 0, l = arr.length; i < l; i++) if (arr[i] > arr[i + 1]) return false;
                return true;
            };
        }, {} ],
        3: [ function(require, module, exports) {
            (function(process) {
                "use strict";
                function _typeof(obj) {
                    if ("function" == typeof Symbol && "symbol" == typeof Symbol.iterator) _typeof = function _typeof(obj) {
                        return typeof obj;
                    }; else _typeof = function _typeof(obj) {
                        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                    return _typeof(obj);
                }
                var browser = "undefined" != typeof window;
                var userAgent = browser && "navigator" in window && "userAgent" in navigator && navigator.userAgent || "";
                var appVersion = browser && "navigator" in window && "appVersion" in navigator && navigator.appVersion || "";
                module.exports.chrome = function _chrome() {
                    return browser && /(Chrome|Chromium)\//.test(userAgent) && this.not.opera() && this.not.vivaldi() && this.not.edge() && this.not.facebook() && this.not.twitter();
                };
                module.exports.chrome.api = [ "not" ];
                module.exports.firefox = function _firefox() {
                    return browser && /Firefox\//.test(userAgent);
                };
                module.exports.firefox.api = [ "not" ];
                module.exports.edge = function _edge() {
                    return browser && /Edge\//.test(userAgent);
                };
                module.exports.edge.api = [ "not" ];
                module.exports.ie = function _ie(ver) {
                    if (!ver) return browser && (/MSIE/.test(userAgent) || "ActiveXObject" in window);
                    if (11 <= ver) return browser && "ActiveXObject" in window;
                    return browser && new RegExp("MSIE " + ver).test(userAgent);
                };
                module.exports.ie.api = [ "not" ];
                module.exports.opera = function _opera() {
                    return browser && /(Opera|OPR)\//.test(userAgent);
                };
                module.exports.opera.api = [ "not" ];
                module.exports.safari = function _safari() {
                    return browser && /Safari/.test(userAgent) && this.not.chrome() && this.not.vivaldi() && this.not.opera() && this.not.edge() && this.not.facebook() && this.not.twitter();
                };
                module.exports.safari.api = [ "not" ];
                module.exports.vivaldi = function _vivaldi() {
                    return browser && /Vivaldi/.test(userAgent);
                };
                module.exports.vivaldi.api = [ "not" ];
                module.exports.twitter = function _twitter() {
                    return browser && /Twitter/.test(userAgent);
                };
                module.exports.twitter.api = [ "not" ];
                module.exports.facebook = function _facebook() {
                    return browser && /FB_IAB/.test(userAgent);
                };
                module.exports.facebook.api = [ "not" ];
                module.exports.ios = function _ios() {
                    return browser && (this.iphone() || this.ipad() || this.ipod());
                };
                module.exports.ios.api = [ "not" ];
                module.exports.iphone = function _iphone() {
                    return browser && /iphone/i.test(userAgent);
                };
                module.exports.iphone.api = [ "not" ];
                module.exports.ipad = function _ipad() {
                    return browser && /ipad/i.test(userAgent);
                };
                module.exports.ipad.api = [ "not" ];
                module.exports.ipod = function _ipod() {
                    return browser && /ipod/i.test(userAgent);
                };
                module.exports.ipod.api = [ "not" ];
                module.exports.android = function _android() {
                    return browser && /android/i.test(userAgent);
                };
                module.exports.android.api = [ "not" ];
                module.exports.androidPhone = function _androidPhone() {
                    return browser && /android/i.test(userAgent) && /mobile/i.test(userAgent);
                };
                module.exports.androidPhone.api = [ "not" ];
                module.exports.androidTablet = function _androidTablet() {
                    return browser && /android/i.test(userAgent) && !/mobile/i.test(userAgent);
                };
                module.exports.androidTablet.api = [ "not" ];
                module.exports.blackberry = function _blackberry() {
                    return browser && (/blackberry/i.test(userAgent) || /BB10/i.test(userAgent));
                };
                module.exports.blackberry.api = [ "not" ];
                module.exports.desktop = function _desktop() {
                    return browser && this.not.mobile() && this.not.tablet();
                };
                module.exports.desktop.api = [ "not" ];
                module.exports.linux = function _linux() {
                    return browser && /linux/i.test(appVersion) && this.not.android();
                };
                module.exports.linux.api = [ "not" ];
                module.exports.osx = function _osx() {
                    return browser && /mac/i.test(appVersion);
                };
                module.exports.osx.api = [ "not" ];
                module.exports.mac = module.exports.osx;
                module.exports.mac.api = [ "not" ];
                module.exports.windows = function _windows() {
                    return browser && /win/i.test(appVersion);
                };
                module.exports.windows.api = [ "not" ];
                module.exports.windowsPhone = function _windowsPhone() {
                    return browser && this.windows() && /phone/i.test(userAgent);
                };
                module.exports.windowsPhone.api = [ "not" ];
                module.exports.windowsTablet = function _windowsTablet() {
                    return browser && this.windows() && this.not.windowsPhone() && /touch/i.test(userAgent);
                };
                module.exports.windowsTablet.api = [ "not" ];
                module.exports.mobile = function _mobile() {
                    return browser && (this.iphone() || this.ipod() || this.androidPhone() || this.blackberry() || this.windowsPhone());
                };
                module.exports.mobile.api = [ "not" ];
                module.exports.tablet = function _tablet() {
                    return browser && (this.ipad() || this.androidTablet() || this.windowsTablet());
                };
                module.exports.tablet.api = [ "not" ];
                module.exports.online = function _online() {
                    return browser && navigator && navigator.onLine;
                };
                module.exports.online.api = [ "not" ];
                module.exports.offline = function _offline() {
                    return this.not.online();
                };
                module.exports.offline.api = [ "not" ];
                module.exports.touchDevice = function _touchDevice() {
                    return browser && ("ontouchstart" in window || "DocumentTouch" in window && document instanceof DocumentTouch);
                };
                module.exports.touchDevice.api = [ "not" ];
                module.exports.nodejs = function _nodejs() {
                    return !browser && "object" === (void 0 === process ? "undefined" : _typeof(process));
                };
            }).call(this, require("_process"));
        }, {
            _process: 11
        } ],
        4: [ function(require, module, exports) {
            (function(global) {
                "use strict";
                var root = window || global;
                var previousIs = root.is;
                var is = {
                    all: {},
                    any: {},
                    not: {},
                    getArgsArray: function getArgsArray() {
                        var args = Array.prototype.slice.call(arguments);
                        var len = args.length;
                        if (1 === len && Array.isArray(args[0])) len = (args = args[0]).length;
                        return args;
                    },
                    setNamespace: function setNamespace() {
                        root.is = previousIs;
                        return this;
                    }
                };
                var checks;
                for (var _i = 0, _checks = [ require("./environment"), require("./arithmetic"), require("./presence"), require("./object"), require("./regexp"), require("./string"), require("./array"), require("./time"), require("./type") ]; _i < _checks.length; _i++) {
                    var check = _checks[_i];
                    var _loop = function _loop() {
                        var method = _Object$keys[_i2];
                        Object.defineProperty(is, method, {
                            value: check[method].bind(is),
                            enumerable: true
                        });
                        if ("function" == typeof check[method]) {
                            var apis = check[method].api || [ "not", "all", "any" ];
                            if (apis.includes("not")) Object.defineProperty(is.not, method, {
                                enumerable: true,
                                value: function value() {
                                    return !is[method].apply(is, arguments);
                                }
                            });
                            if (apis.includes("all")) Object.defineProperty(is.all, method, {
                                enumerable: true,
                                value: function value() {
                                    var args = is.getArgsArray.apply(is, arguments);
                                    var _iteratorNormalCompletion = true;
                                    var _didIteratorError = false;
                                    var _iteratorError = void 0;
                                    try {
                                        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                            var arg = _step.value;
                                            if (!is[method].call(is, arg)) return false;
                                        }
                                    } catch (err) {
                                        _didIteratorError = true;
                                        _iteratorError = err;
                                    } finally {
                                        try {
                                            if (!_iteratorNormalCompletion && null != _iterator.return) _iterator.return();
                                        } finally {
                                            if (_didIteratorError) throw _iteratorError;
                                        }
                                    }
                                    return true;
                                }
                            });
                            if (apis.includes("any")) Object.defineProperty(is.any, method, {
                                enumerable: true,
                                value: function value() {
                                    var args = is.getArgsArray.apply(is, arguments);
                                    var _iteratorNormalCompletion2 = true;
                                    var _didIteratorError2 = false;
                                    var _iteratorError2 = void 0;
                                    try {
                                        for (var _iterator2 = args[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                            var arg = _step2.value;
                                            if (is[method].call(is, arg)) return true;
                                        }
                                    } catch (err) {
                                        _didIteratorError2 = true;
                                        _iteratorError2 = err;
                                    } finally {
                                        try {
                                            if (!_iteratorNormalCompletion2 && null != _iterator2.return) _iterator2.return();
                                        } finally {
                                            if (_didIteratorError2) throw _iteratorError2;
                                        }
                                    }
                                    return false;
                                }
                            });
                        }
                    };
                    for (var _i2 = 0, _Object$keys = Object.keys(check); _i2 < _Object$keys.length; _i2++) _loop();
                }
                if ("function" == typeof Object.freeze) Object.freeze(is);
                module.exports = is;
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {
            "./arithmetic": 1,
            "./array": 2,
            "./environment": 3,
            "./object": 5,
            "./presence": 6,
            "./regexp": 7,
            "./string": 8,
            "./time": 9,
            "./type": 10
        } ],
        5: [ function(require, module, exports) {
            "use strict";
            function _typeof(obj) {
                if ("function" == typeof Symbol && "symbol" == typeof Symbol.iterator) _typeof = function _typeof(obj) {
                    return typeof obj;
                }; else _typeof = function _typeof(obj) {
                    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
                return _typeof(obj);
            }
            module.exports.propertyCount = function _propertyCount(obj, count) {
                if (!this.object(obj) || !this.number(count)) return false;
                return Object.keys(obj).length === count;
            };
            module.exports.propertyCount.api = [ "not" ];
            module.exports.propertyDefined = function _propertyDefined(obj, prop) {
                return this.object(obj) && this.string(prop) && prop in obj;
            };
            module.exports.propertyDefined.api = [ "not" ];
            module.exports.windowObject = function _windowObject(obj) {
                return "object" === _typeof(obj) && "navigator" in obj;
            };
            module.exports.domNode = function _domNode(obj) {
                return "object" === _typeof(obj) && "number" == typeof obj.nodeType && 1 === obj.nodeType;
            };
        }, {} ],
        6: [ function(require, module, exports) {
            "use strict";
            module.exports.empty = function _empty(val) {
                if (this.string(val) || this.array(val)) return 0 === val.length;
                if (this.number(val) || this.boolean(val)) return false;
                if (this.nan(val)) return true;
                if (this.date(val)) return this.nan(val.valueOf());
                if (this.not.existy(val)) return true;
                if (this.object(val)) return 0 === Object.keys(val).length;
                return !val;
            };
            module.exports.existy = function _existy(val) {
                return null != val;
            };
            module.exports.truthy = function _truthy(val) {
                return this.existy(val) && false !== val && this.not.nan(val) && "" !== val && 0 !== val;
            };
            module.exports.falsy = function _falsy(val) {
                return this.not.truthy(val);
            };
            module.exports.space = function _space(val) {
                if (this.char(val)) {
                    var code = val.charCodeAt(0);
                    return 8 < code && code < 14 || 32 === code;
                }
                return false;
            };
        }, {} ],
        7: [ function(require, module, exports) {
            "use strict";
            var REGEXPS = {
                domain: /\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}\b/,
                url: /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)(:\d+)?((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,
                email: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                creditCard: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
                alphaNumeric: /^[A-Za-z0-9]+$/,
                timeString: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
                dateString: /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/,
                usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/,
                caPostalCode: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,
                ukPostCode: /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
                nanpPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                eppPhone: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
                socialSecurityNumber: /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,
                affirmative: /^(?:1|t(?:rue)?|y(?:es)?|o\.?k\.?(?:ay)?)$/i,
                hexadecimal: /^[0-9a-fA-F]+$/,
                hexColor: /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
                ipv4: /^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$/,
                ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
                ip: /(^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$)/
            };
            module.exports.getRegexps = function getRegexps() {
                return REGEXPS;
            };
            module.exports.setRegexp = function _setRegexp(reg, key) {
                for (var _i = 0, _Object$keys = Object.keys(REGEXPS); _i < _Object$keys.length; _i++) {
                    var name = _Object$keys[_i];
                    var hasNameProperty;
                    if (Object.prototype.hasOwnProperty.call(REGEXPS, name) && key === name) REGEXPS[name] = reg;
                }
            };
            module.exports.domain = function _domain(val) {
                return REGEXPS.domain.test(val);
            };
            module.exports.url = function _url(val) {
                return REGEXPS.url.test(val);
            };
            module.exports.email = function _email(val) {
                return REGEXPS.email.test(val);
            };
            module.exports.creditCard = function _creditCard(val) {
                return REGEXPS.creditCard.test(val);
            };
            module.exports.alphanumeric = module.exports.alphaNumeric = function _alphaNumeric(val) {
                return REGEXPS.alphaNumeric.test(val);
            };
            module.exports.timeString = function _timeString(val) {
                return REGEXPS.timeString.test(val);
            };
            module.exports.dateString = function _dateString(val) {
                return REGEXPS.dateString.test(val);
            };
            module.exports.usZipCode = function _usZipCode(val) {
                return REGEXPS.usZipCode.test(val);
            };
            module.exports.caPostalCode = function _caPostalCode(val) {
                return REGEXPS.caPostalCode.test(val);
            };
            module.exports.ukPostCode = function _ukPostCode(val) {
                return REGEXPS.ukPostCode.test(val);
            };
            module.exports.nanpPhone = function _nanpPhone(val) {
                return REGEXPS.nanpPhone.test(val);
            };
            module.exports.eppPhone = function _eppPhone(val) {
                return REGEXPS.eppPhone.test(val);
            };
            module.exports.socialSecurityNumber = function _socialSecurityNumber(val) {
                return REGEXPS.socialSecurityNumber.test(val);
            };
            module.exports.affirmative = function _affirmative(val) {
                return REGEXPS.affirmative.test(val);
            };
            module.exports.hexadecimal = function _hexadecimal(val) {
                return REGEXPS.hexadecimal.test(val);
            };
            module.exports.hexColor = function _hexColor(val) {
                return REGEXPS.hexColor.test(val);
            };
            module.exports.ip = function _ip(val) {
                return REGEXPS.ip.test(val);
            };
            module.exports.ipv4 = function _ipv4(val) {
                return REGEXPS.ipv4.test(val);
            };
            module.exports.ipv6 = function _ipv6(val) {
                return REGEXPS.ipv6.test(val);
            };
        }, {} ],
        8: [ function(require, module, exports) {
            "use strict";
            function _slicedToArray(arr, i) {
                return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
            }
            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
            function _iterableToArrayLimit(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = void 0;
                try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;
                    _e = err;
                } finally {
                    try {
                        if (!_n && null != _i.return) _i.return();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
            function _arrayWithHoles(arr) {
                if (Array.isArray(arr)) return arr;
            }
            module.exports.include = function _include(str, val) {
                return this.string(str) && -1 < str.indexOf(val);
            };
            module.exports.include.api = [ "not" ];
            module.exports.upperCase = function _upperCase(str) {
                return this.string(str) && str === str.toUpperCase();
            };
            module.exports.lowerCase = function _lowerCase(str) {
                return this.string(str) && str === str.toLowerCase();
            };
            module.exports.startWith = function _startWith(str, val) {
                return this.string(str) && 0 === str.indexOf(val);
            };
            module.exports.startWith.api = [ "not" ];
            module.exports.endWith = function _endWith(str, val) {
                return this.string(str) && -1 < str.indexOf(val) && str.indexOf(val) === str.length - val.length;
            };
            module.exports.endWith.api = [ "not" ];
            module.exports.capitalized = function _capitalized(str) {
                if (this.not.string(str)) return false;
                var words = str.split(/\s+/);
                var capitalized = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = void 0;
                try {
                    for (var _iterator = words[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var word;
                        var _word, first = _slicedToArray(_step.value, 1)[0];
                        capitalized.push(first === first.toUpperCase());
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && null != _iterator.return) _iterator.return();
                    } finally {
                        if (_didIteratorError) throw _iteratorError;
                    }
                }
                return this.all.truthy.apply(null, capitalized);
            };
            module.exports.palindrome = function _palindrome(str) {
                return this.string(str) && str === str.split("").reverse().join("");
            };
        }, {} ],
        9: [ function(require, module, exports) {
            "use strict";
            var DAYS = [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ];
            var MONTHS = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ];
            module.exports.today = function _today(date) {
                return this.date(date) && date.toDateString() === new Date().toDateString();
            };
            module.exports.yesterday = function _yesterday(date) {
                var now = new Date();
                return this.date(date) && date.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString();
            };
            module.exports.tomorrow = function _tomorrow(date) {
                var now = new Date();
                return this.date(date) && date.toDateString() === new Date(now.setDate(now.getDate() + 1)).toDateString();
            };
            module.exports.past = function _past(date) {
                return this.date(date) && date.getTime() < new Date().getTime();
            };
            module.exports.future = function _future(date) {
                return this.not.past(date);
            };
            module.exports.day = function _day(date, day) {
                return this.date(date) && day.toLowerCase() === DAYS[date.getDay()];
            };
            module.exports.day.api = [ "not" ];
            module.exports.month = function _month(date, month) {
                return this.date(date) && month.toLowerCase() === MONTHS[date.getMonth()];
            };
            module.exports.month.api = [ "not" ];
            module.exports.year = function _year(date, year) {
                return this.date(date) && this.number(year) && year === date.getFullYear();
            };
            module.exports.year.api = [ "not" ];
            module.exports.leapYear = function _leapYear(year) {
                return this.number(year) && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0);
            };
            module.exports.weekend = function _weekend(date) {
                return this.date(date) && (6 === date.getDay() || 0 === date.getDay());
            };
            module.exports.weekday = function _weekday(date) {
                return this.not.weekend(date);
            };
            module.exports.inDateRange = function _inDateRange(date, start, end) {
                if (this.not.date(date) || this.not.date(start) || this.not.date(end)) return false;
                return date.getTime() > start.getTime() && date.getTime() < end.getTime();
            };
            module.exports.inDateRange.api = [ "not" ];
            module.exports.inLastWeek = function _inLastWeek(date) {
                return this.inDateRange(date, new Date(new Date().setDate(new Date().getDate() - 7)), new Date());
            };
            module.exports.inLastMonth = function _inLastMonth(date) {
                return this.inDateRange(date, new Date(new Date().setMonth(new Date().getMonth() - 1)), new Date());
            };
            module.exports.inLastYear = function _inLastYear(date) {
                return this.inDateRange(date, new Date(new Date().setFullYear(new Date().getFullYear() - 1)), new Date());
            };
            module.exports.inNextWeek = function _inNextWeek(date) {
                return this.inDateRange(date, new Date(), new Date(new Date().setDate(new Date().getDate() + 7)));
            };
            module.exports.inNextMonth = function _inNextMonth(date) {
                return this.inDateRange(date, new Date(), new Date(new Date().setMonth(new Date().getMonth() + 1)));
            };
            module.exports.inNextYear = function _inNextYear(date) {
                return this.inDateRange(date, new Date(), new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
            };
            module.exports.quarterOfYear = function _quarterOfYear(date, quarter) {
                return this.date(date) && this.number(quarter) && quarter === Math.floor((date.getMonth() + 3) / 3);
            };
            module.exports.quarterOfYear.api = [ "not" ];
        }, {} ],
        10: [ function(require, module, exports) {
            "use strict";
            function _typeof(obj) {
                if ("function" == typeof Symbol && "symbol" == typeof Symbol.iterator) _typeof = function _typeof(obj) {
                    return typeof obj;
                }; else _typeof = function _typeof(obj) {
                    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
                return _typeof(obj);
            }
            module.exports.arguments = function _arguments(val) {
                return this.not.null(val) && ("[object Arguments]" === Object.prototype.toString.call(val) || "object" === _typeof(val) && "callee" in val);
            };
            module.exports.array = function _array(val) {
                return Array.isArray(val);
            };
            module.exports.boolean = function _boolean(val) {
                return true === val || false === val || "[object Boolean]" === Object.prototype.toString.call(val);
            };
            module.exports.date = function _date(val) {
                return "[object Date]" === Object.prototype.toString.call(val);
            };
            module.exports.error = function _error(val) {
                return "[object Error]" === Object.prototype.toString.call(val);
            };
            module.exports.function = function _function(val) {
                return "[object Function]" === Object.prototype.toString.call(val) || "[object AsyncFunction]" === Object.prototype.toString.call(val) || "function" == typeof val;
            };
            module.exports.nan = function _nan(val) {
                return val != val;
            };
            module.exports.null = function _null(val) {
                return null === val;
            };
            module.exports.number = function _number(val) {
                return this.not.nan(val) && "[object Number]" === Object.prototype.toString.call(val);
            };
            module.exports.object = function _object(val) {
                return "[object Object]" === Object.prototype.toString.call(val);
            };
            module.exports.json = function _json(val) {
                if (this.string(val)) try {
                    JSON.parse(val);
                    return true;
                } catch (e) {
                    return false;
                }
                return false;
            };
            module.exports.regexp = function _regexp(val) {
                return "[object RegExp]" === Object.prototype.toString.call(val);
            };
            module.exports.sameType = function _sameType(a, b) {
                if (this.nan(a) || this.nan(b)) return this.nan(a) && this.nan(b);
                return Object.prototype.toString.call(a) === Object.prototype.toString.call(b);
            };
            module.exports.sameType.api = [ "not" ];
            module.exports.string = function _string(value) {
                return "[object String]" === Object.prototype.toString.call(value);
            };
            module.exports.char = function _char(val) {
                return this.string(val) && 1 === val.length;
            };
            module.exports.undefined = function _undefined(val) {
                return void 0 === val;
            };
        }, {} ],
        11: [ function(require, module, exports) {
            var process = module.exports = {};
            var cachedSetTimeout;
            var cachedClearTimeout;
            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined");
            }
            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined");
            }
            !function() {
                try {
                    if ("function" == typeof setTimeout) cachedSetTimeout = setTimeout; else cachedSetTimeout = defaultSetTimout;
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout;
                }
                try {
                    if ("function" == typeof clearTimeout) cachedClearTimeout = clearTimeout; else cachedClearTimeout = defaultClearTimeout;
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout;
                }
            }();
            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0);
                }
                try {
                    return cachedSetTimeout(fun, 0);
                } catch (e) {
                    try {
                        return cachedSetTimeout.call(null, fun, 0);
                    } catch (e) {
                        return cachedSetTimeout.call(this, fun, 0);
                    }
                }
            }
            function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                    cachedClearTimeout = clearTimeout;
                    return clearTimeout(marker);
                }
                try {
                    return cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        return cachedClearTimeout.call(null, marker);
                    } catch (e) {
                        return cachedClearTimeout.call(this, marker);
                    }
                }
            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;
            function cleanUpNextTick() {
                if (!draining || !currentQueue) return;
                draining = false;
                if (currentQueue.length) queue = currentQueue.concat(queue); else queueIndex = -1;
                if (queue.length) drainQueue();
            }
            function drainQueue() {
                if (draining) return;
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;
                var len = queue.length;
                for (;len; ) {
                    currentQueue = queue;
                    queue = [];
                    for (;++queueIndex < len; ) if (currentQueue) currentQueue[queueIndex].run();
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
            }
            process.nextTick = function(fun) {
                var args = new Array(arguments.length - 1);
                if (1 < arguments.length) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
                queue.push(new Item(fun, args));
                if (1 === queue.length && !draining) runTimeout(drainQueue);
            };
            function Item(fun, array) {
                this.fun = fun;
                this.array = array;
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array);
            };
            process.title = "browser";
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = "";
            process.versions = {};
            function noop() {}
            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;
            process.listeners = function(name) {
                return [];
            };
            process.binding = function(name) {
                throw new Error("process.binding is not supported");
            };
            process.cwd = function() {
                return "/";
            };
            process.chdir = function(dir) {
                throw new Error("process.chdir is not supported");
            };
            process.umask = function() {
                return 0;
            };
        }, {} ]
    }, {}, [ 4 ])(4);
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a;
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    var n;
                    return o(e[i][1][r] || r);
                }, p, p.exports, r, e, n, t);
            }
            return n[i].exports;
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o;
    }
});
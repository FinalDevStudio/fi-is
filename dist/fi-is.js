(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f();
    } else if (typeof define === "function" && define.amd) {
        define([], f);
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window;
        } else if (typeof global !== "undefined") {
            g = global;
        } else if (typeof self !== "undefined") {
            g = self;
        } else {
            g = this;
        }
        g.is = f();
    }
})(function() {
    var define, module, exports;
    return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f;
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e);
                }, l, l.exports, e, t, n, r);
            }
            return n[o].exports;
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s;
    }({
        1: [ function(require, module, exports) {
            module.exports = function(is, not) {
                is.equal = function(a, b) {
                    if (is.all.number(a, b)) {
                        return a === b && 1 / a === 1 / b;
                    }
                    if (is.all.string(a, b) || is.all.regexp(a, b)) {
                        return "" + a === "" + b;
                    }
                    if (is.all.boolean(a, b)) {
                        return a === b;
                    }
                    return false;
                };
                is.equal.api = [ "not" ];
                is.even = function(num) {
                    return is.number(num) && num % 2 === 0;
                };
                is.odd = function(num) {
                    return is.number(num) && num % 2 === 1;
                };
                is.positive = function(num) {
                    return is.number(num) && num > 0;
                };
                is.negative = function(num) {
                    return is.number(num) && num < 0;
                };
                is.above = function(num, min) {
                    return is.all.number(num, min) && num > min;
                };
                is.above.api = [ "not" ];
                is.under = function(num, max) {
                    return is.all.number(num, max) && num < max;
                };
                is.under.api = [ "not" ];
                is.within = function(num, min, max) {
                    return is.all.number(num, min, max) && num > min && num < max;
                };
                is.within.api = [ "not" ];
                is.decimal = function(num) {
                    return is.number(num) && num % 1 !== 0;
                };
                is.integer = function(num) {
                    return is.number(num) && num % 1 === 0;
                };
                is.finite = isFinite || function(numb) {
                    return numb !== Infinity && numb !== -Infinity && is.not.nan(numb);
                };
                is.infinite = not(is.finite);
            };
        }, {} ],
        2: [ function(require, module, exports) {
            module.exports = function(is) {
                is.inArray = function(val, arr) {
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
                is.inArray.api = [ "not" ];
                is.sorted = function(arr) {
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
        }, {} ],
        3: [ function(require, module, exports) {
            module.exports = function(is, not) {
                var browser = typeof window !== "undefined";
                var userAgent = browser && "navigator" in window && "userAgent" in navigator && navigator.userAgent || "";
                var appVersion = browser && "navigator" in window && "appVersion" in navigator && navigator.appVersion || "";
                is.node = function() {
                    return !browser;
                };
                is.chrome = function() {
                    return browser && /(Chrome|Chromium)\//.test(userAgent) && is.not.opera() && is.not.vivaldi() && is.not.edge();
                };
                is.chrome.api = [ "not" ];
                is.firefox = function() {
                    return browser && /Firefox\//.test(userAgent);
                };
                is.firefox.api = [ "not" ];
                is.edge = function() {
                    return browser && /Edge\//.test(userAgent);
                };
                is.edge.api = [ "not" ];
                is.ie = function(version) {
                    if (!version) {
                        return browser && (/MSIE/.test(userAgent) || "ActiveXObject" in window);
                    }
                    if (version >= 11) {
                        return browser && "ActiveXObject" in window;
                    }
                    return browser && new RegExp("MSIE " + version).test(userAgent);
                };
                is.ie.api = [ "not" ];
                is.opera = function() {
                    return browser && /(Opera|OPR)\//.test(userAgent);
                };
                is.opera.api = [ "not" ];
                is.safari = function() {
                    return browser && /Safari/.test(userAgent) && is.not.chrome() && is.not.vivaldi() && is.not.opera() && is.not.edge();
                };
                is.safari.api = [ "not" ];
                is.vivaldi = function() {
                    return browser && /Vivaldi/.test(userAgent);
                };
                is.vivaldi.api = [ "not" ];
                is.ios = function() {
                    return browser && (is.iphone() || is.ipad() || is.ipod());
                };
                is.ios.api = [ "not" ];
                is.iphone = function() {
                    return browser && /iphone/i.test(userAgent);
                };
                is.iphone.api = [ "not" ];
                is.ipad = function() {
                    return browser && /ipad/i.test(userAgent);
                };
                is.ipad.api = [ "not" ];
                is.ipod = function() {
                    return browser && /ipod/i.test(userAgent);
                };
                is.ipod.api = [ "not" ];
                is.android = function() {
                    return browser && /android/i.test(userAgent);
                };
                is.android.api = [ "not" ];
                is.androidPhone = function() {
                    return browser && /android/i.test(userAgent) && /mobile/i.test(userAgent);
                };
                is.androidPhone.api = [ "not" ];
                is.androidTablet = function() {
                    return browser && /android/i.test(userAgent) && !/mobile/i.test(userAgent);
                };
                is.androidTablet.api = [ "not" ];
                is.blackberry = function() {
                    return browser && (/blackberry/i.test(userAgent) || /BB10/i.test(userAgent));
                };
                is.blackberry.api = [ "not" ];
                is.desktop = function() {
                    return browser && is.not.mobile() && is.not.tablet();
                };
                is.desktop.api = [ "not" ];
                is.linux = function() {
                    return browser && /linux/i.test(appVersion) && is.not.android();
                };
                is.linux.api = [ "not" ];
                is.mac = function() {
                    return browser && /mac/i.test(appVersion);
                };
                is.mac.api = [ "not" ];
                is.windows = function() {
                    return browser && /win/i.test(appVersion);
                };
                is.windows.api = [ "not" ];
                is.windowsPhone = function() {
                    return browser && is.windows() && /phone/i.test(userAgent);
                };
                is.windowsPhone.api = [ "not" ];
                is.windowsTablet = function() {
                    return browser && is.windows() && is.not.windowsPhone() && /touch/i.test(userAgent);
                };
                is.windowsTablet.api = [ "not" ];
                is.mobile = function() {
                    return browser && (is.iphone() || is.ipod() || is.androidPhone() || is.blackberry() || is.windowsPhone());
                };
                is.mobile.api = [ "not" ];
                is.tablet = function() {
                    return browser && (is.ipad() || is.androidTablet() || is.windowsTablet());
                };
                is.tablet.api = [ "not" ];
                is.online = function() {
                    return browser && navigator && navigator.onLine;
                };
                is.online.api = [ "not" ];
                is.offline = not(is.online);
                is.offline.api = [ "not" ];
                is.touchDevice = function() {
                    return browser && ("ontouchstart" in window || "DocumentTouch" in window && document instanceof DocumentTouch);
                };
                is.touchDevice.api = [ "not" ];
            };
        }, {} ],
        4: [ function(require, module, exports) {
            (function(global) {
                var root = this || global;
                var previousIs = root.is;
                var regexps = {
                    url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
                    email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
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
                    affirmative: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,
                    hexadecimal: /^[0-9a-fA-F]+$/,
                    hexColor: /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
                    ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
                    ipv6: /^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
                    ip: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
                };
                var is = {};
                is.VERSION = "0.8.0";
                is.not = {};
                is.all = {};
                is.any = {};
                function not(func) {
                    return function() {
                        return !func.apply(null, Array.prototype.slice.call(arguments));
                    };
                }
                function all(func) {
                    return function() {
                        var args = Array.prototype.slice.call(arguments);
                        var len = args.length;
                        if (len === 1 && is.array(args[0])) {
                            args = args[0];
                            len = args.length;
                        }
                        for (var i = 0; i < len; i++) {
                            if (!func.call(null, args[i])) {
                                return false;
                            }
                        }
                        return true;
                    };
                }
                function any(func) {
                    return function() {
                        var args = Array.prototype.slice.call(arguments);
                        var len = args.length;
                        if (len === 1 && is.array(args[0])) {
                            args = args[0];
                            len = args.length;
                        }
                        for (var i = 0; i < len; i++) {
                            if (func.call(null, args[i])) {
                                return true;
                            }
                        }
                        return false;
                    };
                }
                require("./type")(is);
                require("./presence")(is, not);
                require("./arithmetic")(is, not);
                require("./regexp")(is, regexps);
                require("./string")(is);
                require("./time")(is, not);
                require("./environment")(is, not);
                require("./object")(is);
                require("./array")(is);
                for (var method in is) {
                    if (is.hasOwnProperty(method) && is.function(is[method])) {
                        var ifaces = is[method].api || [ "not", "all", "any" ];
                        for (var i = 0, l = ifaces.length; i < l; i++) {
                            if (ifaces[i] === "not") {
                                is.not[method] = not(is[method]);
                            }
                            if (ifaces[i] === "all") {
                                is.all[method] = all(is[method]);
                            }
                            if (ifaces[i] === "any") {
                                is.any[method] = any(is[method]);
                            }
                        }
                    }
                }
                is.setRegexp = function(reg, key) {
                    for (var name in regexps) {
                        if (regexps.hasOwnProperty(name) && key === name) {
                            regexps[name] = reg;
                        }
                    }
                };
                is.setNamespace = function() {
                    root.is = previousIs;
                    return this;
                };
                module.exports = is;
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
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
            module.exports = function(is) {
                is.propertyCount = function(obj, count) {
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
                is.propertyCount.api = [ "not" ];
                is.propertyDefined = function(obj, property) {
                    return is.object(obj) && is.string(property) && property in obj;
                };
                is.propertyDefined.api = [ "not" ];
                is.windowObject = function(obj) {
                    return typeof obj === "object" && "setInterval" in obj;
                };
                is.domNode = function(obj) {
                    return is.object(obj) && obj.nodeType > 0;
                };
            };
        }, {} ],
        6: [ function(require, module, exports) {
            module.exports = function(is, not) {
                is.empty = function(value) {
                    if (is.object(value)) {
                        var num = Object.getOwnPropertyNames(value).length;
                        if (num === 0 || num === 1 && is.array(value) || num === 2 && is.arguments(value)) {
                            return true;
                        }
                        return false;
                    } else {
                        return value === "";
                    }
                };
                is.existy = function(value) {
                    return value !== null && value !== undefined;
                };
                is.truthy = function(value) {
                    return is.existy(value) && value !== false && is.not.nan(value) && value !== "" && value !== 0;
                };
                is.falsy = not(is.truthy);
                is.space = function(value) {
                    if (is.char(value)) {
                        var characterCode = value.charCodeAt(0);
                        return characterCode > 8 && characterCode < 14 || characterCode === 32;
                    } else {
                        return false;
                    }
                };
            };
        }, {} ],
        7: [ function(require, module, exports) {
            module.exports = function(is, regexps) {
                function regexpCheck(regexp, regexps) {
                    is[regexp] = function(value) {
                        return regexps[regexp].test(value);
                    };
                }
                for (var regexp in regexps) {
                    if (regexps.hasOwnProperty(regexp)) {
                        regexpCheck(regexp, regexps);
                    }
                }
            };
        }, {} ],
        8: [ function(require, module, exports) {
            module.exports = function(is) {
                is.include = function(str, substr) {
                    return str.indexOf(substr) > -1;
                };
                is.include.api = [ "not" ];
                is.upperCase = function(str) {
                    return is.string(str) && str === str.toUpperCase();
                };
                is.lowerCase = function(str) {
                    return is.string(str) && str === str.toLowerCase();
                };
                is.startWith = function(str, startWith) {
                    return is.string(str) && str.indexOf(startWith) === 0;
                };
                is.startWith.api = [ "not" ];
                is.endWith = function(str, endWith) {
                    return is.string(str) && str.indexOf(endWith) > -1 && str.indexOf(endWith) === str.length - endWith.length;
                };
                is.endWith.api = [ "not" ];
                is.capitalized = function(str) {
                    if (is.not.string(str)) {
                        return false;
                    }
                    var words = str.split(" ");
                    var capitalized = [];
                    for (var i = 0; i < words.length; i++) {
                        capitalized.push(words[i][0] === words[i][0].toUpperCase());
                    }
                    return is.all.truthy.apply(null, capitalized);
                };
                is.palindrome = function(str) {
                    return is.string(str) && str === str.split("").reverse().join("");
                };
            };
        }, {} ],
        9: [ function(require, module, exports) {
            module.exports = function(is, not) {
                var days = [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ];
                var months = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ];
                is.today = function(obj) {
                    var now = new Date();
                    var todayString = now.toDateString();
                    return is.date(obj) && obj.toDateString() === todayString;
                };
                is.yesterday = function(obj) {
                    var now = new Date();
                    var yesterdayString = new Date(now.setDate(now.getDate() - 1)).toDateString();
                    return is.date(obj) && obj.toDateString() === yesterdayString;
                };
                is.tomorrow = function(obj) {
                    var now = new Date();
                    var tomorrowString = new Date(now.setDate(now.getDate() + 1)).toDateString();
                    return is.date(obj) && obj.toDateString() === tomorrowString;
                };
                is.past = function(obj) {
                    var now = new Date();
                    return is.date(obj) && obj.getTime() < now.getTime();
                };
                is.future = not(is.past);
                is.day = function(obj, dayString) {
                    return is.date(obj) && dayString.toLowerCase() === days[obj.getDay()];
                };
                is.day.api = [ "not" ];
                is.month = function(obj, monthString) {
                    return is.date(obj) && monthString.toLowerCase() === months[obj.getMonth()];
                };
                is.month.api = [ "not" ];
                is.year = function(obj, year) {
                    return is.date(obj) && is.number(year) && year === obj.getFullYear();
                };
                is.year.api = [ "not" ];
                is.leapYear = function(year) {
                    return is.number(year) && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
                };
                is.weekend = function(obj) {
                    return is.date(obj) && (obj.getDay() === 6 || obj.getDay() === 0);
                };
                is.weekday = not(is.weekend);
                is.inDateRange = function(obj, startObj, endObj) {
                    if (is.not.date(obj) || is.not.date(startObj) || is.not.date(endObj)) {
                        return false;
                    }
                    var givenDate = obj.getTime();
                    var start = startObj.getTime();
                    var end = endObj.getTime();
                    return givenDate > start && givenDate < end;
                };
                is.inDateRange.api = [ "not" ];
                is.inLastWeek = function(obj) {
                    return is.inDateRange(obj, new Date(new Date().setDate(new Date().getDate() - 7)), new Date());
                };
                is.inLastMonth = function(obj) {
                    return is.inDateRange(obj, new Date(new Date().setMonth(new Date().getMonth() - 1)), new Date());
                };
                is.inLastYear = function(obj) {
                    return is.inDateRange(obj, new Date(new Date().setFullYear(new Date().getFullYear() - 1)), new Date());
                };
                is.inNextWeek = function(obj) {
                    return is.inDateRange(obj, new Date(), new Date(new Date().setDate(new Date().getDate() + 7)));
                };
                is.inNextMonth = function(obj) {
                    return is.inDateRange(obj, new Date(), new Date(new Date().setMonth(new Date().getMonth() + 1)));
                };
                is.inNextYear = function(obj) {
                    return is.inDateRange(obj, new Date(), new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
                };
                is.quarterOfYear = function(obj, quarterNumber) {
                    return is.date(obj) && is.number(quarterNumber) && quarterNumber === Math.floor((obj.getMonth() + 3) / 3);
                };
                is.quarterOfYear.api = [ "not" ];
                is.dayLightSavingTime = function(obj) {
                    var january = new Date(obj.getFullYear(), 0, 1);
                    var july = new Date(obj.getFullYear(), 6, 1);
                    var stdTimezoneOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
                    return obj.getTimezoneOffset() < stdTimezoneOffset;
                };
            };
        }, {} ],
        10: [ function(require, module, exports) {
            module.exports = function(is) {
                is.arguments = function(value) {
                    return is.not.null(value) && (Object.prototype.toString.call(value) === "[object Arguments]" || typeof value === "object" && "callee" in value);
                };
                is.array = Array.isArray || function(value) {
                    return Object.prototype.toString.call(value) === "[object Array]";
                };
                is.boolean = function(value) {
                    return value === true || value === false || Object.prototype.toString.call(value) === "[object Boolean]";
                };
                is.date = function(value) {
                    return Object.prototype.toString.call(value) === "[object Date]";
                };
                is.error = function(value) {
                    return Object.prototype.toString.call(value) === "[object Error]";
                };
                is.function = function(value) {
                    return Object.prototype.toString.call(value) === "[object Function]" || typeof value === "function";
                };
                is.nan = function(value) {
                    return value !== value;
                };
                is.null = function(value) {
                    return value === null;
                };
                is.number = function(value) {
                    return is.not.nan(value) && Object.prototype.toString.call(value) === "[object Number]";
                };
                is.object = function(value) {
                    var type = typeof value;
                    return type === "function" || type === "object" && !!value;
                };
                is.json = function(value) {
                    return Object.prototype.toString.call(value) === "[object Object]";
                };
                is.regexp = function(value) {
                    return Object.prototype.toString.call(value) === "[object RegExp]";
                };
                is.sameType = function(value1, value2) {
                    if (is.nan(value1) || is.nan(value2)) {
                        return is.nan(value1) === is.nan(value2);
                    }
                    return Object.prototype.toString.call(value1) === Object.prototype.toString.call(value2);
                };
                is.sameType.api = [ "not" ];
                is.string = function(value) {
                    return Object.prototype.toString.call(value) === "[object String]";
                };
                is.char = function(value) {
                    return is.string(value) && value.length === 1;
                };
                is.undefined = function(value) {
                    return value === void 0;
                };
            };
        }, {} ]
    }, {}, [ 4 ])(4);
});
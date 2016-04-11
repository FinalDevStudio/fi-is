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
            module.exports = function(is) {
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
                    if (is.all.array(a, b)) {
                        if (a.length !== b.length) {
                            return false;
                        }
                        for (var i = 0, l = a.length; i < l; i++) {
                            if (is.not.equal(a[i], b[i])) {
                                return false;
                            }
                        }
                        return true;
                    }
                    if (is.all.object(a, b)) {
                        if (Object.keys(a).length !== Object.keys(b).length) {
                            return false;
                        }
                        for (var p in a) {
                            if (a.hasOwnProperty(p) && b.hasOwnProperty(p)) {
                                if (is.not.equal(a[p], b[p])) {
                                    return false;
                                }
                            } else {
                                return false;
                            }
                        }
                        return true;
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
                is.finite = function(num) {
                    if (typeof isFinite === "function") {
                        return isFinite(num);
                    }
                    return num !== Infinity && num !== -Infinity && is.not.nan(num);
                };
                is.infinite = function(num) {
                    return is.not.finite(num);
                };
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
            (function(process) {
                module.exports = function(is) {
                    var browser = typeof window !== "undefined";
                    var userAgent = browser && "navigator" in window && "userAgent" in navigator && navigator.userAgent || "";
                    var appVersion = browser && "navigator" in window && "appVersion" in navigator && navigator.appVersion || "";
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
                    is.ie = function(ver) {
                        if (!ver) {
                            return browser && (/MSIE/.test(userAgent) || "ActiveXObject" in window);
                        }
                        if (ver >= 11) {
                            return browser && "ActiveXObject" in window;
                        }
                        return browser && new RegExp("MSIE " + ver).test(userAgent);
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
                    is.osx = function() {
                        return browser && /mac/i.test(appVersion);
                    };
                    is.osx.api = [ "not" ];
                    is.mac = is.osx;
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
                    is.offline = function() {
                        return is.not.online();
                    };
                    is.offline.api = [ "not" ];
                    is.touchDevice = function() {
                        return browser && ("ontouchstart" in window || "DocumentTouch" in window && document instanceof DocumentTouch);
                    };
                    is.touchDevice.api = [ "not" ];
                    is.node = function() {
                        return !browser && typeof process === "object";
                    };
                };
            }).call(this, require("_process"));
        }, {
            _process: 11
        } ],
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
                require("./presence")(is);
                require("./arithmetic")(is);
                require("./regexp")(is, regexps);
                require("./string")(is);
                require("./time")(is);
                require("./environment")(is);
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
            module.exports = function(is) {
                is.empty = function(val) {
                    if (is.string(val)) {
                        return val === "";
                    }
                    if (is.object(val)) {
                        var len = Object.getOwnPropertyNames(val).length;
                        return len === 0 || len === 1 && is.array(val) || len === 2 && is.arguments(val);
                    }
                    return !!val;
                };
                is.existy = function(val) {
                    return val !== null && val !== undefined;
                };
                is.truthy = function(val) {
                    return is.existy(val) && val !== false && is.not.nan(val) && val !== "" && val !== 0;
                };
                is.falsy = function(val) {
                    return is.not.truthy(val);
                };
                is.space = function(val) {
                    if (is.char(val)) {
                        var code = val.charCodeAt(0);
                        return code > 8 && code < 14 || code === 32;
                    }
                    return false;
                };
            };
        }, {} ],
        7: [ function(require, module, exports) {
            module.exports = function(is, regexps) {
                function create(name) {
                    is[name] = function(value) {
                        return regexps[name].test(value);
                    };
                }
                for (var reg in regexps) {
                    if (regexps.hasOwnProperty(reg)) {
                        create(reg);
                    }
                }
            };
        }, {} ],
        8: [ function(require, module, exports) {
            module.exports = function(is) {
                is.include = function(str, val) {
                    return str.indexOf(val) > -1;
                };
                is.include.api = [ "not" ];
                is.upperCase = function(str) {
                    return is.string(str) && str === str.toUpperCase();
                };
                is.lowerCase = function(str) {
                    return is.string(str) && str === str.toLowerCase();
                };
                is.startWith = function(str, val) {
                    return is.string(str) && str.indexOf(val) === 0;
                };
                is.startWith.api = [ "not" ];
                is.endWith = function(str, val) {
                    return is.string(str) && str.indexOf(val) > -1 && str.indexOf(val) === str.length - val.length;
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
            module.exports = function(is) {
                var days = [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ];
                var months = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ];
                is.today = function(date) {
                    return is.date(date) && date.toDateString() === new Date().toDateString();
                };
                is.yesterday = function(obj) {
                    var now = new Date();
                    return is.date(obj) && obj.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString();
                };
                is.tomorrow = function(obj) {
                    var now = new Date();
                    return is.date(obj) && obj.toDateString() === new Date(now.setDate(now.getDate() + 1)).toDateString();
                };
                is.past = function(obj) {
                    return is.date(obj) && obj.getTime() < new Date().getTime();
                };
                is.future = function(date) {
                    return is.not.past(date);
                };
                is.day = function(date, day) {
                    return is.date(date) && day.toLowerCase() === days[date.getDay()];
                };
                is.day.api = [ "not" ];
                is.month = function(date, month) {
                    return is.date(date) && month.toLowerCase() === months[date.getMonth()];
                };
                is.month.api = [ "not" ];
                is.year = function(date, year) {
                    return is.date(date) && is.number(year) && year === date.getFullYear();
                };
                is.year.api = [ "not" ];
                is.leapYear = function(year) {
                    return is.number(year) && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
                };
                is.weekend = function(date) {
                    return is.date(date) && (date.getDay() === 6 || date.getDay() === 0);
                };
                is.weekday = function(date) {
                    return is.not.weekend(date);
                };
                is.inDateRange = function(date, start, end) {
                    if (is.not.date(date) || is.not.date(start) || is.not.date(end)) {
                        return false;
                    }
                    return date.getTime() > start.getTime() && date.getTime() < end.getTime();
                };
                is.inDateRange.api = [ "not" ];
                is.inLastWeek = function(date) {
                    return is.inDateRange(date, new Date(new Date().setDate(new Date().getDate() - 7)), new Date());
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
                is.quarterOfYear = function(date, quarter) {
                    return is.date(date) && is.number(quarter) && quarter === Math.floor((date.getMonth() + 3) / 3);
                };
                is.quarterOfYear.api = [ "not" ];
                is.dayLightSavingTime = function(date) {
                    var january = new Date(date.getFullYear(), 0, 1);
                    var july = new Date(date.getFullYear(), 6, 1);
                    var stdTimezoneOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
                    return date.getTimezoneOffset() < stdTimezoneOffset;
                };
            };
        }, {} ],
        10: [ function(require, module, exports) {
            module.exports = function(is) {
                is.arguments = function(val) {
                    return is.not.null(val) && (Object.prototype.toString.call(val) === "[object Arguments]" || typeof val === "object" && "callee" in val);
                };
                is.array = function(val) {
                    if (typeof Array.isArray === "function") {
                        return Array.isArray(val);
                    }
                    return Object.prototype.toString.call(val) === "[object Array]";
                };
                is.boolean = function(val) {
                    return val === true || val === false || Object.prototype.toString.call(val) === "[object Boolean]";
                };
                is.date = function(val) {
                    return Object.prototype.toString.call(val) === "[object Date]";
                };
                is.error = function(val) {
                    return Object.prototype.toString.call(val) === "[object Error]";
                };
                is.function = function(val) {
                    return Object.prototype.toString.call(val) === "[object Function]" || typeof value === "function";
                };
                is.nan = function(val) {
                    return val !== val;
                };
                is.null = function(val) {
                    return val === null;
                };
                is.number = function(val) {
                    return is.not.nan(val) && Object.prototype.toString.call(val) === "[object Number]";
                };
                is.object = function(val) {
                    var type = typeof val;
                    return type === "function" || type === "object" && !!val;
                };
                is.json = function(val) {
                    return Object.prototype.toString.call(val) === "[object Object]";
                };
                is.regexp = function(val) {
                    return Object.prototype.toString.call(val) === "[object RegExp]";
                };
                is.sameType = function(val1, val2) {
                    if (is.nan(val1) || is.nan(val2)) {
                        return is.nan(val1) === is.nan(val2);
                    }
                    return Object.prototype.toString.call(val1) === Object.prototype.toString.call(val2);
                };
                is.sameType.api = [ "not" ];
                is.string = function(value) {
                    return Object.prototype.toString.call(value) === "[object String]";
                };
                is.char = function(val) {
                    return is.string(val) && val.length === 1;
                };
                is.undefined = function(val) {
                    return val === void 0;
                };
            };
        }, {} ],
        11: [ function(require, module, exports) {
            var process = module.exports = {};
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;
            function cleanUpNextTick() {
                draining = false;
                if (currentQueue.length) {
                    queue = currentQueue.concat(queue);
                } else {
                    queueIndex = -1;
                }
                if (queue.length) {
                    drainQueue();
                }
            }
            function drainQueue() {
                if (draining) {
                    return;
                }
                var timeout = setTimeout(cleanUpNextTick);
                draining = true;
                var len = queue.length;
                while (len) {
                    currentQueue = queue;
                    queue = [];
                    while (++queueIndex < len) {
                        if (currentQueue) {
                            currentQueue[queueIndex].run();
                        }
                    }
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = false;
                clearTimeout(timeout);
            }
            process.nextTick = function(fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var i = 1; i < arguments.length; i++) {
                        args[i - 1] = arguments[i];
                    }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                    setTimeout(drainQueue, 0);
                }
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
});
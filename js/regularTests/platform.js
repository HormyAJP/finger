"use strict";

// Thanks to http://browserhacks.com/

Fingerprint.registerTest('platform.chrome', function() {
    return boolArrayToBinary([
        !!window.chrome && !!window.chrome.webstore,
    ])
});

Fingerprint.registerTest('platform.chromium', function() {
    return boolArrayToBinary([
        !!window.chrome
    ])
});

Fingerprint.registerTest('platform.webkit', function() {
    return boolArrayToBinary([
        'WebkitAppearance' in document.documentElement.style,
    ])
});

Fingerprint.registerTest('platform.safari', function() {
    return boolArrayToBinary([
        /a/.__proto__=='//',
        !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && typeof document.body.style.webkitFilter !== "undefined" && !window.chrome,
        /constructor/i.test(window.HTMLElement,
        window.ApplePayError != undefined,
        window.ApplePaySession != undefined,
        window.ApplePaySession != undefined)
    ])
});

Fingerprint.registerTest('platform.ff', function() {
    return boolArrayToBinary([
        !!window.sidebar,
        'MozAppearance' in document.documentElement.style,
        typeof InstallTrigger !== 'undefined',
        /a/[-1]=='a',
        (function x(){})[-5]=='x',
        !!navigator.userAgent.match(/firefox/i),
        !!window.globalStorage,
        (function x(){})[-6]=='x',
    ])
});

Fingerprint.registerTest('platform.opera', function() {
    return boolArrayToBinary([
        /^function \(/.test([].sort),
        window.opera && window.opera.version() == X,
        !!window.opera,
        !!window.opera || /opera|opr/i.test(navigator.userAgent),
    ])
});

Fingerprint.registerTest('platform.operamini', function() {
    return boolArrayToBinary([
        Object.prototype.toString.call(window.operamini) === '[object OperaMini]',
        (navigator.userAgent.indexOf('Opera Mini') > -1),
    ])
});

Fingerprint.registerTest('platform.ie_edge', function() {
    return boolArrayToBinary([
        document.all && !window.XMLHttpRequest,
        !!window.ActiveXObject,
        document.all && !document.querySelector,
        document.all && window.XMLHttpRequest,
        !+'\v1',
        document.all && document.querySelector,
        document.all && document.querySelector && !document.addEventListener,
        document.all && document.addEventListener && !window.atob,
        /*@cc_on!@*/false,
        document.body.style.msTouchAction !== undefined,
        'behavior' in document.documentElement.style && '-ms-user-select' in document.documentElement.style,
        document.all && document.compatMode,
        document.all && window.XMLHttpRequest && !document.querySelector,
        navigator.appVersion.indexOf("MSIE 7.") !== -1,
        '\v'=='v',
        document.all && !document.addEventListener,
        document.all && document.addEventListener,
        document.all && !window.atob,
        document.all && window.atob,
        eval("/*@cc_on!@*/false") && document.documentMode === 10,
        window.navigator.msPointerEnabled,
        '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style,
    ])
});

Fingerprint.registerTest('platform.version.ie', function() {
    var ieVersion1 = (function() { if (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) { return parseFloat( RegExp.$1 ); } else { return false; } })();
    var ieVersion2 = /*@cc_on (function() {switch(@_jscript_version) {case 1.0: return 3; case 3.0: return 4; case 5.0: return 5; case 5.1: return 5; case 5.5: return 5.5; case 5.6: return 6; case 5.7: return 7; case 5.8: return 8; case 9: return 9; case 10: return 10;}})() || @*/ 0;
    return ieVersion1 + "\n" + ieVersion2;
});

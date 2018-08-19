"use strict";

Fingerprint.registerTest('function.toString', function() {

    function stringifyMe() {
        // I'm a comment
        var a = 'something';
        function nested() {

        }
    }

    return stringifyMe.toString();
});

Fingerprint.registerTest('function.nativeToString', function() {
    // There are newline differences between chrome and most other browsers
    return window.alert.toString();
});

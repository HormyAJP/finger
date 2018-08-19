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

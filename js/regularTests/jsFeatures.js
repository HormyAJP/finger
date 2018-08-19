"use strict";

Fingerprint.registerTest('jsFeatures.promise', function() {
    if (!('Promise' in window)) {
        return 'Promise is undefined';
    }

    var p = new Promise(function() {});
    if (p.finally == undefined) {
        return 'Promise.finally is undefined';
    } else {
        return 'Promise.finally is defined';
    }

});

"use strict";

Fingerprint.registerTest('math', function() {
    var mathFunctions = {
        'asin': 0.5,
        'acos': 0.5,
        'atan': 1.0,
        'sin': 1.0,
        'cos': 1.0,
        'tan': 1.0,
        'asinh': 1.0,
        'acosh': 1.0,
        'atanh': 0.5,
        'sinh': 1.0,
        'cosh': 1.0,
        'tanh': 1.0,
        'exp': 1.5232,
        'log': 10,
        'log10': 994382.23,
    }

    var mathConstants = [
        'E',
        'PI',
        'SQRT2',
        'SQRT1_2',
        'LN2',
        'LN10',
        'LOG2E',
        'LOG10E',
    ]

    var ret = 0.0;
    for (var func in mathFunctions) {
        if (func in Math) {
            ret += Math[func](mathFunctions[func]);
        }
    }

    if ('pow' in Math) {
        ret += Math.pow(1.2345, 6.7890);
    }

    for (var i = 0; i < mathConstants.length; ++i) {
        ret += Math[mathConstants[i]];
    }

    return ret.toString();
});

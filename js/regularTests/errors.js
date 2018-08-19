"use strict";

Fingerprint.registerTest('errors', function() {
    var errors  = [
        ["URIError", typeof URIError == 'undefined' ? null : URIError],
        ["TypeError", typeof TypeError == 'undefined' ? null : TypeError],
        ["SyntaxError", typeof SyntaxError == 'undefined' ? null : SyntaxError],
        ["ReferenceError", typeof ReferenceError == 'undefined' ? null : ReferenceError],
        ["RangeError", typeof RangeError == 'undefined' ? null : RangeError],
        ["DOMError", typeof DOMError == 'undefined' ? null : DOMError],
        ["InternalError", typeof InternalError == 'undefined' ? null : InternalError],
        ["EvalError", typeof EvalError == 'undefined' ? null : EvalError],
        ["MediaError", typeof MediaError == 'undefined' ? null : MediaError],
        ["OverconstrainedError", typeof OverconstrainedError == 'undefined' ? null : OverconstrainedError],
        ["SyntaxError", typeof SyntaxError == 'undefined' ? null : SyntaxError],
    ]

    var ret = '';
    for (var i = 0; i < errors.length; ++i) {
        var name = errors[i][0];
        var clazz = errors[i][1];
        if (clazz == null) {
            ret += name + ": " + '[undefined]\n';
        } else {
            ret += safeDumpProtoHierarchy(new URIError("Fingerprint error message"), 10) + "\n";
        }
    }
    return ret;
});

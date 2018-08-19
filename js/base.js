"use strict";

function log(msg) {
    // text = text.toString()
    // text = text.replace(/(?:\r\n|\r|\n)/g, '<br>');
    if (msg == null) {
        msg = '[null]'
    }
    document.getElementById("log").innerHTML += msg + "<br>"
}

function logt(tag, msg) {
    if (msg == null) {
        msg = '[null]'
    }
    // text = text.toString()
    // text = text.replace(/(?:\r\n|\r|\n)/g, '<br>');
    log(tag + ": " + msg.toString())
}

function objectToString(object) {
    return _objectToString(object, 0);
}

function _objectToString(object, depth) {
    if (object == null) {
        return 'null';
    }

    if (['string', 'boolean', 'number', 'symbol'].indexOf(typeof object) != -1) {
        return object.toString();
    }

    if (typeof object == 'function') {
        return 'function: ' + object.name;
    }

    var spaces = '  ';
    var ret = '';
    var padding = spaces.repeat(depth);
    if (Array.isArray(object)) {
        ret += padding + "[\n";
        for (var i = 0; i < object.length; ++i) {
            ret += padding + spaces + _objectToString(object[i], depth + 1) + ",\n";
        }
        ret += padding + "]\n";
        return ret;
    }

    ret += "{\n"
    if (object.getPrototypeOf() != null) {
        ret += padding + spaces + '"__proto__": ' + _objectToString(object.getPrototypeOf(), depth + 1);
    }

    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            if (property == 'TEXT_NODE') {
                ret += object.toString();
            }
            // ret += padding + spaces + property + ': ' + objectToString(object.getPrototypeOf(), depth + 1);
        }
    }
    ret += padding + "}\n"
    return ret;
}

function domObjectToString(dom) {
    return _domObjectToString(dom, 0);
}

function _domObjectToString(dom, depth) {
    var spaces = '  ';
    var padding = spaces.repeat(depth);

    var children = dom.childNodes;
    if (typeof children == 'undefined') {
        return dom.toString();
    }

    var ret = padding + dom.toString() + ': {\n';
    for (var i = 0; i < children.length; ++i) {
        ret += padding + spaces + _domObjectToString(children[i], depth + 1);
    }
    ret += padding + "}\n";
    return ret;
}


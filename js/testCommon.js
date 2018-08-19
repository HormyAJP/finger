"use strict";

function safeDumpProtoHierarchy(object, depth) {
    if (object == null) {
        return '[null]';
    }
    if (depth == 0) {
        return object.toString();
    } else {
        try {
            return object.toString() + "\n" + safeDumpProtoHierarchy(Object.getPrototypeOf(object), depth - 1);
        } catch(err) {
            // IE can give us Invalid Calling Object
            return err.toString();
        }
    }
}

function boolArrayToBinary(array) {
    var ret = [];
    for (var i = 0; i < array.length; ++i) {
        ret.push(array[i] ? 1 : 0);
    }
    return ret.join('');
}

function propertyExistenceToBinary(object, properties) {
    var available = '';
    for (var i = 0; i < properties.length; ++i) {
        var property = properties[i];
        if (property in object) {
            available += '1';
        } else {
            available += '0';
        }
    }
    return available;
}

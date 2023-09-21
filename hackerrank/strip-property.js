'use strict';

function stripProperty(obj, prop) {
    /**
     * take 2 arguments at object literal obj and a string prop
     * return a new object literal with the same properties and their value as obj excluding the property prop if exists.
     */
    let newObj = {};
    for (let key in obj) {
        if (key !== prop) {
            newObj[key] = obj[key];
        }
    return newObj;
}
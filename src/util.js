/**
 * Created by yeanzhi on 17/2/16.
 */
'use strict';
function isFunction(obj) {
    return obj instanceof Function;
}
function isNumber(obj) {
    return typeof obj === 'number' || obj instanceof Number;
}
function isObject(obj) {
    return obj === Object(obj);
}
function isString(obj) {
    return typeof obj === 'string' || obj instanceof String;
}
export default {
    isFunction,isNumber,isObject,isString
}

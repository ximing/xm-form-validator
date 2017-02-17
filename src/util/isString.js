/**
 * Created by yeanzhi on 17/2/17.
 */
'use strict';
export default function isString(obj) {
    return typeof obj === 'string' || obj instanceof String;
}

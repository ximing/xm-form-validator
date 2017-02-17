/**
 * Created by yeanzhi on 17/2/17.
 */
'use strict';
export default function isNumber(obj) {
    return typeof obj === 'number' || obj instanceof Number;
}

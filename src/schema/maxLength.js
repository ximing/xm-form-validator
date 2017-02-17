/**
 * Created by yeanzhi on 17/2/17.
 */
'use strict';
import {isNumber,isArray,isString} from '../util';
export default function (value,maxLength) {
    if(isNumber(value)||isString(value)){
        return `${value}`.length<=maxLength
    }else if(isArray(value)){
        return value.length<=maxLength
    }else {
        return false
    }
}

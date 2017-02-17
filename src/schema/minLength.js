/**
 * Created by yeanzhi on 17/2/17.
 */
'use strict';
import {isNumber,isArray,isString} from '../util';
export default function (value,minLength) {
    if(isNumber(value)||isString(value)){
        return `${value}`.length>=minLength
    }else if(isArray(value)){
        return value.length>=minLength
    }else {
        return false
    }
}

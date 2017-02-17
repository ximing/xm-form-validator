/**
 * Created by yeanzhi on 17/2/17.
 */
'use strict';
import {isInt,isString} from '../util';

export default function (value) {
    if(!isString(value)){
        return false;
    }
    return isInt(value);
}


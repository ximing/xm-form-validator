/**
 * Created by yeanzhi on 17/2/17.
 */
'use strict';
import {isFloat,isString} from '../util';

export default function (value) {
    if(!isString(value)){
        return false;
    }
    return isFloat(value);
}


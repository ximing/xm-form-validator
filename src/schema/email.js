/**
 * Created by yeanzhi on 17/2/16.
 */
'use strict';
import {isEmail,isString} from '../util';

export default function (value) {
    if(!isString(value)){
        return false;
    }
    return isEmail(value);
}

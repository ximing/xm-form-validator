/**
 * Created by yeanzhi on 17/2/16.
 */
'use strict';
import {isEmail} from '../util';

export default function (value) {
    return isEmail(value);
}

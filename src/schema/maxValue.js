/**
 * Created by yeanzhi on 17/2/17.
 */
'use strict';
import {isNumber,isArray} from '../util';
import warning from '../warning';

export default function (value,maxValue) {
    if(isArray(value)){
        return value.length <= maxValue;
    }else if(isNumber(value)){
        return value <= maxValue;
    }else{
        warning(true,'maxValue类型错误')
        return false;
    }
}

/**
 * Created by yeanzhi on 17/2/17.
 */
'use strict';
import {isNumber,isArray} from '../util';
import warning from '../warning';

export default function (value,minValue) {
    if(isArray(value)){
        return value.length > minValue;
    }else if(isNumber(value)){
        return value > minValue;
    }else{
        warning(true,'minValue类型错误')
    }
}

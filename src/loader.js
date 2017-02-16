/**
 * Created by yeanzhi on 17/2/16.
 */
'use strict';
export default function (rules) {
    if(!Array.isArray(rules)){
        rules = [rules];
    }
    rules.forEach(item=>{
        console.log(item);
    });
}

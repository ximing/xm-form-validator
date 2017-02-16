/**
 * Created by yeanzhi on 17/2/16.
 */
'use strict';
import errorMessage from './errorMessage';
import schemas from './schema/index';
import util from './util';

let __errorMessage = errorMessage;
let __schemas = schemas;

export default {
    verify: function (rules) {
        if (!Array.isArray(rules)) {
            rules = [rules];
        }
        rules.forEach(item => {
            console.log(item);
        });
    },
    /*
    * addSchema
    * @param {object}
    *   @param {string} key
    *   @param {function} verify
    *   @param {string|function} options - message
    *   @param {string|function} options - msg
    * */
    addSchema:function (schema) {
        if(util.isObject(schema)&&schema.verify && util.isFunction(schema.verify)
            && util.isString(schema.key) && schema.key.trim()!==''){
            __schemas[schema.key] = schema.verify;
            if(schema.msg){
                schema.message = schema.msg;
            }
            if(schema.message && (util.isFunction(schema.message)||util.isString(schema.message))){
                __errorMessage[schema.key] = schema.message;
            }
        }
        throw new Error('请输入合法的schema');

    },
    initErrorMsg:function (message) {
        __errorMessage = Object(__errorMessage,message);
    }
}

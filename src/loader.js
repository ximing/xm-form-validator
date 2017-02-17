/**
 * Created by yeanzhi on 17/2/16.
 */
'use strict';
import errorMessage from './errorMessage';
import schemas from './schema/index';
import {isFunction, isObject, isString} from './util';

let __errorMessage = errorMessage;
let __schemas = schemas;

export default {
    verify: function (value, rules) {
        if (!Array.isArray(rules)) {
            rules = [rules];
        }
        let res = null;
        rules.every(item => {
            Object.keys(item).every(i => {
                if (i !== 'message' || i != 'msg') {
                    if (__schemas[i]) {
                        let _res = __schemas[i](value);
                        if (!_res) {
                            res = item['message'] || item['msg'] || errorMessage[i];
                        }
                        return _res
                    } else {
                        return false
                    }
                }
            });
            return !res;
        });
        return !res ? true : res;
    },
    /*
     * addSchema
     * @param {object}
     *   @param {string} key
     *   @param {function} verify
     *   @param {string|function} options - message
     *   @param {string|function} options - msg
     * */
    addSchema: function (schema) {
        if (isObject(schema) && schema.verify && isFunction(schema.verify)
            && isString(schema.key) && schema.key.trim() !== '') {
            __schemas[schema.key] = schema.verify;
            if (schema.msg) {
                schema.message = schema.msg;
            }
            if (schema.message && (isFunction(schema.message) || isString(schema.message))) {
                __errorMessage[schema.key] = schema.message;
            }
        }
        throw new Error('请输入合法的schema');

    },
    initErrorMsg: function (message) {
        __errorMessage = Object(__errorMessage, message);
    }
}

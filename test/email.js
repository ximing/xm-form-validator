/**
 * Created by yeanzhi on 17/2/16.
 */
'use strict';
import test from 'ava';
import loader from '../src/loader';
import errorMessage from '../src/errorMessage.js';

test('email test', t => {
    t.pass();
});
test('email:123456@qq.com', t => {
    t.is(loader.verify('807754634@qq.com',{email:true}),true);
});
test('email:123456@qq.com', t => {
    t.is(loader.verify('807754634qq.com',{email:true}),errorMessage.email);
});

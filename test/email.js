/**
 * Created by yeanzhi on 17/2/16.
 */
'use strict';
import test from 'ava';
import loader from '../src/loader';

test('email test', t => {
    t.pass();
});
test('email:123456@qq.com', t => {
    t.is(loader.verify('807754634@qq.com',{email:true}),true);
});

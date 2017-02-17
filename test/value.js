/**
 * Created by yeanzhi on 17/2/17.
 */
'use strict';
import test from 'ava';
import loader from '../src/loader';
import errorMessage from '../src/errorMessage.js';

test('date:111324324@qq.com', t => {
    t.is(loader.verify('111324324@qq.com',{maxLength:10}),errorMessage.maxLength(10));
});


test('date:807754634@qq.com', t => {
    t.is(loader.verify('807754634@qq.com',{minLength:10}),true);
});


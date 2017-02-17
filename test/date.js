'use strict';
import test from 'ava';
import loader from '../src/loader';
import errorMessage from '../src/errorMessage.js';

test('date:123456@qq.com', t => {
    t.is(loader.verify('807754634@qq.com',{date:true}),errorMessage.date);
});
test('date:2012-01-01', t => {
    t.is(loader.verify('2012-01-01',{date:true}),true);
});

test('date:12-01-01', t => {
    t.is(loader.verify('12-01-01',{date:true}),true);
});

test('date:12-01/01', t => {
    t.is(loader.verify('12-01/01',{date:true}),true);
});

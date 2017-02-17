/**
 * Created by yeanzhi on 17/2/17.
 */
'use strict';
import test from 'ava';
import loader from '../src/loader';
import errorMessage from '../src/errorMessage.js';

test('require:null', t => {
    t.is(loader.verify(null,{require:true}),errorMessage.require);
});

test('require:emptyString1', t => {
    t.is(loader.verify('',{require:true}),errorMessage.require);
});
test('require:emptyString Space', t => {
    t.is(loader.verify(' ',{require:true}),errorMessage.require);
});
test('require:emptyString tap', t => {
    t.is(loader.verify('    ',{require:true}),errorMessage.require);
});
test('require:emptyString undefined', t => {
    t.is(loader.verify(undefined,{require:true}),errorMessage.require);
});

/**
 * Created by yeanzhi on 17/2/16.
 */
'use strict';
import test from 'ava';
test('email test', t => {
    t.pass();
});
test('bar', async t => {
    const bar = Promise.resolve('bar');

    t.is(await bar, 'bar');
});

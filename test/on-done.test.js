import onDone from '../src/on-done.js';
const test = QUnit.test;

QUnit.module('onDone callback function test 1');

test('onDone function changes completed from false to true', function(assert) {

    const listItem = {
        text: 'test name',
        completed: false
    };

    const result = onDone(listItem);

    assert.deepEqual(result, {
        text: 'test name',
        completed: true
    });
});
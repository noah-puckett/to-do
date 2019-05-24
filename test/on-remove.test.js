const test = QUnit.test;

QUnit.module('onRemove function test 1');

test('onRemove function updates todoData?', function(assert) {

    const listItem = {
        text: 'test name',
        completed: false
    };

    const result = onRemove(listItem);

    assert.deepEqual(result, {
        text: 'test name',
        completed: true
    });
});
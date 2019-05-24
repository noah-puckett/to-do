const test = QUnit.test;

QUnit.module('sort function test 1');

test('sorting things', function(assert) {

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
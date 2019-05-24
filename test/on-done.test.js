const test = QUnit.test;

QUnit.module('onDone callback function test 1');

function onDone(listItem) {
    listItem.completed = true;
    return listItem;
}

test('Can I make a test for onDone?', function(assert) {
    //so I want an event listener that, ON CHECKED, changes the listItem object to {completed: true}?

    //arrange
    const listItem = {
        text: 'test name',
        completed: false
    };


    //act
    const result = onDone(listItem);
    //assert
    assert.deepEqual(result, {
        text: 'test name',
        completed: true
    });
});
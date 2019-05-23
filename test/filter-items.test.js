import filterItems from '../src/filter-items.js';
const test = QUnit.test;
const todoData = [
    {
        name: 'Eat Breakfast',
        label: 'eat-breakfast',
        completed: false
    },
    {
        name: 'Eat Lunch',
        label: 'eat-lunch',
        completed: true
    },
    {
        name: 'Eat Dinner',
        label: 'eat-dinner',
        completed: false
    }
];

QUnit.module('filter items');

test('INCOMPLETE filter returns INCOMPLETED', assert => {
    //arrange
    const filter = {
        text: '',
        completed: false
    };

    const filtered = filterItems(todoData, filter);

    assert.deepEqual(filtered, [
        {
            name: 'Eat Breakfast',
            label: 'eat-breakfast',
            completed: false
        },
        {
            name: 'Eat Dinner',
            label: 'eat-dinner',
            completed: false
        }
    ]);
});

test('COMPLETED filter returns ONLY COMPLETED', assert => {
    //arrange
    const filter = {
        text: '',
        completed: true
    };

    const filtered = filterItems(todoData, filter);

    assert.deepEqual(filtered, [
        {
            name: 'Eat Lunch',
            label: 'eat-lunch',
            completed: true
        },
    ]);
});


test('all filter returns all', assert => {
    //arrange
    const filter = {
        text: '',
        completed: ''
    };

    const filtered = filterItems(todoData, filter);

    assert.deepEqual(filtered, [
        {
            name: 'Eat Breakfast',
            label: 'eat-breakfast',
            completed: false
        },
        {
            name: 'Eat Lunch',
            label: 'eat-lunch',
            completed: true
        },
        {
            name: 'Eat Dinner',
            label: 'eat-dinner',
            completed: false
        }
    ]);
});

test('filters on name', assert => {
    const filter = {
        text: 'bre',
        completed: 'all'
    };

    const filtered = filterItems(todoData, filter);

    assert.deepEqual(filtered, [{
        name: 'Eat Breakfast',
        label: 'eat-breakfast',
        completed: false
    }]);
});

test('filters on name case insensitive', assert => {
    const filter = {
        text: 'dInN',
        completed: ''
    };

    const filtered = filterItems(todoData, filter);

    assert.deepEqual(filtered, [{
        name: 'Eat Dinner',
        label: 'eat-dinner',
        completed: false
    }]);
});
import filterItems from '../src/filter-items.js';
const test = QUnit.test;
const todoData = [
    {
        text: 'Eat Breakfast',
        label: 'eat-breakfast',
        completed: false
    },
    {
        text: 'Eat Lunch',
        label: 'eat-lunch',
        completed: true
    },
    {
        text: 'Eat Dinner',
        label: 'eat-dinner',
        completed: false
    }
];

QUnit.module('filter items');

test('INCOMPLETE filter returns INCOMPLETED', assert => {
    const filter = {
        text: '',
        completed: false
    };

    const filtered = filterItems(todoData, filter);

    assert.deepEqual(filtered, [
        {
            text: 'Eat Breakfast',
            label: 'eat-breakfast',
            completed: false
        },
        {
            text: 'Eat Dinner',
            label: 'eat-dinner',
            completed: false
        }
    ]);
});

test('COMPLETED filter returns ONLY COMPLETED', assert => {
    const filter = {
        text: '',
        completed: true
    };

    const filtered = filterItems(todoData, filter);

    assert.deepEqual(filtered, [
        {
            text: 'Eat Lunch',
            label: 'eat-lunch',
            completed: true
        },
    ]);
});

test('all filter returns all', assert => {
    const filter = {
        text: '',
        completed: ''
    };

    const filtered = filterItems(todoData, filter);

    assert.deepEqual(filtered, [
        {
            text: 'Eat Breakfast',
            label: 'eat-breakfast',
            completed: false
        },
        {
            text: 'Eat Lunch',
            label: 'eat-lunch',
            completed: true
        },
        {
            text: 'Eat Dinner',
            label: 'eat-dinner',
            completed: false
        }
    ]);
});

test('filters on text', assert => {
    const filter = {
        text: 'bre',
        completed: 'all'
    };

    const filtered = filterItems(todoData, filter);

    assert.deepEqual(filtered, [{
        text: 'Eat Breakfast',
        label: 'eat-breakfast',
        completed: false
    }]);
});

test('filters on text case insensitive', assert => {
    const filter = {
        text: 'dInN',
        completed: ''
    };

    const filtered = filterItems(todoData, filter);

    assert.deepEqual(filtered, [{
        text: 'Eat Dinner',
        label: 'eat-dinner',
        completed: false
    }]);
});
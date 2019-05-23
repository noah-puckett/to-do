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
        completed: false
    },
    {
        name: 'Eat Dinner',
        label: 'eat-dinner',
        completed: false
    }
];

QUnit.module('filter items');

function filterItems(items, filter) {
    const lowerCaseNameFilter = filter.name.toLowerCase();
    return items.filter(item => {
        const lowerCaseName = item.name.toLowerCase();
        const hasName = !lowerCaseNameFilter || lowerCaseName.includes(lowerCaseNameFilter);
        const hasType = !filter.type || item.type === filter.type;

        return hasName && hasType;
    });
}



test('filters on name', assert => {
    //arrange
    const filter = {
        name: 'bre',
    };

    const filtered = filterItems(todoData, filter);

    assert.deepEqual(filtered, [{
        name: 'Eat Breakfast',
        label: 'eat-breakfast',
        completed: false
    }]);

});

// test('filters on name case insensitive', assert => {
//     const filter = 'duc';

//     const filtered = filterItems(items, filter);

//     assert.deepEqual(filtered, [{
//         name: 'Duchess',
//         type: 'Angora'
//     }]);


// });


// test('returns all on no filter', assert => {
//     const filter = {
//         name: ''
//     };


// });


// test('filters on type', assert => {
//     const filter = {
//         name: '',
//         type: 'Angora'
//     };

//     const filtered = filterItems(items, filter);

//     assert.deepEqual(filtered, [{
//         name: 'Duchess',
//         type: 'Angora'
//     }]);


// });


// test('DEMO TEST NUMBER A BILLION matches type as well as name', assert => {
//     const filter = {
//         text: 'u'
//     };

//     const filtered = filterItems(items, filter);

//     assert.deepEqual(filtered, [{
//         name: 'Duchess',
//         type: 'Angora'
//     }]);


// });
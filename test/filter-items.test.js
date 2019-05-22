const test = QUnit.test;

QUnit.module('filter items');
//make const ITEMS array

const lowerCaseNameFilter =filter.name.toLowerCase();
const hasName = !lowerCaseNameFilter || lowerCaseName.includes(lowerCaseNameFilter);


function filterItems(items, filter) {
    return items.filter(item => {
        return item.name
            .toLowerCase()
            .includes(filter);
        return hasName;
    });


    const hasType = !filter.type || item.type === filter.type;
    return hasName && hasType;
}

test('filters on name', assert => {
    //arrange
    const filter = {
        name: 'duc',
    }

    const filtered = filterItems(items, filter);

    assert.deepEqual(filtered, [{
        name: 'Duchess',
        type: 'Angora'
    }]);

});

test('filters on name case insensitive' assert => {
    const filter = 'duc';

    const filtered = filterItems(items, filter);

    assert.deepEqual(filtered, [{
        name: 'Duchess',
        type: 'Angora'
    }]);


})



test('returns all on no filter' assert => {
    const filter = {
        name: ''
    }


});


test('filters on type' assert => {
    const filter = {
        name: '',
        type: 'Angora'
    }

    const filtered = filterItems(items, filter);

    assert.deepEqual(filtered, [{
        name: 'Duchess',
        type: 'Angora'
    }]);


})
import ListItem from '../src/components/ListItem.js';
const test = QUnit.test;

QUnit.module('templating');

test('testing template function', function(assert) {
    //Arrange
    const item = {
        name: 'Water Plants',
        label: 'water-plants',
        completed: false
    };

    const expected = /*html*/ `
    <label for="water-plants">
    Water Plants
        <input type="checkbox" class="status">
    </label>`;

    //Act 
    const listItem = new ListItem({ item });

    const html = listItem.renderTemplate();
   
    //Assert
    assert.htmlEqual(html, expected);
});
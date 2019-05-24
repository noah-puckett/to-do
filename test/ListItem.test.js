import ListItem from '../src/components/ListItem.js';
const test = QUnit.test;

QUnit.module('templating');

test('testing template function', function(assert) {

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
    const listItem = new ListItem({ item });

    const html = listItem.renderTemplate();
 
    assert.htmlEqual(html, expected);
});
import ListItem from '../src/components/ListItem.js';
const test = QUnit.test;

QUnit.module('templating');

test('testing ListItem function', function(assert) {

    const item = {
        text: 'Water Plants',
        completed: false
    };

    const expected = /*html*/ `
    <label>
    Water Plants
        <input id="checkbox" type="checkbox" class="status">
    </label>`;
    const listItem = new ListItem({ item });

    const html = listItem.renderTemplate();
 
    assert.htmlEqual(html, expected);
});
import ListItem from '../src/components/ListItem.js';
import todoData from '../data/todo-data.js';
const test = QUnit.test;

QUnit.module('templating');

test('testing template function', function(assert) {

    const expected = /*html*/ `
    <label>
    Water Plants
        <input type="checkbox" class="status">
    </label>`;

    const listItem = new ListItem({ todoData });
    const html = listItem.renderTemplate();

    assert.htmlEqual(html, expected);
});

test('template function returns checked if true', function(assert) {
    
    const todoData = {
        name: 'Water Plants',
        label: 'water-plants',
        completed: true
    };

    const expected = /*html*/ `
    <label for="water-plants">
    Water Plants
        <input checked type="checkbox" class="status">
    </label>`;

    const listItem = new ListItem({ todoData });
    const html = listItem.renderTemplate();
   
    assert.htmlEqual(html, expected);
});

test('template function returns not checked if false', function(assert) {

    const todoData = {
        name: 'Water Plants',
        label: 'water-plants',
        completed: false
    };

    const expected = /*html*/ `
    <label for="water-plants">
    Water Plants
        <input type="checkbox" class="status">
    </label>`;
 
    const listItem = new ListItem({ todoData });
    const html = listItem.renderTemplate();

    assert.htmlEqual(html, expected);
});
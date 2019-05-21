import template from '../src/template.js';
import ListItem from '../src/components/ListItem.js';
import todoData from '../data/todo-data.js';
const test = QUnit.test;

QUnit.module('templating');

test('testing template function', function(assert) {
    //Arrange
    const task = {
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
    const listItem = new ListItem({ todoData });

    const html = listItem.renderTemplate();
   
    //Assert
    assert.htmlEqual(html, expected);
});

test('template function returns checked if true', function(assert) {
    //Arrange
    
    const task = {
        name: 'Water Plants',
        label: 'water-plants',
        completed: true
    };

    const expected = /*html*/ `
    <label for="water-plants">
    Water Plants
        <input checked type="checkbox" class="status">
    </label>`;

    //Act 
    const html = template(task);
   
    //Assert
    assert.htmlEqual(html, expected);
});

test('template function returns not checked if false', function(assert) {
    //Arrange
    
    const task = {
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
    const html = template(task);
   
    //Assert
    assert.htmlEqual(html, expected);
});

//get people data, import functions
import todoData from '../data/todo-data.js';
import template from '../src/template.js';
import headerTemplate from './header-template.js';
import htmlToDOM from '../src/html-to-DOM.js';

//reference parent ul to append to
const section = document.getElementById('tasks');
const header = document.getElementById('header');

const headerDOM = htmlToDOM(headerTemplate);
header.appendChild(headerDOM);

//loop through PEOPLE DATA
todoData.forEach((task) => {
    const html = template(task);
    const dom = htmlToDOM(html);

    //append DOM to parent?
    section.appendChild(dom);
});
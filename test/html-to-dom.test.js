import htmlToDOM from '../src/html-to-DOM.js';
const test = QUnit.test;

QUnit.module('DOM creation? template? something???');

test('converts HTML to DOM', function(assert) {

    const html = /*html*/ `<span>test</span>`;
    
    const dom = htmlToDOM(html);
 
    assert.equal(dom.tagName, 'SPAN');
    assert.equal(dom.textContent, 'test');
});
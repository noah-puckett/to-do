import htmlToDOM from '../src/html-to-DOM.js';
const test = QUnit.test;

QUnit.module('DOM creation? template? something???');

test('converts HTML to DOM', function(assert) {
    //Arrange
    const html = /*html*/ `<span>test</span>`;
    //Act 
    const dom = htmlToDOM(html);
    //Assert
    //dom.tagName is the name of the BRACKET PARENT?
    assert.equal(dom.tagName, 'SPAN');
    assert.equal(dom.textContent, 'test');
});
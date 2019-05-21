//import and export of function threw errors, test not moved at this time
//import htmlEqual from './html-equal.js';
const test = QUnit.test;
QUnit.module('html whitespace scrubber');

const pattern = /[\f\n\r\t\v ]{2,}/g;
const replacement = ' ';

function normalize(html) {
    //normalize whitespace, everything becomes one space
    const replaced = html.replace(pattern, replacement);
    //trim leading and following space
    const trimmed = replaced.trim();
    return trimmed;
}

QUnit.assert.htmlEqual = function(actual, expected) {
    const normalizedActual = normalize(actual);
    const normalizedExpected = normalize(expected);
    QUnit.assert.equal(normalizedActual, normalizedExpected);
};

test('time to test a function', function(assert) {
    //Arrange
    const html = /*html*/ `
    <div>hello</div>`;

    const expected = /*html*/ `<div>hello</div>`;
 
    //Act 
    //now built in as custom assert
    
    //Assert
    assert.htmlEqual(html, expected);
});
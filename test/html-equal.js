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
//threw errors when exported, function kept in test instead. 
// export default htmlEqual;
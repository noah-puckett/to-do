function htmlToDOM(html) {
    //CREATE HTML TEMPLATE ELEMENT
    const template = document.createElement('template');
    template.innerHTML = html;
    const content = template.content;
    const firstElementChild = content.firstElementChild;

    return firstElementChild;
}
export default htmlToDOM;
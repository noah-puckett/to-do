import htmlToDOM from '../html-to-DOM.js';
//THIS IS OUR MASTER FILE
class Component {

    //this is our... like I guess special method that initializes 'props' which is just properties on the object? 
    //I think when we call the method we pass it properties???
    constructor(props) {
        this.props = props;
    }

    //returns *this* instance of render DOM
    render() {
        return this.renderDOM();
    }

    //okay so HTML goes in-- renderTemplate returns a template literal (STRING?) and we STORE THAT in a VAR: html,
    //then, when we call htmlToDOM, that takes our html STRING and CREATES a DOM ELEMENT ('template'), then returns a DOM element
    //then we set our individual INSTANCE'S root element (whatever that is?) to our DOM element.
    renderDOM() {
        const html = this.renderTemplate();
        const dom = htmlToDOM(html);
        //remember the dom for later
        //for replacing or removing elements?
        this.rootElement = dom;
        return dom;
    }

    renderTemplate() {
        return `<div></div>`;
    }

    update(props) {
        // update the props:
        //I have no idea what is happening here
        Object.keys(props).forEach(key => {
            this.props[key] = props[key];
        });
        const oldRoot = this.rootElement;
        const newDOM = this.render();
        oldRoot.replaceWith(newDOM);
    }
}
export default Component;
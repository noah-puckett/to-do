import htmlToDOM from '../html-to-DOM.js';
class Component {
    constructor(props) {
        this.props = props;
    }

    render() {
        return this.renderDOM();
    }

    renderDOM() {
        const html = this.renderTemplate();
        const dom = htmlToDOM(html);
        //remember the dom for later
        //for replacing or removing elements?
        this.rootElement = dom;
        return dom;
    }
}
export default Component;
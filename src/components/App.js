import htmlToDOM from '../html-to-DOM.js';
import Header from '../components/Header.js';

//classes don't use commas!!!
class App {
    
    render() {
        const dom = this.renderDOM();
        //get the header's DOM
        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        return dom;
    }

    renderDOM() {
        const html = this.renderTemplate();
        const dom = htmlToDOM(html);
        //remember the dom for later
        //for replacing or removing elements?
        this.rootElement = dom;
        return dom;
    }
    
    renderTemplate() {
        return /*html*/ `
        <div>
            <main>
                <ul id="todo-list">
                    <li>whaaaaat is happening</li>
                </ul>
            </main>
        </div>
        `;
    }
}
export default App;
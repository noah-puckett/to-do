import Header from '../components/Header.js';
import Component from './Component.js';
import todoData from '../../data/todo-data.js';
import TodoList from './TodoList.js';

//classes don't use commas!!!
class App extends Component {
    
    //below we are rendering the whole 'app' of our website,
    //that's why we don't just render a template, this IS our 'website'
    render() {
        //this renders the header,
        const dom = this.renderDOM();
        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);
        //this grabs data and renders our list items
        const props = { todoData };

        const todoDataList = new TodoList(props);
        const todoDataDOM = todoDataList.render();
        main.appendChild(todoDataDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
        <div>
            <main>
                <ul id="todo-list">
                    <li>whaaaaat is happening</li>
                    <li>maaaayyyybe I understand what's happening?</li>
                </ul>
            </main>
        </div>
        `;
    }
}
export default App;
import Header from '../components/Header.js';
import Component from './Component.js';
import AddItem from '../components/AddItem.js';
import Filter from './Filter.js';
import filterItems from '../filter-items.js';
import todoData from '../../data/todo-data.js';
import TodoList from './TodoList.js';

class App extends Component {
    
    render() {

        const dom = this.renderDOM();
        const header = new Header();
        const headerDOM = header.render();
        const main = dom.querySelector('main');

        dom.insertBefore(headerDOM, main);

        const props = { 
            todoData: todoData 
        };
        
        const addItem = new AddItem({
            onAdd: (newItem) => { 
                todoData.unshift(newItem); 
                todoList.update({ todoData }); 
                filter.update(); 
            }
        });
        
        const addItemDOM = addItem.render();
        main.appendChild(addItemDOM);
        
        const filter = new Filter({
            onFilter: filter => {
                const filtered = filterItems(todoData, filter);
                console.log(filtered);
                todoList.update({ todoData: filtered }); 
            }
        });
        
        main.appendChild(filter.render());
        
        const todoList = new TodoList(props);
        const todoListDOM = todoList.render();
        main.appendChild(todoListDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
        <div>
            <main>
                <ul id="todo-list"></ul>
            </main>
        </div>
        `;
    }
}
export default App;
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
                todoList.update({ todoData: filtered }); 
            }
        });
        main.appendChild(filter.render());


        const todoList = new TodoList({ 
            todoData, 
            onDone: (listItem) => {
                listItem.completed = !listItem.completed;
                todoList.update({ todoData });
                return listItem;
            }
        });

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
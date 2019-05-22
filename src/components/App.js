//import other components to render
import Header from '../components/Header.js';
import Component from './Component.js';
import AddItem from '../components/AddItem.js';
//todoData is our data array, not a component
import todoData from '../../data/todo-data.js';
import TodoList from './TodoList.js';


//THIS FILE RENDERS OUR WEBSITE DYNAMICALLY
//classes don't use commas!!!
class App extends Component {
    
    //below we are rendering the whole 'app' of our website,
    //that's why we don't just render a template, this IS our 'website'
    render() {
        //we put a string of html in, then render it as a DOM element, return it, and save it in a var 'dom'
        //then we invoke our app's INSTANCE Of our HEADER COMPONENT, storing it in a var 'header'
        //then we take our header HTML STRING and RENDER IT as a DOM ELEMENT, storing it in a new var 'headerDOM'
        const dom = this.renderDOM();
        const header = new Header();
        const headerDOM = header.render();

        //we assign main to our dom's <main> element and querySelector "returns the first element that is a descendant 
        //of node that matches selectors"
        //we insert our header DOM ELEMENT before our main DOM ELEMENT
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);
        //this grabs data and renders our list items
        //wrote this out to be intentionally verbose, I know it can be shortened but I'm still confused 
        const props = { 
            todoData: todoData 
        };

        //we assign a new instance of our AddItem component to a var 'addItem'
        //I THINK, because AddItem inherits properties from Component, we OVERRIDE those by passing in AddItem({ onAdd:... })?
        //the onAdd OBJECT KEY has a VALUE 
        const addItem = new AddItem({
            onAdd: (newItem) => { todoData.unshift(newItem); todoList.update({ todoData }); }
        });

        //could you write it like:
        // const addItem2 = new AddItem(
        //     { onAdd: function onAdd(newItem) {
        //         todoData.unshift(newItem);
        //         todoList.update( {todoData: todoData} )
        //} });


        const addItemDOM = addItem.render();
        main.appendChild(addItemDOM);
        

        const todoList = new TodoList(props);
        const todoListDOM = todoList.render();
        main.appendChild(todoListDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
        <div>
            <main>
                <ul id="todo-list">
                    <li>whaaaaat is happening</li>
                    <li>maaaayyyybe I understand what's happening?</li>
                    <li>DEFINITELY do not understand what is happening</li>
                </ul>
            </main>
        </div>
        `;
    }
}
export default App;
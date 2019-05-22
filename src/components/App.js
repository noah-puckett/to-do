//import other components to render
import Header from '../components/Header.js';
import Component from './Component.js';
import AddItem from '../components/AddItem.js';
//todoData is our data array, not a component
import todoData from '../../data/todo-data.js';
import TodoList from './TodoList.js';

//THIS FILE RENDERS OUR WEBSITE DYNAMICALLY
//classes don't use commas, don't forget!
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
        //wrote this out to be intentionally verbose, I know it can be shortened but I'm not ready for brevity!
        const props = { 
            todoData: todoData 
        };

        //we assign a new instance of our AddItem component to a var 'addItem'
        //Because AddItem inherits properties from Component, we OVERRIDE/ADD ONTO those by passing in AddItem({ onAdd:... })
        //the onAdd OBJECT KEY has a VALUE that is an ANONYMOUS FUNCTION, that we give an argument of newItem, and the code to run INSIDE the function
        //is adding (pushing to the 0 index, unshift) newItem, then updating the TodoList COMPONENT'S PROPS!!! with the updated todoData ARRAY OBJECT
        const addItem = new AddItem({
            onAdd: (newItem) => { todoData.unshift(newItem); todoList.update({ todoData }); }
        });

        //here we follow the pattern of processing the HTML string into DOM elements, then appending that DOM element to a PARENT DOM element
        const addItemDOM = addItem.render();
        main.appendChild(addItemDOM);
        
        //we initialize our todoList INSTANCE of our TodoList COMPONENT, and set its PROPERTIES to the todoData ARRAY (const props... above on line 32)
        //follow the same pattern of rendering our HTML to DOM and appending 
        const todoList = new TodoList(props);
        const todoListDOM = todoList.render();
        main.appendChild(todoListDOM);

        //finally, we return the whole DOM we've been appending to
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
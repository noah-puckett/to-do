import Component from '../components/Component.js';
import ListItem from '../components/ListItem.js';

class TodoList extends Component {

    render() {
        const dom = this.renderDOM();
        const todoData = this.props.todoData;
        
        todoData.forEach(item => {
            const listItem = new ListItem ({ item });
            const listItemDOM = listItem.render();
            dom.appendChild(listItemDOM);
        });
        
        return dom;
    }

    renderTemplate() {
        //WHAT EVEN ARE PROPS???
        const todos = this.props.todoData;
        return /*html*/ `
            <ul>${todos.length} are in my array</ul>
        `;
    }
}
export default TodoList;
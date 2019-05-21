import Component from '../components/Component.js';

class TodoList extends Component {
    
    renderTemplate() {
        //WHAT EVEN ARE PROPS???
        const todos = this.props.todoData;
        return /*html*/ `
            <ul>${todos.length} is here</ul>
        `;
    }
}
export default TodoList;
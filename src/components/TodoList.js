import Component from '../components/Component.js';

class TodoList extends Component {

    constructor(props) {
        console.log(props);
        super(); //delete later
        this.props = props;
    }
    
    renderTemplate() {
        const todos = this.props.todoData;

        return /*html*/ `
            <ul>${todos.length} is here</ul>
        `;
    }
}
export default TodoList;
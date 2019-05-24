import Component from '../components/Component.js';
import ListItem from '../components/ListItem.js';

class TodoList extends Component {

    render() {
        const dom = this.renderDOM();
        const todoData = this.props.todoData;
        
        const onDone = this.props.onDone;

        todoData.forEach(item => {
            const listItem = new ListItem ({ item, onDone });
            const listItemDOM = listItem.render();
            dom.appendChild(listItemDOM);
        });
        
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
        <ul></ul>
        `;
    }
}
export default TodoList;
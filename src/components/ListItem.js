import Component from '../components/Component.js';
import TodoList from '../components/TodoList.js';

class ListItem extends Component {
    renderTemplate() {
        const item = this.props.item;

        return /*html*/ `
        <label for="${item.label}">
        ${item.name}
            <input type="checkbox" class="status">
        </label>`;
    }
}
export default ListItem;
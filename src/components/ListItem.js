import Component from '../components/Component.js';

class ListItem extends Component {

    renderTemplate() {
        const item = this.props.item;
        let checked = '';

        if(item.completed) {
            checked = 'checked';
        }
        
        return /*html*/ `
        <label>
        ${item.text}
            <input ${checked} type="checkbox" class="status">
        </label>`;
    }
}
export default ListItem;
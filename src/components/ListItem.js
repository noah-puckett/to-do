import Component from '../components/Component.js';

class ListItem extends Component {

    render() {
        const listItem = this.renderDOM();
        const onDone = this.props.onDone;
        const item = this.props.item;
        const input = listItem.querySelector('#checkbox');

        input.addEventListener('change', () => {
            onDone(item);
        });

        return listItem;
    }

    renderTemplate() {
        const item = this.props.item;
        let checked = '';

        if(item.completed) {
            checked = 'checked';
        }
        
        return /*html*/ `
        <label>
        ${item.text}
            <input ${checked} id="checkbox" type="checkbox" class="status">
        </label>`;
    }
}
export default ListItem;
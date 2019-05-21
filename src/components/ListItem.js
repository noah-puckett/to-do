import Component from '../components/Component.js';

class ListItem extends Component {

    // render() {
    //     const listItem =this.renderDOM();
    //     const onRemove = this.props.onRemove;
    //     const //cat this.props.cat;
    // }

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
import Component from '../components/Component.js';
//THIS FILE RENDERS INDIVIDUAL ITEMS IN OUR HTML
class ListItem extends Component {
    
    //this will eventuallly alter our render method to remove items from our todoData array
    // render() {
    //     const listItem = this.renderDOM();
    //     const onRemove = this.props.onRemove;
    //     const item = this.props.item;
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
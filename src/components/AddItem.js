import Component from '../components/Component.js';

class AddItem extends Component {

    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newItem = {
                text: formData.get('text'),
                completed: false
            };

            onAdd(newItem);

            form.reset();
            document.activeElement.blur();
        });
        return form;
    }

    renderTemplate() {
        return /*html*/ `
        <form class="add-item">
            <label>Name Of New To-Do: <input name="text"></label>
            <button>Add Item</button>
        </form>
        `;
    }
}
export default AddItem;
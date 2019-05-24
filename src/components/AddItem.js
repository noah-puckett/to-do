import Component from '../components/Component.js';

class AddItem extends Component {

    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        //this is our typical event listener layout
        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newItem = {
                name: formData.get('name'),
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
            <label>Name Of New To-Do: <input name="name"></label>
            <button>Add Item</button>
        </form>
        `;
    }
}
export default AddItem;
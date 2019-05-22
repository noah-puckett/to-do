import Component from '../components/Component.js';
//I DO NOT KNOW WHAT THIS FILE DOES
class AddItem extends Component {

    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;


        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newItem = {
                name: formData.get('name'),
                type: formData.get('type')
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
            <label>Name: <input name="name"></label>
            <label>Type: <input name="type"></label>
            <button>Add</button>
        </form>
        `;
    }
}
export default AddItem;
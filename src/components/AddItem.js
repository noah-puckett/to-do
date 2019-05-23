import Component from '../components/Component.js';
//the AddItem component's main job is to alter how we render the HTML-- we render our form (passing in strings and returning DOM elements)
//subscribe an event listener, and 
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
                type: formData.get('type')
            };

            //here we call our onAdd method(function?), which updates the AddItem PROPERTIES-- ultimately updating the todoData list with the newItem var
            onAdd(newItem);

            //this clears our form after the submit event, then the next line deals with focusing the input field
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
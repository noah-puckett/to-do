import Component from './Component.js';

class Filter extends Component {

    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');

        input.addEventListener('input', () => {
            //this.props.onFilter({text: })
            this.props.onFilter(input.value);
        });

        //WHEN I MAKE A RADIO? BUTTON? And also maybe on checkbox checking???
        //const radioButtonSelection = document.querySelector(.radio-button);
        //radioButtonSelection.addEventListener('change', (event) => {
            //maybe store result like 
            //const buttonValue = radioButtonSelection.value; ??
            //and then... add that to the array? 
            //or... ok IF USER CHECKS BOX, UPDATE ARRAY ITEM (GRAB BY NAME?).CHECKED to TRUE!!
            //I have no idea how to IMPLEMENT this but it sure sounds correct!
        //})
         
        return dom;
    }

    renderTemplate() {

        return /*html*/`
        <section class="filter-section">
            <label for="text-input">
            Find a to-do by name:
                <input class="filter" name="text-input">
            </label>

            <label for="radio-all">
                Show ALL to-dos (default):
                <input class="filter" type="radio" name="radio-all">
            </label>

            <label for="radio-incomplete">
                Show only incomplete to-dos:
                <input class="filter" type="radio" name="radio-incomplete">
            </label>

            <label for="radio-completed">
                Show only completed to-dos:
                <input class="filter" type="radio" name="radio-completed">
            </label>
        </section>
        `;
    }
}
export default Filter;
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
            <input class="filter" name="filter"></input>
        </section>
        `;
    }
}
export default Filter;
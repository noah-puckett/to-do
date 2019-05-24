import Component from './Component.js';

class Filter extends Component {

    render() {
        const dom = this.renderDOM();
        //THE WAY IT WAS BEFORE:
        //const input = dom.querySelector('input');
        const form = dom.querySelector('form');

        form.addEventListener('input', () => {
            const radioResult = form.elements['radio'].value;
            const textResult = form.elements['text-input'].value;
            
            this.props.onFilter({
                name: textResult, 
                completed: radioResult
            });
        });
        return dom;
    }
    
    renderTemplate() {
        
        return /*html*/`
        <section class="filter-section">
            <form>
                <label for="text-input">
                    Find a to-do by name:
                    <input id="text" class="filter" name="text-input">
                </label>

                <label for="radio-all">
                    Show ALL to-dos (default):
                    <input class="filter" type="radio" name="radio" value="all">
                </label>

                <label for="radio-incomplete">
                    Show only incomplete to-dos:
                    <input class="filter" type="radio" name="radio" value="false">
                </label>

                <label for="radio-completed">
                    Show only completed to-dos:
                    <input class="filter" type="radio" name="radio" value="true">
                </label>
            </form>
        </section>
            `;
    }
}
export default Filter;
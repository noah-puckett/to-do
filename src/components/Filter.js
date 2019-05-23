import Component from './Component.js';

class Filter extends Component {

    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');

        input.addEventListener('input', () => {
            //this.props.onFilter({text: })
            this.props.onFilter(input.value);
        });
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
function template(task) {
    let checked = '';
    
    if(task.completed) {
        checked = 'checked';
    }

    return /*html*/ `
    <label for="${task.label}">
    ${task.name}
        <input ${checked} type="checkbox" class="status">
    </label>`;
}
export default template;
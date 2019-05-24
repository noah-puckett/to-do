function filterItems(todoData, filter) {
    
    return todoData.filter(todo => {
        const filterText = filter.text.toLowerCase();
        const name = todo.name.toLowerCase();
        const hasName = name.includes(filterText);
        const filterCompleted = filter.completed.toString();
        const taskCompleted = todo.completed.toString();
        let completed = !filterCompleted || filterCompleted === taskCompleted;
       
        if(filterCompleted === 'all') {
            completed = true;
        }
        return hasName && completed;

    });
}
export default filterItems;
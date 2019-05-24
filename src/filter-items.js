function filterItems(todoData, filter) {
    
    return todoData.filter(todo => {
        const filterText = filter.text.toLowerCase();
        const text = todo.text.toLowerCase();
        const hasName = text.includes(filterText);
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
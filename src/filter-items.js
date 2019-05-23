//import TDD function, export filterItems
function filterItems(todoData, filter) {

    //the USER INPUT
    
    //OUR ARRAY LOOP
    return todoData.filter(todo => {
        const filterText = filter.text.toLowerCase();
        //NAME, CHECKED
        const name = todo.name.toLowerCase();
        const hasName = name.includes(filterText);
        const filterCompleted = filter.completed.toString();
        console.log(hasName);

        const taskCompleted = todo.completed.toString();
        let completed = !filterCompleted || filterCompleted === taskCompleted;
       
        if(filterCompleted === 'all') {
            completed = true;
        }
        return hasName && completed;

    });
}
export default filterItems;
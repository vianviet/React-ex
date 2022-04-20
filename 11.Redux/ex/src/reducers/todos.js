const todos = (state = ["hello", "Hi"], action) => {
    switch (action.type) {
        case 'LIST_TODO':
            return state;
        case 'REMOVE_TODO':
            state.pop(action.todo)
            return [...state];
        case 'ADD_TODO':
            state.push(action.todo)
            return [...state];
        default:
            return state;
    }
}

export default todos;
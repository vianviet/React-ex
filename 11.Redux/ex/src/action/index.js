export const listTodo = () => {
    return {
        type: 'LIST_TODO',
    }
}

export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
}
export const removeTodo = (todo) => {
    return {
        type: 'REMOVE_TODO',
        todo
    }
}
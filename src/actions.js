import * as actionTypes from './actionTypes';

let nextTodoId = 0;

const todo = text => ({
    id: nextTodoId++,
    text,
    completed: false,
});

export const addTodo = text => ({
    type: actionTypes.ADD_TODO,
    todo: todo(text)
});

export const toggleTodo = id => ({
    type: actionTypes.TOGGLE_TODO,
    id
});

export const setFilter = filterType => ({
    type: actionTypes.SET_FILTER,
    filterType
});

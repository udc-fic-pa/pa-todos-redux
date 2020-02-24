import * as filterTypes from './filterTypes';

export const getVisibleTodos = state => {

    switch(state.filterType) {
        case filterTypes.ALL:
            return state.todos;
        case filterTypes.ACTIVE:
            return state.todos.filter(todo => !todo.completed);
        case filterTypes.COMPLETED:
            return state.todos.filter(todo => todo.completed);
        default:
            throw new Error(`Unknown filter type ${state.filterType}`);
    }

}

export const getFilterType = state => state.filterType;
import * as actionTypes from'./actionTypes';
import * as filterTypes from './filterTypes';

const initialState = {
    todos: [],
    filterType: filterTypes.ALL
};

export const reducer = (state=initialState, action) => {

    switch(action.type) {

        case actionTypes.ADD_TODO:
            return {...state, todos: [action.todo, ...state.todos]};

        case actionTypes.TOGGLE_TODO:
            return {...state, todos: state.todos.map(todo => {
                return todo.id === action.id ? 
                    {...todo, completed: !todo.completed} : todo})}

        case actionTypes.SET_FILTER:
            return {...state, filterType: action.filterType}

        default:
            return state;
    }

}

export default reducer;
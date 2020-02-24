import {combineReducers} from 'redux';

import * as actionTypes from'./actionTypes';
import * as filterTypes from './filterTypes';

const initialState = {
    todos: [],
    filterType: filterTypes.ALL
};

const todos = (state=initialState.todos, action) => {

    switch(action.type) {

        case actionTypes.ADD_TODO:
            return [action.todo, ...state];

        case actionTypes.TOGGLE_TODO:
            return state.map(todo => {
                return todo.id === action.id ? 
                    {...todo, completed: !todo.completed} : todo});

        default:
            return state;
    }

};

const filterType = (state=initialState.filterType, action) => {

    switch(action.type) {

        case actionTypes.SET_FILTER:
            return action.filterType;

        default:
            return state;
    }

};

const reducer = combineReducers({
    todos,
    filterType
});

export default reducer;
import * as actionTypes from'./actionTypes';

const initialState = {
    todos: []
};

export const reducer = (state=initialState, action) => {

    switch(action.type) {

        case actionTypes.ADD_TODO:
            return {todos: [action.todo, ...state.todos]};

        case actionTypes.TOGGLE_TODO:
            return {todos: state.todos.map(todo => {
                return todo.id === action.id ? 
                    {...todo, completed: !todo.completed} : todo})}

        default:
            return state;
    }

}

export default reducer;
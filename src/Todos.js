import React from 'react';
import {connect} from 'react-redux';

import Todo from './Todo';
import * as actions from './actions';
import * as filterTypes from './filterTypes';

const Todos = ({todos, onToggleCompleted}) => (
    <ul>
        {todos.map(todo => 
            <Todo key={todo.id} todo={todo}
                onToggleCompleted={onToggleCompleted}/>)
        }
    </ul>
);

const visibleTodos = (todos, filterType) => {

    switch(filterType) {
        case filterTypes.ALL:
            return todos;
        case filterTypes.ACTIVE:
            return todos.filter(todo => !todo.completed);
        case filterTypes.COMPLETED:
            return todos.filter(todo => todo.completed);
        default:
            throw new Error(`Unknown filter type ${filterType}`);
    }

}

const mapStateToProps = state => ({
    todos: visibleTodos(state.todos, state.filterType)
});

const mapDispatchToProps = {
    onToggleCompleted: actions.toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
import React from 'react';
import {connect} from 'react-redux';

import Todo from './Todo';
import * as actions from './actions';

const Todos = ({todos, onToggleCompleted}) => (
    <ul>
        {todos.map(todo => 
            <Todo key={todo.id} todo={todo}
                onToggleCompleted={onToggleCompleted}/>)
        }
    </ul>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = {
    onToggleCompleted: actions.toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
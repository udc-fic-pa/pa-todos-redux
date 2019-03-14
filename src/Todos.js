import React from 'react';
import {connect} from 'react-redux';

import Todo from './Todo';
import * as actions from './actions';
import * as selectors from './selectors';

const Todos = ({todos, onToggleCompleted}) => (
    <ul>
        {todos.map(todo => 
            <Todo key={todo.id} todo={todo}
                onToggleCompleted={onToggleCompleted}/>)
        }
    </ul>
);

const mapStateToProps = state => ({
    todos: selectors.getVisibleTodos(state)
});

const mapDispatchToProps = {
    onToggleCompleted: actions.toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
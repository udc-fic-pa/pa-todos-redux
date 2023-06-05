import {useSelector, useDispatch} from 'react-redux';

import Todo from './Todo';
import * as actions from './actions';
import * as selectors from './selectors';

const Todos = () => {

    const todos = useSelector(selectors.getVisibleTodos);
    const dispatch = useDispatch();
    
    return (
        <ul>
            {todos.map(todo => 
                <Todo key={todo.id} todo={todo}
                    onToggleCompleted={id => dispatch(actions.toggleTodo(id))}/>)
            }
        </ul>
    );

}

export default Todos;

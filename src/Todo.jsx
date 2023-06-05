const Todo = ({todo, onToggleCompleted}) => (
    <li className={todo.completed ? 'completed' : ''} 
        onClick={() => onToggleCompleted(todo.id)}>{todo.text}</li>
);

export default Todo;

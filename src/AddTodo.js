import React from 'react';
import {useDispatch} from 'react-redux';

import * as actions from './actions';

const AddTodo = () => {

    const dispatch = useDispatch();
    let input;

    return (

        <form onSubmit={(e) => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(actions.addTodo(input.value.trim()));
                input.value = '';
            }}>

            <input type="text" ref={node => input = node}/>
            <button type="submit">Add</button>

        </form>

    );

}

export default AddTodo;
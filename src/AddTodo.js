import React from 'react';
import {connect} from 'react-redux';

import * as actions from './actions';

const AddTodo = ({dispatch}) => {

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

export default connect()(AddTodo);
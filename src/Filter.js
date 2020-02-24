import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import * as filterTypes from './filterTypes';
import * as actions from './actions';
import * as selectors from './selectors';

const Filter = () => {

    const filterType = useSelector(selectors.getFilterType);
    const dispatch = useDispatch();
    
    return (
        <div>
            <button disabled={filterType === filterTypes.ALL} 
                onClick={() => dispatch(actions.setFilter(filterTypes.ALL))}>All</button>
            <button disabled={filterType === filterTypes.ACTIVE}
                onClick={() => dispatch(actions.setFilter(filterTypes.ACTIVE))}>Active</button>
            <button disabled={filterType === filterTypes.COMPLETED}
                onClick={() => dispatch(actions.setFilter(filterTypes.COMPLETED))}>Completed</button>
        </div>
    );

}

export default Filter;
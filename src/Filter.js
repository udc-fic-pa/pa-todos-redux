import React from 'react';
import {connect} from 'react-redux';

import * as filterTypes from './filterTypes';
import * as actions from './actions';
import * as selectors from './selectors';

const Filter = ({filterType, onFilterClick}) => (

    <div>
        <button disabled={filterType === filterTypes.ALL} 
            onClick={() => onFilterClick(filterTypes.ALL)}>All</button>
        <button disabled={filterType === filterTypes.ACTIVE}
            onClick={() => onFilterClick(filterTypes.ACTIVE)}>Active</button>
        <button disabled={filterType === filterTypes.COMPLETED}
            onClick={() => onFilterClick(filterTypes.COMPLETED)}>Completed</button>
    </div>

);

const mapStateToProps = state => ({
    filterType: selectors.getFilterType(state)
});

const mapDispatchToProps = {
    onFilterClick: actions.setFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
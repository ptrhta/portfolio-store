import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid'

export default function Toolbar(props) {
    const filters = props.filters;
    const onSelectFilter = props.onSelectFilter;
    const selected = props.selected;

    return (
        <div className="toolbar">
            {
                filters.map((filter) => (
                    <button
                        key={uuid()} 
                        type="button" 
                        className={`button  ${filter === selected ? "selected" : ""}`} 
                        onClick={() => onSelectFilter({filter})}>
                            {filter}
                        </button>
                    )
                )
            }
        </div>
    )
}

Toolbar.propTypes = {
    filters:PropTypes.array.isRequired,
    onSelectFilter:PropTypes.func.isRequired,
    selected:PropTypes.string.isRequired
};
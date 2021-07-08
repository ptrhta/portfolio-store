import React, { useState } from 'react';
import uuid from 'react-uuid'

export default function Toolbar(props) {
    const filters = props.filters;
    const onSelectFilter = props.onSelectFilter;
    const selected = props.selected;

    return (
        <div className="toolbar">
            {
                filters.map((filter, filterI) => (
                    <button key={uuid()} type="button" className={`button  ${filter == selected ? 'selected' : ''}`} onClick={() => onSelectFilter({filter})}>{filter}</button>
                ))
            }
        </div>
    )
}
  
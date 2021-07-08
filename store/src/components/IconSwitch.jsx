import { className } from 'postcss-selector-parser';
import React from 'react';
import PropTypes from 'prop-types';

export default function IconSwitch(props) {
    const onSwitch = props.onSwitch;
    const icon = props.icon;

    return (
        <div className="iconSwitch">
            <div onClick={onSwitch} className="material-icons">
                {icon}
            </div>
        </div>
    )
}

IconSwitch.propTypes = {
    icon:PropTypes.string.isRequired,
    onSwitch:PropTypes.func.isRequired,
}
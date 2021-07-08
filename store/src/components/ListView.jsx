import { className } from 'postcss-selector-parser';
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid'
import ShopItem from './ShopItem';

export default function ListView(props) {
    const items = props.items;

    return (
        <div className="listView">
            {
                items.map(item => <ShopItem key={uuid()} item={item} />)
            }
        </div>
    )
}

ListView.propTypes = {
    items:PropTypes.array.isRequired,
};
import { className } from 'postcss-selector-parser';
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid'
import ShopCard from './ShopCard';

export default function CardsView(props) {
    const items = props.items;

    return (
        <div className="cardsView row">
            {
                items.map(item => <ShopCard key={uuid()} item={item} />)
            }
        </div>
    )
}

CardsView.propTypes = {
    items:PropTypes.array.isRequired,
};
import { className } from 'postcss-selector-parser';
import React from 'react';
import PropTypes from 'prop-types';

export default function ShopItem(props) {
    const item = props.item;

    return (
        <div className="shopItem row">
            <img className="shopItem__img" src={item.img} />
            <h2 className="shopItem__title title">{item.name}</h2>
            <p className="color">{item.color}</p>
            <p className="price">${item.price}</p>
            <button className="button">Add to card</button>
        </div>
    )
}

ShopItem.propTypes = {
    item:PropTypes.shape({
        img:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        color:PropTypes.string.isRequired,
        price:PropTypes.string.isRequired,
    }),
};
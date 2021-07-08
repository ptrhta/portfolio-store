import { className } from 'postcss-selector-parser';
import React from 'react';
import PropTypes from 'prop-types';

export default function ShopCard(props) {
    const item = props.item;

    return (
        <div className="shopCard">
            <h2 className="title shopCard__title">{item.name}</h2>
            <p className="color">{item.color}</p>
            <img className="shopCard__img" src={item.img} />
            <div className="row shopCard__row">
              <p className="price">${item.price}</p>
              <button className="button">Add to card</button>
            </div>
        </div>
    )
}

ShopCard.propTypes = {
    item:PropTypes.shape({
        img:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        color:PropTypes.string.isRequired,
        price:PropTypes.string.isRequired,
    }),
};
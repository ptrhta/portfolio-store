import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid'

export default function ProjectList(props) {
    const filteredPortfolio = props.filteredPortfolio;
    console.log(filteredPortfolio)

    return (
        <div className="projectList">
            {
                filteredPortfolio.map((photo) => (
                    <img
                        key={uuid()}
                        className="photo"
                        alt={photo.category}
                        src={photo.img}   
                    />
                ))
            }
        </div>
    )
}

ProjectList.propTypes = {
    filteredPortfolio:PropTypes.array.isRequired,
};
  
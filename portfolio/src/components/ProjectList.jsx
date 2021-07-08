import React, { useState } from 'react';
import uuid from 'react-uuid'

export default function ProjectList(props) {
    const projectList = props.filteredPortfolio;

    return (
        <div className="projectList">
            {
                projectList.map((photo, photoI) => (
                    <img key={uuid()} src={photo.img} className="photo" />
                ))
            }
        </div>
    )
}
  
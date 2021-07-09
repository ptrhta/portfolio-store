import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export default function Portfolio(props) {
    const [selected, setSelectFilter] = useState('All');

    const portfolioList = props.portfolioList;
    const filteredPortfolio = () => {
        if (selected === "All") return portfolioList;
        return portfolioList.filter((portfolio) => portfolio.category === selected);
      };

    return (
        <div className="portfolio">
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={selected}
                onSelectFilter={
                    (filter) => {
                        setSelectFilter(filter.filter);
                    }
                }
            />
            <ProjectList filteredPortfolio={filteredPortfolio()} />
        </div>
    )
}

Portfolio.propTypes = {
    portfolioList:PropTypes.array.isRequired,
};
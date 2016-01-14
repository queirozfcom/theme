import React from 'react';
import './FilterListSidebar.less';
import FilterListOption from './FilterListOption/FilterListOption.js';

class FilterListSidebar extends React.Component {
  render() {
    return (
      <div className="FilterListSidebar">
        <h3 className="FilterListSidebar__title">Filtros</h3>
        <ul className="FilterListSidebar__list">
          <FilterListOption isSelected={true} />
          <FilterListOption isSelected={false} />
          <FilterListOption isSelected={false} />
          <FilterListOption isSelected={false} />
          <FilterListOption isSelected={false} />

        </ul>
      </div>
    );
  }
}

export default FilterListSidebar;

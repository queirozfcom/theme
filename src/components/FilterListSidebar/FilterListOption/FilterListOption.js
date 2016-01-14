import React from 'react';
import './FilterListOption.less';

class FilterListOption extends React.Component {
  render() {
    return (
      <li className="FilterListOption">
        <label className="FilterListOption__inner" htmlFor="filter-checkbox">
          <span className="FilterListOption__name" data-is-selected={this.props.isSelected}>Nome</span>
        </label>
        <input
          className="FilterListOption__checkbox"
          checked={this.props.isSelected}
          onChange={this.handleChange}
          type="checkbox"
          id="filter-checkbox"
        />
      </li>
    );
  }
}

export default FilterListOption;

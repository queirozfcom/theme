import React from 'react';
import { stores } from 'sdk';
import './FilterListSidebar.less';

const Area = stores.ComponentStore.state.getIn(['Area@vtex.storefront-sdk', 'constructor']);

class FilterListSidebar extends React.Component {
  render() {
    return (
      <div className="FilterListSidebar">
        <h3 className="FilterListSidebar__title">Filtros</h3>
        <Area
          id="category/filter-panel/brand-select"
          areaPath="category"
          location={this.props.location}
        />
      </div>
    );
  }
}

export default FilterListSidebar;

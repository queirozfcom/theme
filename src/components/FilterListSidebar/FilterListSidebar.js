import React from 'react';
import { stores } from 'sdk';
import './FilterListSidebar.less';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);

class FilterListSidebar extends React.Component {
  render() {
    return (
      <div className="FilterListSidebar">
        <h3 className="FilterListSidebar__title">Filtros</h3>
        <Placeholder
          id="brand-select"
          location={this.props.location}
        />
      </div>
    );
  }
}

export default FilterListSidebar;

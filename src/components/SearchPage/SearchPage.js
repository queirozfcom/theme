import React from 'react';
import { stores } from 'sdk';
import FilterListSidebar from 'components/FilterListSidebar/FilterListSidebar';
import './SearchPage.less';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);

class SearchPage extends React.Component {
  state = {
    grid: false
  }

  changeLayout = () => {
    this.setState({ grid: !this.state.grid });
  }

  render() {
    return (
      <div className="SearchPage">
        <Placeholder
          id="search-header"
          searchTerm={this.props.params.searchTerm}
          grid={this.state.grid}
          location={this.props.location}
          changeLayout={this.changeLayout}
        />
        <div className="SearchPage__content container-fluid">
          <div className="row">
            <div className="SearchPage__sidebar hidden-xs hidden-sm col-md-3 col-lg-2">
              <div className="SearchPage__filter-list">
                <FilterListSidebar id={this.props.id} location={this.props.location} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-10 SearchPage__product-list">
              <Placeholder
                id="product-list"
                location={this.props.location}
                grid={this.state.grid}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;

import React from 'react';
import { stores } from 'sdk';
import FilterListSidebar from 'components/FilterListSidebar/FilterListSidebar';
import './CategoryPage.less';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);

class CategoryPage extends React.Component {
  state = {
    grid: true
  };

  changeLayout = () => {
    this.setState({ grid: !this.state.grid });
  };

  render() {
    return (
      <div className="CategoryPage">
        <Placeholder
          id="category-header"
          grid={this.state.grid}
          location={this.props.location}
          changeLayout={this.changeLayout}
        />
        <div className="CategoryPage__content container-fluid">
          <div className="row">
            <div className="CategoryPage__sidebar hidden-xs hidden-sm col-md-3 col-lg-2">
              <div className="CategoryPage__category-list">
                <Placeholder
                  id="category-list-sidebar"
                />
              </div>
              <div className="CategoryPage__filter-list">
                <FilterListSidebar id={this.props.id} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-10 CategoryPage__product-list">
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

export default CategoryPage;
